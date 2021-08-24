let uname = document.getElementById("uname");
let password = document.getElementById("password");
uname.addEventListener("invalid", () => {
    inputError2(uname);
});
uname.addEventListener("input", () => {
    inputError2(uname);
});

password.addEventListener("invalid", () => {
    inputError2(password);
});
password.addEventListener("input", () => {
    inputError2(password);
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
function inputError2(x) {
    if (x.validity.valueMissing) {
        x.setCustomValidity("يجب مليء هذا الحقل");
        //y.innerText = "يجب مليء هذا الحقل";
    } else if (x.validity.typeMismatch) {
        x.setCustomValidity("بيانات بريد غير صالحة");
        // y.innerText = "بيانات غير صالحة";
    } else {
        x.setCustomValidity("");
        //y.innerText = "";
        return true;
    }
}