// Lesson 52
// Event          -        توضيح
// ---------------------------------------------
// click          -  يحدث الحدث عندما ينقر المستخدم على عنصر
// contextmenu    -  يحدث الحدث عندما ينقر المستخدم بزر الماوس الأيمن على عنصر لفتح قائمة السياق
// dblclick       - يحدث الحدث عندما ينقر المستخدم نقرًا مزدوجًا على عنصر
// mousedown      - يحدث الحدث عندما يضغط المستخدم على زر الماوس فوق عنصر
// mouseenter     - يحدث الحدث عند تحريك المؤشر إلى عنصر
// mouseleave     - يحدث الحدث عند تحريك المؤشر خارج عنصر
// mousemove      - يحدث الحدث عندما يتحرك المؤشر أثناء وجوده فوق عنصر
// mouseout       - يحدث الحدث عندما يحرك مستخدم مؤشر الماوس خارج عنصر أو خارج أحد العناصر التابعة له    
// mouseover      - يحدث الحدث عند تحريك المؤشر على عنصر ، أو على أحد توابعه
// mouseup        -يحدث الحدث عندما يقوم مستخدم بوضع اصبعته على زر الماوس فوق عنصر

document.getElementById("title").addEventListener("mouseup", () => {
    alert("تم تنفيذ الأوامر");
});
//============================================================================================

// Lesson 53
// onbeforeunload - beforeunload     يتم إستخدامها لكي تتمكن من تنفيذ اوامر عندما يقوم المستخدم بالإغلاق الصفحة او إعادة تحميل الصفحة

// onbeforeprint  - beforeprint يتم استخدامها لتنفيذ اوامر قبل بدء عملية الطبع

// onafterprint   - afterprint يتم استخدامها لتنفيذ الأوامر بعد اكتمال عملية الطبع
//=================================================================================================

// Lesson 54
class MyPage {

    constructor() {
        var text = document.getElementById("text");

        text.addEventListener("copy", () => {
            this.copy();
        });

        var input = document.getElementById("input");
        input.addEventListener("paste", () => {
            this.paste();
        });

        input.addEventListener("cut", () => {
            this.cut();
        });

    }

    copy() {
        alert("تم نسخ النص");
    }

    paste() {
        alert("تم لصق النص");
    }

    cut() {
        alert("تم قص النص");
    }
}

onload = new MyPage();


function copy() {
    alert("تم نسخ النص");
}

function paste() {
    alert("تم لصق النص");
}

function cut() {
    alert("تم قص النص");
}

// oncopy  = copy    عند نسخ
// onpaste = paste     عند لصق
// oncut   = cut       عند قص
/*
<!DOCTYPE html>
    <html >
        <head>
            <title>Coder Shiyar</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">

        </head>
        <body onkeypress="run_key(event)">
            
            <script src="app.js"></script>
        </body> 
    </html>
*/
//================================================================================================

// Lesson 55
class MyPage {

    constructor() {
        var text = document.getElementById("text");

        text.addEventListener("copy", () => {
            this.copy();
        });

        var input = document.getElementById("input");
        input.addEventListener("paste", () => {
            this.paste();
        });

        input.addEventListener("cut", () => {
            this.cut();
        });

    }

    copy() {
        alert("تم نسخ النص");
    }

    paste() {
        alert("تم لصق النص");
    }

    cut() {
        alert("تم قص النص");
    }
}

onload = new MyPage();


function copy() {
    alert("تم نسخ النص");
}

function paste() {
    alert("تم لصق النص");
}

function cut() {
    alert("تم قص النص");
}

// oncopy  = copy    عند نسخ
// onpaste = paste     عند لصق
// oncut   = cut       عند قص
/*
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   
</head>
<body>
 
<input type="text" id="input">   
<h1 id="text">تعلم جافا سكريبت</h1>
    

<script src="script.js"> </script>
</body>
</html>
*/
//===========================================================================================

// Lesson 56
//  event        -     addEventListener
// -------------------------------------------
//  onsubmit     -     submit   تنفيذ أوامر عند يتم نقر على زر سوبميت ويحدث ارسال  بنجاح
// --------------------------------------------
//  preventDefault()

let email_form = document.getElementById("email_form");
email_form.addEventListener("submit", (error) => {

    let email = document.getElementById("email");

    if (email.value.indexOf("@gmail") != -1) {

        return true;

    } else {
        email.style.borderColor = "red";
        document.getElementById("email_error").innerHTML = "ايميل غير صالح , قم بوضع ايميل من";
        error.preventDefault();
    }


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
            
            <form id="email_form"> 
                <input id="email" type="email" name="email" required />
                <br> 
                <div id="email_error"> </div>
                <button type="submit">تسجيل</button>
            </form>

        <script src="app.js"></script>
        </body> 
    </html>
*/
//===============================================================================================

// Lesson 57
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


let email_input = document.getElementById("email");
email_input.addEventListener("invalid", () => { input_error(); });


email_input.addEventListener("input", () => { input_error(); });

function input_error() {
    if (email_input.validity.valueMissing) {
        email_input.setCustomValidity("لم تقم بوضع بيانات ضمن هذا الحقل");
    } else if (email_input.validity.typeMismatch) {
        email_input.setCustomValidity("بيانات غير صالحة");
    } else {
        email_input.setCustomValidity("");
        return true;
    }
    document.getElementById("error_message").innerText = email_input.validationMessage;
}
/*
<!DOCTYPE html>
    <html >
        <head>
            <title>Coder Shiyar</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            
            
        </head>
        <body>
            
            <form>
                <input id="email" type="email" name="email" required/>
                <button type="submit"> تسجيل</button>
            </form>

            <div id="error_message"></div>
        <script src="app.js"></script>
        </body> 
    </html>
*/
//=================================================================================================

// Lesson 58
//  Event        -     addEventListener
//------------------------------------------
//  onchange     -     change    

// يستخدم هذا افنت لكي تتمكن من تنفيذ اوامر في كل مرة يتم تغير قيمة 
// select , input , checkbox 


document.getElementById("color").addEventListener("change", () => {

    document.body.style.background = document.getElementById('color').value;
});

document.getElementById("checkbox").addEventListener("change", () => {

    alert("تم تنفيذ الأوامر");
});


document.getElementById("password").addEventListener("input", () => {
    alert("تم تنفيذ الأوامر");
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
            
        <select id="color" > 
            <option value="red"> لون الأحمر</option>
            <option value="yellow"> لون الأصفر</option>
            <option value="blue"> لون الأزرق </option>
        </select>

       <input type="checkbox" id="checkbox"/>

        <input type="password"  id="password"/>
        <script src="app.js"></script>
        </body> 
    </html>
*/
//=============================================================================================

// Lesson 59 مشروع تشفير وفك تشفير
// The btoa() method encodes a string in base-64.
// btoa() : يتم استخدامها لتشفير بيانات النصية إلى تشفير بنظام القاعدة64
// ----------------------------------------------------------------------------
// This method uses the "A-Z", "a-z", "0-9", "+", "/" and "=" characters to encode the string. 
// هذا عنصر يستخدم احرف اللغة الإنجليزية , الصغيرة والكبيرة , الأرقام و علامة 
// +  و  /  و =
// عندما يقوم بتشفير النص
//------------------------------------------------------------------------------
// Tip: Use the atob() method to decode a base-64 encoded string.
// atob() : يتم استخدام هذا العنصر لفك تشفير نص مشفر بنظام قاعدة64

let text = "Coder Shiyar";
let encode_text = window.btoa(text);

let decode_text = window.atob(encode_text);


let textarea = document.getElementById("text");
let result = document.getElementById("result");
let select = document.getElementById("select");

textarea.addEventListener("input", () => {
    make_result();
});
select.addEventListener("change", () => {
    make_result();
});

function make_result() {
    if (select.value == "decode") {
        result.value = window.atob(textarea.value);
    } else {
        result.value = window.btoa(textarea.value);
    }
}
/*
<!DOCTYPE html>
    <html >
        <head>
            <title>Coder Shiyar</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
            <style>
            *{
                bac
            } 
            #app{
                width: 100%;
                max-width: 100%;
            }
            #app p{
                width: 100%;
                padding: 14px;
                background: rgb(112, 91, 204);
                color: white;
                text-align: center;
                font-family: sans-serif;
                font-size: 22px;
            }
            #app textarea{
                width: 100%;
                border:2px solid rgb(138, 138, 138);
                outline: none;
                border-radius: 14px;
                min-height: 140px;
            }
            #app select{
                width: 100%;
                padding: 14px;
                border-radius: 14px;
                margin-bottom: 14px;
                
            }
            </style>
    
        </head>
        <body dir="rtl">

            <nav class="navbar navbar-light bg-light">
                <a target="_blank" href="https://youtube.com/codershiyar" class="navbar-brand">Coder Shiyar </a>
                <a class="navbar-brand" href="#">
                    <img src="logo.png" style="object-fit: contain;" width="60" height="60" class="d-inline-block align-top" alt="" loading="lazy">
                    
                  </a>
              </nav>

           
           <main id="app">

               <p>Text - نص</p>
               <select id="select">
                   <option value="encode">تشفير النص</option>
                   <option value="decode">فك تشفير النص</option>
               </select>

               <textarea id="text"></textarea>

               <p> Result - نتيجة</p>
               <textarea id="result">

                </textarea>

           </main> 

           <div class="card">
            <div style="text-align: center;" class="card-header">
              حولنا
            </div>
            <div class="card-body" >
              <blockquote class="blockquote mb-0">
                <p style="text-align: center;">موقع لفك تشفير  النص المشفر بنظام
                     القاعدة 64  , او تشفيرها بنظام القاعدة 64</p>

            </blockquote>
            </div>
          </div>

        <script src="app.js"></script>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
        </body> 
    </html>
*/
//===========================================================================================

// Lesson 60
// submit(); يتم استخدامها لعمل سبميت للفورم مثل النقر على زر من نوع سبميت
// reset(); تستخدم ﻹعادة تعيين قيم جميع العناصر في نموذج مثل النقر على زر إعادة الضبط
// focus(); تستخدم ﻹضافة تركيز للعنصر الذي يمكن اضافة تركيز عليه
// blur(); يتم استخدامها ﻹلغاء التركيز من عنصر مضاف إليه تركيز
/*<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <form id="login_form">
        <input id="email" type="email" name="email" placeholder="ضع بريدك اﻹلكتروني" /><br>
        <input type="password" name="password" placeholder="كلمة المرور" />
        <br>
        <button type="submit">تسجيل الدخول</button>
        <button type="reset">إعادة تعيين البيانات</button>
    </form>
    <button id="submit_form">تسجيل دخول من خارج الفورم</button>
    <button id="reset_form">`اعادة تعيين القيم من خارج الفورم</button>
    <br>
    <button id="focus_onemail">اضف تركيز الى حقل البريد</button>
    <button id="blur_onemail">الغاء التركيز من حقل البريد</button>
    <script>*/

let login_form = document.getElementById("login_form");
let email = document.getElementById("email");
let submit_form = document.getElementById("submit_form");
let reset_form = document.getElementById("reset_form");
let focus_onemail = document.getElementById("focus_onemail");
let blur_onemail = document.getElementById("blur_onemail");
submit_form.addEventListener("click", () => {
    login_form.submit();
});
reset_form.addEventListener("click", () => {
    login_form.reset();
});
focus_onemail.addEventListener("click", () => {
    email.focus();
});
blur_onemail.addEventListener("click", () => {
    email.blur();
});
/* </script>
</body>

</html>*/
//=========================================================================================
