// 클라이언트 코드
const socket = io.connect("http://localhost:5001");

const chatForm = document.querySelector(".chat-form");
const chatInput = document.querySelector(".chat-input");

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("test", test);

  const message = chatInput.value;
  chatInput.value = "";

  // 서버로 메시지를 전송
  socket.emit("chatMessage", message);
});
