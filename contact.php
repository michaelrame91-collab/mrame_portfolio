<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "michael.rame91@gmail.com";

    $mail_subject = "Portfolio - " . $subject;

    $mail_message =
        "Nom : $name\n" .
        "Email : $email\n\n" .
        "Message :\n$message";

    $headers =
        "From: $email\r\n" .
        "Reply-To: $email\r\n";

    if (mail($to, $mail_subject, $mail_message, $headers)) {
        echo "
        <h2>Message envoyé avec succès !</h2>
        <p>Merci pour votre message.</p>
        <a href='index.html'>Retour au site</a>
        ";
    } else {
        echo "
        <h2>Erreur</h2>
        <p>Le message n'a pas pu être envoyé.</p>
        ";
    }
}
?>