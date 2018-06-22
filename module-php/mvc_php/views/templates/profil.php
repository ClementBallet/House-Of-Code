<?php include('views/includes/header.php'); ?>

		Je suis connecté sous le nom : <?php echo $_SESSION['username']; ?>

		<a href="index.php?page=logout">Me déconnecter</a>

<?php include('views/includes/footer.php'); ?>