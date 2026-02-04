import { useMemo, useState } from "react";

const totalSeats = {
  Silver: 30,
  Gold: 20,
  Diamond: 10
};


const bookedSeats = {
  Silver: [2, 5, 8, 15],
  Gold: [1, 4, 7],
  Diamond: [3, 6]
};

const SeatAvailabilityDashboardByUseMemo = () => {
  const [section, setSection] = useState("");
  const [theme, setTheme] = useState("light"); 

    const availableSeats =useMemo(() => {
    console.log("Calculating available seats...");

    const seats = [];
    const total = totalSeats[section];
    const booked = bookedSeats[section];

    for (let i = 1; i <= total; i++) {
      if (!booked.includes(i)) {
        seats.push(i);
      }
    }
    return seats;
  },[section]);  

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
      }}>
        
      <h2>🎟️ Movie  Seat Booking</h2>

      <div>
      <label>Select Section:</label>
      <select value={section}onChange={(e) => setSection(e.target.value)}>
        <option>Select Seat Type</option>
        <option value="Silver">Silver</option>
        <option value="Gold">Gold</option>
        <option value="Diamond">Diamond</option>
      </select>
      </div>
      <br /><br />

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>

      <h3>Available Seats ({section})</h3>
      
      <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          width: "650px"
        }}>
        {availableSeats.map((seat) => (
          <div
            key={seat}
            style={{
              padding: "10px 16px",
              border: "1px solid black",
              borderRadius: "6px",
              backgroundColor: "#e0ffe0"
            }}>
            Seat {seat}
          </div>
        ))}
      </div>
    <hr></hr>
    </div>
  );
};

export default SeatAvailabilityDashboardByUseMemo;
