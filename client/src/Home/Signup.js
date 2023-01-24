import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const [phone, setPhone] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({})

    const nav = useNavigate();

    function submitInfo(e) {
        e.preventDefault();


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
                nav("/success")
            } else if (res.status === 400){
                (res.json()).then(data=>setErrors(data.errors))
            }
        })
    }

    return (

        <div className="pb-5 w-80">
            <div className="subtitle">
                <span>
                join our mailing list. 
                </span> 
            </div>
            <form onSubmit={submitInfo}>
                <div className="input-container ic1">
                    <input className="input" type="text" name="name" placeholder=" " onChange={(e)=>setName(e.target.value)}></input>
                    <div class="cut">
                        <label for="name" class="placeholder">{(errors.name === undefined) ? "name" : errors.name}</label>
                    </div>
                </div>
                <div className="input-container ic2">
                    <input className="input" type="email" name="email" placeholder=" " onChange={(e)=>setEmail(e.target.value)}></input>   
                    <div class="cut">
                        <label for="email" class="placeholder">{(errors.email === undefined) ? "email" : errors.email}</label>
                    </div>
                </div>
                <div className="input-container ic2">
                    <input className="input" type="tel" name="phone" placeholder=" " onChange={(e)=>setPhone(parseInt(e.target.value))}></input>
                    <div class="cut">
                        <label for="phone" class="placeholder">phone {errors.phone ? "number must be valid" : ""}</label>
                    </div>
                </div>
                <button className="submit" type="submit">submit</button>
            </form>
            
        </div>

        
    )
}

export default Signup