<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$username = "root";
$password = "";

$dbconnect = new  PDO("mysql:host=localhost; dbname=liberary_db; charset=utf8;", $username, $password);
if ($dbconnect) {
    $readselects = $dbconnect->prepare("SHOW TABLES;");
    $readselects->execute();
    $readselects = $readselects->fetchAll(PDO::FETCH_ASSOC);
    print_r(json_encode($readselects));
} else {
    echo '<h2 style="color:red;">فشل الإتصال بخادم قواعد البيانات</h2>';
}