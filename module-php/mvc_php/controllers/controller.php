<?php

/**
 * 
 * Fonction render
 * 
 * 
 */

function render($page) {

    $path = "views/templates/" . $page . ".php";

    global $employees;

    if (file_exists($path)) {
        include($path);
    } else {
        include("views/templates/404.php");
    }
    return true;

}




?>