<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$username = "root";
$password = "";
$dbconnectadd = new PDO('mysql:host=localhost; dbname=test; charset=utf8;', $username, $password);
if ($dbconnectadd) {
    $dbconnectadd = $dbconnectadd->prepare("SELECT * FROM test WHERE for_id=" . $_GET['key'] . "");
    $dbconnectadd->execute();
    $dbconnectadd = $dbconnectadd->fetchAll(PDO::FETCH_ASSOC);
    if (empty($dbconnectadd)) {
        print_r(json_encode("nothing"));
    } else {
        print_r(json_encode($dbconnectadd));
    }
} else {
    # code...
}