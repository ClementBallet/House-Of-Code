<?php
// Je stock dans des variables le username et le password

$username = $_POST['username'];
$password = $_POST['password'];


// Pour chaque employé dans le tableau employees
foreach($employees as $employee) {
	// Je test si le username et le password correspondent
	if($username == $employee['username'] && $password == $employee['password']) {
		// Si c'est le cas, je démarre la session et stock le username dedans
		session_start();
		$_SESSION['username'] = $username;
		$_SESSION['age'] = $employee['age'];
		header('Location: index.php?page=profil');
		exit();
	}

}
// Sinon on affiche une erreur
echo 'Les identifiants ne correspondent pas';

?>