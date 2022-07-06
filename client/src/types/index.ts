export type Room = {
  id: string;
  name: string;
  topic: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type NewRoom = {
  name: string;
  topic: string;
  description: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

export type Chat = {
  id: string;
  roomId: string;
  userId: string;
  message: string;
  createdAt: string;
};
