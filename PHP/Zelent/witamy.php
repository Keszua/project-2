<?php
	session_start();

	if( !isset($_SESSION['udanarejestracja']) ) {
		header('Location: index.php');
		exit();
	}
	else {
		unset($_SESSION['udanarejestracja']);
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

	<h3>Dziekujemy za rejestrację w serwisie! </h3>
	Możesz już zalogowac się na swoje konto.
	<br /><br />
	Tylko martwi ujrzeli koniec wojny - Platon <br /><br />

	<a href="index.php" method="post">Zaloguj sie na swoje konto!</a>
	<br /><br />

</body>
</html>