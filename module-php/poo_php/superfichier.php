<?php
// On inclut la classe article pour pouvoir l'utiliser 
require 'Article.php';
require 'Product.php';

$Post = new Article(4);
$Post->name = "Un post";
$Post->created_at = date("d M Y");

$News = new Article(32);
$News->name = "Une news";
$News->created_at = date("d M Y");

$Product = new Article(978);
$Product->name = "Un produit";
$Product->price = 15;
// On change l'URL de l'objet
$Product->setUrl("/produits/15");

echo Article::getCountArticles();

$Adidas = new Product(89);

var_dump($Post);
var_dump($Product);
var_dump($Adidas);