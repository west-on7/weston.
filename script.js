const products = [
  { id: 1, name: "watch", image: "assets/IMG-20250702-WA0136.jpg" },
  { id: 2, name: "watch", image: "assets/IMG-20250702-WA0181.jpg" },
  { id: 3, name: "watch",  image: "assets/IMG-20250702-WA0160.jpg" },
  { id: 4, name: "watch",  image: "assets/IMG-20250702-WA0157.jpg"},
  { id: 5, name: "watch",  image: "assets/IMG-20250702-WA0167.jpg"},
  { id: 6, name: "watch",  image: "assets/IMG-20250702-WA0176.jpg"},
  { id: 7, name: "watch",  image: "assets/IMG-20250702-WA0162.jpg"},
  { id: 9, name: "watch", image: "assets/IMG-20250702-WA0140.jpg"},
  { id: 10, name: "watch",  image: "assets/IMG-20250702-WA0155.jpg"},
  { id: 11, name: "watch",  image: "assets/IMG-20250702-WA0166.jpg"},
  { id: 12, name: "watch",  image: "assets/IMG-20250702-WA0169.jpg"},
  { id: 13, name: "Watch",  image: "assets/IMG-20250702-WA0183.jpg"},
  { id: 13, name: "watch",  image: "assets/IMG-20250702-WA0176.jpg"},
  { id: 15, name: "watch", image: "assets/IMG-20250702-WA0156.jpg"},
  { id: 16, name: "watch", image: "assets/IMG-20250702-WA0157.jpg" },
];

let cart = [];

function displayProducts() {
  const list = document.getElementById("product-list");
  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    list.appendChild(div);
  });
}

// ✅ Fixing your addToCart() function with WhatsApp message sending
function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();

  const message = 
`🛍️ *New Product Inquiry!*

📌 *Product Name:* ${item.name}
💵 *Price:* ₹${item.price}
🖼️ *Image Preview:* ${window.location.origin}/${item.image}

Please let me know how to place the order. Thank you! 🙏`;

  // WhatsApp numbers (with country code)
  const phoneNumbers = ["919048957861", "918943361776"];

  phoneNumbers.forEach((number) => {
    const whatsappURL = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  });
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").innerText = total;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("hidden");
}

window.onload = displayProducts;
