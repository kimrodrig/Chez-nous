import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function ReservationsMenu({date, availableReservations}) {
    const nav = useNavigate();
    const [reservationsAreOpen, setReservationsAreOpen] = useState(true)

    useEffect(() => {
        if (availableReservations.length === 0){
            setReservationsAreOpen(false)
        } else setReservationsAreOpen(true)
    }, [availableReservations])

    return (
        <div className="justify-center">
            <div className="subtitle-larger">
                reservations {reservationsAreOpen ? "are open": "are now closed"} for {date}
            </div>
            { reservationsAreOpen ? 
            <button className="make-res" onClick={()=>nav("/reservations/bookreservation")}>
                make a reservation
            </button>
            :
            <div className="subtitle font-sans">
                please join us for our next event.
                <br/>
                you'll hear from us, if you're on our list.
            </div>
            }
            <button className="modify-res" onClick={()=>nav("/reservations/modifyreservation")}>
                modify your reservation
            </button>
            
        </div>
    )
    }

export default ReservationsMenu