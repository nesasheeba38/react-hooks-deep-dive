import React, { useContext } from 'react'
import { TrainContext } from './TrainContext'

const TrainStatus = () => {
    const{trains,selectedTrainId}=useContext(TrainContext)

    const train=trains.find((t)=>t.id===selectedTrainId);
    if(!train) return <p>Please select the train to view status</p>
  return (
    <div style={{
        padding: "15px",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        width: "300px",
        margin: "0 auto 20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}>
    <h2>{train.trainName} {train.trainNumber}</h2>
    <p>Train Status:{train.status}</p>
    <p>Train delay:{train.delay}</p>
    <p>Current Station:{train.currentStation}</p>
    <p>Next Station: {train.nextStation}</p>
    </div>
  )
}

export default TrainStatus
