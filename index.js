const path = require("path");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const node_modules_path = path.join(__dirname, "node_modules");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(node_modules_path, "socket.io")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/modules/socket.io", (req, res) => {
  res.sendFile(
    path.join(node_modules_path, "socket.io", "client-dist", "socket.io.js")
  );
});

io.on("connection", (socket) => {
  console.log("client connected");
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Listening to port ${PORT}...`));
