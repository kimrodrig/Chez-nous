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
        <div className="pb-4">
            <div className="subtitle-larger">
                reservations {reservationsAreOpen ? "are open": "are now closed"} for {date}
            </div>
            { reservationsAreOpen ? 
            <div className="subtitle font-sans" onClick={()=>nav("/bookreservation")}>
                make a reservation
            </div>
            :
            <div className="subtitle font-sans">
                please join us for our next event.
                <br/>
                you'll hear from us, if you're on our list.
            </div>
            }
            <div className="subtitle font-sans" onClick={()=>nav("/modifyreservation")}>
                modify your reservation
            </div>
        </div>
    )
    }

export default ReservationsMenu