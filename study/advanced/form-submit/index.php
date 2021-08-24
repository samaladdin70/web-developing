<!DOCTYPE html>
<html lang="en">

<head>

    <?php include("php/head.php") ?>

</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">

                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <form method="POST">
                <button class="btn btn-outline-danger" type="submit" name="logout">تسجيل الخروج</button>
            </form>
        </div>
    </nav>

    <?php

    $username = "admin";
    $password = "12345";
    session_start();
    if (isset($_SESSION["username"]) && isset($_SESSION["password"])) {
        if ($_SESSION["username"] === $username && $_SESSION["password"] === $password) {
            echo '<div class="card-group">
  <div class="card">
    <img src="img/age.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Age Calculator</h5>
      <p class="card-text" style="direction:rtl;">حساب العمر بالسنة والشهر واليوم واستخراج يوم الميلاد وأيضا معرفة في اي يوم ميعاد في المستقبل.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="img/radio.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Pocket Radio</h5>
      <p class="card-text" style="direction:rtl;">راديو للجيب رائع به العديد من المحطات الإذاعية المنوعة والشيقة في مختلف المجالات والألوان الفنية</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src="img/dis.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Discount Calculator</h5>
      <p class="card-text" style="direction:rtl;">أداة سهلة وبسيطة وخفيفة لكنها فعالة في حساب نسبة التخفيض على سعر المنتجات المختلفة وهي عملية ومفيدة</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>';
        } else {
            echo '<script>location.replace("login.php");</script>';
        }
    } else {
        echo '<script>location.replace("login.php");</script>';
    }


    ?>

    <?php
    if (isset($_POST["logout"])) {
        session_unset();
        echo '<script>location.replace("login.php");</script>';
    }
    ?>
    <script src="js/bootstrap.bundle.min.js"></script>
</body>

</html>