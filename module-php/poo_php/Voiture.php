<?php

// Classe qui créé des voitures

class Voiture {
    // init public vars
    public $marque;
    public $modele;
    public $couleur;
    public $proprietaire;
    public $vitesse = 0;
    // init private vars
    private $numeroSerie;

    /**
     * 
     * Constructeur
     * 
     */
    public function __construct($marque, $modele, $couleur, $proprietaire) {
        $this->marque       = $marque;
        $this->modele       = $modele;
        $this->couleur      = $couleur;
        $this->proprietaire = $proprietaire;
        $this->numeroSerie  = rand(1,20000);
    }


    /**
     * Méthode qui fait avancer notre voiture
     * 
     * @param $vitesse int
     * @return string
     */
    public function avancer($vitesse) {
        $this->vitesse = $vitesse;
        return 'La voiture roule à ' . $this->vitesse . ' km/h.';
    }

}