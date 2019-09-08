default_sites = "wsj.com,nytimes.com,theguardian.com";

function saveOptions(e) {
  browser.storage.local.set({
    sites: document.querySelector("#sites").value
  });
  e.preventDefault();
}

function restoreOptions() {
  var storageItem = browser.storage.local.get('sites');
  storageItem.then((res) => {
    document.querySelector("#sites").value = (res.sites ? res.sites : default_sites);
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
