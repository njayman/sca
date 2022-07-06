import { useMutation, useQuery } from "react-query";
import { Chat, Room } from "../types";
import { createRoom, fetchChats, fetchRooms } from "./api";

export const useRooms = () => {
  const { data, isLoading, isError, error } = useQuery<Room[], Error>(
    "rooms",
    fetchRooms
  );
  return { rooms: data, isLoading, isError, error };
};

export const useCreateRoom = useMutation(createRoom);

// export const useCreateRoom = (room: Room) => {
//   const { data, isLoading, isError, error } = useQuery<Room, Error>(
//     "createRoom",
//     createRoom(room)
//   );
//   return { room: data, isLoading, isError, error };
// };

export const useChats = (roomId: string) => {
  const { data, isLoading, isError, error } = useQuery<Chat[], Error>(
    `chats-${roomId}`,
    () => fetchChats(roomId)
  );
  return { chats: data, isLoading, isError, error };
};
