import React, {useEffect, useState} from 'react'
import BookReservation from './BookReservation';
import ReservationSuccessful from './ReservationSuccessful';
import moment from 'moment';

function CreateReservationCard({selectedReservation, setSelectedEmptyReservationId, date}) {
    const [phone, setPhone] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [other, setOther] = useState("")
    const [partySize, setPartySize] = useState(2)
    const [dietaryRestrictions, setDietaryRestrictions] = useState([])
    const [member, setMember] = useState({})
    const [reservation, setReservation] = useState({})
    const [reservationSubmitted, setReservationSubmitted] = useState(false)
    const [showNameAndEmailField, setShowNameAndEmailField] = useState(false)
    const [error, setError] = useState("")
    const [errors, setErrors] = useState({})

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
        e.preventDefault()
        if (showNameAndEmailField) {
            signupMember()
        } else {
            findMember()
        }   
    }

    function findMember(){
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
                dietary_restrictions: dietaryRestrictions,
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
        setShowNameAndEmailField(false)
    }

    function signupMember(){
        fetch("/api/join", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                member: {
                    name: name,
                    email: email,
                    phone: phone
                }
            })
        })
        .then(res=> {if (res.status === 201){
                res.json().then(data => setMember(data)).then(submitReservation())
            } else if (res.status === 400){
                (res.json()).then(data=>setErrors(data.errors))
            }
        })
    }
    
    return (
        <div>
            { reservationSubmitted ?
            <ReservationSuccessful member={member} reservation={reservation}/>
            :
            <div>
                <div className="pt-4 text-2xl font-['Soleil'] uppercase tracking-wider">
                    {date}
                </div>
                <div className="subtitle-larger font-['Soleil'] tracking-wider">
                    {moment.utc(selectedReservation.datetime).format("h:mm A")} 
                </div>

                
                <div className="px-8 pt-0.5">
                    { showNameAndEmailField ? 
                    <div className="subtitle font-sans">
                        this phone number is not yet on our list.
                    </div> :
                    <div></div>
                    }
                    <form onSubmit={()=>{}}>
                        <div className="input-container ic2">
                            <input className="input" type="tel" name="phone" placeholder=" " onChange={(e)=>setPhone(parseInt(e.target.value))}></input>
                            <div class="cut">
                                <label for="phone" class="placeholder">phone</label>
                            </div>
                        </div>
                        <div>{errors.phone}</div>
                        { showNameAndEmailField ?
                            <div>
                                <div className="input-container ic2">
                                    <input className="input" type="text" name="name" placeholder=" " onChange={(e)=>setName(e.target.value)}></input>
                                    <div class="cut">
                                        <label for="name" class="placeholder">name</label>
                                    </div>
                                </div>
                                <div className="font-sans">{errors.name}</div>

                                <div className="input-container ic2">
                                    <input className="input" type="text" name="email" placeholder=" " onChange={(e)=>setEmail(e.target.value)}></input>
                                    <div class="cut">
                                        <label for="email" class="placeholder">email</label>
                                    </div>
                                </div>
                                <div className="font-sans">{errors.email}</div>

                            </div>  :
                            <div></div>
                        }
                        <div className="flex pt-6 pb-6 justify-between">
                            <div className="px-1 font-['Soleil'] mr-10 mt-2.5 text-2xl">
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
                            <div className="py-4 text-xl font-['Soleil'] uppercase tracking-wider">dietary restrictions</div>
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
                            setSelectedEmptyReservationId(false);
                            return <BookReservation/>
                        }}>back</button>
                        <button className="light-submit" type="submit" onClick={e=>handleSubmit(e)}>submit</button>
                    </div>
                </div>
            </div>
            }
        </div>

    )
}

export default CreateReservationCard