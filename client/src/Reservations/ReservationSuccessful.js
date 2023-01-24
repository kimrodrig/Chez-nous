import React from 'react'
import moment from 'moment'
import Hyphenated from 'react-hyphen';


function ReservationSuccessful({member, reservation}) {

    console.log(reservation)

    return (
        <div className="px-8 max-w-xl">
                <div className="subtitle font-sans">
                    thank you, {member?.name} 
                </div>
                <br/> 
                <div>
                    <p className="about-p">
                        your reservation at <strong> {moment.utc(reservation?.datetime).format("h:mm A")} for {reservation?.party_size} </strong>is made.
                    </p>
                    <p className="about-p mt-4">
                        {reservation?.dietary_restrictions ? `dietary restrictions: ${reservation?.dietary_restrictions.join(', ')}.` : ""}
                    </p>
                    <Hyphenated>
                    <p className="about-p mt-4">
                        please submit your deposit and come on time with cash.
                    </p>
                    <p className="about-p mt-4">
                        check your inbox for more information.
                    </p>
                    </Hyphenated>
                </div>
        </div>
    )
}

export default ReservationSuccessful