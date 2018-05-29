<?php
// Je dois faire session_start() pour avoir accès à la variable $_SESSION
session_start();

include('views/includes/header.php');
?>

Je suis connecté sous le nom : <?php echo $_SESSION['username']; ?>
<br>
J'ai <?php echo $_SESSION['age'] ?> ans.
<br>
<a href="index.php?page=logout">Me déconnecter</a>


<?php

include('views/includes/footer.php');