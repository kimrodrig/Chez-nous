import React, { useState } from 'react'


function ReservationAdminPage({reservations}) {

    const [memberId, setMemberId] = useState(0)
    const [datetime, setDatetime] = useState(0)

    console.log(reservations[0].member?.name)

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
                    member_id: memberId,
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
            create reservations
            <form onSubmit={createReservation}>
                <div className="input-container ic2">
                    <input className="input" type="tel" name="phone" placeholder=" " onChange={(e)=>setMemberId(parseInt(e.target.value))}></input>
                    <div class="cut">
                        <label for="phone" class="placeholder">member id</label>
                    </div>
                </div>
                <button className="submit" type="submit">Create</button>
                <label>time</label>
                <input type="datetime-local" onChange={(e)=>setDatetime(e.target.value)}></input>
            </form>
            {reservations.map(reservation => 
                <div>
                    <div>{reservation.member?.name}</div>
                    <div>{reservation.datetime}</div>
                </div>
                )}
        </div>
    )
}

export default ReservationAdminPage