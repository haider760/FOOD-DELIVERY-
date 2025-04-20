// 1. Toggle mobile menu (future mobile nav support)
function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("hidden");
  }
  
  // 2. Show alert when adding to cart
  function addToCart(itemName, price) {
    alert(`${itemName} has been added to your cart for $${price}.`);
  }
  
  // 3. Calculate total price of cart (simulated)
  function calculateTotal(cartItems) {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  }
  
  // 4. Display total price in cart
  function displayCartTotal() {
    const cartItems = [
      { name: "Pepperoni Pizza", price: 9.99, quantity: 1 },
      { name: "Cheese Lovers", price: 8.49, quantity: 2 }
    ];
    const total = calculateTotal(cartItems);
    const totalElement = document.getElementById("cartTotal");
    if (totalElement) totalElement.textContent = `$${total}`;
  }
  
  // 5. Track order by ID
  function trackOrder() {
    const orderId = document.querySelector("input[type='text']").value;
    trackOrderById(orderId);
  }
  
  // 6. Simulate tracking order status
  function trackOrderById(orderId) {
    const result = document.getElementById("trackingResult");
    if (!orderId) {
      alert("Please enter an Order ID.");
      return;
    }
    result.innerHTML = `
      <h3 class="text-xl font-semibold mb-2">Order Status</h3>
      <p class="text-green-600 font-medium">🚚 Order #${orderId} is being prepared!</p>
    `;
    result.classList.remove("hidden");
  }
  
  // 7. Simulate login check
  function loginUser(username, password) {
    if (username === "admin" && password === "1234") {
      alert("Login successful!");
    } else {
      alert("Invalid credentials!");
    }
  }
  
  // 8. Filter restaurants (basic)
  function filterRestaurants(keyword) {
    const cards = document.querySelectorAll(".restaurant-card");
    cards.forEach(card => {
      const name = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = name.includes(keyword.toLowerCase()) ? "block" : "none";
    });
  }
  
  // 9. Load menu items dynamically (basic demo)
  function loadMenu() {
    const menu = [
      { name: "Margherita", price: 7.99 },
      { name: "BBQ Chicken", price: 10.99 }
    ];
    const container = document.getElementById("menuContainer");
    if (container) {
      menu.forEach(item => {
        const div = document.createElement("div");
        div.className = "p-4 bg-white shadow rounded mb-4";
        div.innerHTML = `<h3 class="text-lg font-bold">${item.name}</h3><p>$${item.price}</p>`;
        container.appendChild(div);
      });
    }
  }
  
  // 10. Scroll to top button
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  