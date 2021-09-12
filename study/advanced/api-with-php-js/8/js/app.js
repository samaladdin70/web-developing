let container = document.getElementById("container");
let poup = document.getElementById("poup");
let displayButton = document.getElementById("displayId");
let hide = document.getElementById("hide");
let content = document.getElementById("content");
let edit = document.getElementById("edit");
let submit = document.getElementById("submit");
displayButton.addEventListener("click", () => {
    if (poup.style.display == "") {
        container.style.opacity = .2;
        poup.style.display = "block";
    } else if (poup.style.display == "block") {
        poup.style.display = "none";
        container.style.opacity = 1;
    } else if (poup.style.display == "none") {
        container.style.opacity = .2;
        poup.style.display = "block";
    }
});

submit.addEventListener("click", () => {
    poup.style.display = "none";
});