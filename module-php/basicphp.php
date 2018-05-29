<?php

$maVar = "vert";
$boy = true;
$nb1 = 12;
$nb2 = 14;

echo $maVar . "<br>";
echo $nb1 + $nb2 . "<br>";
echo $nb1 - $nb2 . "<br>";
echo $nb1 * $nb2 . "<br>";
echo $nb1 / $nb2 . "<br>";
echo $nb1 % $nb2 . "<br>";

/**
 * 
 * Boucle if
 * 
 */

if ($boy == false) {
    echo 'Tu es une fille' . '<br>';
} else if ($boy) {
    echo 'Tu es un garçon' . '<br>';
} else {
    echo 'Error' . '<br>';
}

/**
 * 
 * Boucle for
 * 
 */

for ($i=1; $i <= 10; $i++) { 
    echo 'tour ' . $i . '<br>';
}

/**
 * 
 * Boucle while
 * 
 */

$count = 1;

while ($count <= 10) {
    echo 'count ' . $count++ . '<br>';
}

/**
 * 
 * Boucle do while
 * 
 */

$age = 1; 

do {
    echo $age++ . '<br>';
} while ($age <= 10); 

?>