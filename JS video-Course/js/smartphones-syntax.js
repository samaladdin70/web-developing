// Lesson 61
// function orientation(){
//   if(screen.orientation.type =="portrait-primary" || screen.orientation.type =="portrait-secondary"  ){
// document.body.style.background = "red";
// }else if(screen.orientation.type =="landscape-primary" ||  screen.orientation.type =="landscape-landscape-secondary" ){
//   document.body.style.background = "yellow";
// }
// }

// addEventListener("load",orientation);
// addEventListener("orientationchange",orientation);


class Orientation {
    constructor() {
        addEventListener("load", () => {
            this.orientation();
        });
        addEventListener("orientationchange", () => {
            this.orientation();
        });
    }

    orientation() {
        if (screen.orientation.type == "portrait-primary" || screen.orientation.type == "portrait-secondary") {
            document.body.style.background = "red";
        } else if (screen.orientation.type == "landscape-primary" || screen.orientation.type == "landscape-landscape-secondary") {
            document.body.style.background = "yellow";
        }
    }
}
onload = new Orientation();
//======================================================================================

// Lesson 62
var deviceSystem = navigator.userAgent.toLowerCase();

// لأجل تنفيذ الأوامر على اجهزة بنظام اندرويد

if (deviceSystem.includes("android")) {
    alert("انا مستخدم اندوريد");
}

// لأجل تنفيذ الأوامر على اجهزة بنظام ايفون
if (deviceSystem.includes("iphone")) {
    alert("انا مستخدم ايفون");
}

// لأجل تنفيذ الأوامر على اجهزة بنظام ايباد
if (deviceSystem.includes("ipad")) {
    alert("انا مستخدم ايباد");
}

// لأجل تنفيذ الأوامر على اجهزة بنظام ويندوز
if (deviceSystem.includes("windows")) {
    alert("انا مستخدم ويندوز");
}

// لأجل تنفيذ الأوامر على اجهزة بنظام لينيكس
if (deviceSystem.includes("linux")) {
    alert("انا مستخدم لينوكس");
}

// لأجل تنفيذ الأوامر على متصفحات فايرفوكس
if (deviceSystem.includes("firefox")) {
    alert("انا متصفحي فايرفوكس");
}
//==============================================================================

// Lesson 64
/*
<!DOCTYPE html>
    <html >
        <head>
            <title>Coder Shiyar</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
         <style>
             *{
                 margin: 0px;
             }
             #android{
                 width: 100%;
                 display: flex;
                justify-content: center;
                border-bottom: 2px solid #a9a9a8;
                padding: 3px 0px;
                display: none;
             }
             #android img{
                 height: 65px;
                 width: 65px;
                 object-fit: contain;
                 border-radius: 50%;
                 margin-right: 13px;
             }
             #close{
                 font-weight: bold;
                 font-size: 26px;
                 line-height: 65px;
                 color: #888888;
                 margin: 0px 13px;
                 cursor: pointer;
             }
             #text{
                 width: 40%;
             }
             #app_name{
                 font-weight: bold;
                 font-family: Arial, Helvetica, sans-serif;
                 font-size: 18px;
                 padding: 11px 0px;
             }
             #app_title{
                 font-size: 14px;
                 font-family: monospace;
             }
             #android button{
                 width: 25%;
                 background: rgb(31, 31, 31);
                 color: white;
                 height: 40px;
                 border:0px;
                 margin-top: 15px;
                 border-radius: 14px;
             }
         </style>
        </head>
        <body>
         
         <section id="android">
             <span id="close"> &times; </span>
            <img src="logo_icon.png"/>
            <span id="text">
                <p id="app_name"> SHIYAR APP </p>
                <p id="app_title"> Free on Google Play </p>
            </span>
            <button id="app_downlaod">DOWNLOAD</button>
         </section>

         
         <script>
         */
let section_android = document.getElementById("android");

// لجلب بيانات عن جهاز المستخدم
let user_device = navigator.userAgent.toLocaleLowerCase();

//  للتحقق من إن كان مستخدم يملك جهاز يعمل بنظام اندرويد او لا
if (user_device.includes("android")) {

    // لتاخير عرض الصندوق حسب المدة الذي تحدده بعد فتح مستخدم للموقعك
    setTimeout(() => {
        section_android.style.display = "flex";
    }, 1 * 1000)

    // لكي يودي المستخدم إلى صفحة تحميل تطبيق عند نقر على الزر
    let app_downlaod = document.getElementById("app_downlaod");
    app_downlaod.addEventListener("click", () => {
        window.open("https://play.google.com/store/apps/details?id=com.shiyar&hl=ar", "_blank")
    });
} else {
    // لإخفاء العنصر عندما يكون مستخدم جهازه يعمل بنظام ليس بنظام اندرويد
    section_android.style.display = "none";
}

// لإخفاء العنصر عند نقر على علامة اكس
let close = document.getElementById("close");
close.addEventListener("click", () => {
    section_android.style.display = "none";
});
/*
         </script>
        </body> 
    </html>*/
//======================================================================================

// Lesson 65
let section_iphone = document.getElementById("iphone");

// لجلب بيانات عن جهاز المستخدم
let user_device = navigator.userAgent.toLocaleLowerCase();

//  للتحقق من إن كان مستخدم يملك جهاز يعمل بنظام ايفون او لا
if (user_device.includes("iphone")) {

    // لتاخير عرض الصندوق حسب المدة الذي تحدده بعد فتح مستخدم للموقعك
    setTimeout(() => {
        section_iphone.style.display = "flex";
    }, 5 * 1000);

    // لكي يودي المستخدم إلى صفحة تحميل تطبيق عند نقر على الزر
    let app_downlaod = document.getElementById("app_downlaod-iphone");
    app_downlaod.addEventListener("click", () => {
        window.open("http://codershiyar.com/app", "_blank")
    });
} else {
    // لإخفاء العنصر عندما يكون مستخدم جهازه يعمل بنظام ليس بنظام ايفون
    section_iphone.style.display = "none";
}

// لإخفاء العنصر عند نقر على علامة اكس
let close_iphone = document.getElementById("close-iphone");
close_iphone.addEventListener("click", () => {
    section_iphone.style.display = "none";
});
//==========================================================================================