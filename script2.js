// Обработчик нажатия кнопки "Buy Now"
document.getElementById('buyButton').addEventListener('click', function() {
    // Добавляем игру в корзину (здесь можно выполнить соответствующие действия, например, добавить в массив корзины или отправить запрос на сервер)
    console.log('Game added to cart.');

    // Перенаправляем пользователя на страницу корзины
    window.location.href = 'cart.html'; // Замените 'cart.html' на путь к вашей странице корзины
});

document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <h3>${item.title}</h3>
            <p>Price: $${item.price.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>
        `;

        cartItemsContainer.appendChild(itemElement);

        total += item.price * item.quantity;
    });

    cartTotalElement.textContent = `$${total.toFixed(2)}`;
});
