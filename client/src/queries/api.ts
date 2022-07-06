import { NewRoom, Room } from "../types";

export const fetchRooms = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/rooms", {
      method: "GET",
    });
    const data = await response.json();
    return data.rooms;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createRoom = async (room: NewRoom) => {
  try {
    return await fetch("http://localhost:5000/api/rooms/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(room),
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchChats = async (roomId: string) => {
  try {
    const response = await fetch(`http://localhost:5000/api/chats/${roomId}`, {
      method: "GET",
    });
    const data = await response.json();
    return data.chats;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
