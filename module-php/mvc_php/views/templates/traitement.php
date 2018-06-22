<?php
// Je stock dans des variables le username et le password
$username = strip_tags($_POST['username']);
$password = strip_tags($_POST['password']);
$log = new Controller();
$log->traitement($username,$password);