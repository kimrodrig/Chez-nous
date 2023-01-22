import React from 'react'
import moment from 'moment'

function ReservationRow({reservation}) {
  return (
    <div>
        <tr>
            <td> {moment.utc(reservation.datetime).format("MMM DD, h:mm A")} 
            </td>
            <td className={reservation.member_id === 0 ? "available-cell" : "booked-cell"}>
              {reservation.member_id === 0 ?
              "available" :
              (reservation.member?.name + ', party of ' + reservation.party_size)
              }  
            </td>
            <td> {reservation.party_size} 
            </td>
        </tr>
    </div>
  )
}

export default ReservationRow