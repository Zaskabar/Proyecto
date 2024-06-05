<?php
$servername = "localhost";
$username = "root"; // El usuario por defecto es "root"
$password = ""; // La contraseña por defecto es vacía
$dbname = "webapp";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST["username"];
    $pass = password_hash($_POST["password"], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (username, password) VALUES ('$user', '$pass')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
<form method="post" action="register.php">
    Usuario: <input type="text" name="username"><br>
    Contraseña: <input type="password" name="password"><br>
    <input type="submit" value="Registrarse">
</form>
