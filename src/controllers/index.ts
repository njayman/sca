import { Room } from "@prisma/client";
import { Request, Response } from "express";
import prc from "../config/prismaConfig";

export const getRooms = async (_: Request, res: Response) => {
  try {
    const rooms = await prc.room.findMany();
    res.json({ rooms });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const createRooms = async (req: Request, res: Response) => {
  try {
    const { name, topic, description } = req.body;
    const roomCreated: Room = await prc.room.create({
      data: {
        name,
        topic,
        description,
      },
    });
    res.json({ roomCreated, message: "Room created" });
  } catch (error: any) {
    res.status(500).json({ error });
  }
};

export const getChats = async (req: Request, res: Response) => {
  try {
    const { roomId } = req.params;
    const chats = await prc.chat.findMany({
      where: {
        roomId,
      },
    });
    res.json({ chats });
  } catch (error: any) {
    res.status(500).json({ error });
  }
};
