// Lesson 41
// طريقة استخدام addEventListener .. مع استخدام method .. من داخل كلاس للعمل خارجها
//  Coder Shiyar :) => http://youtube.com/codershiyar
// ---------------------------------------------------
class App {
    constructor() {

    }
    sayHallo() {
        alert("مرحبا بك");
    }

}

onload = new App();


document.getElementById("button1").addEventListener("click", () => {
    let app = new App();
    app.sayHallo();
});
/*
<!DOCTYPE html>
    <html >
        <head>
            <title>Coder Shiyar</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">

        </head>
        <body>
            
            
            <button id="button1" onclick="
            ">قم بنقر لتنفيذ اوامر</button>

           <script src="script.js"> </script>
        </body> 
    </html>
*/
//==============================================================================================

// lesson 42
// localStorage.setItem("key", "value");                 لإضافة بيانات جديدة او تحديثها
// localStorage.getItem("key");                 لإسترداد بيانات من ذاكرة تخزين المحلية
// localStorage.removeItem("key");             لحذف احد بيانات من ذاكرة تخزين المحلية       
// localStorage.clear();          لحذف جميع البيانات المخزنة ضمن ذاكرة تخزين المحلية


if (localStorage.getItem("Name") == null) {
    var setName = prompt("ضع اسمك");
    localStorage.setItem("Name", setName);
}

function removeItem() {
    localStorage.removeItem("Name");
}

document.getElementById("getName").innerHTML = "اهلا بك " + localStorage.getItem("Name");
/*
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>

</head>
<body>
        
    
    <h1 id="getName"></h1>
    <button onclick="removeItem()">حذف بيانات</button>
    <script src="script.js"></script>
</body>
</html>
*/
//===============================================================================================

//Lesson 43
// sessionStorage.setItem("key", "value"); 
// sessionStorage  يتم استخدامها للوصول إلى ذاكرة تخزين المؤاقتة في المتصفح
// setItem()  يتم استخدامها لتخزين البيانات في ذاكرة التخزين المؤاقتة
// "key"   إنشاء اسم مفتاح لتخزين البيانات ضمنها
// "value"  القيمة - البيانات الذي ترغب بتخزينها ضمن اسم مفتاح
// -----------------------------------------------------------
// sessionStorage.getItem("key"); 
// getItem() يتم استخدامها لإسترداد  البيانات المخزنة عبر اسم المفتاح
// "key"  اسم المفتاح الذي ترغب بإسترداد القيمة(البيانات) المخزنة ضمنها
// ------------------------------------------------------------
// sessionStorage.removeItem("key");
// remove()  يتم استخدامها لحذف بيانات من ذاكرة التخزين مؤقتة سشن  عبر تحديد اسم مفتاح
// "key" اسم المفتاح الذي ترغب بحذفها مع القيمة المخزنة ضمنها 
// ------------------------------------------------------------
// sessionStorage.clear(); يتم استخدامها لحذف جميع البيانات المخزنة في ذاكرة تخزين مؤاقتة سشن
// ---------------------------------------------------------
// sessionStorage  vs   localStorage    الفرق بين الأثنين
//      هو عندما تخزن البيانات في سشن سيتم حذف البيانات بمجرد اغلاق المستخدم للمتصفح
// وعند استخدام لوكال ستورج:ذاكرة تخزين المحلية-البيانات سيتم حذفها عند حذف المتصفح
//                                      او  يقوم المستخدم بحذف البيانات المخزنة بنفسه 

// Coder Shiyar - YouTube : http://youtube.com/codershiyar
//-----------------------------------------------------------



// هنا طلبنا مباشرتن  بتخزين البيانات الذي قمنا تحديدها ضمن الاسم الذي حددناها
// في ذاكرة تخزين المؤاقتة سشن , قم بتحديد بنفسك البيانات والأسم و متى  ترغب بتنفيذ الأوامر لتخزين البيانات
sessionStorage.setItem("name", "Coder Shiyar");

// sessionStorage.setItem("channel","http://youtube.com/codershiyar");

// هنا استخدمنا جملة الشرطية للتحقق إن كان المفتاح الذي نرغب بإسترداد قيمتها موجودة او لا
// قم بتحديد الأوامر الذي ترغب بتنفيذها  في حال كان المفتاح  موجودة او لا
if (sessionStorage.getItem("channel") != null) {
    alert(sessionStorage.getItem("channel"));
} else {
    alert("المفتاح الذي حددته غير موجود");
}

// هنا طلبنا بحذف جميع البيانات المخزنة عند نقر على العنصر المحدد
document.getElementById("removeItem").addEventListener("click", () => {
    // sessionStorage.removeItem("name");
    sessionStorage.clear();
});

// هنا طلبنا بتحديث  البيانات المخزنة في المفتاح عند نقر على العنصر المحدد
document.getElementById("updateItem").addEventListener("click", () => {
    sessionStorage.setItem("name", "C . Shiyar");
});
/*
<!DOCTYPE html>
    <html >
        <head>
            <title>Coder Shiyar</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">

        </head>
        <body>
            <button id="removeItem">حذف البيانات المخزنة</button>

            <button id="updateItem"> تحديث البيانات</button>

            <script src="app.js"></script>
        </body> 
    </html>
    */
//===========================================================================================