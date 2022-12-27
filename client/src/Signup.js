import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState(0)
    const [errors, setErrors] = useState({})

    const nav = useNavigate();

    const body = JSON.stringify({
        name: name,
        email: email,
        phone: phone
    })

    console.log(errors)
    console.log(errors.name)

    function submitInfo(e) {
        e.preventDefault();

        fetch("http://localhost:3000/members", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone
            })
        })
        .then(res=> {if (res.status === 201){
                nav("/success")
            } else if (res.status === 400){
                (res.json()).then(data=>setErrors(data.errors))
            }
        })
    }

    return (
        <div>
            <div className="subtitle">
                <span>
                You're invited to join us.
                </span> 
            </div>
            <form onSubmit={submitInfo}>
                <div className="input-container ic1">
                    <input className="input" type="text" name="name" placeholder=" " onChange={(e)=>setName(e.target.value)}></input>
                    <div class="cut">
                        <label for="name" class="placeholder">name {errors.name}</label>
                    </div>
                </div>
                <div className="input-container ic2">
                    <input className="input" type="email" name="email" placeholder=" " onChange={(e)=>setEmail(e.target.value)}></input>   
                    <div class="cut">
                        <label for="email" class="placeholder">email {errors.email}</label>
                    </div>
                </div>
                <div className="input-container ic2">
                    <input className="input" type="tel" name="phone" placeholder=" " onChange={(e)=>setPhone(parseInt(e.target.value))}></input>
                    <div class="cut">
                        <label for="phone" class="placeholder">phone {errors.phone ? "number must be valid" : ""}</label>
                    </div>
                </div>
                <button className="submit" type="submit">Submit</button>
            </form>
            
        </div>

        
    )
}

export default Signup