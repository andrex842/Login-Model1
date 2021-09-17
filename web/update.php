<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "userbiblioteca";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if(!$conn)
{
die("No hay conexion: ".mysqli_connect_error());
}
sleep(2);

$nombre = $_POST["Usuario"];
$codigo = $_POST["codigo"];

$query = mysqli_query($conn,"UPDATE login SET codigo = '$codigo' WHERE nombre = '$nombre'");
$nr = mysqli_num_rows($query);
mysqli_data_seek ($query, 0);
if($nr):
        $datos = $query->fetch_assoc();
	echo json_encode(array('error' => false, 'tipo' => $datos['identificador']));
        else:
	echo json_encode(array('error' => true));
endif;
$conn->close();
?>