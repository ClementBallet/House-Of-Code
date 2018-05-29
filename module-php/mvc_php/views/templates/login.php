<?php

// Tester si $_SESSION['username'] existe
if(!empty($_SESSION['username'])) {
	header('Location: profil.php');
	exit();
}

include('views/includes/header.php');
?>



<!-- Ici, j'envoie les données en post -->
<form action="index.php?page=traitement" method="post">
	<label for="username">Username</label>
	<!--
	Je précise que mon input pour être récupéré en PHP avec son attribut name
		name="username" -> $_POST['username']
	-->
	<input type="text" name="username" placeholder="Username" id="username" />

	<label for="password">Mot de passe</label>
	<!--
		name="password" -> $_POST['password']
	-->
	<input type="password" name="password" placeholder="Mot de passe" id="password" />

	<input type="submit" />
</form>


<?php

include('views/includes/footer.php');

?>

