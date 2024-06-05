<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webapp";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $_POST["username"];
    $pass = $_POST["password"];

    $sql = "SELECT password FROM users WHERE username='$user'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($pass, $row["password"]))
        session_start();
        $_SESSION["username"] = $user;
        echo "Login successful";
    } else {
        echo "Invalid password";
    }
} else {
    echo "No user found";
}


$conn->close();
?>
<form method="post" action="login.php">
Usuario: <input type="text" name="username"><br>
Contraseña: <input type="password" name="password"><br>
<input type="submit" value="Iniciar Sesión">
</form>