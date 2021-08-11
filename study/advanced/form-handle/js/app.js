//  event        -     addEventListener
// -------------------------------------------
//  onsubmit     -     submit   تنفيذ أوامر عند يتم نقر على زر سوبميت ويحدث ارسال  بنجاح
// --------------------------------------------
//  preventDefault()

//  event        -     addEventListener
//---------------------------------------------
//  oninvalid    -     invalid  تنفيذ أوامر عند يتم نقر على زر سوبميت ويحدث خطا بفورم 
//  oninput      -     input     لتنفيذ الأوامر عندما يقوم المستخدم بضغط على حقل المحدد لكتابة شي ضمنها

// --------------------------------------------

// input  = حقل | مدخل

// setCustomValidity()                                 لإعادة تعيين رسالة الخطأ الأفتراضية 
// validationMessage                   للحصول على رسالة الخطأ عند حدوث خطا ضمن احد حقول
// validity.typeMismatch   لتحقق إن كان نوع البيانات الذي إدخاله مستخدم صالحة او لا
// validity.valueMissing                    للتحقق إن كان حقل المحدد يفقد للبيانات او لا
// Lesson 60
// submit(); يتم استخدامها لعمل سبميت للفورم مثل النقر على زر من نوع سبميت
// reset(); تستخدم ﻹعادة تعيين قيم جميع العناصر في نموذج مثل النقر على زر إعادة الضبط
// focus(); تستخدم ﻹضافة تركيز للعنصر الذي يمكن اضافة تركيز عليه
// blur(); يتم استخدامها ﻹلغاء التركيز من عنصر مضاف إليه تركيز
let priceForm = document.getElementById("priceForm");
let price = document.getElementById("n1");
let priceError = document.getElementById("priceError");
let discount = document.getElementById("n2");
let discountError = document.getElementById("discountError");
let submit1 = document.getElementById("submit1");
let priceData = document.getElementById("priceData");
let container = document.getElementById("container");
let resetId = document.getElementById("resetId");
container.style.height = screen.height + "px";
//let body = document.getElementById("body");
priceError.style.color = "red";
discountError.style.color = "red";
resetId.addEventListener("click", () => {
    priceData.innerHTML = "";
});
price.addEventListener("invalid", () => {

    inputError(price, priceError);
    // priceError.innerText = "يجب مليء هذا الحقل";

});
price.addEventListener("input", () => {

    inputError(price, priceError);

});
discount.addEventListener("invalid", () => {

    inputError(discount, discountError);

});
discount.addEventListener("input", () => {

    inputError(discount, discountError);

});

priceForm.addEventListener("submit", (error) => {
    if (isNaN(parseFloat(price.value)) == true) {
        error.preventDefault();
        priceError.innerText = "يجب ادخال بيانات من نوع أرقام فقط";

    } else if (isNaN(parseFloat(discount.value)) == true) {
        error.preventDefault();
        discountError.innerText = "يجب ادخال بيانات من نوع أرقام فقط";
    } else {
        // priceDataCalc(price, discount);
        // priceData.style.display = "block";
        return true;
    }
    /*if (typeof discount.value == "number") {
        priceDataCalc(price, discount);
        return true;
    } else {
        discountError.innerText = "يجب ادخال بيانات من نوع أرقام فقط";
        error.preventDefault();
    }*/

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
function priceDataCalc(x, y) {// ignored to perform in php
    priceData.innerHTML = "<h1>The Price is: " + x.value +
        "</h1><h1>The discount is: " + y.value +
        "</h1><h1>The New Price is: " + (x.value - x.value * parseFloat(y.value) / 100) + "</h1>";
}
