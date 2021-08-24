<link rel="stylesheet" href="css/bootstrap.min.css">
<?php

if (isset($_POST['send'])) {
    require_once 'mail.php';
    $mail->setFrom('egyptian.programming.developing@gmail.com', 'E-PDA ');
    // $mail->addAddress('samaladdin70@gmail.com');
    $mail->addAddress($_POST['address']);

    //  $mail->addCC('academyshiyar@gmail.com');

    // $mail->Subject = 'رسالة تجريبية';
    $mail->Subject = $_POST['subject'];

    // $mail->Body    = 'Test from Me <b>PHP Mailer</b>';
    $mail->Body    =  '<div style="color:white; background-color:seagreen;">' . $_POST['body'] . '</div>';

    move_uploaded_file($_FILES['file']['tmp_name'], 'files/' . $_FILES['file']['name']);

    //$mail->addAttachment('/var/tmp/file.tar.gz');         Add attachments
    $mail->addAttachment('files/' . $_FILES['file']['name']);

    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    Optional name

    $mail->send();

    // unlink('files/' . $_FILES['file']['name']);
    unlink('files/' . $_FILES['file']['name']);
    header("Location: index.php", true);
}

?>
<div id="contain" class="container">
    <form enctype="multipart/form-data" style="padding:10px;" method="POST">
        <label class="form-label">Send to:</label>
        <input type="email" class="form-control" name="address" placeholder="example@email.com" value="" required>
        <label class="form-label">Subject:</label>
        <input type="text" class="form-control" name="subject" value="" required>
        <label class="form-label">Body:</label>
        <textarea name="body" class="form-control" id="body" style="height: 200px;" hidden></textarea>
        <div style="height: 200px;" class="form-control" id="text" name="text" contenteditable>
        </div>
        <label class="form-label">Attach-file</label>
        <input class="form-control form-control-sm" type="file" name="file" value="">
        <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary btn-block mt-3" name="send">Send</button>
        </div>
    </form>
</div>
<script>
// let contain = document.getElementById("contain");
let body = document.getElementById("body");
let text = document.getElementById("text");
// contain.style.height = ((screen.height) * 70 / 100) + "px";
text.addEventListener("input", () => {
    body.value = text.innerHTML;
});
</script>