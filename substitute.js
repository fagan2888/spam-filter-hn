default_sites = "wsj.com,nytimes.com,theguardian.com";
function replaceText (node, badurls) {
    if (node.nodeType === Node.ELEMENT_NODE && node.tagName == "A" && node.classList.contains("storylink")) {
        for(var i=0; i<badurls.length; i++) {
            if (node.href.indexOf(badurls[i]) > -1) {
                node.style.color = "#828282";
            }
        }
    }
    else {
        // Recurse through the document
        for (let i = 0; i < node.childNodes.length; i++) {
            replaceText(node.childNodes[i], badurls);
        }    
    }
}

function apply_style(res) {
    sites = (res.sites ? res.sites : default_sites);
    var badurls = sites.split(",");
    replaceText(document.body, badurls);
}

var storageItem = browser.storage.local.get('sites');
storageItem.then(apply_style);
