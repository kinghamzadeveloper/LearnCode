document.getElementById('getStarted').onclick = function() {
    window.location.href = "../sections html/home.html";
};

// Example JS button (if you want to make the "Try some JS" section interactive)
const message = document.getElementById('message');
if (message) {
    message.onclick = function() {
        message.textContent = "You clicked the message!";
    };
}