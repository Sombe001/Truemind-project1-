// Select all cart item blocks
const cartItems = document.querySelectorAll(
  ".cart-item1, .cart-item2, .cart-item3, .cart-item4"
);

cartItems.forEach(item => {

    const increaseBtn = item.querySelector(".increase");
    const decreaseBtn = item.querySelector(".decrease");
    const qtyDisplay = item.querySelector(".qty");
    const priceDisplay = item.querySelector(".price");

    // Get original price
    const basePrice = parseInt(
        priceDisplay.textContent.replace("₦", "").replace(",", "")
    );

    let quantity = 1;

    // Increase quantity
    increaseBtn.addEventListener("click", () => {
        quantity++;
        qtyDisplay.textContent = quantity;
        updatePrice();
    });

    // Decrease quantity
    decreaseBtn.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            qtyDisplay.textContent = quantity;
            updatePrice();
        }
    });

    // Update total price for that item
    function updatePrice() {
        const newPrice = basePrice * quantity;
        priceDisplay.textContent = "₦" + newPrice.toLocaleString();
    }

});