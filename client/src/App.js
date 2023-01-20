import Signup from './Home/Signup';
import Menu from './Home/Menu';
import About from './Home/About';
import Gallery from './Home/Gallery';
import Success from './Success';
import Video from './Video';
import Unsubscribe from './Unsubscribe';
import SuccessfullyUnsubscribed from './SuccessfullyUnsubscribed';
import ReservationsMenu from './Reservations/ReservationsMenu';
import BookReservation from './Reservations/BookReservation';
import ModifyReservation from './Reservations/ModifyReservation';
import AdminMenu from './Admin/AdminMenu';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import {useEffect, useState} from 'react'
import Layout from './Layouts/Layout';
import NavbarLayout from './Layouts/NavbarLayout';

function App() {
  
  const [date, setDate] = useState("january 29")
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
      <div>
        <div>
          <Router>
            <Routes>
              <Route index element={<Video/>}/>
              <Route element={<NavbarLayout/>}>
                <Route path="/reservations" element={<ReservationsMenu date={date} availableReservations={availableReservations}/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/success" element={<Success/>}/>
                <Route path="/unsubscribe" element={<Unsubscribe/>}/>
                <Route path="/successfullyunsubscribed" element={<SuccessfullyUnsubscribed/>}/>
                <Route path="/bookreservation" element={<BookReservation date={date} availableReservations={availableReservations}/>}/>
                <Route path="/modifyreservation" element={<ModifyReservation date={date} availableReservations={availableReservations}/>}/>
              </Route>   
              <Route element={<Layout/>}>         
                <Route path="/admin" element={<AdminMenu setDate={setDate} reservations={reservations}/>}/>
              </Route>   

            </Routes>

          </Router>
          
        </div>
      </div>
    </div>
  );
}

export default App;
