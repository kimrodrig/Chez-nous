import React, { useState } from 'react'
import moment from 'moment'

function ReservationSuccessful({member, reservation}) {

    console.log(reservation)
    
    return (
        <div className="container">
            <div className="subtitle">
                thank you, {member.name} 
            </div>
            <div className="subtitle">
                your reservation at {moment.utc(reservation?.datetime).format("h:mm A")} for {reservation?.party_size} is made. please submit your deposit and come on time, with cash. you'll hear from us soon.
            </div>
        </div>
    )
}

export default ReservationSuccessful