const socket = io.connect("http://localhost:5001");

const chatForm = document.querySelector(".chat-form");
const chatInput = document.querySelector(".chat-input");
const sendButton = document.querySelector(".chat-button");

sendButton.addEventListener("click", function (e) {
  e.preventDefault();

  const message = chatInput.value;
  chatInput.value = "";

  socket.emit("chatMessage", message);
});

// 메시지를 받았을 때의 처리
socket.on("chatMessage", function (message) {
  const chatList = document.querySelector(".chat-list");
  const newMessage = document.createElement("div");
  newMessage.textContent = message;
  chatList.appendChild(newMessage);
});
