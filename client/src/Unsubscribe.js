import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Unsubscribe() {

    const [phone, setPhone] = useState(0)
    const [id, setId] = useState(0)
    const [error, setError] = useState("")
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
                res.json().then(member=>
                    fetch(`/api/unsubscribe/${member.id}`, {
                        method: "DELETE",
                    })
                ).then(nav("/successfullyunsubscribed"))
            } else if (res.status === 400){
                res.json().then(data=>setError(data.message))
            }
        })
    }


    return (
        <div>
            <div className='subtitle'>
                enter your phone number to unsubscribe
            </div>
            <form onSubmit={submitPhoneNumber}>
                <div className="input-container ic1">
                    <input className="input" type="text" name="name" placeholder=" " onChange={(e)=>setPhone(e.target.value)}></input>
                    <div class="cut">
                        <label type="tel" for="phone" class="placeholder">phone {error}</label>
                    </div>
                </div>
                <button className="submit" type="submit">Unsubscribe</button>
            </form>
        </div>
    )
}

export default Unsubscribe