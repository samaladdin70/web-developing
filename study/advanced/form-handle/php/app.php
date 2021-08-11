<?php

if (isset($_GET['submit1'])) {
    $price = floatval($_GET['n1']);
    $discount = floatval($_GET['n2']);
    $result = $price - $price * $discount / 100;
    echo '<h2>ThePrice is: ' . $price . '</h2>
        <h2> The Discount is: ' . $discount . '%</h2>
        <h2>The New Price after Discount is: ' . $result . '</h2>';
}