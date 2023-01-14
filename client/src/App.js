import Signup from './Home/Signup';
import Menu from './Home/Menu';
import About from './Home/About';
import Home from './Home/Home';
import Success from './Success';
import Unsubscribe from './Unsubscribe';
import SuccessfullyUnsubscribed from './SuccessfullyUnsubscribed';
import ReservationsMenu from './Reservations/ReservationsMenu';
import BookReservation from './Reservations/BookReservation';
import ModifyReservation from './Reservations/ModifyReservation';
import ReservationAdminPage from './Admin/ReservationAdminPage';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import {useEffect, useState} from 'react'
import logo from './logo.png'

function App() {
  
  const [date, setDate] = useState("january 17")
  const [reservations, setReservations] = useState([])

  useEffect(()=>{
    fetch('/api/reservations')
    .then(res=>res.json())
    .then(data => setReservations(data))
  }, [])

  const availableReservations = reservations.filter(reservation => reservation.member_id === 0)

  availableReservations.sort((a,b)=> 
    new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
  )
  
  return (
      
    <div className="App">
      <Router>
        
          <Link to="/">
            <img className="logo" src={logo} alt="logo"/>
            <span className="title">
            chez nous
            </span>
          </Link>

        <Routes>
        
          <Route path="/" element={<Home/>}>
            <Route index element={<Signup/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/reservations" element={<ReservationsMenu date={date} availableReservations={availableReservations}/>}/>
          </Route>
          
          <Route path="/success" element={<Success/>}/>
          <Route path="/unsubscribe" element={<Unsubscribe/>}/>
          <Route path="/successfullyunsubscribed" element={<SuccessfullyUnsubscribed/>}/>
          <Route path="/bookreservation" element={<BookReservation date={date} availableReservations={availableReservations}/>}/>
          <Route path="/modifyreservation" element={<ModifyReservation date={date} availableReservations={availableReservations}/>}/>
          <Route path="/reservationadminpage" element={<ReservationAdminPage setDate={setDate} reservations={reservations}/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
