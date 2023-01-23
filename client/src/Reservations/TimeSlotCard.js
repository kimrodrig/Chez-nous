import React from 'react'
import moment from 'moment'

function TimeSlotCard({reservation, setSelectedEmptyReservationId}) {

    let time = ""
    if (reservation.datetime !== null) {
        time = moment.utc(reservation.datetime).format("h:mm A");
    }

    return (
        <div>
            <button className="timeslot lowercase tracking-wide" onClick={()=>setSelectedEmptyReservationId(reservation.id)}>
                {time}
            </button>
        </div>
    )
}

export default TimeSlotCard