<?php

require_once __DIR__ . '/../server/mpdf/vendor/autoload.php';
$mpdf = new \Mpdf\Mpdf();
$mpdf->autoScriptToLang = true;
$mpdf->autoLangToFont = true;
$mpdf->SetDirectionality('rtl'); //text direction
// $mpdf->AddPage("L");

$stylesheet = file_get_contents('css/style.css');
$mpdf->WriteHTML($stylesheet, \Mpdf\HTMLParserMode::HEADER_CSS);
session_start();
if (isset($_SESSION['html'])) {
    $html = $_SESSION['html'];
} else {

    $html = '<h2>مرحباً .. لم تقم بالتسجيل بعد</h2>';
}
// $html = '<h2>Hello world!</h2>';
$mpdf->WriteHTML($html, \Mpdf\HTMLParserMode::HTML_BODY);

$mpdf->Output("myPDF.pdf", "I");