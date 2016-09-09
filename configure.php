<?php
$host = "localhost";
$db_name = "etar";
$username = "root";
$password = "demonik09";
 
try {
    $con = new PDO("mysql:host={$host};dbname={$db_name};charset=utf8", $username, $password);
}
 
//to handle connection error
catch(PDOException $exception){
    echo "Connection error: " . $exception->getMessage();
}
?>