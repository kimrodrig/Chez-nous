import React, {useState} from 'react'
import TimeSlotCard from './TimeSlotCard'
import CreateReservationCard from './CreateReservationCard'

function BookReservation({date, availableReservations}) {
    const [selectedEmptyReservationId, setSelectedEmptyReservationId] = useState(false)
    const [isSelected, setIsSelected] = useState(0)

    return (
        <div>
            { selectedEmptyReservationId 
            ?
            <CreateReservationCard selectedReservation={availableReservations.filter(res => res.id === selectedEmptyReservationId)[0]} setSelectedEmptyReservationId={setSelectedEmptyReservationId} date={date}/>
            :
            <div className="px-8 max-w-xl">
                <div className="subtitle-larger">
                    book a reservation for {date}
                </div>
                <div className="subtitle font-sans">
                    available times:
                </div>
                <div className="grid grid-cols-2 gap-x-3">
                    {availableReservations.map(res => <TimeSlotCard reservation={res} setSelectedEmptyReservationId={setSelectedEmptyReservationId}/>)}
                </div>
            </div>
            }
            
        </div>
    )
    }

export default BookReservation