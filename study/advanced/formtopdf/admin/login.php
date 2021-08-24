<!DOCTYPE html>
<html lang="en">

<head>
    <?php //include("../php/head.php"); 
    ?>
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet">
</head>

<body>
    <?php
    $uname = "admin";
    $password = "12345";
    session_start();

    if (isset($_SESSION["uname"]) && isset($_SESSION["password"])) {
        if ($_SESSION["uname"] === $uname && $_SESSION["password"] === $password) {
            echo '<script>location.replace("index.php");</script>';
        }
    }
    if (isset($_GET["login"])) {
        if ($_GET["uname"] === $uname && $_GET["password"] === $password) {

            $_SESSION["uname"] = $uname;
            $_SESSION["password"] = $password;
            $_SESSION["login"] = true;
            echo '<script>location.replace("index.php");</script>';
        } else {
            echo '<span style="color:red;">بيانات المدير غير صالحة</span>';
        }
    }

    ?>
    <div id="contain">
        <form method="GET" id="formLogin">
            <div class="mb-3">
                <label class="form-label">Username:</label>
                <input type="text" name="uname" class="form-control form-control-lg" id="uname" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Password:</label>
                <input type="password" name="password" class="form-control form-control-lg" id="password" required>
            </div>
            <button type="submit" name="login" class="btn btn-primary">Login</button>

        </form>
    </div>
    <script src="../js/applogin.js"></script>
    <script src="../js/bootstrap.bundle.min.js"></script>
</body>

</html>