import React from 'react'
import moment from 'moment'

function ReservationCard({reservation}) {
  return (
    <div class="submit">
        {reservation.member_id === 0 ?
        "available" :
        (reservation.member?.name + ', party of ' + reservation.party_size)
        } 
        <br/>
        {moment.utc(reservation.datetime).format("MMM DD, h:mm A")}
    </div>
  )
}

export default ReservationCard