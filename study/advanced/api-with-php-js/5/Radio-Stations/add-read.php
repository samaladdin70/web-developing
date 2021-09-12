<?php
// header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// file_get_contents('php://input');
if (isset($_POST['rName']) && isset($_POST['rType']) && isset($_POST['rUrl'])) {
    $username = "root";
    $password = "";
    $dbconnect = new  PDO("mysql:host=localhost; dbname=music_db; charset=utf8;", $username, $password);
    if ($dbconnect) {

        $dbconnect = $dbconnect->prepare("INSERT INTO total_radio_stations(RadioName,RadioType,RadioUrl) VALUES(:RadioName,:RadioType,:RadioUrl)");
        $dbconnect->bindParam("RadioName", $_POST['rName']);
        $dbconnect->bindParam("RadioType", $_POST['rType']);
        $dbconnect->bindParam("RadioUrl", $_POST['rUrl']);
        $dbconnect->execute();
    } else {
        echo '<h2 style="color:red;">فشل الإتصال بخادم قواعد البيانات</h2>';
    }
}
$username = "root";
$password = "";
$dbconnect = new  PDO("mysql:host=localhost; dbname=music_db; charset=utf8;", $username, $password);
if ($dbconnect) {
    $readData = $dbconnect->prepare("SELECT * FROM total_radio_stations");
    $readData->execute();
    $readData = $readData->fetchAll(PDO::FETCH_ASSOC); // to return data in array
    print_r(json_encode($readData));
} else {
    echo '<h2 style="color:red;">فشل الإتصال بخادم قواعد البيانات</h2>';
}