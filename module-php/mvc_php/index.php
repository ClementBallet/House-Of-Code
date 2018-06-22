<?php

// On donne accès à la variable $_SESSION dans notre index.php
// Puisque toute notre application RESTE ET S'EXECUTE sur ce fichier,
// Il ne suffit que de la mettre ici une fois
session_start();

// On inclut (ou require) les fichiers controller.php et model.php pour pouvoir
// utiliser les variables et les fonctions qu'ils contiennent
require("controllers/Controller.php");
require("models/Model.php");


// Si une page a été donné dans notre index
// A savoir si notre url est composée comme ceci : 
// index.php?page=login OU index.php?page=logout etc..
// Alors, on va stocker cette information dans une variable
// $page en retirant les éléments HTML et PHP
if(!empty($_GET['page'])) {
	$page = strip_tags($_GET['page']);
}
else {
	$page = 'login';
}

// On fait appelle à la fonction render de notre fichier controller
// Qui va nous mettre à disposition la variable $employee du model
// Et qui va nous inclure la page demandée
// Si l'utilisateur est sur index.php?page=login
// Le script va inclure views/templates/login.php
$login = new Controller();
$login->render($page);

