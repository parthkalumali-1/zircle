document.getElementById('toggleSidebar').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const text = messageInput.value.trim();
  if (text === "") return;

  const message = document.createElement('div');
  message.classList.add('message');
  message.innerHTML = `<strong>Parth 😎:</strong> ${text}`;
  messagesContainer.appendChild(message);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  messageInput.value = "";
}

// Preload some sample messages
["Welcome to Zircle 🚀", "Say hi to your friends!", "Ready to build your server?"].forEach(msg => {
  const message = document.createElement('div');
  message.classList.add('message');
  message.innerHTML = `<strong>System:</strong> ${msg}`;
  messagesContainer.appendChild(message);
});
