//   طرق أخر لتحديد عناصر اتش تي ام ال عبر جافا سكربت    
//-------------------------------------------------------------------------
// css selectors - استخدام الطرق تحديد عناصر اتش تي ام ال عبر سي اس اس
//-------------------------------------------------------------------------
//  document.querySelector()                    لتحديد عنصر واحد هو أول عنصر يوجد في ملف اتش تي ام ال               
//  document.querySelectorAll()              لتحديد جميع العناصر بشرط داخل حلقة تكرارية أو عنصر واحد كمفتاح مصفوفة

// var header = document.querySelector(".header-class");
// header.innerHTML = "<h1>Hi Coder Shiyar</h1>";

var myElements = document.querySelectorAll("header , main");
myElements[2].style.color = "white";

//  i  = مجرد اسم فاريابل استخدمناها لاجل العدد
// length قمنا بإستخدامها لجلب عدد عناصر الذي تم تحديدها
for (var i = 0; i <= myElements.length; ++i) {
    // هنا طلبنا بأن بتم تنفيذ اوامر الذي نرغب به على جميع العناصر المحددة
    myElements[i].innerHTML += "I love Coder Shiyar";
    myElements[i].style.background = "red";
}
//=================================================================================================

// document.getElementById("");            ID  لتحديد عناصر اتش تي ام ال عبر اسم
// -----------------------------------------------------------------------------------
// innerHTML  
//                                  يتم استخدامها لتعديل على القيمة عنصر المحدد
//                                   او  يمكنك استخدامها لعرض للمحتوى العنصر المحدد 
// -----------------------------------------------------------------------------------
// innerText 
//                             text يتم استخدامها لعرض العنصر المحدد على شكل نص
//                                  text او  تحديد قيمة جديدة للعنصر المحدد بصيغة نص
// ------------------------------------------------------------------------------------
var content = document.getElementById("content");
content.innerHTML = "<p> Coder Shiyar </p>";

// document.getElementById("content").innerText = "<h1> Coder Shiyar JavaScript </h1>";

alert(content.innerText);
//=================================================================================================


// function         مهمة - وظيفة
function run_codes() {

    alert("تم استدعاء الوظيفة");
}
//هذا هو ملف اتش تي ام ال لاستخدام هذه الوظيفة او الدالة كمثال
/*<!DOCTYPE html>
    <html >
        <head>
            <title>Coder Shiyar</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">

        </head>
        <body>
            
         <h1 onclick="run_codes();" id="text">Coder Shiyar</h1>
           <script src="script.js"> </script>
        </body> 
    </html>*/
//============================================================================================

//Lesson 31
// function         مهمة - وظيفة
// return        - إرجاع = إعادة
// parameters    - فاريبل يتم تحديد لها قيمة عند إستدعاء الوظيفة
// -----------------------------------

function plus(number1, number2) {

    return number1 + number2;
}


alert(plus(100, 200));
//============================================================================================

//Lesson 33
//  value              -             قيمة
// -----------------------------------------------
// يتم استخدامها للحصول على قيمة المحددة ضمن احد عناصر من النوع 
// input    او  select option   او  textarea
// -----------------------------------------------

function getValue() {
    var text = document.getElementById("text").value;
    console.log(document.getElementById("text").value);
}
/* <!DOCTYPE html>
   <html >
       <head>
           <title>Coder Shiyar</title>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1">

       </head>
       <body>
           
           
           <input id="text" type="text" name="text" />
           <button onclick="getValue()" type="button">ارسال</button>
          <script src="script.js"> </script>
       </body> 
   </html>
*/
//==============================================================================================

//Lesson 34
// JavaScript OOP  = object oriented programming
// class            -             فئة 
// constructor      -           البناء 
// object           -            كائن 
// ------------------------------------
class App { // note: it must begin with Capital letter in class name
    constructor() {
        alert("تم استدعاء كونستركتور");
    }
}

onload = new App(); // this is an object to use the class
// var app_object = new App();
// var app_object2 = new App();
//===============================================================================================

//Lesson 35
// ---------------------------------------
// parameters in methods and constructor
// ---------------------------------------

class App {
    constructor(text, img) { // note: parameters here as a variables pathes through constructor contents
        let content = document.getElementById("content");
        content.innerHTML = "<img src='" + img + "' />   <h1>" + text + "</h1>";
    }

}

onload = new App("Coder Shiyar", "logo.png"); // again an object to call the class
//===============================================================================================

//Lesson 36
// JavaScript OOP  = object oriented programming
// class            -             فئة 
// constructor      -           البناء 
// object           -            كائن 
// ------------------------------------
// method           -   طريقة - وظيفة
// this  يتم استخدامها لإخبار جافاسكربت بإنك ترغب بتحديد عنصر موجود ضمن ذلك الكلاس

class App {
    constructor() {

        //   this.change_background();  
    }
    change_background() {
        document.getElementById("body").style.background = "red";
    }

}

var app_object = new App();
// app_object.change_background();

function change_background2() {
    document.getElementById("body").style.background = "red";
}

// change_background2();
/* 
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coder Shiyar</title>
   
</head>
<body id="body">
 
    <h1 onclick="change_background2()">Coder Shiyar</h1>
<script src="script.js"> </script>
</body>
</html>
*/
//=================================================================================================

//Lesson 37
// method   - وظيفة | مهمة | طريقة
// return   - إعادة | إسترجاع
// ---------------------------------------
// method return  وظيفة الذي يعيد قيمة  
// ---------------------------------------

class App {
    constructor() {
        var message = this.getMessage();
        document.getElementById("title").innerHTML = this.getMessage();
    }

    getMessage() {

        return "Hi ! مرحبا"
    }
}

onload = new App();
//====================================================================================================

//Lesson 38
//  method           parameters   
// ------------------------------
class App {
    constructor() {
        this.setItem("CODER SHIYAR", "انا مهندس معلوميات , احب تعليم برمجة للأخرين");
        this.setItem("CODER TEST", "انا مهندس معلوميات , احب تعليم برمجة للأخرين");
        this.setItem("CODER TEST2", "انا مهندس معلوميات , احب تعليم برمجة للأخرين");
        this.getLanguage("English");
    }
    setItem(title, text) {
        var article1 = document.getElementById("article1");
        article1.innerHTML += "<h1> " + title + "</h1>";
        article1.innerHTML += "<p>" + text + "</p>";
    }

    getLanguage(language) {
        if (language == "Arabic") {
            alert("قمت بتحديد : " + language);
        }
        if (language === "English") {
            alert("موقعنا لا يدعم لغة الإنجليزية");
        }

    }
}
onload = new App();
/*
<!DOCTYPE html>
    <html >
        <head>
            <title>Coder Shiyar</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">

        </head>
        <body>
            
            
          <article id="article1">

          </article>

           <script src="script.js"> </script>
        </body> 
    </html>
*/
//===============================================================================================

//Lesson 39
// List of Events - رابط مواقعين ستجد به جميع افنتس
// -------------------------------------------------------------------------
// https://developer.mozilla.org/en-US/docs/Web/Events
// https://www.w3schools.com/jsref/dom_obj_event.asp    
// -------------------------------------------------------------------------
// Event            -                            :يستخدم لتنفيذ الأوامر عند 
// -------------------------------------------------------------------------
// load             -             عند اكتمال تحميل موقع او للعنصر المحدد
// click            -    عندما يحدث نقر على العنصر الذي تم تزويده بالإفنت
// -------------------------------------------------------------------------

// onload = ()=>{
//         alert("تم تحميل الصفحة");
// };

// onload = function(){
//     alert("تم تحميل الصفحة");
// }

// onload = function run_codes(){
//     alert("تم تحميل الصفحة"); 
// }

// var button1 = document.getElementById("button1");
// button1.onclick = ()=>{
//     alert("تم نقر");
// }

class App {
    constructor() {
        document.getElementById("text").onclick = () => {
            this.run_codes();
        };
    }

    run_codes() {
        alert("تم تشغيل الوظيفة");
    }
}

onload = new App();
/*
<!DOCTYPE html>
    <html >
        <head>
            <title>Coder Shiyar</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">

        </head>
        <body>
            
            <h1 id="text">Coder Shiyar</h1>
            <button onclick=" alert('تم نقر');" id="button1"> انقر لتنفيذ اوامر</button>
           <script src="script.js"> </script>
        </body> 
    </html>


*/
//==============================================================================================

//Lesson 40 
// List of Events - رابط مواقعين ستجد به جميع افنتس
// -------------------------------------------------------------------------
// https://developer.mozilla.org/en-US/docs/Web/Events
// https://www.w3schools.com/jsref/dom_obj_event.asp    
// -------------------------------------------------------------------------
// Event -           -                            :يستخدم لتنفيذ الأوامر عند 
// -------------------------------------------------------------------------
// load             -             عند اكتمال تحميل موقع او للعنصر المحدد
// click            -    عندما يحدث نقر على العنصر الذي تم تزويده بالإفنت
// -------------------------------------------------------------------------
// addEventListener  - يتم استخدامها لتزويد عناصر الذي تحدده ب افنت الذي تحدده
// -------------------------------------------------------------------------
document.getElementById("text").addEventListener("click", () => {
    alert("تم  نقر على العنصر");
});


// document.getElementById("text").addEventListener("click" , function(){
//     alert("تم  نقر على العنصر");
//     });
/*
<!DOCTYPE html>
<html >
    <head>
        <title>Coder Shiyar</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

    </head>
    <body>
        
     <h1 id="text">Coder Shiyar</h1>
       <script src="script.js"> </script>
    </body> 
</html>
*/
//============================================================================================