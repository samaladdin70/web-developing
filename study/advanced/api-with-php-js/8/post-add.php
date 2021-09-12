<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
if (isset($_POST['title'])) {
    print_r(date("D : d / M / Y - H:i:s"));
    // echo $_SESSION['User_ID'] . ': ' . $_SESSION['firstName'] . ' ' . $_SESSION['lastName'];
    session_start();
    $username = "root";
    $password = "";
    $dbconnectposts = new PDO("mysql:host=localhost; dbname=studydb; charset=utf8;", $username, $password);
    if ($dbconnectposts) {
        $dbconnectposts = $dbconnectposts->prepare("INSERT INTO posts(Title,Content,dateTime,For_ID) VALUES(:Title,:Content,:dateTime,:For_ID)");
        $dbconnectposts->bindParam("Title", strip_tags(trim($_POST['title'])));
        $dbconnectposts->bindParam("Content", trim($_POST['msg']));
        $dbconnectposts->bindParam("dateTime", date("D : d / M / Y - H:i:s"));
        $dbconnectposts->bindParam("For_ID", $_SESSION['User_ID']);
        $dbconnectposts->execute();
    } else {
        print_r("فشل اتصال بقاعدة البيانات . . . حاول مرة أخرى");
    }
}