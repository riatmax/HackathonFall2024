
chrome.runtime.onInstalled.addListener(() => {
    console.log('Amazon Blocker extension installed');
  });
  
  // Listen for any click events on the popup
  chrome.action.onClicked.addListener((tab) => {
    console.log('Extension icon clicked');
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: blockBuyButton
    });
  });
  