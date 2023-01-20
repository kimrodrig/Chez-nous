import React from 'react'
import moment from 'moment'

function ReservationSuccessful({member, reservation}) {

    console.log(reservation)

    return (
        <div className="p-3 max-w-xl">
            <div className="subtitle font-sans">
                thank you, {member.name} 
            </div>
            <div class="subtitle font-sans text-justify">
                your reservation at <strong> {moment.utc(reservation?.datetime).format("h:mm A")} for {reservation?.party_size} </strong>is made. please submit your deposit and come on time with cash. check your inbox for more information.
            </div>
        </div>
    )
}

export default ReservationSuccessful