<?php
    /*CREO LA VARIABLE QUE GUARDA EL SERVIDOR, USUARIO, CONTRASEÑA, BASE DE DATOS Y PUERTO, SI NO PONGO EL PUERTO ES EL DEFECTO*/
    $cone = mysqli_connect("localhost", "root", "vega1705", "BATTEAMX");
    if (!$cone){//si no se logra hacer la conexion
        die("No se pudo conectar".mysqli_connect_error());
    } 
    
    mysqli_set_charset($cone, "utf8mb4");
?>