<!DOCTYPE html>
<html dir="rtl">

<head>
    <?php // include("../php/head.php"); 
    ?>
    <link href="../css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <?php
    $uname = "admin";
    $password = "12345";
    session_start();
    if (isset($_SESSION["uname"]) && isset($_SESSION["password"])) {
        if ($_SESSION["uname"] === $uname && $_SESSION["password"] === $password) {
            echo '<div class="container container-sm container-md container-lg container-xl container-xxl">';
            echo "<h2>مرحبا بك مدير الصفحة</h2>";
            echo '</div>';
        } else {
            echo '<script>location.replace("login.php");</script>';
            session_unset();
        }
    } else {
        echo '<script>location.replace("login.php");</script>';
        session_unset();
    }

    ?>

    <?php
    if (isset($_GET["post"])) {

        $_SESSION['html'] = '<h2>' . $_GET['title'] . '</h2>' . $_GET['subject'];
        $_SESSION['html'] .= '<br>' . '<img src="img/' . $_GET['upload'] . '">';
        header('location: ../index.php', true);
    }
    ?>
    <div class="container container-sm container-md container-lg container-xl container-xxl">
        <form style="padding:10px;" method="GET">
            <div class="mb-3">
                <label class="form-label">العنوان:</label>
                <input type="text" class="form-control form-control-lg" name="title" id="">
            </div>
            <div class="mb-3">
                <label class="form-label">الموضوع:</label>
                <textarea style="height: 300px;" class="form-control" name="subject"></textarea>
            </div>
            <input type="file" name="upload" id="upload" hidden>
            <button type="button" id="uploadB" class="btn btn-success">حدد الصورة</button>


            <button type="submit" name="post" class="btn btn-primary">تأكيد</button><br><br>
            <input type="image" src="../img/" alt="" name="img" id="img" class="img-thumbnail">
        </form>
    </div>
    <div class="container container-sm container-md container-lg container-xl container-xxl">
        <form method="POST">
            <button type="submit" name="logout" class="btn btn-outline-danger btn-lg">تسجيل خروج</button>
        </form>
    </div>
    <?php
    if (isset($_POST["logout"])) {
        session_unset();
        echo '<script>location.replace("login.php");</script>';
    }
    ?>

    <script src=" ../js/app.js"></script>
    <script src="../js/bootstrap.bundle.min.js"></script>
</body>

</html>