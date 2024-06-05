class User {
    constructor() {
        this.username = '';
        this.isLoggedIn = false;
    }

    login() {
        this.username = document.getElementById('loginUsername').value;
        this.isLoggedIn = true;
        showRoles();
    }

    register() {
        // Implementación del registro de usuario
        alert('Registro exitoso');
        showLoginForm();
    }
}

class DiceRoller {
    rollDice(sides) {
        const roll = Math.floor(Math.random() * sides) + 1;
        const modificador = parseInt(document.getElementById('modificador').value);
        const total = roll + modificador;
        showMessage(roll, modificador, total);
    }
}

const user = new User();
const diceRoller = new DiceRoller();

function showLoginForm() {
    hideAllSections();
    document.getElementById('login').style.display = 'block';
}

function showRegisterForm() {
    hideAllSections();
    document.getElementById('register').style.display = 'block';
}

function showRoles() {
    hideAllSections();
    document.getElementById('roles').style.display = 'block';
}

function selectProfile(profile) {
    hideAllSections();
    if (profile === 'master') {
        document.getElementById('masterOptions').style.display = 'block';
    } else {
        document.getElementById('playerOptions').style.display = 'block';
    }
    document.getElementById('tirarDados').style.display = 'block';
}

function showMasterOptions() {
    hideAllSections();
    document.getElementById('masterOptions').style.display = 'block';
    document.getElementById('tirarDados').style.display = 'block';
}

function showCreateRoomForm() {
    hideAllSections();
    document.getElementById('createRoom').style.display = 'block';
}

function createRoom() {
    const roomName = document.getElementById('roomName').value;
    const roomPassword = document.getElementById('roomPassword').value;
    const roomPlayers = document.getElementById('roomPlayers').value;
    const roomDescription = document.getElementById('roomDescription').value;

    // Implementación de la creación de sala
    alert(`Sala "${roomName}" creada exitosamente`);
    showMasterOptions();
}

function joinRoom() {
    alert('Unirse a una sala - en construcción');
}

function leaveRoom() {
    alert('Salir de la sala - en construcción');
}

function hideAllSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}

function showMessage(roll, modificador, total) {
    const message = document.getElementById('messageInput').value;
    const chat = document.getElementById('chat');
    const newMessage = document.createElement('div');
    newMessage.textContent = `${user.username}: ${message} (Dado: ${roll} + Modificador: ${modificador} = Total: ${total})`;
    chat.appendChild(newMessage);
    document.getElementById('messageInput').value = '';
    chat.scrollTop = chat.scrollHeight;
}

function sendMessage() {
    showMessage(0, 0, 0); // Enviar mensaje sin tirar dados
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Inicializar con la pantalla de login
showLoginForm();
