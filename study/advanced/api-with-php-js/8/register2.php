<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
$username = "root";
$password = "";

if (isset($_POST['email']) && isset($_POST['password'])) {
    $username = "root";
    $password = "";
    $dbconnect = new  PDO("mysql:host=localhost; dbname=studydb; charset=utf8;", $username, $password);
    if ($dbconnect) {
        $dbconnect = $dbconnect->prepare("SELECT * FROM users WHERE email='" . $_POST['email'] . "'");
        $dbconnect->execute();
        $dbconnect = $dbconnect->fetchAll(PDO::FETCH_ASSOC);
        if (empty($dbconnect)) {
            $dbconnectAdd = new PDO("mysql:host=localhost; dbname=studydb; charset=utf8;", $username, $password);
            if ($dbconnectAdd) {
                $add = "INSERT INTO users(firstName,lastName,email,password) VALUES(:firstName,:lastName,:email,:password)";
                $dbconnectAdd = $dbconnectAdd->prepare($add);
                $dbconnectAdd->bindParam("firstName", strip_tags(trim($_POST['firstName'])));
                $dbconnectAdd->bindParam("lastName", strip_tags(trim($_POST['lastName'])));
                $dbconnectAdd->bindParam("email", strip_tags(trim($_POST['email'])));
                $dbconnectAdd->bindParam("password", strip_tags(trim($_POST['password'])));
                $dbconnectAdd->execute();
                print_r(true);
            } else {
                print_r('حدث خطأ أثناءعملية التسجيل .. رجاء المحاولة مرة أخرى');
            }
        } else {
            print_r('هذا البريد موجود بالفعل .. رجاء تسجيل بريد آخر');
        }
    } else {
        print_r('فشل الإتصال  بقاعدة البيانات');
        // session_unset();
    }
} else {
    print_r('فشل اتصال');
    // session_unset();
}