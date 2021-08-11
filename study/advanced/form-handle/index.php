<!DOCTYPE html>
<html lang="en">

<head>
    <title>form</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
    <div id="container" class="container">
        <form id="priceForm" method="GET">
            <label>Price - السعر</label><br>
            <input type="text" name="n1" id="n1" required>
            <div class="error" id="priceError"></div>
            <label>Discount % - التخفيض</label><br>
            <input type="text" name="n2" id="n2" required>
            <div class="error" id="discountError"></div>
            <button type="submit" name="submit1" id="submit1">Enter</button>
        </form>
        <div class="output" id="priceData">
            <?php include("php/app.php") ?>
        </div>
        <button type="button" id="resetId">Reset</button>
    </div>
    <script src="js/app.js"></script>
</body>

</html>