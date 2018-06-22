<?php
/**
 * class Model qui communique avec la BDD
 */
class Model {

	public $connexion; // connexion à la BDD

	/**
	 * Constructeur : stocke la connexion à la BDD dans la variable $connexion 
	 */
	public function __construct()
	{
		$this->connexion = $this->connectToDb();
	}

	/**
	 * Connexion à la BDD
	 *
	 * @param string $dbhost
	 * @param string $dbname
	 * @param string $dbuser
	 * @param string $dbpass
	 * @return connexion|string 
	 */	
	private function connectToDb($dbhost = "localhost", $dbname = "bdd_auth", $dbuser = "root", $dbpass = "root")
	{
		$mysql = 'mysql:dbname=' . $dbname . ';host=' . $dbhost;

		try {
			$db = new PDO($mysql, $dbuser, $dbpass);
		} catch(Exception $e) {
			$db = 'Impossible de se connecter. Erreur: ' . $e;
		}

		return $db;
	}

	/**
	 * Requète permettant de récupérer tous les users de notre bdd
	 *
	 * @return array
	 */
	public function getUsers()
	{
		$sqlReq = 'SELECT * FROM users';

		$query = $this->connexion->query($sqlReq);

		$data = $query->fetchAll(PDO::FETCH_OBJ);
		
		return $data;
	}

	/**
	 * Requète qui permet d'aller chercher 1 user avec son ID
	 *
	 * @param int $id
	 * @return object
	 */
	public function getUser($id)
	{
		$query = $this->connexion->prepare("SELECT * FROM users WHERE id = :pomme");
		$query->execute(
			array(
				"pomme" => $id
			)
		);
		$data = $query->fetch(PDO::FETCH_OBJ);
		return $data;
	}
}