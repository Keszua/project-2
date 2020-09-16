<!DOCTYPE HTML>
<html lang="pl

  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Podsumowanie zamowienia</title>
  </head>

<body>



<?php

	session_start(); //uruchamia zmienne globalne zawarte w "$_SESSION[]"

	if( !isset($_POST['login']) || !isset($_POST['haslo']) )
	{
		header('Location: index.php');
		exit();
	}
	//trik na zalogowanie sie: (wszedzie podkresliniki to spacje)
	// pierwsze id gracza: login dowolny, w pole hasła: '_OR_1=1_--_
    // znając login: [login, apostrof, spacja, dwa wyślinik, spacja] i dowolne hasło:  marek'_--_
	// znając nazwę pola z loginami i jakiś login: '_OR_user='anna'_--_ hasło dowolne
	// znając nazwę pola id: '_OR_id=7_--_  hasło dowolne

function console_log($output, $with_script_tags = true) {
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) . 
');';
    if ($with_script_tags) {
        $js_code = '<script>' . $js_code . '</script>';
    }
    echo $js_code;
}

// importowanie plików wykonuje się na 3 sposoby: include albo include-once albo require albo require_once
// include - generuje tylko ostrzeżenia, że nie znalazł pliku
// require - wymaga pliku, jak go nie ma, to przerywa dziłanie skryptu
// once - sprawdza i nie pozwala dołączyć kilkukrotnie tego samego pliku
	require_once "connect.php";  //importowanie pliku (gdy nie ma pliku, przerwij działanie skrypty)

//otwarcie połączenia z baza danych:
	$polaczenie = @new mysqli($host, $db_user, $db_password, $db_name);  //małpka wycisza raportowanie błędów

	if($polaczenie->connect_errno != 0)  //sprawdzanie, czy udało sie połaczyć
	{
		echo "Error: ".$polaczenie->connect_errno." Opis: ".$polaczenie->connect_error;
	}
	else
	{
		$login = $_POST['login'];
		$haslo = $_POST['haslo'];

		$login = htmlentities($login, ENT_QUOTES, "UTF-8");
		//$haslo = htmlentities($haslo, ENT_QUOTES, "UTF-8");
		console_log("Login ".$login); 
		//console_log("Haslo ".$haslo); 

		echo 'Połączenie z bazą "'.$db_name.'": udane <br/><br/>';

		$sql = "SELECT * FROM uzytkownicy WHERE user='$login' AND pass='$haslo'"; //przygotowanie zapytania
		console_log($sql); 

		//if($rezultat = @$polaczenie->query($sql))  //zapytanie do bazy. 
		if($rezultat = @$polaczenie->query( // to samo, ale przepuszczone przez sprintf
			sprintf( "SELECT * FROM uzytkownicy WHERE user='%s'",
			mysqli_real_escape_string($polaczenie, $login) )))
		{
			$ilu_userow = $rezultat->num_rows;  //ile odczytał wierszy
			if($ilu_userow>0) {
				$wiersz = $rezultat->fetch_assoc(); //funkcja tworząca tablicę asocjacyjną (skojażeniową), czyli skojażoną z nazwami kolumn z bazy 
				if(password_verify($haslo, $wiersz['pass']))
				{
					$_SESSION['zalogowany'] = true;

					//$user = $wiersz['id']; // można się tak odwołać, bo wcześniej ją "skojażyliśmy"
					$_SESSION['id'] = $wiersz['id'];	//to co wyżej, ale przez zmienne gobalne
					$_SESSION['user'] = $wiersz['user'];	
					$_SESSION['drewno'] = $wiersz['drewno'];
					$_SESSION['kamien'] = $wiersz['kamien'];
					$_SESSION['zboze'] = $wiersz['zboze'];
					$_SESSION['email'] = $wiersz['email'];
					$_SESSION['dnipremium'] = $wiersz['dnipremium'];

					unset($_SESSION['blad']);	
					$rezultat->free_result();  //mozna też zwolnic pamięć za pomocą close() lub free() lub free_result();
					header('Location: gra.php'); //przekierowanie
				}
				else {
					$_SESSION['blad'] = '<span style="color:red">Nieprawidłowy login lub hasło!</span>';
					header('Location: index.php'); //przekierowanie
				}
			}
			else {
				echo "Login ".$login." nie istnieje<br/>";
				$_SESSION['blad'] = '<span style="color:red">Nieprawidłowy login lub hasło!</span>';
				header('Location: index.php'); //przekierowanie
			}
		}
		else {
			echo "Sprawdz połaczenie z bazą.<br/>";
		}

		$polaczenie->close();
	}


/* 
	Aby połączyć się z bazą danych, nalezy podać:
	Adres serwera
	login do MySQL
	hasło do MySQL
	nazwa bazy danych
	Te dane będą zawarte w odzielnym pliku connect.php
*/




?>




</body>

</html>