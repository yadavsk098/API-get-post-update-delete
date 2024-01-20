import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'


// data bejne ky ly 

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    //setuser context usercontext provider my define kiya hai

    const { setUser } = useContext(UserContext)


    const handleSubmit = (e) => {
        // yeh isly kiya kyuki submit karne py by defult value url k thru kahi na kahi challi jati hai
        e.preventDefault()
        setUser({ username, password })
    }
    return (
        <div>
            <h2>Login</h2>
            <input type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username'
            />
            {"  "}
            <input type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password ' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login