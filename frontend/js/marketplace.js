const categoryButtons = document.querySelectorAll(".filter-btn");
const typeButtons = document.querySelectorAll(".type-btn");
const marketplaceCards = document.querySelectorAll(".marketplace-card");

const resultCount = document.querySelector("#resultCount");

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");


let selectedCategory = "all";
let selectedType = "all";
let searchText = "";


// =====================================
// CATEGORY FILTER
// =====================================

categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        categoryButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        filterCards();

    });

});


// =====================================
// TYPE FILTER
// =====================================

typeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        typeButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedType = button.dataset.type;

        filterCards();

    });

});


// =====================================
// SEARCH BUTTON
// =====================================

searchButton.addEventListener("click", function () {

    searchText = searchInput.value.toLowerCase().trim();

    filterCards();

});


// =====================================
// SEARCH USING ENTER KEY
// =====================================

searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        searchText = searchInput.value.toLowerCase().trim();

        filterCards();

    }

});


// =====================================
// FILTER CARDS
// =====================================

function filterCards() {

    let visibleCards = 0;

    marketplaceCards.forEach(function (card) {

        const cardCategory = card.dataset.category;
        const cardType = card.dataset.type;


        // Get listing title
        const cardTitle = card
            .querySelector("h3")
            .textContent
            .toLowerCase();


        // CATEGORY CHECK
        const categoryMatches =
            selectedCategory === "all" ||
            cardCategory === selectedCategory;


        // TYPE CHECK
        const typeMatches =
            selectedType === "all" ||
            cardType === selectedType;


        // SEARCH CHECK
        const searchMatches =
            searchText === "" ||
            cardTitle.includes(searchText);


        // SHOW CARD ONLY IF ALL CONDITIONS MATCH
        if (
            categoryMatches &&
            typeMatches &&
            searchMatches
        ) {

            card.style.display = "block";

            visibleCards++;

        } else {

            card.style.display = "none";

        }

    });


    // UPDATE RESULT COUNT
    resultCount.textContent = visibleCards + " items";

}