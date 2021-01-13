<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = 'insert you e-mail address here';
//$subject = $_POST['subject'];
//$human = $_POST['human'];

$body = "From: $name\n E-Mail: $email\n Message:\n $message";

if ($_POST['submit']) {
    if (mail($to, 'contatto sito', $body)) {
        echo '<p>Il tuo messaggio è stato inviato correttamente!</p>';
    } else {
        echo '<p>Qualcosa è andato storto! Riprova o scrivi a ---</p>';
    }
}
?>