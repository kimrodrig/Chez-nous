import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import MailchimpSubscribe from "react-mailchimp-subscribe"


function Signup() {

    const [phone, setPhone] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({})
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const nav = useNavigate();

    const body = JSON.stringify({
        name: name,
        email: email,
        phone: phone
    })

    function parseNames(name) {
        const names = name.split(' ')
        const [first, ...last] = names
        setFirstName(first)
        setLastName(last.join(' '))
    }

    function postToMailChimp(body){
        const API_KEY = process.env.MAILCHIMP_API_KEY;
        const LIST_ID = process.env.MAILCHIMP_LIST_ID;
        const DATACENTER = process.env.MAILCHIMP_API_KEY.split("-")[1]

        const url = `https://"${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

        const data = {
            first_name: firstName,
            last_name: lastName,
            email_address: email,
            status: "subscribed",
        };

        const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Basic ${base64ApiKey}`,
        };

        return {
            url,
            data,
            headers,
        };
    }

    function submitInfo(e) {
        e.preventDefault();

        
        // fetch("/api/join", {
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         member: {
        //             name: name,
        //             email: email,
        //             phone: phone
        //         }
        //     })
        // })
        // .then(res=> {if (res.status === 201){
        //         nav("/success")
        //     } else if (res.status === 400){
        //         (res.json()).then(data=>setErrors(data.errors))
        //     }
        // })
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