import React, {useState} from 'react'
import BookReservation from './BookReservation';
import ReservationSuccessful from './ReservationSuccessful';
import moment from 'moment';
import {useNavigate} from 'react-router-dom';

function CreateReservationCard({selectedReservation, setSelectedEmptyReservationId, date}) {
    const [phone, setPhone] = useState(0)
    const [other, setOther] = useState("")
    const [partySize, setPartySize] = useState(2)
    const [dietaryRestrictions, setDietaryRestrictions] = useState([])
    const [member, setMember] = useState({})
    const [reservation, setReservation] = useState({})
    const [reservationSubmitted, setReservationSubmitted] = useState(false)
    const [showNameAndEmailField, setShowNameAndEmailField] = useState(false)
    const [error, setError] = useState("")

    const nav = useNavigate()

    function handleCheck(e){
        if (e.target.checked){
            setDietaryRestrictions([...dietaryRestrictions, e.target.value])
        } else {
            setDietaryRestrictions(dietaryRestrictions.filter(element => element !== e.target.value))
        }
    }

    function handleSubmit(e){
        e.preventDefault()
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
                res.json().then(member=>releaseOtherTimeSlot(member))
            } else if (res.status === 400){
                res.json().then(data=>setError(data.message))
                setShowNameAndEmailField(true)
            }
        })
    }

    function releaseOtherTimeSlot(member){
        setMember(member)

        fetch(`/api/editreservationwithmemberid/${member.id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                reservation: {
                    member_id: 0
                }
            })
        })
        .then(submitReservation(member.id))
    } 

    function submitReservation(id){
        const body = JSON.stringify({
            reservation: {
                dietary_restrictions: ((other === "") ? dietaryRestrictions : [...dietaryRestrictions, other]),
                party_size: partySize,
                member_id: id
            }
        })

        fetch(`/api/editreservation/${selectedReservation.id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: body
        })
        .then(res=> {if (res.status === 200) {
                res.json().then(data=>setReservation(data))
                setReservationSubmitted(true);
            } else {
                console.log("failure")
                // (res.json()).then(data=>setErrors(data.errors))
            }
        })
    }

    return (
        <div>
            { showNameAndEmailField ?
            <div className="subtitle" onClick={()=>{nav('/')}}>
                this phone number is
                not yet 
                on our list. <br></br>
                please register here first.
            </div>  :
            <div></div>
            }
            <div className="subtitle-larger">
                {date}
            </div>
            { reservationSubmitted ?
            <ReservationSuccessful member={member} reservation={reservation}/>
            :
            <div>
                <div className="gray-subtitle">
                    {moment.utc(selectedReservation.datetime).format("h:mm A")} 
                </div>
                <form onSubmit={()=>{}}>
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
                    <div className="input-container ic2">
                        <input className="input" type="tel" name="phone" placeholder=" " onChange={(e)=>setPhone(parseInt(e.target.value))}></input>
                        <div class="cut">
                            <label for="phone" class="placeholder">phone</label>
                        </div>
                    </div>
                    
                    <div className="dr-container">
                        <div className="gray-subtitle">dietary restrictions</div>
                        <div>
                            <div className="column">
                                <input type="checkbox" id="dr1" name="dr1" value="vegan" onChange={(e)=>handleCheck(e)}/>
                                <label for="dr1" className="label">vegan</label>
                                <input type="checkbox" id="dr2" name="dr2" value="vegetarian" onChange={(e)=>handleCheck(e)}/>
                                <label for="dr2" className="label">vegetarian</label>
                                <input type="checkbox" id="dr3" name="dr3" value="pescatarian" onChange={(e)=>handleCheck(e)}/>
                                <label for="dr3" className="label">pescatarian</label>
                            </div>
                            <div className="column">
                                <input type="checkbox" id="dr4" name="dr4" value="dairy" onChange={(e)=>handleCheck(e)}/>
                                <label for="dr4" className="label">no dairy</label>
                                <input type="checkbox" id="dr5" name="dr5" value="nuts" onChange={(e)=>handleCheck(e)}/>
                                <label for="dr5" className="label">no nuts</label>
                                <input type="checkbox" id="dr6" name="dr6" value="gluten" onChange={(e)=>handleCheck(e)}/>
                                <label for="dr6" className="label">no gluten</label> 
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
                    setSelectedEmptyReservationId(false);
                    return <BookReservation/>
                }}>Go back</button>
            </div>
            }
        </div>

    )
}

export default CreateReservationCard