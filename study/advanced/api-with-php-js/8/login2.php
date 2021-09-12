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
        $dbconnect = $dbconnect->prepare("SELECT * FROM users WHERE email='" . $_POST['email'] . "' AND password='" . $_POST['password'] . "'");
        $dbconnect->execute();
        $dbconnect = $dbconnect->fetchAll(PDO::FETCH_ASSOC);
        if (empty($dbconnect)) {
            print_r(json_encode('بيانات البريد أو كلمة المرور غير صالحة .. رجاء التأكد من صحتها أو .. عمل تسجبل جديد'));
            // echo $_POST['email'] . "<br>";
            // echo $_POST['password'];
            // session_unset();
        } else {
            foreach ($dbconnect as $key => $value) {
                // print_r(json_encode("مرحباً " . $value['firstName'] . " " . $value['lastName']));
                session_start();
                $_SESSION['firstName'] = $value['firstName'];
                $_SESSION['lastName'] = $value['lastName'];
                $_SESSION['User_ID'] = $value['User_ID'];
                print_r(json_encode(true));
            }
        }
    } else {
        echo '<h2 style="color:red;">فشل الإتصال  بقاعدة البيانات</h2>';
        // session_unset();
    }
} else {
    print_r(json_encode("غشل اتصال"));
    // session_unset();
}