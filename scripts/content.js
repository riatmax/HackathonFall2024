function blockBuyButton() {
    const buyButton = document.querySelector('#buy-now-button, a-button-input');

    if (buyButton) {
        buyButton.disabled = true;
        buyButton.computedStyleMap.pointerEvents = 'none';
        console.log("buy now button blocked");
    }
    else {
        console.log("not found");
    }
}

function blockAddToCartButton() {
    const addToCartButton = document.querySelector('#add-to-cart-button, .a-button-input');

    if (addToCartButton) {
        addToCartButton.disabled = true;
        addToCartButton.style.pointerEvents = 'none'; 
        console.log("Add to Cart button has been blocked.");
    }
    else {
        console.log("not found");
    }
}

window.addEventListener('load', () => {
    blockBuyButton();
    blockAddToCartButton();
})