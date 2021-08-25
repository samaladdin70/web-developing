<?php
$username = "root";
$password = "";
$database = new  PDO("mysql:host=localhost; dbname=aladdin;charset=utf8;", $username, $password);
if ($database) {

    echo 'تم اتصال بقاعدة بيانات';
} else {
    echo '<span style="color:red;">هناك خطأ وفشل الاتصال</span>';
}