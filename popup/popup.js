const mimeType = "text/plain";
const indicatorId = "indicator";

function indicateNumberOfTabsCopied(tabCount) {
  let indicator = document.getElementById(indicatorId);
  indicator.textContent = "Copied " + tabCount + " tab URLs to clipboard";
}

async function copyToClipboard(text, mimeType) {
  document.oncopy = function(event) {
    event.clipboardData.setData(mimeType, text);
    event.preventDefault();
  };
  document.execCommand("copy", false, null);
}

async function copyTabsToClipboard() {
  let queryOptions = { highlighted: true };
  let tabs = await chrome.tabs.query(queryOptions);

  let tabsString = "";
  for (var i = 0; i < tabs.length; i++) {
    tabsString += tabs[i].url + '\r';
  }

  copyToClipboard(tabsString, mimeType);
  indicateNumberOfTabsCopied(tabs.length);
}

copyTabsToClipboard()
