<?php


// Tableaux numératifs


$array = array();

$array[0] = "Index 1";

var_dump($array);



// Tableaux associatifs
$associativeArray = array();
$associativeArray["prénom"] = "Clément";
$associativeArray["age"] = 29;

var_dump($associativeArray);



// Tableaux multidimensionnels


$classe = array();
$classe[0] = array();
$classe[1] = array();
$classe[2] = array();

$classe[0]["prénom"] = "Clément";
$classe[0]["age"] = 29;
$classe[0]["ville"] = "Lyon";

$classe[1]["prénom"] = "Toto";
$classe[1]["age"] = 12;
$classe[1]["ville"] = "Trifouilli";

$classe[2]["prénom"] = "Karadoc";
$classe[2]["age"] = 38;
$classe[2]["ville"] = "Kaamelott";

foreach ($classe as $key => $student) {
    echo "A l'index " . $key . ", " . $student["prénom"] . " a " . $student["age"] . " ans et habite à " . $student["ville"] . ".<br>";
}