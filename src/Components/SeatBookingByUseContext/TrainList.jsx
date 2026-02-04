import React, { useContext } from "react";
import { TrainContext } from "./TrainContext";

const TrainList = () => {
  const { trains, setSelectedTrainId } =
    useContext(TrainContext);

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <h3>Available Train</h3>

      {trains.map((train) => (
        <button
          key={train.id}
          onClick={() => setSelectedTrainId(train.id)}
          style={{
            padding: "10px 18px",
            margin: "6px",
            borderRadius: "8px",
            border: "2px solid #020202",
            backgroundColor:"#4caf50",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          {train.trainName}
        </button>
      ))}
    </div>
  );
};

export default TrainList;
