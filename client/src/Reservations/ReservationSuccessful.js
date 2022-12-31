import React, { useState } from 'react'
import moment from 'moment'

function ReservationSuccessful({member}) {

    
    return (
        <div className="container">
            <div className="subtitle">
                thank you, {member.name} 
            </div>
            <div className="subtitle">
                your reservation at {moment.utc(member.reservation?.datetime).format("h:mm A")} for {member.reservation?.party_size} is made. please submit your deposit and come on time, with cash. you'll hear from us soon.
            </div>
        </div>
    )
}

export default ReservationSuccessful