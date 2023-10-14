// 서버 구동용!

const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "src")));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
