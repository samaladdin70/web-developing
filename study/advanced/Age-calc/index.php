<!DOCTYPE html>
<html lang="en">

<head>
    <?php include("php/head.php") ?>
</head>

<body>
    <div id="container" class="container">
        <form>
            <label>Day:</label><br>
            <input type="number" name="dateb" maxlength="2" value="6" id="dateb"><br><br>
            <label>Month:</label><br>
            <input type="number" name="monthb" maxlength="2" value="10" id="monthb"><br><br>
            <label>Full-Year:</label><br>
            <input type="number" name="yearb" maxlength="4" value="1973" id="yearb"><br><br>
            <button type="button" id="submit">Enter</button>

        </form>
        <div class="output" id="output">
        </div>
        <h3>Designed and Developed By: Aladdin</h3>
    </div>



    <script src="js/app.js"></script>
    <script src="js/DayWeek.js"></script>
</body>

</html>