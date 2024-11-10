// Add event listener to the popup's button
document.getElementById('blockButton').addEventListener('click', function () {
    // Query the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // Inject the blocking code into the active tab using chrome.scripting
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: blockBuyButton
      });
    });
  });
  
  // This function is injected into the page to disable the Buy Now button
  function blockBuyButton() {
    // Disable "Buy Now" button on Amazon product pages
    const buyButton = document.querySelector('#buy-now-button.a-button-input');
    if (buyButton) {
      buyButton.disabled = true;
      buyButton.style.pointerEvents = 'none';  // Prevent interaction
      console.log("Buy Now button has been blocked.");
    }
    else {
        console.log("not found");
    }
    
    // Optionally, disable "Add to Cart" button
    const addToCartButton = document.querySelector('#add-to-cart-button.a-button-input');
    if (addToCartButton) {
      addToCartButton.disabled = true;
      addToCartButton.style.pointerEvents = 'none';
      console.log("Add to Cart button has been blocked.");
    }
    else {
        console.log("not found");
    }
  }
  