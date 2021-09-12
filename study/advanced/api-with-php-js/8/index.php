<!DOCTYPE html>
<html dir="rtl">

<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/bootstrap.min.css" rel="stylesheet">

</head>

<body>

    <?php
    session_start();

    if (isset($_SESSION['firstName']) && isset($_SESSION['lastName']) && isset($_SESSION['User_ID'])) {
        echo '<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.php">الرئيسية</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">مراسلات</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">

                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            قائمة 
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li style="text-align:right;"><a class="dropdown-item" href="#">حدث</a></li>
                            <li style="text-align:right;"><a class="dropdown-item" href="#">حدث آخر</a></li>
                            <li style="text-align:right;"><a class="dropdown-item" href="#">حدث جديد آخر</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <label style="color:blue; text-shadow:1px 1px 2px black;"> مرحبا بك يا  ' . $_SESSION['firstName'] . ' ' . $_SESSION['lastName'] . '</label>
            <form method="POST">
                <button style="margin:10px;" class="btn btn-outline-danger" type="submit" id="exit" name="exit">تسجيل الخروج</button>
            </form>
        </div>
    </nav>';
    } else {

        echo '<script>location.replace("login.html");</script>';
    }
    ?>

    <center>

        <div style="max-width:720px; margin-top:10px;">
            <input class="form-control" type="text" name="displayId" id="displayId"
                placeholder="كتابة منشور جديد . . . بماذا تفكر ؟" style="border-width: 2px; width:95%;"
                data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="">

        </div>

        <div style="max-width:720px; margin-top:10px;" id="content">
            <?php
            $username = "root";
            $password = "";
            $dbconnect = new PDO("mysql:host=localhost; dbname=studydb; charset=utf8;", $username, $password);
            if ($dbconnect) {
                $dbconnect = $dbconnect->prepare("SELECT * FROM posts INNER JOIN users ON posts.For_ID=users.User_ID ORDER BY posts.Post_ID DESC LIMIT 20");
                $dbconnect->execute();
                $dbconnect = $dbconnect->fetchAll(PDO::FETCH_ASSOC);
                if (empty($dbconnect)) {
                    echo '<div class="card text-white bg-dark mb-3 shadow p-3  round" style="width:95%;"><h3>لا توجد منشورات</h3></div>';
                } else {
                    foreach ($dbconnect as $key => $value) {
                        // echo $value['Content'] . '<br>' . $value['firstName'];
                        echo '<center style="max-width:720px;"><div style="width:95%; border:none;" class="card border-success mb-3 shadow round" style="max-width: 18rem;">
  <div style="text-align:right; color:blue;" class="card-header bg-transparent border-success">' . $value["firstName"] . ' ' . $value["lastName"] . '</div>
  <div style="text-align:right;" class="card-body text-success">
    <h4 style="color:black;" class="card-title">' . $value["Title"] . '</h4>
    <p class="card-text">' . $value["Content"] . '</p>
  </div>
  <div style="text-align:left;" class="card-footer bg-transparent border-success">' . $value["dateTime"] . '</div>
</div></center>';
                    }
                }
            } else {
                echo '<h4 style="color:red;">فشل الإتصال بقاعدة البيانات . . . </h4>';
            }

            ?>

        </div>


    </center>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <!-- <h5 class="modal-title" id="exampleModalLabel" style="float: right;">منشور جديد</h5> -->
                    <button type="button" id="close" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    <h5 class="modal-title" id="exampleModalLabel" style="float: right;">منشور جديد</h5>
                </div>
                <div class="modal-body">
                    <form id="postForm">
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">عنوان المنشور:</label>
                            <input type="text" class="form-control" id="title" name="title" required>
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">محتوى المنشور :</label>
                            <textarea class="form-control" id="text_area" name="msg" style="display: none;"
                                required></textarea>
                            <div class="form-control" style="height: 200px; overflow:auto" id="msg_div"
                                contenteditable="true">
                            </div>
                        </div>
                        <div class="modal-footer" style="height: 50px; padding:5px;">
                            <!--  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                            <button type="submit" name="share" id="share" class="btn btn-primary"
                                style="width: 100%;">مشاركة المنشور</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>

    <?php
    if (isset($_POST['exit'])) {
        session_unset();
        echo '<script>location.replace("login.html");</script>';
    }




    ?>



    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/appIndex.js"></script>
    <script>
    let postForm = document.getElementById("postForm");
    let title = document.getElementById("title");
    // let text_area = document.getElementById("text_area");
    let share = document.getElementById("share");

    postForm.onsubmit = (form) => {
        form.preventDefault();
        postFormData = new FormData(postForm);
        fetch("post-add.php", {
            method: "POST",
            body: postFormData,
        }).then(document.getElementById("close").click()).then(location.reload())
        /*.then(response => response.text()).then(data => {
            console.log(data);
            document.getElementById("close").click();
            // location.reload();
        })*/

    };
    </script>

</body>

</html>