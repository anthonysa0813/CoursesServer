const express = require("express");
const connectMongoDB = require("../database/config");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT | 5050;
    this.middlewares();
    this.connectDB();
    this.paths = {
      courses: "/api/courses",
      modules: "/api/modules",
      class: "/api/classes",
    };
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  connectDB() {
    connectMongoDB();
  }

  routes() {
    this.app.use(this.paths.courses, require("../routes/Courses.route"));
  }
  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`the application listening on ${this.PORT}`);
    });
  }
}

module.exports = Server;
