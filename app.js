const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const server = http.createServer(app);
const socketIO = require("socket.io");

const io = socketIO(server);

app.use(express.static(path.join(__dirname, "src")));
const PORT = process.env.PORT || 5001;

io.on("connection", (socket) => {
  socket.on("myMessage", (message) => {
    console.log("Message received: ", message);

    io.emit("myMessage", message);
  });
});

io.on("connection", (socket) => {
  socket.on("yourMessage", (message) => {
    console.log("Message received: ", message);

    io.emit("yourMessage", message);
  });
});

// io.on("connection", (socket) => {
//   socket.on("myMessage", (message) => {
//     console.log("Message received: ", message);

//     // 다른 사용자에게 메시지를 보냅니다.
//     socket.broadcast.emit("yourMessage", message);
//   });
// });

server.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
