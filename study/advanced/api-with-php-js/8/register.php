<?php

header("Access-Control-Allow-Origin: *");
// header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
?>
<link href="css/bootstrap.min.css" rel="stylesheet">
<center style="padding: 50px;">
    <div id="err"></div>
    <form id="formLogin" class="form card shadow round" style="max-width:720px; padding: 30px; border-radius: 14px; ">
        <div style="text-align: left;">firstName:</div>
        <input style="text-align: left; border-width:2px;" class="form-control" type="text" name="firstName"
            id="firstName" required>
        <div style="text-align: left;">lastName:</div>
        <input style="text-align: left; border-width:2px;" class="form-control" type="text" name="lastName"
            id="lastName" required>
        <div style="text-align: left;">email:</div>
        <input style="text-align: left; border-width:2px;" class="form-control" type="email" name="email" id="email"
            required placeholder="example@mail.com">
        <div style="text-align: left;">password:</div>
        <div class="input-group mb-3">
            <div class="input-group-text">
                <input class="form-check-input mt-0" type="checkbox" value=""
                    aria-label="Checkbox for following text input" id="toggle">
            </div>
            <input style="text-align: left; border-width:2px;" class="form-control" type="password" name="password"
                id="password" required>
        </div>
        <br>
        <button class="btn btn-primary" type="submit" name="submit" id="submit">تسجيل</button>
    </form>
</center>

<?php


?>

<script>
let formLogin = document.getElementById("formLogin");
let toggle = document.getElementById("toggle");
let password = document.getElementById("password");
toggle.addEventListener("change", () => {
    if (toggle.checked == true) {
        password.type = "text";
    } else {
        password.type = "password";
    }

});

formLogin.onsubmit = (form) => {
    form.preventDefault();
    let formLoginDatat = new FormData(formLogin);
    fetch("register2.php", {
        method: "POST",
        body: formLoginDatat,
    }).then(response => response.text()).then(data => {
        if (data == 'هذا البريد موجود بالفعل .. رجاء تسجيل بريد آخر') {
            console.log(data);

            document.getElementById("err").innerHTML = '<h3 style="color:red;">' + data + '</h3>';
        } else {
            location.replace("login.html");
        }

    })
};
</script>