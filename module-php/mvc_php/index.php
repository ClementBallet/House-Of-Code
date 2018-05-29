<?php


require('controllers/controller.php');
require('models/model.php');

if(!empty($_GET["page"])) {
    $page = strip_tags($_GET["page"]);
} else {
    $page = "login";
}

render($page);