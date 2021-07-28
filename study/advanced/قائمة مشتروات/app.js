let month = document.getElementById("monthId");
let add = document.getElementById("addId");
let addf = document.getElementById("addfId");
let add_c = document.getElementById("addcId");
let remove = document.getElementById("rmId");
let removef = document.getElementById("rmfId");
let remove_c = document.getElementById("rmcId");
let label = document.getElementById("label");
let monthBef = document.getElementById("month_AftId");
let months = [];

for (let c = 0; c < months.length; c++) {
    label.innerHTML += months[c] + "<br>";
}

add.addEventListener("click", () => {
    if (month.value != "") {
        months.push(month.value);
        // to store array in local stoarge not like variables
        localStorage.setItem("ITEMS", JSON.stringify(months));

        label.innerHTML = "";
        for (let c = 0; c < months.length; c++) {

            label.innerHTML += months[c] + "<br>";
        }
    }
});
addf.addEventListener("click", () => {
    if (month.value != "") {
        months.unshift(month.value);
        localStorage.setItem("ITEMS", JSON.stringify(months));
        label.innerHTML = "";
        for (let c = 0; c < months.length; c++) {
            label.innerHTML += months[c] + "<br>";
        }
    }
});

remove.addEventListener("click", () => {
    months.pop();
    localStorage.setItem("ITEMS", JSON.stringify(months));
    label.innerHTML = "";
    for (let c = 0; c < months.length; c++) {
        label.innerHTML += months[c] + "<br>";

    }
});
removef.addEventListener("click", () => {
    months.shift();
    localStorage.setItem("ITEMS", JSON.stringify(months));
    label.innerHTML = "";
    for (let c = 0; c < months.length; c++) {
        label.innerHTML += months[c] + "<br>";
    }
});
remove_c.addEventListener("click", () => {
    custom_rm();
    localStorage.setItem("ITEMS", JSON.stringify(months));
    label.innerHTML = "";
    for (let c = 0; c < months.length; c++) {
        label.innerHTML += months[c] + "<br>";
    }
});

add_c.addEventListener("click", () => {
    custom_add();
    localStorage.setItem("ITEMS", JSON.stringify(months));
    label.innerHTML = "";
    for (let c = 0; c < months.length; c++) {
        label.innerHTML += months[c] + "<br>";
    }
});

function custom_rm() {
    if (months.includes(month.value)) {
        let index = months.indexOf(month.value);
        months.splice(index, 1); // رقم العنصر يليه عدد العناصر
        // months = months.splice(index, 1); ستصبح الاراي القيمة المختارة فقط
    }

}

function custom_add() {
    if (months.includes(monthBef.value)) {
        let index = months.indexOf(monthBef.value);
        months.splice(index, 1, monthBef.value, month.value); // رقم العنصر يليه عدد العناصر
        // months = months.splice(index, 1); ستصبح الاراي القيمة المختارة فقط
        // months.splice(index, 1, month.value); سيقوم بتبديل القيمة المضافة بدل الاصلية
    }
}
onload = () => {
    if (localStorage.getItem("ITEMS") !== null) {
        // to get an array from local stoarge not lika variables
        months = JSON.parse(localStorage.getItem("ITEMS"));
        for (let c = 0; c < months.length; c++) {
            label.innerHTML += months[c] + "<br>";
        }
    }
}