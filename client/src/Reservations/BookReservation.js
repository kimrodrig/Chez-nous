import React, {useState} from 'react'
import TimeSlotCard from './TimeSlotCard'
import CreateReservationCard from './CreateReservationCard'

function BookReservation({date, availableReservations}) {
    const [selectedEmptyReservationId, setSelectedEmptyReservationId] = useState(false)

    return (
        <div>
            { selectedEmptyReservationId 
            ?
            <CreateReservationCard selectedReservation={availableReservations.filter(res => res.id === selectedEmptyReservationId)[0]} setSelectedEmptyReservationId={setSelectedEmptyReservationId} date={date}/>
            :
            <div className="container">
                <div className="subtitle-larger">
                    book a reservation for {date}
                </div>
                <div className="subtitle">
                    available times:
                </div>
                {availableReservations.map(res => <TimeSlotCard reservation={res} setSelectedEmptyReservationId={setSelectedEmptyReservationId}/>)}
            </div>
            }
        </div>
    )
    }

export default BookReservation