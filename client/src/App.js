import Signup from './Signup';
import Success from './Success';
import Unsubscribe from './Unsubscribe';
import SuccessfullyUnsubscribed from './SuccessfullyUnsubscribed';
import ReservationsMenu from './Reservations/ReservationsMenu';
import BookReservation from './Reservations/BookReservation';
import ModifyReservation from './Reservations/ModifyReservation';
import ReservationAdminPage from './Reservations/ReservationAdminPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import {useEffect, useState} from 'react'

function App() {
  
  const [date, setDate] = useState("january 3")
  const [reservations, setReservations] = useState([])

  useEffect(()=>{
    fetch('/api/reservations')
    .then(res=>res.json())
    .then(data => setReservations(data))
  }, [])

  const availableReservations = reservations.filter(reservation => reservation.member_id === 0)

  return (
    <div className="App">
      <div>
        <div className="logo">
        𓂀
        </div>
        <span className="title">
        chez nous
        </span>
      </div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Signup/>}>
          </Route>
          <Route path="/success" element={<Success/>}>
          </Route>
          <Route path="/unsubscribe" element={<Unsubscribe/>}>
          </Route>
          <Route path="/successfullyunsubscribed" element={<SuccessfullyUnsubscribed/>}>
          </Route>
          <Route path="/reservations" element={<ReservationsMenu date={date} availableReservations={availableReservations}/>}>
          </Route>
          <Route path="/bookreservation" element={<BookReservation date={date} availableReservations={availableReservations}/>}>
          </Route>
          <Route path="/modifyreservation" element={<ModifyReservation date={date}/>}>
          </Route>
          <Route path="/reservationadminpage" element={<ReservationAdminPage setDate={setDate}/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
