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
        bestseller: true,
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
        name: "Veg Maggi 2Serves",
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
    },
    {
        id: 18,
        name: "Coffee",
        category: "Drinks",
        image: "assets/coffee.jpg",
        price: 40,
        rating: 4.9,
        type: "Veg",
        bestseller: true,
        description: "Freshly brewed hot coffee.",
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
            <h2 style="text-align:center;padding:40px;">
                😔 No Products Found
            </h2>
        `;

        return;
    }

    let html = "";

    list.forEach(product => {

        const badge = product.bestseller
            ? `<span class="tag">🔥 Best Seller</span>`
            : "";

        const typeClass =
            product.type === "Veg"
                ? "veg"
                : product.type === "Non Veg"
                ? "nonveg"
                : "";

        html += `

        <div class="card">

            <div class="image-box" onclick="openProduct(${product.id})">

                <img
                    loading="lazy"
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.src='assets/no-image.png'">

                ${badge}

            </div>

            <div class="details">

                <div class="top">

                    <h3>${product.name}</h3>

                    ${typeClass ? `<span class="${typeClass}"></span>` : ""}

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

        filtered = filtered.filter(
            p => p.category === selectedCategory
        );

    }

    if (selectedType !== "All") {

        filtered = filtered.filter(
            p => p.type === selectedType
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
// CATEGORY BUTTONS
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

        if (typeFilter) {

            if (
                selectedCategory === "Food" ||
                selectedCategory === "All"
            ) {

                typeFilter.style.display = "flex";

            } else {

                typeFilter.style.display = "none";

            }

        }

        filterProducts();

    });

});

// =========================================
// VEG / NON VEG
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

    const keyword = search.value.trim().toLowerCase();

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

            <div
                class="suggestion-item"
                onclick="selectProduct('${product.name.replace(/'/g, "\\'")}')">

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

document.addEventListener("click", e => {

    if (!e.target.closest(".search-container")) {

        suggestions.style.display = "none";

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

        <div class="empty-cart">

            <h2>🛒</h2>

            <p>Your cart is empty</p>

            <small>Add some delicious food.</small>

        </div>

        `;

        cartCount.innerText = "0";
        cartTotal.innerText = "0";

        saveCart();

        return;

    }

    cart.forEach(item => {

        totalItems += item.quantity;

        const amount = item.price * item.quantity;

        totalPrice += amount;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img
                class="cart-image"
                src="${item.image}"
                alt="${item.name}"
                onerror="this.src='assets/no-image.png'">

            <div class="cart-info">

                <h4>${item.name}</h4>

                <p>₹${item.price}</p>

            </div>

            <div class="quantity-box">

                <button onclick="decreaseQuantity(${item.id})">
                    −
                </button>

                <span>${item.quantity}</span>

                <button onclick="increaseQuantity(${item.id})">
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

    cartCount.innerText = totalItems;

    cartTotal.innerText = totalPrice;

    saveCart();

}

// =========================================
// REMOVE ITEM
// =========================================

function removeItem(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();

    updateCart();

}

// =========================================
// INCREASE QUANTITY
// =========================================

function increaseQuantity(id) {

    const item = cart.find(item => item.id === id);

    if (!item) return;

    item.quantity++;

    saveCart();

    updateCart();

}

// =========================================
// DECREASE QUANTITY
// =========================================

function decreaseQuantity(id) {

    const item = cart.find(item => item.id === id);

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {

        removeItem(id);

        return;

    }

    saveCart();

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

window.addEventListener("click", e => {

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

document.addEventListener("DOMContentLoaded", () => {

    updateCart();

});

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

const paymentSlip = document.getElementById("paymentSlip");
const fileName = document.getElementById("fileName");
const paidBtn = document.getElementById("paidBtn");

let uploadedSlip = "";
let currentOrderId = "";

// =========================================
// PAYMENT SCREENSHOT
// =========================================

if (paidBtn) {

    paidBtn.disabled = true;

}

if (paymentSlip) {

    paymentSlip.addEventListener("change", function () {

        if (this.files.length > 0) {

            uploadedSlip = this.files[0].name;

            fileName.innerHTML = "✅ " + uploadedSlip;

            if (paidBtn)
                paidBtn.disabled = false;

        } else {

            uploadedSlip = "";

            fileName.innerHTML = "No screenshot selected";

            if (paidBtn)
                paidBtn.disabled = true;

        }

    });

}

// =========================================
// ORDER NUMBER
// =========================================

function generateOrderNumber() {

    return "VSZ-" + Date.now().toString().slice(-6);

}

function generateWaitingTime() {

    return Math.floor(Math.random() * 11) + 10;

}

// =========================================
// OPEN CHECKOUT
// =========================================

function openCheckout() {

    if (cart.length === 0) {

        alert("🛒 Your cart is empty!");

        return;

    }

    cartSidebar.classList.remove("active");

    checkoutModal.classList.add("active");

    document.body.style.overflow = "hidden";

}

// =========================================
// CLOSE CHECKOUT
// =========================================

closeCheckout.addEventListener("click", () => {

    checkoutModal.classList.remove("active");

    document.body.style.overflow = "auto";

});

// =========================================
// PAY AT COUNTER
// =========================================

function payAtCounter() {

    sendOrder("Pay at Counter");

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

    document.body.style.overflow = "auto";

});

// =========================================
// OPEN UPI APP
// =========================================

function openUPI() {

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const upiLink =
        `upi://pay?pa=8978833557-2@ybl` +
        `&pn=${encodeURIComponent("Virat Snooker Zone")}` +
        `&am=${total}` +
        `&cu=INR`;

    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {

        window.location.href = upiLink;

    } else {

        alert("Please scan the QR using your mobile.");

    }

}

// =========================================
// PAYMENT DONE
// =========================================

function paymentDone() {

    sendOrder("UPI");

}

// =========================================
// WHATSAPP ORDER
// =========================================

function placeOrder() {

    checkoutModal.classList.remove("active");

    orderModal.classList.add("active");

}

continueOrder.addEventListener("click", () => {

    sendOrder("WhatsApp");

});

// =========================================
// SEND ORDER
// =========================================

function sendOrder(mode) {

    currentOrderId = generateOrderNumber();

    let total = 0;

    let message = "🍽️ *Virat Snooker Zone*%0A%0A";

    message += "🆔 Order ID : " + currentOrderId + "%0A%0A";

    cart.forEach(item => {

        const amount = item.price * item.quantity;

        total += amount;

        message +=
            `🍔 ${item.name}%0A` +
            `Qty : ${item.quantity}%0A` +
            `Price : ₹${item.price}%0A` +
            `Amount : ₹${amount}%0A%0A`;

    });

    message += "--------------------%0A";

    message += `💰 Total : ₹${total}%0A`;

    message += "Payment : " + mode + "%0A";

    const phone = "919939393426";

    window.open(

        `https://wa.me/${phone}?text=${message}`,

        "_blank"

    );

    cart = [];

    saveCart();

    updateCart();

    checkoutModal.classList.remove("active");

    upiModal.classList.remove("active");

    orderModal.classList.remove("active");

    document.body.style.overflow = "auto";

    showSuccess(generateWaitingTime());

}

// =========================================
// SUCCESS MODAL
// =========================================

const orderNumber = document.getElementById("orderNumber");
const waitingTime = document.getElementById("waitingTime");

function showSuccess(waiting) {

    orderNumber.innerHTML =
        "Order ID : <b>" + currentOrderId + "</b>";

    waitingTime.innerHTML =
        "Estimated Preparation Time : <b>" +
        waiting +
        " Minutes</b>";

    successModal.classList.add("active");

    uploadedSlip = "";

    if (paymentSlip)
        paymentSlip.value = "";

    if (fileName)
        fileName.innerHTML = "No screenshot selected";

    if (paidBtn)
        paidBtn.disabled = true;

}

function closeSuccess() {

    successModal.classList.remove("active");

}

// =========================================
// CLOSE MODALS OUTSIDE CLICK
// =========================================

window.addEventListener("click", e => {

    if (e.target === checkoutModal) {

        checkoutModal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

    if (e.target === upiModal) {

        upiModal.classList.remove("active");

    }

    if (e.target === orderModal) {

        orderModal.classList.remove("active");

    }

    if (e.target === successModal) {

        successModal.classList.remove("active");

    }

});

// =========================================
// TODAY'S SPECIAL
// =========================================

function loadTodaySpecial() {

    const specials = products.filter(product =>
        product.category === "Food"
    );

    if (specials.length === 0) return;

    const special =
        specials[new Date().getDate() % specials.length];

    const img = document.getElementById("todaySpecialImage");
    const name = document.getElementById("todaySpecialName");
    const description = document.getElementById("todaySpecialDescription");
    const price = document.getElementById("todaySpecialPrice");
    const rating = document.getElementById("todaySpecialRating");

    if (img) {

        img.src = special.image;

        img.onerror = function () {

            this.src = "assets/no-image.png";

        };

    }

    if (name)
        name.textContent = special.name;

    if (description)
        description.textContent = special.description;

    if (price)
        price.textContent = "₹" + special.price;

    if (rating)
        rating.textContent = "⭐ " + special.rating;

}

// =========================================
// PAGE LOADER
// =========================================

function hideLoader() {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("loader-hide");

        setTimeout(() => {

            loader.remove();

        }, 500);

    }, 800);

}

// =========================================
// SCROLL TO TOP BUTTON
// =========================================

const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 350) {

            scrollBtn.classList.add("show");

        } else {

            scrollBtn.classList.remove("show");

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// =========================================
// INITIAL PAGE LOAD
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    loadProducts();

    updateCart();

    loadTodaySpecial();

    hideLoader();

});

// =========================================
// IMAGE FALLBACK
// =========================================

document.addEventListener("error", function (e) {

    if (e.target.tagName === "IMG") {

        e.target.src = "assets/no-image.png";

    }

}, true);

// =========================================
// CONSOLE MESSAGE
// =========================================

console.log("%cVirat Snooker Zone", "color:#00d084;font-size:22px;font-weight:bold;");
console.log("%cWebsite Loaded Successfully ✅", "color:#ffffff;background:#28a745;padding:6px 12px;border-radius:5px;");