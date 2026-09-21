// =====================================
// GET ITEM ID FROM URL
// =====================================

const urlParams = new URLSearchParams(
    window.location.search
);

const itemId = urlParams.get("id");


// =====================================
// ITEM DATA
// =====================================

const items = {

    book: {

        title: "Data Structures & Algorithms",

        category: "Books",

        type: "Sell",

        price: "₹350",

        unit: "",

        condition: "Good Condition",

        image: "📚",

        description:
            "Good condition Data Structures & Algorithms textbook for CSE students. Useful for learning concepts, practicing problems and preparing for exams."

    },


    laptop: {

        title: "HP Laptop",

        category: "Electronics",

        type: "Rent",

        price: "₹800",

        unit: "/ week",

        condition: "Good Condition",

        image: "💻",

        description:
            "HP laptop available for rent. Suitable for coding, assignments, projects and regular college work."

    },


    calculator: {

        title: "Scientific Calculator",

        category: "Electronics",

        type: "Sell",

        price: "₹500",

        unit: "",

        condition: "Good Condition",

        image: "🧮",

        description:
            "Scientific calculator suitable for engineering mathematics, practicals and semester examinations."

    },


    backpack: {

        title: "College Backpack",

        category: "Essentials",

        type: "Sell",

        price: "₹600",

        unit: "",

        condition: "Good Condition",

        image: "🎒",

        description:
            "Spacious college backpack suitable for carrying books, laptop, notebooks and everyday college essentials."

    },


    notes: {

        title: "DBMS Semester Notes",

        category: "Notes",

        type: "Sell",

        price: "₹150",

        unit: "",

        condition: "Good Condition",

        image: "📝",

        description:
            "Complete handwritten DBMS notes covering important concepts for semester exams and revision."

    },


    hoodie: {

        title: "College Hoodie",

        category: "Clothing",

        type: "Swap",

        price: "Swap",

        unit: "",

        condition: "Good Condition",

        image: "👕",

        description:
            "College hoodie available for swapping. Looking for another college hoodie in good condition."

    }

};


// =====================================
// GET SELECTED ITEM
// =====================================

const selectedItem = items[itemId];


// =====================================
// CHECK IF ITEM EXISTS
// =====================================

if (selectedItem) {

    document.querySelector("#itemTitle").textContent =
        selectedItem.title;


    document.querySelector("#itemCategory").textContent =
        selectedItem.category;


    document.querySelector("#itemPrice").textContent =
        selectedItem.price;


    document.querySelector("#priceUnit").textContent =
        selectedItem.unit;


    document.querySelector("#itemCondition").textContent =
        selectedItem.condition;


    document.querySelector("#itemType").textContent =
        selectedItem.type;


    document.querySelector("#itemImage").textContent =
        selectedItem.image;


    document.querySelector("#itemDescription").textContent =
        selectedItem.description;

} else {

    // Item not found

    document.querySelector("#itemTitle").textContent =
        "Item Not Found";

    document.querySelector("#itemCategory").textContent =
        "CampusLoop";

    document.querySelector("#itemPrice").textContent =
        "";

    document.querySelector("#priceUnit").textContent =
        "";

    document.querySelector("#itemDescription").textContent =
        "Sorry, this listing could not be found.";

    document.querySelector("#itemImage").textContent =
        "❌";

}

// =====================================
// CONTACT SELLER MODAL
// =====================================

const contactSellerBtn =
    document.querySelector("#contactSellerBtn");

const contactModal =
    document.querySelector("#contactModal");

const closeModal =
    document.querySelector("#closeModal");

const sendMessageBtn =
    document.querySelector("#sendMessageBtn");

const messageInput =
    document.querySelector("#messageInput");

const modalItemName =
    document.querySelector("#modalItemName");


// OPEN MODAL

contactSellerBtn.addEventListener("click", function () {

    modalItemName.textContent =
        selectedItem
            ? selectedItem.title
            : "CampusLoop Item";

    contactModal.classList.add("active");

    messageInput.focus();

});


// CLOSE MODAL

closeModal.addEventListener("click", function () {

    contactModal.classList.remove("active");

});


// CLOSE WHEN CLICKING OUTSIDE

contactModal.addEventListener("click", function (event) {

    if (event.target === contactModal) {

        contactModal.classList.remove("active");

    }

});


// SEND MESSAGE

sendMessageBtn.addEventListener("click", function () {

    const message =
        messageInput.value.trim();


    if (message === "") {

        alert("Please write a message first.");

        return;

    }


    alert("Message sent successfully!");


    messageInput.value = "";

    contactModal.classList.remove("active");

});