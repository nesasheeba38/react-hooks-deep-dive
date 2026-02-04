import { useContext } from "react";
import { TrainContext } from "./TrainContext";
const AdminPanel = () => {
  const { trains, setTrains, selectedTrainId } = useContext(TrainContext);

  const updateTrain = (updatedFields) => {
    if (!selectedTrainId) return; 
    const updatedTrains = trains.map((train) =>
      train.id === selectedTrainId ? { ...train, ...updatedFields } : train
    );
    setTrains(updatedTrains);
  };

  const adminBtnStyle={
padding: "10px 16px",
  margin: "6px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#1976d2",
  color: "#fff",
  fontWeight: "600",
  cursor: "pointer",
  }

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <h3>Admin Controls</h3>
      <button  style={adminBtnStyle} onClick={() => updateTrain({ status: "Delayed", delay: 15 })}>
        Mark Delayed
      </button>
      <button 
        style={adminBtnStyle}
        onClick={() =>
          updateTrain({
            currentStation: "Next Station",
            nextStation: "Destination",
            status: "On Time",
            delay: 0,
          })
        }
      >
        Arrived at Station
      </button>
      <hr></hr>
    </div>
  );
};
export default AdminPanel