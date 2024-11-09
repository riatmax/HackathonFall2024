
let addToCartButton = document.getElementById('#add-to-cart-button');
if (addToCartButton) {
    addToCartButton.disabled = true;
    addToCartButton.style.pointerEvents = 'none';
    console.log('Add to Cart button has been blocked.');
}
else {
    console.log('not found');
}
function blockBuyButton() {
    let buyButton = document.getElementById("input#buy-now-button.a-button-input");
    if (buyButton) {
         buyButton.disabled = true;
        buyButton.style.pointerEvents = 'none';  // Prevent interaction
        console.log('Buy Now button has been blocked.');
    }
    else {
        console.log('not found');
    }
}