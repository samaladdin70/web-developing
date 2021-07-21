let head = document.getElementById("headId");
let title = document.querySelector("h1");
let langEn = document.getElementsByClassName("lang")[0];
let langAr = document.getElementsByClassName("lang")[1];
let select = document.getElementById("selectLang").value;

/*function eng() {
    // langEn.innerHTML = "English";
    // langAr.innerHTML = "Arabic";
    head.setAttribute("lang", "en");
    head.setAttribute("dir", "ltr");
    //title.style.fontFamily = "Amiri, serif";
    // title.innerHTML = "<h1>Hellow World!</h1>";
    // select.value = "English";
    // location.reload();
}*/

/*function ara() {
    // langEn.innerHTML = "إنجليزي";
    //langAr.innerHTML = "عربي";
    head.setAttribute("lang", "ar");
    head.setAttribute("dir", "rtl");
    title.style.fontFamily = "Amiri, serif";
    title.innerHTML = "<h1>مرحباً بكم</h1>";
    // langAr.value = "عربي";
    // select.value = "عربي";
    location.reload();
}*/


if (select == "English") {
    head.setAttribute("lang", "en");
    head.setAttribute("dir", "ltr");
    //location.reload();
}
if (select == "عربي") {

    head.setAttribute("lang", "ar");
    head.setAttribute("dir", "rtl");
    title.style.fontFamily = "Amiri, serif";
    title.innerHTML = "<h1>مرحباً بكم</h1>";
    //location.reload();
}

//console.log(select);
//console.log(langAr.value);