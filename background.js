
// We do not have access to document, background page, navigator.clipboard here so we cannot implement the copy to clipboard here, using contextMenu for instance
chrome.tabs.onHighlighted.addListener(async function(highlightInfo) {
  chrome.action.setBadgeText(
    {
      text: "" + highlightInfo.tabIds.length
    }
  );
});
