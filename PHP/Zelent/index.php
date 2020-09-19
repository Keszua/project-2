<?php
	session_start();

	if( isset($_SESSION['zalogowany']) && $_SESSION['zalogowany']==true )
	{
		header('Location: gra.php');
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

	<h3>Osadnicy</h3>

	Tylko martwi ujrzeli koniec wojny - Platon <br /><br />

	<a href="rejestracja.php" method="post">Rejestracja - załóż darmowe konto!</a>
	<br /><br />

	<form action="zaloguj.php" method="post">
		Login: <br /> <input type="text" name="login" /> <br/>

		Hasło: <br/>  <input type="password" name="haslo" /> <br/> <br/>
		<input type="submit" value="Zaloguj się" /> 
	</form>

<?php
	if(isset($_SESSION['blad']))
		echo $_SESSION['blad'];
?>

</body>
</html>