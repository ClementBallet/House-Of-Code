<?php

/**
 * Classe Article
 */

class Article {

    public  $id_article;
    public  $name;
    public  $price;
    public  $created_at;
    private $url;

    /**
     * Constructor
     *
     * @param int $id_article
     */
    public function __construct ($id_article)
    {
        $this->id_article = $id_article;
    }

    /**
     * Permet d'afficher des infos de l'article
     *
     * @return array
     */
    public function display()
    {
        // $informations = array();

        // $informations["id_article"]    = $this->id_article;
        // $informations["article_name"]  = $this->name;
        // $informations["article_price"] = $this->price;
        // $informations["created_at"]    = $this->created_at;
        // $informations["url"]           = $this->url;

        // return $informations;

        // Ou autre possibilité :

        return array(
            "id_article"    => $this->id_article,
            "article_name"  => $this->name,
            "article_price" => $this->price,
            "created_at"    => $this->created_at,
            "url"           => $this->url
        );
    }

    /**
     * Retourne le lien de l'article
     *
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Définit l'url du lien de l'article
     *
     * @param string $url
     * @return string
     */
    public function setUrl($url)
    {
        return $this->url = $url;
    }

    /**
     * Retourne le nombre d'articles 
     *
     * @return int
     */
    public static function getCountArticles()
    {
        return 10;
    }
}