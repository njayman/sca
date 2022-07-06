import { createServer } from "http";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import prc from "./config/prismaConfig";
import apiRoutes from "./routes";

const app = express();
const server = createServer(app);
const io = new Server(server);
const port = process.env.PORT || 5000;

async function main() {
  try {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/api", apiRoutes);

    io.on("connection", (socket) => {
      console.log("a user connected");
      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });

    server.listen(port, () => console.log(`Server started on port ${5000}`));
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    prc.$disconnect();
  }
}

main();
