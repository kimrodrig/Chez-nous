import React, {useState} from 'react'

function Signup({signupMember}) {

    const [phone, setPhone] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({})

    function submitInfo(e) {
        e.preventDefault();

        signupMember(name, phone, email)
    }

    return (

        <div className="p-10">
            <div className="subtitle">
                <span>
                you're invited to join us.
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