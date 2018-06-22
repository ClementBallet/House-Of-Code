<?php
// Et maintenant je détruis complètement la session
session_destroy();

include('views/includes/header.php');
?>

		<a href="index.php?page=login">Retourner sur la page de connexion</a>

<?php include('views/includes/footer.php'); ?>