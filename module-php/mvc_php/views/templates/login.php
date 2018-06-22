<?php

// Tester si $_SESSION['username'] existe
// Pour rediriger vers le profil
if( !empty($_SESSION['username']) ) {
	header('Location: index.php?page=profil');
	exit();
}

include('views/includes/header.php');
?>
		<form action="index.php?page=traitement" method="post">
			<label for="username">Username</label>
			<input type="text" name="username" placeholder="Username" id="username" />

			<label for="password">Mot de passe</label>
			<input type="password" name="password" placeholder="Mot de passe" id="password" />

			<input type="submit" />
		</form>
		
<?php include('views/includes/footer.php'); ?>