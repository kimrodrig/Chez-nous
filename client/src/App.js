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
import AdminMenu from './Admin/AdminMenu';
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
      
    <div className="App pb-10">
      <Router>
        
          <Link to="/">
            <img className="logo" src={logo} alt="logo"/>
            <div className="title -mt-3 -mb-2">
            chez nous
            </div> 
            <div className="uppercase font-sans tracking-widest mb-5">
            modern dining experience
            </div>
          </Link>

          <hr class="w-72 h-0.5 mx-auto my-2 border-0 rounded md:my-5 bg-gray-700"/>

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
          <Route path="/admin" element={<AdminMenu setDate={setDate} reservations={reservations}/>}/>
        </Routes>
      </Router>


      <hr class="w-48 h-0.5 mx-auto my-3 border-0 rounded md:my-5 bg-gray-700"/>
      
      <div class="flex justify-center space-x-2 text-gray-700 py-5">
          <a type="button" href="http://www.instagram.com/cheznousnyc">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-6 h-6">
              <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>
          </a>
      </div>

    </div>
  );
}

export default App;
