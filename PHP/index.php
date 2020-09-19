<?php
 declare(strict_types=1);
echo "<h1>Hejka </h1></br>";

$users = [4 => 'Ala', 6 => "Ola", "Elo"];

$hello = array_map(
    fn($value) => "Hello ".$value,
    $users
);

print_r($hello);