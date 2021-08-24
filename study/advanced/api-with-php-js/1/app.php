<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = file_get_contents("php://input");
//print_r("Aladdin"); must be response.text() in index.html
//print_r(json_decode($data)); must be response.text() in index.html because decode here for php syntax not for js
print_r($data); // data here is json format