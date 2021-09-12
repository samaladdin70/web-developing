<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
$username = "root";
$password = "";
$database = new  PDO("mysql:host=localhost; dbname=aladdin;charset=utf8;", $username, $password);

if ($database) {
    $readData = $database->prepare("SELECT * FROM posts ");
    $readData->execute();
    $readData = $readData->fetchAll(PDO::FETCH_ASSOC); // to return data in array
    $datajson = json_encode($readData);
    print_r($datajson);
    // print_r($readData);
    /*foreach (array_reverse($readData) as $value) { // to reverse excution from end to begin use array_reverse()
        // print_r($value);
        print_r("<div style='width:96%;  overflow:auto; text-align:right;' 
        class='card-body card-header card text-white bg-success mb-3'>
        <h1 style='color:black; font-wight:bold; text-shadow:2px 2px 4px black;' class='card-title'>" . $value["title"] .
            "</h1><hr><p class='card- text'>" . $value["content"] . "</p></div>");
        // print_r("<div class='card-body'><h2 class='card-title'>" . $value["title"] . "</h2>" . "<span class='card- text'>" . $value["content"] . "</span></div><br>");
    }*/
    //  echo 'تم اتصال بقاعدة بيانات';
} else {
    echo '<span style="color:red;">هناك خطأ وفشل الاتصال</span>';
}