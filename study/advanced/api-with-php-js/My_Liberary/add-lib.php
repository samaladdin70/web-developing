<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if (isset($_POST['insertLib'])) {
    $username = "root";
    $password = "";
    $connect = new  PDO("mysql:host=localhost;", $username, $password);
    if ($connect) {
        echo '<h2 style="color:seagreen;">تم الإتصال بنجاح بخادم قواعد البيانات</h2>';
        $connect = $connect->prepare("CREATE DATABASE  IF NOT EXISTS liberary_db CHARACTER SET utf8 COLLATE utf8_general_ci;");
        $connect->execute();
        // echo '<h2 style="color:seagreen;">تم انشاء قاعدة البيانات المجمعة بنجاح</h2>';
    } else {
        echo '<h2 style="color:red;">فشل الإتصال بخادم قواعد البيانات</h2>';
    }


    $dbconnect = new  PDO("mysql:host=localhost; dbname=liberary_db; charset=utf8;", $username, $password);
    if ($dbconnect) {
        echo '<h2 style="color:seagreen;">تم الإتصال بنجاح  بقاعدة البيانات</h2>';
        $table = "CREATE TABLE  IF NOT EXISTS " . $_POST['insertLib'] . " (
id int NOT NULL AUTO_INCREMENT,
BookName varchar(255) NOT NULL,
BookAutor varchar(255),
BookClass varchar(255),
BookRow int,
BookSection varchar(255),
PRIMARY KEY (id)
);";
        $dbconnect = $dbconnect->prepare($table);
        $dbconnect->execute();
        echo '<h2 style="color:seagreen;">تم انشاء جدول البيانات بنجاح</h2><br>';
        // echo $table;
    } else {
        echo '<h2 style="color:red;">فشل الإتصال  بقاعدة البيانات</h2>';
    }
} else {
    echo '<h2 style="color:red;">فشل الإتصال  بقاعدة البيانات</h2>';
}