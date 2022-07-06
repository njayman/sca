import { Fragment } from "react";
import { useRooms } from "../../queries";

const Rooms = () => {
  const { rooms, isLoading } = useRooms();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "start",
        width: "300px",
        margin: "5px",
      }}
    >
      <h1 style={{ padding: "5px" }}>Rooms</h1>
      <Fragment>
        {isLoading ? (
          <div>Loading...</div>
        ) : rooms?.length === 0 ? (
          "No rooms. Create one now."
        ) : (
          rooms?.map((room, idx) => <div key={idx}>{room.name}</div>)
        )}
      </Fragment>
    </div>
  );
};

export default Rooms;
