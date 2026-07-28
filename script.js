// =========================================
// VIRAT SNOOKER ZONE
// script.js (PART 1)
// =========================================


// =========================================
// PRODUCTS
// =========================================

const products = [

    {
        id: 1,
        name: "Egg Bhurji Plate",
        category: "Food",
        image: "assets/Egg-bhurji.jpg",
        price: 60,
        rating: 4.9,
        type: "Non Veg",
        bestseller: true,
        description: "Fresh egg bhurji prepared with onions and spices."
    },

    {
        id: 2,
        name: "French Fries",
        category: "Food",
        image: "assets/fri.jpg",
        price: 120,
        rating: 4.8,
        type: "Veg",
        bestseller: false,
        description: "Golden crispy French fries served hot."
    },

    {
        id: 3,
        name: "Chicken Spring Rolls",
        category: "Food",
        image: "assets/chicken-spring-roll.jpg",
        price: 120,
        rating: 4.8,
        type: "Non Veg",
        bestseller: true,
        description: "Crunchy chicken spring rolls with sauce."
    },

    {
        id: 4,
        name: "Oreo Shake",
        category: "Milk Shakes",
        image: "assets/Oreo_Milkshake1.jpg",
        price: 80,
        rating: 4.9,
        type: "Veg",
        bestseller: true,
        description: "Creamy Oreo milkshake with ice cream."
    },

    {
        id: 5,
        name: "Egg Maggie",
        category: "Food",
        image: "assets/Egg-maggie.jpg",
        price: 100,
        rating: 4.9,
        type: "Non Veg",
        bestseller: false,
        description: "Masala Maggi topped with fresh eggs."
    },

    {
        id: 6,
        name: "Double Egg Omelette",
        category: "Food",
        image: "assets/Egg-omlette.jpg",
        price: 60,
        rating: 4.8,
        type: "Non Veg",
        bestseller: true,
        description: "Soft double egg omelette with spices."
    },

    {
        id: 7,
        name: "Veg Maggi",
        category: "Food",
        image: "assets/Veg-Masala-Maggi.jpg",
        price: 120,
        rating: 4.8,
        type: "Veg",
        bestseller: true,
        description: "Vegetable Maggi noodles with fresh veggies."
    },

    {
        id: 8,
        name: "Plain Maggi",
        category: "Food",
        image: "assets/plain-maggie.jpg",
        price: 80,
        rating: 4.7,
        type: "Veg",
        bestseller: false,
        description: "Classic plain Maggi noodles."
    },

    {
        id: 9,
        name: "Sweet Corn",
        category: "Food",
        image: "assets/sweet-corn1.jpg",
        price: 80,
        rating: 4.8,
        type: "Veg",
        bestseller: true,
        description: "Hot butter sweet corn."
    },

    {
        id: 10,
        name: "Tea",
        category: "Drinks",
        image: "assets/chai.jpg",
        price: 20,
        rating: 4.9,
        type: "Veg",
        bestseller: true,
        description: "Hot Indian tea."
    },

    {
        id: 11,
        name: "Black Coffee",
        category: "Drinks",
        image: "assets/Black-coffeee.jpg",
        price: 20,
        rating: 4.8,
        type: "Veg",
        bestseller: true,
        description: "Fresh black coffee."
    },

    {
        id: 12,
        name: "Milk",
        category: "Drinks",
        image: "assets/Milk1.jpg",
        price: 20,
        rating: 4.8,
        type: "Veg",
        bestseller: false,
        description: "Fresh hot milk."
    },

    {
        id: 13,
        name: "Green Tea",
        category: "Drinks",
        image: "assets/Green-tea.jpg",
        price: 20,
        rating: 4.8,
        type: "Veg",
        bestseller: false,
        description: "Healthy green tea."
    },

    {
        id: 14,
        name: "Banana Shake",
        category: "Milk Shakes",
        image: "assets/banana-shake.jpg",
        price: 80,
        rating: 4.9,
        type: "Veg",
        bestseller: true,
        description: "Creamy banana milkshake."
    },

    {
        id: 15,
        name: "Badam Shake",
        category: "Milk Shakes",
        image: "assets/badam-shake.jpg",
        price: 100,
        rating: 4.9,
        type: "Veg",
        bestseller: true,
        description: "Rich almond milkshake."
    },

    {
        id: 16,
        name: "Sweet Lassi",
        category: "Drinks",
        image: "assets/git.jpg",
        price: 60,
        rating: 4.8,
        type: "Veg",
        bestseller: true,
        description: "Traditional sweet lassi."
    },

    {
        id: 17,
        name: "Lemon Juice",
        category: "Drinks",
        image: "assets/lemon-juice.jpg",
        price: 40,
        rating: 4.9,
        type: "Veg",
        bestseller: true,
        description: "Fresh lemon juice."
    }

];


// =========================================
// DOM ELEMENTS
// =========================================

const container = document.getElementById("products");
const search = document.getElementById("search");
const suggestions = document.getElementById("suggestions");

const categoryButtons = document.querySelectorAll(".category-btn");
const typeButtons = document.querySelectorAll(".type-btn");
const typeFilter = document.getElementById("typeFilter");

const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalDescription = document.getElementById("modalDescription");
const modalRating = document.getElementById("modalRating");
const modalPrice = document.getElementById("modalPrice");
const modalAddBtn = document.getElementById("modalAddBtn");
const closeModal = document.getElementById("closeModal");


// =========================================
// GLOBAL VARIABLES
// =========================================

let selectedCategory = "All";
let selectedType = "All";


// =========================================
// LOAD PRODUCTS
// =========================================

function loadProducts(list = products) {

    if (!container) return;

    if (list.length === 0) {

        container.innerHTML = `
            <h2 style="padding:40px;text-align:center;">
                😔 No Products Found
            </h2>
        `;

        return;
    }

    let html = "";

    list.forEach(product => {

        let badge = "";

        if (product.bestseller) {
            badge = `<span class="tag">🔥 Best Seller</span>`;
        }

        let typeClass = "";

        if (product.type === "Veg") {
            typeClass = "veg";
        } else if (product.type === "Non Veg") {
            typeClass = "nonveg";
        }

        html += `

        <div class="card">

            <div class="image-box"
                 onclick="openProduct(${product.id})">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.src='assets/no-image.png'">

                ${badge}

            </div>

            <div class="details">

                <div class="top">

                    <h3>${product.name}</h3>

                    ${
                        typeClass
                        ? `<span class="${typeClass}"></span>`
                        : ""
                    }

                </div>

                <p>${product.description}</p>

                <div class="rating">
                    ⭐ ${product.rating}
                </div>

                <div class="bottom">

                    <h2>₹${product.price}</h2>

                    <button onclick="addToCart(${product.id})">
                        🛒 Add To Cart
                    </button>

                </div>

            </div>

        </div>

        `;

    });

    container.innerHTML = html;

}

loadProducts();


// =========================================
// FILTER PRODUCTS
// =========================================

function filterProducts() {

    let filtered = [...products];

    if (selectedCategory !== "All") {

        filtered = filtered.filter(product =>
            product.category === selectedCategory
        );

    }

    if (selectedType !== "All") {

        filtered = filtered.filter(product =>
            product.type === selectedType
        );

    }

    const keyword = search.value.trim().toLowerCase();

    if (keyword !== "") {

        filtered = filtered.filter(product =>

            product.name.toLowerCase().includes(keyword) ||

            product.description.toLowerCase().includes(keyword)

        );

    }

    loadProducts(filtered);

}


// =========================================
// CATEGORY FILTER
// =========================================

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        selectedType = "All";

        typeButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        if (
            selectedCategory === "Food" ||
            selectedCategory === "All"
        ) {

            typeFilter.style.display = "flex";

        } else {

            typeFilter.style.display = "none";

        }

        filterProducts();

    });

});


// =========================================
// VEG / NON VEG FILTER
// =========================================

typeButtons.forEach(button => {

    button.addEventListener("click", () => {

        typeButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedType = button.dataset.type;

        filterProducts();

    });

});


// =========================================
// SEARCH
// =========================================

search.addEventListener("input", () => {

    filterProducts();

    const keyword = search.value.toLowerCase().trim();

    suggestions.innerHTML = "";

    if (keyword === "") {

        suggestions.style.display = "none";
        return;

    }

    const result = products.filter(product =>

        product.name.toLowerCase().includes(keyword)

    );

    if (result.length === 0) {

        suggestions.innerHTML =
            `<div class="suggestion-item">No Products Found</div>`;

    } else {

        result.forEach(product => {

            suggestions.innerHTML += `

            <div class="suggestion-item"
                 onclick="selectProduct('${product.name}')">

                ${product.name}

            </div>

            `;

        });

    }

    suggestions.style.display = "block";

});


// =========================================
// SELECT PRODUCT
// =========================================

function selectProduct(name) {

    search.value = name;

    suggestions.style.display = "none";

    filterProducts();

}


// =========================================
// CLOSE SUGGESTIONS
// =========================================

document.addEventListener("click", e => {

    if (!e.target.closest(".search-container")) {

        suggestions.style.display = "none";

    }

});


// =========================================
// PRODUCT POPUP
// =========================================

function openProduct(id) {

    const product = products.find(item => item.id === id);

    if (!product) return;

    modalImage.src = product.image;

    modalName.innerText = product.name;

    modalDescription.innerText = product.description;

    modalRating.innerText = "⭐ " + product.rating;

    modalPrice.innerText = "₹" + product.price;

    modalAddBtn.onclick = () => {

        addToCart(id);

        modal.classList.remove("active");

    };

    modal.classList.add("active");

}

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});

window.addEventListener("click", e => {

    if (e.target === modal) {

        modal.classList.remove("active");

    }

});

// =========================================
// CART
// =========================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSidebar = document.getElementById("cartSidebar");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const cartIcon = document.querySelector(".cart-icon");
const closeCart = document.getElementById("closeCart");


// =========================================
// SAVE CART
// =========================================

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


// =========================================
// ADD TO CART
// =========================================

function addToCart(id) {

    const product = products.find(item => item.id === id);

    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    saveCart();
    updateCart();

    cartSidebar.classList.add("active");

}


// =========================================
// UPDATE CART
// =========================================

function updateCart() {

    cartItems.innerHTML = "";

    let totalItems = 0;
    let totalPrice = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p style="padding:25px;text-align:center;">
                🛒 Your cart is empty.
            </p>
        `;

        cartCount.innerText = 0;
        cartTotal.innerText = 0;

        saveCart();

        return;
    }

    let html = "";

    cart.forEach(item => {

        const amount = item.price * item.quantity;

        totalItems += item.quantity;
        totalPrice += amount;

        html += `

        <div class="cart-item">

            <div class="cart-info">

                <h4>${item.name}</h4>

                <p>₹${item.price}</p>

            </div>

            <div class="quantity-box">

                <button
                    onclick="decreaseQuantity(${item.id})">

                    −

                </button>

                <span>${item.quantity}</span>

                <button
                    onclick="increaseQuantity(${item.id})">

                    +

                </button>

            </div>

            <div class="cart-price">

                ₹${amount}

            </div>

            <button
                class="remove-btn"
                onclick="removeItem(${item.id})">

                <i class="fa-solid fa-trash"></i>

            </button>

        </div>

        `;

    });

    cartItems.innerHTML = html;

    cartCount.innerText = totalItems;

    cartTotal.innerText = totalPrice;

    saveCart();

}


// =========================================
// REMOVE ITEM
// =========================================

function removeItem(id) {

    cart = cart.filter(item => item.id !== id);

    updateCart();

}


// =========================================
// INCREASE QUANTITY
// =========================================

function increaseQuantity(id) {

    const item = cart.find(product => product.id === id);

    if (!item) return;

    item.quantity++;

    updateCart();

}


// =========================================
// DECREASE QUANTITY
// =========================================

function decreaseQuantity(id) {

    const item = cart.find(product => product.id === id);

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {

        removeItem(id);

        return;

    }

    updateCart();

}


// =========================================
// OPEN CART
// =========================================

cartIcon.addEventListener("click", () => {

    cartSidebar.classList.add("active");

});


// =========================================
// CLOSE CART
// =========================================

closeCart.addEventListener("click", () => {

    cartSidebar.classList.remove("active");

});


// =========================================
// CLOSE WHEN CLICKING OUTSIDE
// =========================================

window.addEventListener("click", (e) => {

    if (
        cartSidebar.classList.contains("active") &&
        !cartSidebar.contains(e.target) &&
        !cartIcon.contains(e.target)
    ) {

        cartSidebar.classList.remove("active");

    }

});


// =========================================
// INITIALIZE CART
// =========================================

updateCart();

// =========================================
// CHECKOUT
// =========================================

const checkoutModal = document.getElementById("checkoutModal");
const closeCheckout = document.getElementById("closeCheckout");

const upiModal = document.getElementById("upiModal");
const closeUPI = document.getElementById("closeUPI");

const successModal = document.getElementById("successModal");

const orderModal = document.getElementById("orderModal");
const continueOrder = document.getElementById("continueOrder");

// Payment Screenshot

const paymentSlip =
document.getElementById("paymentSlip");

const fileName =
document.getElementById("fileName");

let uploadedSlip = "";

paymentSlip.addEventListener("change", function () {

    if (this.files.length > 0) {

        uploadedSlip = this.files[0].name;

        fileName.innerHTML =
        "✅ " + uploadedSlip;

    }

});

// =========================================
// OPEN CHECKOUT
// =========================================

function openCheckout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");
        return;

    }

    checkoutModal.classList.add("active");

}


// =========================================
// CLOSE CHECKOUT
// =========================================

closeCheckout.addEventListener("click", () => {

    checkoutModal.classList.remove("active");

});

// =========================================
// ORDER ID
// =========================================

let currentOrderId = "";

function generateOrderNumber() {
    return "VSZ-" + Date.now().toString().slice(-6);
}


// =========================================
// PAY AT COUNTER
// =========================================

function payAtCounter() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    currentOrderId = generateOrderNumber();

    let total = 0;

    let message = "🍽️ *Virat Snooker Zone*%0A%0A";
    message += "🛎️ *New Order*%0A%0A";
    message += "🆔 Order ID : " + currentOrderId + "%0A%0A";

    cart.forEach(item => {

        const amount = item.price * item.quantity;
        total += amount;

        message += `🍔 ${item.name}%0A`;
        message += `Qty : ${item.quantity}%0A`;
        message += `Price : ₹${item.price}%0A`;
        message += `Amount : ₹${amount}%0A%0A`;

    });

    message += "------------------------%0A";
    message += `💰 Total : ₹${total}%0A`;
    message += "Payment Mode : Pay at Counter%0A";


    const phone = "918341924117";

    window.open(
        `https://wa.me/${phone}?text=${message}`,
        "_blank"
    );

    checkoutModal.classList.remove("active");
    cartSidebar.classList.remove("active");

    cart = [];
    updateCart();

    showSuccess();
}

// =========================================
// OPEN UPI
// =========================================

function payUPI() {

    checkoutModal.classList.remove("active");

    upiModal.classList.add("active");

}


// =========================================
// CLOSE UPI
// =========================================

closeUPI.addEventListener("click", () => {

    upiModal.classList.remove("active");

});


// =========================================
// OPEN UPI APP
// =========================================

function openUPI() {

    window.open(

        "upi://pay?pa=8341924117@mbk&pn=Virat Snooker Zone",

        "_self"

    );

}


// =========================================
// PAYMENT DONE
// =========================================

function paymentDone() {

    currentOrderId = generateOrderNumber();

    let total = 0;

    let message = "🍽️ *Virat Snooker Zone*%0A%0A";
    message += "✅ *UPI Payment Completed*%0A%0A";
    message += "Order Details:%0A%0A";

    cart.forEach(item => {
        const amount = item.price * item.quantity;

        total += amount;

        message += `🍔 ${item.name}%0A`;
        message += `Qty : ${item.quantity}%0A`;
        message += `Price : ₹${item.price}%0A`;
        message += `Amount : ₹${amount}%0A%0A`;


    });

     message += "--------------------%0A";
    message += `💰 Total : ₹${total}%0A`;
    message += "--------------------%0A";
    message += "Payment Mode : UPI%0A";
    message += "Customer clicked 'I've Paid'.%0A";

    const phone = "918341924117";

    window.open(
        `https://wa.me/${phone}?text=${message}`,
        "_blank"
    );


    upiModal.classList.remove("active");

    cartSidebar.classList.remove("active");

    cart = [];

    updateCart();

    showSuccess();

}


// =========================================
// WHATSAPP ORDER
// =========================================

function placeOrder() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }

    checkoutModal.classList.remove("active");

    orderModal.classList.add("active");

}


// =========================================
// CONTINUE TO WHATSAPP
// =========================================

continueOrder.addEventListener("click", () => {

    currentOrderId = generateOrderNumber();

    let total = 0;

    let message = "🍽️ *Virat Snooker Zone*%0A%0A";

    message += "Order Details%0A%0A";

    cart.forEach(item => {

        const amount = item.price * item.quantity;

        total += amount;

        message +=
            `🍔 ${item.name}%0A`;

        message +=
            `Qty : ${item.quantity}%0A`;

        message +=
            `Price : ₹${item.price}%0A`;

        message +=
            `Amount : ₹${amount}%0A%0A`;

    });

    message += "--------------------%0A";

    message +=
        `💰 Total : ₹${total}%0A`;

    message += "--------------------%0A";

    message +=
        "Thank You ❤️";

    const phone = "918341924117";

    window.open(

        `https://wa.me/${phone}?text=${message}`,

        "_blank"

    );

    orderModal.classList.remove("active");

    cartSidebar.classList.remove("active");

    cart = [];

    updateCart();

    showSuccess();

});


// =========================================
// ORDER SUCCESS
// =========================================

function generateWaitingTime() {

    return Math.floor(

        Math.random() * 11

    ) + 10;

}

function showSuccess() {

    const waiting = generateWaitingTime();

    document.getElementById("orderNumber").innerHTML =
        "Order ID : <b>" + currentOrderId + "</b>";

    document.getElementById("waitingTime").innerHTML =
        "Estimated Preparation Time : <b>" +
        waiting +
        " Minutes</b>";

    successModal.classList.add("active");
}


// =========================================
// CLOSE SUCCESS
// =========================================

function closeSuccess() {

    successModal.classList.remove("active");

}


// =========================================
// CLOSE MODALS WHEN CLICKING OUTSIDE
// =========================================

window.addEventListener("click", (e) => {

    if (e.target === checkoutModal)

        checkoutModal.classList.remove("active");

    if (e.target === upiModal)

        upiModal.classList.remove("active");

    if (e.target === successModal)

        successModal.classList.remove("active");

    if (e.target === orderModal)

        orderModal.classList.remove("active");

});


// =========================================
// TODAY'S SPECIAL
// =========================================

function loadTodaySpecial() {

    const specials = products.filter(p => p.category === "Food");

    if (specials.length === 0) return;

    const special = specials[new Date().getDate() % specials.length];

    const img = document.getElementById("todaySpecialImage");
    const name = document.getElementById("todaySpecialName");
    const description = document.getElementById("todaySpecialDescription");
    const price = document.getElementById("todaySpecialPrice");

    if (img) img.src = special.image;
    if (name) name.textContent = special.name;
    if (description) description.textContent = special.description;
    if (price) price.textContent = "₹" + special.price;
}

loadTodaySpecial();



// =========================================
// PAGE LOADER
// =========================================

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.classList.add("loader-hide");
    }
});



// =========================================
// SCROLL TO TOP
// =========================================

const scrollTopBtn =

document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollTopBtn.style.display = "block";

    }

    else {

        scrollTopBtn.style.display = "none";

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// =========================================
// END
// =========================================