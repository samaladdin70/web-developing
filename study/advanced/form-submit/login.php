<!DOCTYPE html>
<html lang="en">

<head>
    <?php include("php/head.php") ?>

</head>

<body>
    <div id="body">

        <?php
        $username = "admin";
        $password = "12345";

        session_start();

        if (isset($_SESSION["username"]) && isset($_SESSION["password"])) {
            if ($_SESSION["username"] === $username && $_SESSION["password"] === $password) {
                echo '<script>location.replace("index.php");</script>';
            }
        }
        ?>

        <div class="container">
            <div class="container container-sm container-md container-lg container-xl container-xxl">

                <?php
                if (isset($_POST["login"])) {
                    if ($_POST["uname"] === $username && $_POST["pass"] === $password) {

                        $_SESSION["username"] = $username;
                        $_SESSION["password"] = $password;
                        $_SESSION["login"] = true;
                        echo '<script>location.replace("index.php");</script>';
                    } else {
                        echo '<h3 style="color:red;">بيانات دخول غير صحيحة</h3>';
                    }
                }
                ?>

                <form id="form" method="POST">
                    Username: <input class="form-control" type="text" name="uname" required><br>
                    Password: <input class="form-control" type="password" name="pass" required><br>
                    <button class="btn btn-primary" type="submit" name="login">Login</button>
                </form>
            </div>
        </div>
    </div>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/app.js"></script>
</body>

</html>