// Lesson editor
let codes = document.getElementById("codes");
let play = document.getElementById("play");
let remove = document.getElementById("remove");
let result = document.getElementById("result");

play.onclick = () => {
    result.innerHTML = codes.value;
    localStorage.setItem("RESULT", codes.value);
};
remove.onclick = () => {
    result.innerHTML = "";
    codes.value = "";
    localStorage.removeItem("RESULT", codes.value);
}

onload = () => {
        codes.value = localStorage.getItem("RESULT");
        result.innerHTML = codes.value;
    }
    /*
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Coder Shiyar - Editor </title>
        <!--
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        -->
        <link rel="stylesheet" href="style.css">

    </head>

    <body>
        <!-- Image and text -->
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
          Code Editor  
        </a>

            <img src="../img/img_5terre.jpg" />

        </nav>

        <main>
            <textarea id="codes">
                <html> 
                    <head>
                        
                    </head>
                    <body>
                        
                    </body>
                </html>   
        
            </textarea>

            <div id="buttons">
                <button id="remove"> حذف الأكواد</button>
                <button id="play"> تشغيل الأكواد </button>
            </div>
            <div>
                <p id="title-result">Result - النتيجة</p>
            </div>

        </main>

        <div id="result"></div>


        <script src="app.js"></script>
    </body>

    </html>
    */
    /*
   style.css
   nav {
    width: 100%;
    height: 70px;
    line-height: 70px;
    background-color: seagreen;
    border-radius: 15px;
    box-sizing: border-box;
}

a {
    line-height: 1.5;
    text-decoration: none;
    color: white;
    font-weight: bold;
}

nav img {
    float: right;
    max-width: 70px;
    height: 64px;
    object-fit: cover;
    border-radius: 50%;
    padding: 2px;
}

main {
    text-align: center;
}

#codes {
    width: 98%;
    min-height: 280px;
    border-radius: 16px;
    border: 2px solid rgb(131, 131, 131);
}

#buttons {
    display: flex;
    justify-content: space-evenly;
}

#buttons button {
    width: 47%;
    border-radius: 12px;
    border: 0px;
    padding: 10px;
    font-weight: bold;
}

#remove {
    background-color: rgb(255, 30, 30);
    color: white;
}

#play {
    background-color: rgb(39, 39, 39);
    color: white;
}

#title-result {
    padding: 10px;
    border-bottom: 2px solid rgb(131, 131, 131);
    margin: 8px 0px;
    font-weight: bold;
}

#result {
    max-width: 100% !important;
}
   */


//===========================================================================================

// Lesson 45
alert(location.pathname);
// location.protocol  Return the protocol of the current URL:
// location.href returns the href (URL) of the current page
// location.hostname returns the domain name of the web host
// location.pathname إرجاع المسار واسم الملف للصفحة الحالية

// location.assign loads a new document
// locatio.replace();
// location.reload();
//==============================================================================================

//lesson 46
function reload() {
    location.reload();
}

function assign() {
    location.assign("https://www.youtube.com/");
}

function replace() {
    location.replace("page2.html");
}
// location.reload();

// location.assign()

// location.replace();
/*
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>

</head>
<body>

        <input type="text">
        
        
    <audio src="music.mp3" controls></audio>
    <button onclick="reload()">إعادة تحميل الصفحة</button>
    <button onclick="assign()">فتح صفحة ثانية</button>
    <script src="script.js"></script>
</body>
</html>
*/
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
</head>
<body>
    
    <h1>الصفحة الثانية</h1>
</body>
</html>
*/
//==================================================================================================

// Lesson 47
// 
let url = location.pathname;
let index = url.lastIndexOf("/") + 1; //لتحديد موقع اخر علامة مائلة واضافة رقم 1 لتحديد ما يأتي بعد العلامة
let fileName = url.substring(index); // لاقتطاع هذا الجزأ وهو اسم الصفحة

if (fileName == "home.html") {
    document.body.style.background = "red";
} else if (fileName == "index.html") {
    document.body.style.background = "green";
    document.getElementById("title").innerHTML = "Coder Shiyar";
}
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CODER SHIYAR</title>
   
</head>
<body>

    <h1 id="title"></h1>
    <script src="script.js"> </script>
</body>
</html>
*/
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>page 2</title>
</head>
<body>
    

    <script src="script.js"> </script>

</body>
</html>
*/
//=================================================================================================

// Lesson 48
// document.URL            للحصول على  رابط العنوان الصفحة 
// document.documentURI    للحصول على  رابط العنوان الصفحة
// document.domain              للحصول على  اسم دومين موقع   
const url = document.URL;
document.write("URL : " + url);
//=============================================================================================

// Lesson 49
// Coder Shiyar   -   https://youtube.com/codershiyar
// ----------------------------------------------------
// document.title   يتم استخدامها للحصول على عنوان الصفحة او تعديل على عنوان الصفحة  
// document.head                            يتم استخدامها لتحديد راس الصفحة لتحكم بها 
// document.body                            يتم استخدامها لتحديد جسم الصفحة لتحكم بها
// ----------------------------------------------------
let title = document.title;
document.title = "كودر شيار";
document.head.innerHTML += "<style> body{background:red;}</style>";

document.body.onload = () => {
    alert("تم اكتمال تحميل الصفحة");
};
//=================================================================================================

// Lesson 50
var name = 'Shiyar'; // String
var number = 3.17 + 8; // number
var boolean = true; // boolean
var x; //undefined
x = "this is x variable";
name = "Shiyar Jamo";
console.log(name);
//=============================================================================================

// lesson 51 -- website multi languages
// Coder Shiyar   -   https://youtube.com/codershiyar
// ----------------------------------------------------


let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");
let welcome = document.getElementById("welcome-text");
let about = document.getElementById("about");
let aboutText = document.getElementById("about-text");
let contact = document.getElementById("contact");

arabic.onclick = () => {
    setLanugage("arabic");
    localStorage.setItem("Lang", "arabic");
};

english.onclick = () => {
    setLanugage("english");
    localStorage.setItem("Lang", "english");
};

onload = () => {
    setLanugage(localStorage.getItem("Lang"));
};

function setLanugage(getLanuage) {
    if (getLanuage === "arabic") {
        title.innerHTML = "مبرمج شيار";
        welcome.innerHTML = "مرحبا بكم  في صفحة مبرمج شيار";
        about.innerHTML = "حولنا";
        aboutText.innerHTML = "انا استاذ برمجيات و مهندس برمجيات";
        contact.innerHTML = "اتصل بنا";
    } else if (getLanuage === "english") {
        title.innerHTML = "Coder Shiyar";
        welcome.innerHTML = "Welcome to website of Coder Shiyar";
        about.innerHTML = "  About US";
        aboutText.innerHTML = "  I am a teacher and a Software Developer";
        contact.innerHTML = "Contact us";

    }


}
// html file on Github
/*
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    </head>
    <body>
<!-- Image and text -->
<nav class="navbar navbar-light bg-light">
    <a style="line-height: 50px;" class="navbar-brand" href="#">
      <img src="logo.png" width="50" height="50" class="d-inline-block align-top"
       alt="" loading="lazy">
       <span id="title"> Coder Shiyar</span>
     
    </a>
    <div>
        <button type="button" id="arabic" class="btn btn-outline-success">العربية</button>
        <button type="button" id="english" class="btn btn-outline-danger">English</button>

    </div>
  </nav>

  <div id="welcome-text" class="alert alert-success" role="alert">
    Welcome to website of Coder Shiyar
  </div>

  <main >
    <div style=" justify-content: center; display: flex;" id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <div style="max-width: 860px;" class="carousel-inner">
          <div class="carousel-item active">
            <img src="img1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img2.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img3.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

  </main>
      

        <footer>
            <div class="card text-center">
                <div id="about" class="card-header">
                  About US
                </div>
                <div class="card-body">
                  <p id="about-text" class="card-text">
                       I am a teacher and a Software Developer </p>
                  <a id="contact" href="mailto:team.codershiyar@gmail.com" 
                  class="btn btn-success"> Contact us </a>
                </div>
               
              </div>

        </footer>
        <script src="script.js"></script>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </body>
</html>
*/
//============================================================================================
