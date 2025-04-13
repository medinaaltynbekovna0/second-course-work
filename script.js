let cart = JSON.parse(localStorage.getItem("cart")) || [];


function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").textContent = totalItems;
}


document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        let product = {
            name: button.dataset.name,
            price: parseFloat(button.dataset.price),
            quantity: 1 
        };

        let existingProduct = cart.find(item => item.name === product.name);
        if (existingProduct) {
            existingProduct.quantity++; 
        } else {
            cart.push(product); 
        }
        localStorage.setItem("cart", JSON.stringify(cart)); 
        updateCartCount(); 
                alert({productname} ); 
    });
});

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML =
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.price * item.quantity; 
    });

    totalPriceElement.textContent = Итого .totalPrice.toFixed(2)} Сом; 

    document.querySelectorAll(".remove-from-cart").forEach(button => {
        button.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            cart.splice(index, 1); 
            localStorage.setItemы
            updateCartCount();
        });
    });

if (document.getElementById("cart-items")) {
    updateCartDisplay(); 
    updateCartCount(); 
}