import logo from './logo.svg';
import './App.css';
import SeatAvailabilityDashboardByUseMemo from './Components/SeatAvailabilityDashboardByUseMemo';
import QuizAppByUseReducer from './Components/QuizAppByUseReducer';
import { TrainProvider } from './Components/SeatBookingByUseContext/TrainContext';
import TrainList from './Components/SeatBookingByUseContext/TrainList';
import TrainStatus from './Components/SeatBookingByUseContext/TrainStatus';
import AdminPanel from './Components/SeatBookingByUseContext/AdminPanel';
import AutoShieldRegen from './Components/AutoShieldRegenByUseEfect';
function App() {
  return (
  <div>
  {/* <AutoShieldRegen/> */}
  {/* <TrainProvider>
  <TrainList/>
  <TrainStatus/>
  <AdminPanel/>
  </TrainProvider> */}
  {/* <SeatAvailabilityDashboardByUseMemo/> */}
  <QuizAppByUseReducer/>
  </div>
  );
}

export default App;
