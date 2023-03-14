const experss = require("express");
const app = experss();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server();

const publicPath = path.join(__dirname, "public");
const port = process.env.PORT || 3000;
app.use(experss.static(publicPath));

app.get("/", (res, req) => {
  req.send("Hello World!");
});

io.on("connection", (socket) => {
  console.log(`User connected with id: ${socket.id}`);

  // Disconnect user
  socket.on("disconnect", () => {
    console.log(`User disconnected with id: ${socket.id}`);
  });

  // Send move
  socket.on("move", (data) => {
    io.to(data.room).emit("move", data.move);
  });
});

io.of("/").adapter.on("create-room", (room) => {
  console.log(`room ${room} was created`);
});

io.of("/").adapter.on("join-room", (room, id) => {
  console.log(`socket ${id} has joined room ${room}`);
});

io.of("/").adapter.on((socket) => {});

server.listen(3000, () => {
  console.log(`listening on *:${port}`);
});
