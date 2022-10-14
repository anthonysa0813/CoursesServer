const express = require("express");
const connectMongoDB = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT | 5050;
    this.middlewares();
    this.connectDB();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
  }

  connectDB() {
    connectMongoDB();
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.json({ message: "welcome to  my server :D" });
    });
  }
  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`the application listening on ${this.PORT}`);
    });
  }
}

module.exports = Server;
