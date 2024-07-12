document.addEventListener("DOMContentLoaded", () => {
    const messagesContainer = document.getElementById("messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    const botResponses = {
        "hi": "Hello! How can I help you today?",
        "how are you": "I'm just a bot, but I'm here to help you!",
        "what is your name": "I'm Chatbot, your virtual assistant.",
        "bye": "Goodbye! Have a nice day!",
    };

    sendButton.addEventListener("click", () => sendMessage());
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            appendMessage(userMessage, "user-message");
            userInput.value = "";

            setTimeout(() => {
                const botMessage = getBotResponse(userMessage.toLowerCase());
                appendMessage(botMessage, "bot-message");
            }, 500);
        }
    }

    function appendMessage(message, className) {
        const messageElement = document.createElement("div");
        messageElement.className = `message ${className}`;
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function getBotResponse(userMessage) {
        return botResponses[userMessage] || "Sorry, I didn't understand that.";
    }
});
