import React, {useState, useEffect} from 'react'
import ReservationSuccessful from './ReservationSuccessful';
import moment from 'moment';

function EditReservationCard({setEditingReservation, reservation, member, availableReservations}) {
    const [modifiedReservation, setModifiedReservation] = useState(reservation)
    const [other, setOther] = useState("")
    const [partySize, setPartySize] = useState(2)
    const [dietaryRestrictions, setDietaryRestrictions] = useState([])
    const [reservationSubmitted, setReservationSubmitted] = useState(false)
    const [time, setTime] = useState(reservation.datetime)

    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)
    const [isPescatarian, setIsPescatarian] = useState(false)
    const [isNoDairy, setIsNoDairy] = useState(false)
    const [isNoNuts, setIsNoNuts] = useState(false)
    const [isGlutenFree, setIsGlutenFree] = useState(false)

    function collectDietaries(){
        let dietaryArray = []
        if (isVegan){
            dietaryArray = [...dietaryArray, "vegan"]
        } if (isVegetarian){
            dietaryArray = [...dietaryArray, "vegetarian"]
        } if (isPescatarian){
            dietaryArray = [...dietaryArray, "pescatarian"]
        } if (isNoDairy){
            dietaryArray = [...dietaryArray, "no dairy"]
        } if (isNoNuts){
            dietaryArray = [...dietaryArray, "no nuts"]
        } if (isGlutenFree){
            dietaryArray = [...dietaryArray, "gluten free"]
        } if (other !== ""){
            dietaryArray = [...dietaryArray, other]
        } 
        setDietaryRestrictions(dietaryArray)
    }

    useEffect(()=>{
        collectDietaries();
    }, [isVegan, isVegetarian, isPescatarian, isNoDairy, isNoNuts, isGlutenFree, other])
    

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

    function cancelReservation(id){
        fetch(`/api/editreservation/${id}`, {
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
            <div className="px-8">
                <form onSubmit={()=>{}}>
                    <div className="flex pt-6 pb-6 justify-between">
                        <div className="px-1 mt-2.5 text-2xl font-['Soleil']">
                            time
                        </div>
                        <div className="h-[50px] w-36">
                            <select className="input" name="time" placeholder=" " onChange={(e)=>{setTime(e.target.value)}}>
                                <option value={reservation.datetime} selected>{moment.utc(reservation.datetime).format("h:mm A")}</option>
                                {availableReservations.map((res)=>{ 
                                    return <option value={res.datetime}>{moment.utc(res.datetime).format("h:mm A")}</option>
                                })
                                }
                            </select>
                        </div>
                    </div>

                    <div className="flex pt-6 pb-6 justify-between">
                        <div className="px-1 mt-2.5 text-2xl font-['Soleil']">
                            total guests
                        </div>
                        <div className="h-[50px] w-36">
                            <select className="input" name="party" placeholder=" " onChange={(e)=>{setPartySize(e.target.value)}}>
                                <option value="1">1</option>
                                <option value="2" selected>2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                    

                    <hr class="w-72 h-0.5 mx-auto my-2 border-0 rounded md:my-5 bg-gray-400"/> 
            
                    <div className="">
                        <div className="py-4 text-xl font-['Soleil'] uppercase tracking-wider">dietary restrictions
                        </div>
                        <div>
                            <div className="grid gap-4 grid-cols-2 grid-rows-3 mt-5">
                                <div className={isVegan ? "dietary-restriction-selected" : "dietary-restriction-unselected"} onClick={()=>setIsVegan(prev=>!prev)}>
                                    vegan
                                </div>
                                <div className={isVegetarian ? "dietary-restriction-selected" : "dietary-restriction-unselected"} onClick={()=>setIsVegetarian(prev=>!prev)}>
                                    vegarian
                                </div>
                                <div className={isPescatarian ? "dietary-restriction-selected" : "dietary-restriction-unselected"} onClick={()=>setIsPescatarian(prev=>!prev)}>
                                    pescatarian
                                </div>
                                <div className={isNoDairy ? "dietary-restriction-selected" : "dietary-restriction-unselected"} onClick={()=>setIsNoDairy(prev=>!prev)}>
                                    no dairy
                                </div>
                                <div className={isNoNuts ? "dietary-restriction-selected" : "dietary-restriction-unselected"} onClick={()=>setIsNoNuts(prev=>!prev)}>
                                    no nuts
                                </div>
                                <div className={isGlutenFree ? "dietary-restriction-selected" : "dietary-restriction-unselected"} onClick={()=>setIsGlutenFree(prev=>!prev)}>
                                    gluten free
                                </div>
                            </div>
                            <div className="input-container mt-4 mb-12">
                                <input className="input" type="text" name="other" placeholder=" " onChange={(e)=>{
                                    setOther(e.target.value);
                                    }}></input>
                                <div class="cut-down">
                                    <label for="other" class="placeholder">other dietary restrictions</label>
                                </div>
                            </div>

                            <hr class="w-72 h-0.5 mx-auto border-0 rounded md:my-3 bg-gray-400"/> 
                        </div>
                    </div>
                </form>    
                
                <div className="flex space-x-3">
                    <button className="submit" type="button" onClick={()=>{
                        setEditingReservation(false);
                    }}>back</button>
                    <button className="light-submit" type="submit" onClick={e=>handleSubmit(e)}>submit</button>
                </div>
            </div>
            }
        </div>

    )
}

export default EditReservationCard