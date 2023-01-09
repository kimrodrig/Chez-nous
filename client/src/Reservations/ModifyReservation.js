import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import EditReservationCard from './EditReservationCard'
import moment from 'moment'

function ModifyReservation() {
    
        const [member, setMember] = useState({})
        const [phone, setPhone] = useState(0)
        const [error, setError] = useState("")
        const [alert, setAlert] = useState("")
        const [reservation, setReservation] = useState(false)
        const [reservationIsCancelled, setReservationIsCancelled] = useState(false)
        const [editingReservation, setEditingReservation] = useState(false)
        const nav = useNavigate();
    
    function submitPhoneNumber(e){
        e.preventDefault();
        fetch("/api/getmemberbyphone", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                member: {
                    phone: phone
                }
            })
        }).then(res=> {
            if (res.status === 200){
                res.json().then(member=>{
                    fetch(`/api/members/${member.id}`) 
                    .then(res=>res.json()).then(data=>{
                        setMember(data);
                        if (!data.reservation) {
                            setAlert("no reservation found")
                        } else {
                            setReservation(data.reservation)
                        }
                    })
                })
            } else if (res.status === 400){
                res.json().then(data=>setError(data.message))
            }
        })
    }

    console.log(member)

    function cancelReservation(){
        fetch(`/api/editreservation/${reservation.id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                reservation: {
                    member_id: 0,
                    dietary_restrictions: [],
                    party_size: null,
                }
            })
        })
        .then(res=> {if (res.status === 200) {
                setReservationIsCancelled(true)
            } else {
                console.log("failure")
                // (res.json()).then(data=>setErrors(data.errors))
            }
        })
    }

    if (reservationIsCancelled){
        return (
            <div className="subtitle">
                reservation successfully cancelled
            </div>
        )
    } else if (editingReservation) {
        return (
            <EditReservationCard setEditingReservation={setEditingReservation} reservation={reservation} member={member}/>
        )
    } else return (
        <div>
            { alert !== "" ?
            <div>
                <div className="subtitle-larger">{alert}</div>
                <div className="subtitle" onClick={()=>nav("/reservations")}>make a reservation</div>
            </div> :
            <div></div>
            }
            
            { (reservation) ? 
            <div className="container">
                <div className="subtitle">{member.name}, you have a reservation at {moment.utc(reservation.datetime).format("h:mm A")} for {reservation.party_size}
                </div>
                <button className="submit" type="submit" onClick={()=>setEditingReservation(true)}>Edit reservation</button>
                <button className="submit" type="submit" onClick={()=>cancelReservation()}>Cancel reservation</button>
            </div>
            :
            <div>
                <form onSubmit={submitPhoneNumber}>
                    <div className="input-container ic1">
                        <input className="input" type="text" name="name" placeholder=" " onChange={(e)=>setPhone(e.target.value)}></input>
                        <div class="cut">
                            <label type="tel" for="phone" class="placeholder">{(error === "") ? "phone" : "phone " + error}</label>
                        </div>
                    </div>
                    <button className="submit" type="submit">Find my reservation</button>
                </form>
            </div>
            }
            
        </div>
    )
}

export default ModifyReservation