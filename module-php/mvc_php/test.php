<?php

require 'models/Model.php';

$Model = new Model();

$Model->getUsers();

$users = $Model->getUsers();

foreach ($users as $key => $user) {
    echo $user->email . "<br>";
}

$user1 = $Model->getUser(1);
echo $user1->age;