import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './CardPanel.css'
import axios from 'axios'
import { Link, Redirect, useHistory } from 'react-router-dom'


function Login() {


    const [details, setdetails] = useState({ user_email: '', user_pass: '' })

    if (localStorage.token) {
        var initialeState = true
    } else {
        var initialeState = false
    }

    const [login, setlogin] = useState(initialeState)

console.log(login)
    const submitHandler = async (e) => {
        e.preventDefault()
        await axios.post('http://180.149.241.208:3047/login', details).then((response) => {
            // console.log(response.data.message)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("user_name", response.data.user_name)
            setlogin(true)
        }).catch((err) => {
            alert(err.response.data.message)
        })
    }





    return (
        <div id='cardcontain' className='text-center'>
            <h1 style={{ color: 'black' }}>Neo<span style={{ color: 'red' }}>Scrum</span></h1>
            <div className="card shadow" style={{ width: '22rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Login</h5>
                    <form onSubmit={submitHandler}>
                        <div className='form-group'>
                            <input className='form-control inputformat' name='user_email' type='email' placeholder='Email *' value={details.user_email} onChange={e => setdetails({ ...details, user_email: e.target.value })} required />
                        </div>
                        <div className='form-group'>
                            <input className='form-control inputformat' name="user_pass" type='text' placeholder='Password *' value={details.user_pass} onChange={e => setdetails({ ...details, user_pass: e.target.value })} required />
                        </div>
                        <div className='form-group'>
                            <button className="btn" type='submit' style={{ backgroundColor: '#252d7d', color: 'white' }}>Login</button>
                        </div>
                    </form>
                    <div className='text-left'>
                        <Link to='/registration'>
                            <a href='#'>Register Now</a>
                        </Link>
                    </div>
                </div>
            </div>
            {login && <Redirect to='/dashboard' />}
        </div>
    )
}

export default Login
