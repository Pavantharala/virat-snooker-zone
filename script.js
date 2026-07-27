// =========================================
// VIRAT SNOOKER ZONE
// SCRIPT.JS (PART 1)
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
        description: "Crispy Chicken Nuggets"
    },

    {
        id: 2,
        name: "French Fries 6-Pcs Plate",
        category: "Food",
        image: "assets/french.fries.jpg",
        price: 120,
        rating: 4.8,
        type: "Veg",
        bestseller: false,
        description: "Golden Crispy Fries"
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
        description: "Fresh Chicken Spring Rolls"
    },

    {
        id: 4,
        name: "Oreo Shake",
        category: "Milk Shakes",
        image: "assets/oreo-shake.jpg",
        price: 80,
        rating: 4.9,
        type: "Veg",
        bestseller: false,
        description: "Cold Oreo Milk Shake"
    },

    {
        id: 5,
        name: "Egg Maggie Noodles Plate",
        category: "Food",
        image: "assets/Egg-maggie.jpg",
        price: 100,
        rating: 4.9,
        type: "Non Veg",
        bestseller: false,
        description: "Crispy Chicken Nuggets"
    },

    {
        id: 6,
        name: "Double Egg Omlette",
        category: "Food",
        image: "assets/Egg-omlette.jpg",
        price: 60,
        rating: 4.9,
        type: "Non Veg",
        bestseller: true,
        description: "Crispy Chicken Nuggets"
    },

    {
        id: 7,
        name: "Veg Maggie Noodles 2-Plates",
        category: "Food",
        image: "assets/Veg-Masala-Maggi.jpg",
        price: 120,
        rating: 4.9,
        type: "Veg",
        bestseller: true,
        description: "Crispy Chicken Nuggets"
    },

    {
        id: 8,
        name: "Plain Maggie Noodles Plate",
        category: "Food",
        image: "assets/plain-maggie.jpg",
        price: 80,
        rating: 4.9,
        type: "Veg",
        bestseller: true,
        description: "Crispy Chicken Nuggets"
    },

    {
        id: 9,
        name: "Sweet Corn 2-Cups",
        category: "Food",
        image: "assets/sweet-corn1.jpg",
        price: 80,
        rating: 4.9,
        type: "Veg",
        bestseller: true,
        description: "Crispy Chicken Nuggets"
    },

    {
        id: 10,
        name: "Tea",
        category: "Drinks",
        image: "assets/chai.jpg",
        price: 20,
        rating: 4.9,
        type: "Drinks",
        bestseller: true,
        description: "Crispy Chicken Nuggets"
    },

    {
        id: 11,
        name: "Black Coffee",
        category: "Drinks",
        image: "assets/Black-coffeee.jpg",
        price: 20,
        rating: 4.9,
        type: "Non Veg",
        bestseller: true,
        description: "Crispy Chicken Nuggets"
    },

    {
        id: 12,
        name: "Milk",
        category: "Drinks",
        image: "assets/Milk1.jpg",
        price: 20,
        rating: 4.9,
        type: "Drink",
        bestseller: true,
        description: "Crispy Chicken Nuggets"
    },

    {
        id: 13,
        name: "Green Tea",
        category: "Drinks",
        image: "assets/Green-tea.jpg",
        price: 20,
        rating: 4.9,
        type: "Non Veg",
        bestseller: true,
        description: "Crispy Chicken Nuggets"
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
        description: "Crispy Chicken Nuggets"
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
        description: "Crispy Chicken Nuggets"
    },

    {
        id: 16,
        name: "Sweet Lassi",
        category: "Milk Shakes",
        image: "",
        price: 60,
        rating: 4.9,
        type: "Veg",
        bestseller: true,
        description: "Crispy Chicken Nuggets"
    },

    {
        id: 17,
        name: "Lemon Juice",
        category: "Milk Shakes",
        image: "assets/lemon-juice.jpg",
        price: 40,
        rating: 4.9,
        type: "Veg",
        bestseller: true,
        description: "Crispy Chicken Nuggets"
    }

];

// =========================================
// DOM ELEMENTS
// =========================================

const container = document.getElementById("products");
const search = document.getElementById("search");
const suggestions = document.getElementById("suggestions");
const categoryButtons = document.querySelectorAll(".category-btn");

const cartSidebar = document.getElementById("cartSidebar");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const cartIcon = document.querySelector(".cart-icon");
const closeCart = document.getElementById("closeCart");

const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalDescription = document.getElementById("modalDescription");
const modalRating = document.getElementById("modalRating");
const modalPrice = document.getElementById("modalPrice");
const modalAddBtn = document.getElementById("modalAddBtn");
const closeModal = document.getElementById("closeModal");

const orderModal = document.getElementById("orderModal");
const continueOrder = document.getElementById("continueOrder");

// =========================================
// CART
// =========================================

let cart = [];

// =========================================
// LOAD PRODUCTS
// =========================================

function loadProducts(list = products){

    container.innerHTML = "";

    if(list.length === 0){

        container.innerHTML = `
            <h2 style="text-align:center;padding:40px;">
                😔 No Products Found
            </h2>
        `;

        return;

    }

    list.forEach(product=>{

        container.innerHTML += `

        <div class="card">

            <div class="image-box">

                <img src="${product.image}" alt="${product.name}">

                ${
                    product.bestseller
                    ? `<span class="tag">🔥 Best Seller</span>`
                    : ``
                }

            </div>

            <div class="details">

                <div class="top">

                    <h3>${product.name}</h3>

                    <span class="${
                        product.type==="Veg"
                        ? "veg"
                        : "nonveg"
                    }"></span>

                </div>

                <p>${product.description}</p>

                <div class="rating">

                    ⭐ ${product.rating}

                </div>

                <div class="bottom">

                    <h2>₹${product.price}</h2>

                    <button
                        onclick="addToCart(${product.id})">

                        Add

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

loadProducts();

// =========================================
// SEARCH
// =========================================

search.addEventListener("input", function () {

    const value = this.value.toLowerCase().trim();

    suggestions.innerHTML = "";

    if (value === "") {

        suggestions.style.display = "none";
        loadProducts(products);
        return;

    }

    const filtered = products.filter(product =>

        product.name.toLowerCase().includes(value) ||

        product.description.toLowerCase().includes(value) ||

        product.category.toLowerCase().includes(value) ||

        product.type.toLowerCase().includes(value)

    );

    loadProducts(filtered);

    if (filtered.length === 0) {

        suggestions.innerHTML = `
            <div class="suggestion-item">
                😔 No Products Found
            </div>
        `;

    } else {

        filtered.forEach(product => {

            suggestions.innerHTML += `

                <div class="suggestion-item"
                    onclick="selectProduct('${product.name}')">

                    <span>${product.name}</span>

                    <span>₹${product.price}</span>

                </div>

            `;

        });

    }

    suggestions.style.display = "block";

});

// =========================================
// SELECT PRODUCT
// =========================================

function selectProduct(name){

    search.value = name;

    suggestions.style.display = "none";

    const filtered = products.filter(product=>product.name===name);

    loadProducts(filtered);

}

// =========================================
// HIDE SUGGESTIONS
// =========================================

document.addEventListener("click",function(e){

    if(!e.target.closest(".search-container")){

        suggestions.style.display="none";

    }

});

// =========================================
// CATEGORY FILTER
// =========================================

categoryButtons.forEach(button=>{

    button.addEventListener("click",function(){

        categoryButtons.forEach(btn=>btn.classList.remove("active"));

        this.classList.add("active");

        const category=this.dataset.category;

        search.value="";

        suggestions.style.display="none";

        if(category==="All"){

            loadProducts(products);

            return;

        }

        const filtered=products.filter(product=>product.category===category);

        loadProducts(filtered);

    });

});

// =========================================
// ADD TO CART
// =========================================

function addToCart(id){

    const product=products.find(item=>item.id===id);

    const existing=cart.find(item=>item.id===id);

    if(existing){

        existing.quantity++;

    }else{

        cart.push({

            ...product,

            quantity:1

        });

    }

    updateCart();

}

// =========================================
// UPDATE CART
// =========================================

function updateCart(){

    cartItems.innerHTML="";

    let totalItems = 0;

    let totalPrice = 0;

    if(cart.length === 0){

        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartCount.innerText = 0;
        cartTotal.innerText = 0;
        return;

    }

    cart.forEach(item=>{

        totalItems += item.quantity;

        totalPrice += item.price*item.quantity;

        cartItems.innerHTML += `

        <div class="cart-item">

        <div class="cart-info">

            <h4>${item.name}</h4>

            <p>₹${item.price}</p>

        </div>

        <div class="quantity-box">

         <button onclick="decreaseQuantity(${item.id})">−</button>

         <span>${item.quantity}</span>

         <button onclick="increaseQuantity(${item.id})">+</button>

        </div>

        <h4>
            ₹${item.price * item.quantity}
        </h4>

        </div>

    `;


    });

    cartCount.innerText = totalItems;

    cartTotal.innerText = totalPrice;

}

// =========================================
// OPEN CART
// =========================================

cartIcon.addEventListener("click",()=>{

    cartSidebar.classList.add("active");

});

// =========================================
// CLOSE CART
// =========================================

closeCart.addEventListener("click",()=>{

    cartSidebar.classList.remove("active");

});

// Increase Quantity

function increaseQuantity(id){

    const item = cart.find(product => product.id === id);

    if(item){
        item.quantity++;

    }
    updateCart();
}

//Decrease Quantity
function decreaseQuantity(id){
    const item = cart.find(product => product.id === id);
    if(!item) return;
    item.quantity--;
    if(item.quantity <= 0){
        cart = cart.filter(product => product.id !== id);
    }
    updateCart();
}

// =========================================
// WHATSAPP ORDER
// =========================================

function placeOrder() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }

    // Show confirmation modal
    orderModal.classList.add("active");

}

// =========================================
// CONTINUE TO WHATSAPP
// =========================================

continueOrder.addEventListener("click", () => {

    let message = "🍽️ *Virat Snooker Zone Order*%0A%0A";

    message += "Hello! I would like to place the following order:%0A%0A";

    let total = 0;

    cart.forEach(item => {

        const amount = item.price * item.quantity;

        total += amount;

        message += `🍔 ${item.name}%0A`;
        message += `   Qty : ${item.quantity}%0A`;
        message += `   Price : ₹${item.price}%0A`;
        message += `   Amount : ₹${amount}%0A%0A`;

    });

    message += "----------------------------%0A";
    message += `💰 Total : ₹${total}%0A`;
    message += "----------------------------%0A%0A";
    message += "Thank You 😊";

    // Replace with your WhatsApp number
    const phone = "918341924117";

    window.open(
        `https://wa.me/${phone}?text=${message}`,
        "_blank"
    );

    // Close the confirmation popup
    orderModal.classList.remove("active");

    // Close the cart sidebar
    cartSidebar.classList.remove("active");

    // Clear the cart
    cart = [];

    // Update the cart UI
    updateCart();

    // Optional success message
    alert("Thank you! Your order has been sent to WhatsApp.");

});

// =========================================
// PRODUCT POPUP
// =========================================

function openProduct(id){

    const product = products.find(item => item.id === id);

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

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.classList.remove("active");

    }

});

// =========================================
// SCROLL TO TOP
// =========================================

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        scrollTopBtn.style.display = "block";

    }else{

        scrollTopBtn.style.display = "none";

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// =========================================
// PAGE LOADER
// =========================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("loader-hide");

    }, 1200);

});