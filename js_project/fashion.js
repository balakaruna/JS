let cart = [];
let products = [];

const cartBtn = document.getElementById("cart-btn");
const cartSidebar = document.getElementById("cart-sidebar");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalPrice = document.getElementById("total-price");
const searchInput = document.getElementById("search");
const productsContainer = document.getElementById("products-container");
const shopBtn = document.getElementById("shop-btn");

/* Open Cart */
cartBtn.addEventListener("click", () => {
  cartSidebar.classList.add("active");
});

/* Close Cart */
closeCart.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
});

/* Shop Now Scroll */
shopBtn.addEventListener("click", () => {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
});

/* Add Local Products To Cart */
document.querySelectorAll(".add-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const product = {
      id: Date.now() + Math.random(),
      name: button.dataset.name,
      price: Number(button.dataset.price),
      image: button.dataset.image
    };

    cart.push(product);
    updateCart();
    cartSidebar.classList.add("active");
  });
});

/* Update Cart */
function updateCart() {
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    total += item.price;

    const div = document.createElement("div");

    div.innerHTML = `
      <div style="
        display:flex;
        align-items:center;
        gap:15px;
        margin-bottom:20px;
        border-bottom:1px solid #ddd;
        padding-bottom:15px;
      ">
        <img
          src="${item.image}"
          width="70"
          height="70"
          style="object-fit:cover;border-radius:10px;"
        >

        <div style="flex:1">
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>
        </div>

        <button
          onclick="removeCart('${item.id}')"
          style="
            border:none;
            background:red;
            color:white;
            padding:8px 12px;
            border-radius:6px;
            cursor:pointer;
          "
        >
          Remove
        </button>
      </div>
    `;

    cartItems.appendChild(div);
  });

  cartCount.textContent = cart.length;
  totalPrice.textContent = total;
}

/* Remove Product */
function removeCart(id) {
  cart = cart.filter((item) => item.id != id);
  updateCart();
}

/* Fetch Fake Store API Products */
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    displayProducts(products);
  })
  .catch(() => {
    productsContainer.innerHTML =
      "<h2>Failed To Load Products</h2>";
  });

/* Display API Products */
function displayProducts(data) {
  productsContainer.innerHTML = "";

  data.forEach((product) => {
    const card = document.createElement("div");

    card.classList.add("box");

    card.innerHTML = `
      <img src="${product.image}" style="height:300px;object-fit:contain;padding:20px;">
      <h3>${product.title}</h3>
      <p>₹${Math.floor(product.price * 85)}</p>

      <button
        class="api-cart"
        data-id="${product.id}">
        Add To Cart
      </button>
    `;

    productsContainer.appendChild(card);
  });

  document.querySelectorAll(".api-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);

      const item = products.find(
        (product) => product.id === id
      );

      const cartProduct = {
        id: Date.now() + Math.random(),
        name: item.title,
        price: Math.floor(item.price * 85),
        image: item.image
      };

      cart.push(cartProduct);
      updateCart();
      cartSidebar.classList.add("active");
    });
  });
}

/* Search */
searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();

  /* Search Local Products */
  document.querySelectorAll(".box").forEach((card) => {
    const title = card.querySelector("h3");

    if (!title) return;

    const text = title.textContent.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  /* Search API Products */
  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(value)
  );

  displayProducts(filtered);
});