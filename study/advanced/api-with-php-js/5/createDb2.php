<?php
$username = "root";
$password = "";
$connect = new  PDO("mysql:host=localhost;", $username, $password);
if ($connect) {
    echo '<h2 style="color:seagreen;">تم الإتصال بنجاح بخادم قواعد البيانات</h2>';
    $connect = $connect->prepare("CREATE DATABASE  IF NOT EXISTS music_db CHARACTER SET utf8 COLLATE utf8_general_ci;");
    $connect->execute();
    echo '<h2 style="color:seagreen;">تم انشاء قاعدة البيانات بنجاح</h2>';
} else {
    echo '<h2 style="color:red;">فشل الإتصال بخادم قواعد البيانات</h2>';
}
$dbconnect = new  PDO("mysql:host=localhost; dbname=music_db; charset=utf8;", $username, $password);
if ($dbconnect) {
    echo '<h2 style="color:seagreen;">تم الإتصال بنجاح  بقاعدة البيانات</h2>';
    $radioStationsTable = "CREATE TABLE  IF NOT EXISTS total_radio_stations (
id int NOT NULL AUTO_INCREMENT,
RadioName varchar(255) NOT NULL,
RadioType varchar(255),
RadioUrl varchar(255),
PRIMARY KEY (id)
);";
    $dbconnect = $dbconnect->prepare($radioStationsTable);
    $dbconnect->execute();
    echo '<h2 style="color:seagreen;">تم انشاء جدول البيانات بنجاح</h2>';
} else {
    echo '<h2 style="color:red;">فشل الإتصال  بقاعدة البيانات</h2>';
}
/* to cereate table with its columns 
CREATE TABLE Persons (
Personid int NOT NULL AUTO_INCREMENT,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Age int,
PRIMARY KEY (Personid)
);*/