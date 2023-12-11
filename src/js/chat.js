const socket = io.connect("http://localhost:5001");

const chatForm = document.querySelector(".chat-form");
const chatInput = document.querySelector(".chat-input");
const sendButton = document.querySelector(".chat-button");
const chatList = document.querySelector(".chat-list");
sendButton.addEventListener("click", function (e) {
  e.preventDefault();

  const message = chatInput.value;
  chatInput.value = "";

  const newMessage = document.createElement("div");
  newMessage.textContent = message;
  newMessage.classList.add("user-message");

  chatList.appendChild(newMessage);
  socket.emit("myMessage", message);
});

socket.on("yourMessage", function (message) {
  const newMessage = document.createElement("div");
  newMessage.textContent = message;
  newMessage.classList.add("other-message");

  chatList.appendChild(newMessage);
});
