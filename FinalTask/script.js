const API = "https://fakestoreapi.com/products";
const container = document.getElementById("productContainer");
const statusText = document.getElementById("status");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");

let allProducts = [];

// Fetch API
fetch(API)
  .then(res => res.json())
  .then(data => {
    statusText.style.display = "none";
    allProducts = data;

    populateCategories(data);
    displayProducts(data);
  })
  .catch(() => {
    statusText.innerText = "Failed to load data";
  });

// Display Function
function displayProducts(data) {
  container.innerHTML = "";

  data.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" />
      <h3>${product.title.substring(0, 50)}</h3>
      <p><b>$${product.price}</b></p>
      <p>${product.description.substring(0, 60)}...</p>
      <button onclick="viewMore('${product.title}','${product.description}')">View More</button>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    container.appendChild(card);
  });
}

// View More
function viewMore(title, desc) {
  alert(title + "\n\n" + desc);
}

// Search
searchInput.addEventListener("input", () => {
  filterData();
});

// Category Filter
categoryFilter.addEventListener("change", filterData);

// Sort
sortPrice.addEventListener("change", filterData);

function filterData() {
  let filtered = [...allProducts];

  // Search
  const searchValue = searchInput.value.toLowerCase();
  filtered = filtered.filter(p =>
    p.title.toLowerCase().includes(searchValue)
  );

  // Category
  if (categoryFilter.value !== "all") {
    filtered = filtered.filter(p => p.category === categoryFilter.value);
  }

  // Sort
  if (sortPrice.value === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortPrice.value === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

// Populate Categories
function populateCategories(data) {
  const categories = [...new Set(data.map(p => p.category))];

  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

// Add to Cart (localStorage)
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}