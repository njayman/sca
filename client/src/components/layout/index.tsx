import { FC } from "react";
import Chats from "../chat";
import Rooms from "../rooms";

const AppLayout: FC = () => {
  return (
    <>
      <h1 style={{ padding: "5px 10px" }}>Simple chat</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Rooms />
        <Chats />
      </div>
    </>
  );
};

export default AppLayout;
