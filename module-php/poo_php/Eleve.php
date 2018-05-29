<?php

class Eleve {

    public $nom;

    public function __construct($nom) {
        $this->nom = $nom;
    }

    public function saluer() {
        echo 'Coucou!';
    }

    public static function courir() {
        echo 'Je cours';
    }
}

?>