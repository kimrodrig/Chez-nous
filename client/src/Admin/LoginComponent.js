import React, {useState} from 'react'

function LoginComponent({setUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function login(e){
        e.preventDefault()
        console.log(username, password)
        fetch('/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username:username, password:password }),
        })
        .then(res=> {if (res.status === 201){
                res.json().then(data => setUser(data))
            } else {
                (res.json()).then(error => setError(error.error))
            }
        })
    }
    
    return (
        <div>
            <form onSubmit={login}>
                <div className="input-container ic1">
                    <input className="input" type="text" name="username" placeholder=" " onChange={(e)=>setUsername(e.target.value)}></input>
                    <div class="cut">
                        <label for="name" class="placeholder">username</label>
                    </div>
                </div>
                <div className="input-container ic2">
                    <input className="input" type="password" name="password" placeholder=" " onChange={(e)=>setPassword(e.target.value)}></input>   
                    <div class="cut">
                        <label for="password" class="placeholder">password</label>
                    </div>
                </div>
                <div className="font-sans mt-5 -mb-3">
                    {error?.login}
                    {error?.password}
                </div>
                <button className="submit" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginComponent