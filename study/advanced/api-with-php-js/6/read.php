<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$username = "root";
$password = "";
$database = new  PDO("mysql:host=localhost; dbname=music_db;charset=utf8;", $username, $password);
if ($database) {
    $database = $database->prepare("SELECT * FROM total_radio_stations");
    $database->execute();
    $database = $database->fetchAll(PDO::FETCH_ASSOC);
    print_r(json_encode($database));
    // echo 'تم اتصال بقاعدة بيانات';
} else {
    echo '<span style="color:red;">هناك خطأ وفشل الاتصال</span>';
}