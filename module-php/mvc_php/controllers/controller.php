<?php
/**
 * Ceci est notre controller.
 * Il contient des fonctions et des variables qui serviront à la logique
 * Et au fonctionnement de notre application
 */


class Controller {

	/**
	 * La fonction render permet d'inclure le fichier de la page demandée
	 * Si ce fichier n'existe pas, on redirige l'utilisateur vers une page 404
	 *
	 * @param string $page
	 * @return bool
	 */
	public function render($page) {

		// La page correspondant à la page en cours d'utilisation est placée dans la variable $filename
		$filename = 'views/templates/' . $page . '.php'; 

		// Si le fichier recherché existe, on l'inclut
		// Sinon, on inclut le fichier 404.php
		if( file_exists($filename) ) {
			include($filename);
		} else {
			include('views/templates/404.php');
		}

		// Ce que retourne la fonction ne nous importe pas
		// Mais c'est une bonne pratique de toujours avoir un return
		return true;
	}

	public function traitement($username, $password)
	{
		$employees = new Model();
		$users = $employees->getUsers();

		$pass = md5($password);

		// Si on a bien reçu un username et un password
		if( !empty($username) && !empty($password) ){

			// Si le username et le password contiennent plus de 3 caractères
			if( (strlen($username) >= 3 && strlen($password) >= 3) ) {

				// Pour chaque employé dans le tableau employees
				foreach($users as $employee) {
					var_dump($employee);
					// Je test si le username et le password correspondent
					if( $username == $employee->email && $pass == $employee->password ) { 
						// Si c'est le cas, je stock le username dans la session
						$_SESSION['username'] = $username;
						$_SESSION['password'] = $password;

						header('Location: index.php?page=profil');
						exit();
					}

				}

			}

		}		

	}
}


	
