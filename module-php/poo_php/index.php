<?php

include('Eleve.php');
include('Voiture.php');

$Clement = new Eleve("Clément");
var_dump($Clement);

$Clement->saluer();

$Toto = new Eleve("Toto");
var_dump($Toto);

// Accéder à la méthode static
Eleve::courir();

$Porsche = new Voiture("Porsche", 911, "Grise", "Clément");


$Porsche->avancer(320);

var_dump($Porsche);

$Twingo = new Voiture("Renault", "Twingo", "Bleu", "Clément");


$Twingo->avancer(90);

var_dump($Twingo);

?>