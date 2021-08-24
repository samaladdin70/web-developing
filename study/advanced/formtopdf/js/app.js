let upload = document.getElementById("upload");
let uploadB = document.getElementById("uploadB");
let img = document.getElementById("img");



uploadB.addEventListener("click", () => {
    upload.click();
});

img.style.width = "100px";
upload.addEventListener("change", () => {
    img.src = '../img/' + upload.files[0].name;
});

function inputError(x, y) {
    if (x.validity.valueMissing) {
        x.setCustomValidity("يجب مليء هذا الحقل");
        y.innerText = "يجب مليء هذا الحقل";
    } else if (x.validity.typeMismatch) {
        x.setCustomValidity("بيانات بريد غير صالحة");
        y.innerText = "بيانات غير صالحة";
    } else {
        x.setCustomValidity("");
        y.innerText = "";
        return true;
    }
}