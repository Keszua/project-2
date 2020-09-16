<?php
	session_start();


	if(isset($_POST['email'])) //gdy nastapiło wysłanie danych (więc istnieje pole 'email')
	{	
		$wszystko_OK=true;

		//sprawdzenie poprawności nickname'a
		$nick = $_POST['nick'];
		if((strlen($nick) < 3) || (strlen($nick) > 20)) 
		{
			$wszystko_OK = false;
			$_SESSION['e_nick']="Nickname musi posiadać od 3 do 20 znaków!"; 
		}
		if(!ctype_alnum($nick)) //sprawdza, czy wszystkie znaki w łańcuchu sa alfanumeryczne (nie zawierają znaków diakretycznych)
		{
			$wszystko_OK = false;
			$_SESSION['e_nick']='Nickname może składać się tylko z liter i cyfr (bez "ogonków")'; 
		}
		//preg_match() - polecenie do wyrażeń regularnych

		//sprawdzanie email
		$email =  $_POST['email'];
		$emailB = filter_var($email, FILTER_SANITIZE_EMAIL); //usówa wszystkie niedozwolone znaki 
		if(filter_var($emailB, FILTER_VALIDATE_EMAIL)==false || $emailB!= $email)
		{
			$wszystko_OK = false;
			$_SESSION['e_email']="Podaj porawny adres email"; 
		}
		if(strlen($email)<1)
		{
			$wszystko_OK = false;
			$_SESSION['e_email']="Email wymagany"; 
		}

		//sprawdz poprawność hasła
		$haslo1 = $_POST['haslo1'];
		$haslo2 = $_POST['haslo2'];
		if((strlen($haslo1) < 8) || (strlen($haslo1) > 20)) 
		{
			$wszystko_OK = false;
			$_SESSION['e_haslo']="Hasło musi posiadać od 8 do 20 znaków!"; 
		}

		if($haslo1 != $haslo2) 
		{
			$wszystko_OK = false;
			$_SESSION['e_haslo']="Podane hasła nie są identyczne"; 
		}

		$haslo_hash = password_hash($haslo1, PASSWORD_DEFAULT);
		
		//echo $_POST['regulamin'];  exit(); 
		//czy zaakceptowanie regulamin
		if(!isset($_POST['regulamin']))
		{
			$wszystko_OK = false;
			$_SESSION['e_regulamin']="Potwierdz akceptację regulaminu"; 
		}

		//Bot or not? Oto jest pytanie!
		//$sekret = "6LfIPRMTAAAAAHMCl2vOCp59WE26c-AZMD1V2OhD";
		$sekret = "1234";

		$sprawdz = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$sekret.'&response='.$_POST['g-recaptcha-response']);

		$odpowiedz = json_decode($sprawdz);

		//if($odpowiedz->success==false)
		//{
		//	$wszystko_OK = false;
		//	$_SESSION['e_bot']="Potwierdz że nie jesteś botem"; 
		//}


		//sprawdz, czy ktoś o takim loginie już nie jest zarejetstrowany
		//łącze się z baza danych
		require_once "connect.php";
		mysqli_report(MYSQLI_REPORT_STRICT);  //Ustaw sposób raportowania błędów

		try {
			$polaczenie = new mysqli($host, $db_user, $db_password, $db_name);
			if($polaczenie->connect_errno != 0) { //sprawdzanie, czy udało sie połaczyć  0=udane
				throw new Exception(mysqli_connect_errno());
			}
			else {
				//czy email już istnieje?
				$rezultat = $polaczenie->query("SELECT id FROM uzytkownicy WHERE email='$email'");
				
				if(!$rezultat) throw new Exception($polaczenie->error);
	
				$ile_takich_maili = $rezultat->num_rows;
				if($ile_takich_maili>0) {
					$wszystko_OK = false;
					$_SESSION['e_email']="Istnieje już konto przypisane do tego adresu e-mail"; 
				}

				//czy nick już istnieje?
				$rezultat = $polaczenie->query("SELECT id FROM uzytkownicy WHERE user='$nick'");
				
				if(!$rezultat) throw new Exception($polaczenie->error);
	
				$ile_takich_nikow = $rezultat->num_rows;
				if($ile_takich_nikow>0) {
					$wszystko_OK = false;
					$_SESSION['e_nick']="Istnieje już gracz o takim niku. Wybierz inny"; 
				}

				if($wszystko_OK) {
					// wszystkie testy zaliczone
					//echo "udana walidacja";  exit();
					//dodawanie nowego gracza
					if($polaczenie->query("INSERT INTO uzytkownicy VALUES (NULL, '$nick', '$haslo_hash', '$email', 100, 100, 100, 14)")) {
						$_SESSION['udanarejestracja']=true;
						header('Location: witamy.php');
						
					} else {
						throw new Exception($polaczenie->error);
					}
					
					
				}

				$polaczenie->close();
			}
		}
		catch(Exception $e) {
			echo '<span style="color:red;"> Błąd serwera! Przepraszamy. Spróbuj się zarejstrowac w innym terminie! </span>';
			//echo '<br /> Informacja developreska: '.$e;
		}




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

    <title>Osadnicy - załóż darmowe konto</title>
	<script src='https://www.google.com/recaptcha/api.js'></script>
	<script>
		function onSubmit() {
			document.getElementById("demo-form").submit();
		}
	</script>

  <style>
    body {
      font-family: Helvetica, sans-serif;
    }
    .status-message {
      background-color: #5ff;
      margin-bottom: 10px;
      text-align: center;
    }
    textarea {
      margin: 10px 0;
      resize: none;
    }
	.error {
		color:red;
		margin-top: 10px;
		font-size: 12px;
	}
  </style>

</head>

<body>

<!--
		<h3>Give us feedback on our webpage!</h3>
		<div class="status-message">%s</div>
		<form id="demo-form" action="/feedback" method="POST">
-->

	<form method="POST" id="demo-form" ">

		Nickname: <br /> <input type="text" name="nick" /><br />
		<?php
			if(isset($_SESSION['e_nick']))
			{			
				echo '<div class="error">'.$_SESSION['e_nick'].'</div>';
				unset($_SESSION['e_nick']);
			}
		?>

		E-mail: <br /> <input type="text" name="email" /><br />
		<?php
			if(isset($_SESSION['e_email']))
			{			
				echo '<div class="error">'.$_SESSION['e_email'].'</div>';
				unset($_SESSION['e_email']);
			}
		?>

		Twoje hasło: <br /> <input type="password" name="haslo1" /><br />
		<?php
			if(isset($_SESSION['e_haslo']))
			{			
				echo '<div class="error">'.$_SESSION['e_haslo'].'</div>';
				unset($_SESSION['e_haslo']);
			}
		?>
		Powtórz hasło: <br /> <input type="password" name="haslo2" /><br />
		
		<label>
			<input type="checkbox" name="regulamin" /> Akceptuje regulamin
		</label>
		<?php
			if(isset($_SESSION['e_regulamin']))
			{			
				echo '<div class="error">'.$_SESSION['e_regulamin'].'</div>';
				unset($_SESSION['e_regulamin']);
			}
		?>

			
			<br />
			Your comment <br><textarea name="feedback" cols="50" rows="5"></textarea><br>
			<!-- Replace this with your site key -->
			<button class="g-recaptcha"
            data-sitekey="6LfeHx4UAAAAAAKUx5rO5nfKMtc9-syDTdFLftnm"
            data-callback="onSubmit">Zarejestruj sie</button>

	</form>

</body>
</html>