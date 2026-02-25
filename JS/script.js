function showHref() {
    let link = document.getElementById("myLink");
    let hrefValue = link.getAttribute("href");
    document.getElementById("output").innerText = "Link:" + hrefValue;
}