<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = htmlspecialchars($_POST["nombre"]);
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $asunto = htmlspecialchars($_POST["asunto"]);
  $mensaje = htmlspecialchars($_POST["mensaje"]);

  $destinatario = "Thorrobledo@ircdebtrecovery.com";  // Cambia esto por el correo del cliente
  $titulo = "Nuevo mensaje de contacto: $asunto";
  $contenido = "Nombre: $nombre\nCorreo: $email\n\nMensaje:\n$mensaje";
  $cabeceras = "From: $email";

  if (mail($destinatario, $titulo, $contenido, $cabeceras)) {
    echo "<script>alert('✅ Mensaje enviado correctamente.'); window.location.href='index.html';</script>";
  } else {
    echo "<script>alert('❌ Hubo un error al enviar el mensaje. Inténtalo más tarde.'); window.location.href='index.html';</script>";
  }
} else {
  echo "<script>window.location.href='index.html';</script>";
}
?>
