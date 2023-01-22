import React, { useState } from 'react'
import ReservationRow from './ReservationRow'

function ReservationAdminPage({reservations}) {

    const [datetime, setDatetime] = useState(0)

    // console.log(reservations[0].member?.name)

    function createReservation(e) {
        e.preventDefault();

        fetch("/api/createreservation", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                reservation: {
                    member_id: 0,
                    datetime: datetime
                }
            })
        })
        .then(res=> {if (res.status === 201){
                // nav("/success")
            } else if (res.status === 400){
                // (res.json()).then(data=>setErrors(data.errors))
            }
        })
    }
    return (
        <div>
            create more reservations
            <form onSubmit={createReservation}>
                <input type="datetime-local" onChange={(e)=>setDatetime(e.target.value)}></input>
                <button className="submit" type="submit">Create</button>
            </form>
            <br/>
            <div>reservations:</div>
            <table>
                {reservations.map(reservation => 
                    <ReservationRow reservation={reservation}/>
                )}
            </table>

        </div>
    )
}

export default ReservationAdminPage