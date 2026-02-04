import { createContext, useState } from "react";

export const TrainContext=createContext()

export const TrainProvider=({children})=>{
  const[selectedTrainId,setSelectedTrainId]=useState(null)
  const[trains,setTrains]=useState([
  {
    id:1,
    trainName:"vaikai Express",
    trainNumber:2345,
    currentStation:"madurai",
    nextStation:"dindigul",
    status:"On Time",
    delay:0
  },
  {
    id:2,
    trainName:"Chennai Express",
    trainNumber:5678,
    currentStation:"Chennai",
    nextStation:"Vellore",
    status:"On Time",
    delay:0
  },
  {
    id:3,
    trainName:"Mumbai Express",
    trainNumber:5678,
    currentStation:"Mumbai",
    nextStation:"Pune",
    status:"On Time",
    delay:0
  }]);
  return(
  <TrainContext.Provider value={{trains,setTrains,selectedTrainId,setSelectedTrainId}}>
  {children}
  </TrainContext.Provider>
  )
}