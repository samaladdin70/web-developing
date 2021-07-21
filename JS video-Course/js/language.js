let head = document.getElementById("headId");
let title = document.querySelector("h1");
let langEn = document.getElementsByClassName("lang")[0];
let langAr = document.getElementsByClassName("lang")[1];
let select = document.getElementById("selectLang").value;
let block = document.querySelectorAll(".block-container");

class Lang {
    constructor() {
        if (select == "English") {
            this.eng();
            // select = "English";
        }
        if (select == "عربي") {
            this.ara();
            select = "عربي";
        }

    }
    eng() {

        head.setAttribute("lang", "en");
        head.setAttribute("dir", "ltr");
    }
    ara() {
        //langEn.innerHTML = "إنجليزي";
        // langAr.innerHTML = "عربي";
        head.setAttribute("lang", "ar");
        head.setAttribute("dir", "rtl");
        title.style.fontFamily = "Amiri, serif";
        title.innerHTML = "<h1>مرحباً بكم</h1>";
        for (let i = 0; i <= block.length; i++) {
            if (block[i] !== undefined) {
                block[i].style.float = "right";
            }
        }
    }
}


new Lang();



//langAr.onclick = location.reload();
//langEn.onclick = location.reload();

/*function language() {
    chnglan;
}*/

//console.log(select);
//console.log(langAr.value);