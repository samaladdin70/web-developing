<!DOCTYPE html>
<html lang="en">

<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="" rel="stylesheet">
</head>

<body>
    <?php
    // header("Access-Control-Allow-Origin: *");
    //header("Content-Type: application/json; charset=UTF-8");
    // header("Access-Control-Allow-Methods: *");
    // header("Access-Control-Max-Age: 3600");
    // header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    ?>
    <center>
        <script>
        let content;
        </script>
        <?php



        echo '<script>
       let d = 1;
        </script>';
        for ($i = 1; $i <= 2; $i++) {
            echo '<input type="text" id="text' . $i . '" name="text">';


            echo '<script>
  
    content = document.getElementById("text' . $i . '");
   
   </script>';
        ?>
        <?php
            echo '<script>';
            echo 'content.addEventListener("click", () => {';
            echo 'd = ' . $i . ';';

            echo 'document.getElementById("output").innerHTML = "";';
            echo "fetch('show.php?key=$i').then(response => response.json()).then(data => {";
            echo 'data.forEach(element => {';
            echo 'document.getElementById("output").innerHTML += element["content"] + " " +';
            echo 'element["for_id"];';

            echo '});';

            echo '})';
            echo '});';
            echo '</script>';
            ?>
        <?php


        }


        ?>

        <div style="width:250px; height:100px; border:1px solid black;" id="output"></div>
        <button type="button" id="button">show</button>
        <?php
        echo '<script>';
        echo 'document.getElementById("button").addEventListener("click", () => {';
        echo 'document.getElementById("output").innerHTML = "";';
        echo "fetch('show.php?key='+d+'').then(response => response.json()).then(data => {";
        echo 'data.forEach(element => {';
        echo 'document.getElementById("output").innerHTML += element["content"] + " " +';
        echo 'element["for_id"];';

        echo '});';

        echo '})';
        echo '});';
        echo '</script>';
        ?>
    </center>
    <?php

    function add($for_id)
    {
        $username = "root";
        $password = "";
        $dbconnectadd = new PDO('mysql:host=localhost; dbname=test; charset=utf8;', $username, $password);
        if ($dbconnectadd) {
            $dbconnectadd = $dbconnectadd->prepare('SELECT * FROM test WHERE for_id=' . $for_id . '');
            $dbconnectadd->execute();
            $dbconnectadd = $dbconnectadd->fetchAll(PDO::FETCH_ASSOC);
            if (empty($dbconnectadd)) {
                # code...
            } else {
                foreach ($dbconnectadd as $value) {
                    echo $value['content'] . ' ' . $value['for_id'];
                }
            }
        } else {
            # code...
        }
    }






    ?>
    <script>

    </script>
</body>

</html>