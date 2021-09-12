<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
if (isset($_POST['bookName'])) {
    $username = "eb2a_29357997";
    $password = "Aladdin_2358";
    $dbconnect = new  PDO("mysql:host=sql205.eb2a.com; dbname=eb2a_29357997_liberary_db; charset=utf8;", $username, $password);
    if ($dbconnect) {
        $tableName = "INSERT INTO " . $_POST['selectI'] . "(BookName,BookAutor,BookClass,BookRow,BookSection) VALUES(:BookName,:BookAutor,:BookClass,:BookRow,:BookSection)";
        $dbconnect = $dbconnect->prepare($tableName);
        $dbconnect->bindParam("BookName", strip_tags($_POST['bookName']));
        $dbconnect->bindParam("BookAutor", strip_tags($_POST['auterName']));
        $dbconnect->bindParam("BookClass", strip_tags($_POST['bookClass']));
        $dbconnect->bindParam("BookRow", strip_tags($_POST['rowNumber']));
        $dbconnect->bindParam("BookSection", strip_tags($_POST['bookSection']));
        $dbconnect->execute();
        echo '<h2 style="color:seagreen;">تمت الإضافة بنجاح</h2>';
    } else {
        echo '<h2 style="color:red;">خطأ في الإتصال</h2>';
    }
}