import React, {useState} from 'react'
import ReservationSuccessful from './ReservationSuccessful';
import moment from 'moment';

function EditReservationCard({setEditingReservation, reservation, member, availableReservations, cancelReservation}) {
    const [modifiedReservation, setModifiedReservation] = useState(reservation)
    const [other, setOther] = useState("")
    const [partySize, setPartySize] = useState(2)
    const [dietaryRestrictions, setDietaryRestrictions] = useState([])
    const [reservationSubmitted, setReservationSubmitted] = useState(false)
    const [time, setTime] = useState(reservation.datetime)

    function handleCheck(e){
        if (e.target.checked){
            setDietaryRestrictions([...dietaryRestrictions, e.target.value])
        } else {
            setDietaryRestrictions(dietaryRestrictions.filter(element => element !== e.target.value))
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        handleReservationSubmission();
    }

    function submitNewReservation(){
        fetch('/api/getreservationbytime', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                datetime: time
            })
        }).then(res=> {if (res.status === 200) {
            res.json().then(res => submitReservation(res.id))
        } else {
            console.log("failure")
            // (res.json()).then(data=>setErrors(data.errors))
        }
    })
    }

    function handleReservationSubmission(){
        if (reservation.datetime === time){
            submitReservation(reservation.id)
        } else {
            cancelReservation(reservation.id)
            submitNewReservation()
        }
    }

    const body = JSON.stringify({
        reservation: {
            member_id: member.id,
            dietary_restrictions: ((other === "") ? dietaryRestrictions : [...dietaryRestrictions, other]),
            party_size: partySize,
        }
    })

    function submitReservation(id){
        fetch(`/api/editreservation/${id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: body
        })
        .then(res=> {if (res.status === 200) {
                res.json().then(data =>
                    setModifiedReservation(data)).then(
                    setReservationSubmitted(true))
            } else {
                console.log("failure")
                // (res.json()).then(data=>setErrors(data.errors))
            }
        })
    }

    return (
        <div>
            <div className="subtitle-larger">
                {/* {date} */}
            </div>
            { reservationSubmitted ?
            <ReservationSuccessful member={member} reservation={modifiedReservation}
            // datetime={selectedReservation.datetime}
            />
            :
            <div>
                <form onSubmit={()=>{}}>

                    <div className="input-container ic2">
                        <select className="input" name="time" placeholder=" " onChange={(e)=>{setTime(e.target.value)}}>
                            <option value={reservation.datetime} selected>{moment.utc(reservation.datetime).format("h:mm A")}</option>
                            {availableReservations.map((res)=>{ 
                                return <option value={res.datetime}>{moment.utc(res.datetime).format("h:mm A")}</option>
                            })
                            }
                        </select>
                        <div class="cut">
                            <label for="time" class="placeholder">time</label>
                        </div>
                    </div>

                    <div className="input-container ic2">
                        <select className="input" name="party" placeholder=" " onChange={(e)=>{setPartySize(e.target.value)}}>
                            <option value="2" selected>2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <div class="cut">
                            <label for="party" class="placeholder">party of</label>
                        </div>
                    </div>
                    
                    <div className="dr-container">
                        <div className="gray-subtitle">dietary restrictions</div>
                        <div>
                            <div className="column">
                                <input type="checkbox" id="dr1" name="dr1" value="vegan" onChange={(e)=>handleCheck(e)}/>
                                <label for="dr1" className="label">vegan </label>
                                <input type="checkbox" id="dr2" name="dr2" value="vegetarian" onChange={(e)=>handleCheck(e)}/>
                                <label for="dr2" className="label">vegetarian </label>
                                <input type="checkbox" id="dr3" name="dr3" value="pescatarian" onChange={(e)=>handleCheck(e)}/>
                                <label for="dr3" className="label">pescatarian </label>
                            </div>
                            <div className="column">
                                <input type="checkbox" id="dr4" name="dr4" value="dairy" onChange={(e)=>handleCheck(e)}/>
                                <label for="dr4" className="label">no dairy </label>
                                <input type="checkbox" id="dr5" name="dr5" value="nuts" onChange={(e)=>handleCheck(e)}/>
                                <label for="dr5" className="label">no nuts </label>
                                <input type="checkbox" id="dr6" name="dr6" value="gluten" onChange={(e)=>handleCheck(e)}/>
                                <label for="dr6" className="label">no gluten </label> 
                            </div>  
                            <div className="input-container ic2">
                                <input className="input" type="tel" name="phone" placeholder=" " onChange={(e)=>{
                                    setOther(e.target.value);
                                    }}></input>
                                <div class="cut">
                                    <label for="other" class="placeholder">other dietary restrictions</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="submit" type="submit" onClick={e=>handleSubmit(e)}>Submit</button>
                </form>   
                
                <button className="submit" type="button" onClick={()=>{
                    // setSelectedEmptyReservationId(false);
                    setEditingReservation(false)
                }}>Go back</button>
            </div>
            }
        </div>

    )
}

export default EditReservationCard