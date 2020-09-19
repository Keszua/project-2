<?php
	session_start();

	if(!isset($_SESSION['zalogowany']))
	{
		header('Location: index.php');
		exit();
	}
?>

<!DOCTYPE HTML>
<html lang="pl

  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Osadnicy</title>
  </head>

<body>

<?php

	echo "<p>Witaj ".$_SESSION['user'].'! [<a href="logout.php">Wyloguj</a>] </p>';
	echo "<p><b>Drewno </b>".$_SESSION['drewno'];
	echo " | <b>Kamien </b>".$_SESSION['kamien'];
	echo " | <b>Zboże </b>".$_SESSION['zboze']."</p>";

	echo "<p><b>E-mail </b>".$_SESSION['email'];
	echo "<br/><b>Dni premium: </b>".$_SESSION['dnipremium']."</p>";


?>


</body>
</html>