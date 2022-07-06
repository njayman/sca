import { Router } from "express";
import { createRooms, getChats, getRooms } from "../controllers";

const r = Router();

r.get("/rooms", getRooms);

r.post("/rooms/create", createRooms);

r.get("/chats/:roomId", getChats);

export default r;
