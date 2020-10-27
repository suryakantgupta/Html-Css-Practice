import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './CardPanel.css'
import axios from 'axios'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { fetchUsers } from './redux'
import { connect } from 'react-redux'
import { data } from 'jquery'

function Login(props) {

    /**
     * @description This gives us the state to store the user details for login
     * It is in the format in which api require the body so th whole state can be 
     * passed to the api.
     * 
     */

    const [details, setdetails] = useState({ user_email: '', user_pass: '' })


    //This verifies that the user is loged in or notby checking the token
    if (localStorage.token) {
        var initialeState = true
    } else {
        var initialeState = false
    }

    const [login, setlogin] = useState(initialeState)

    // console.log(login)

    /**
     * @description This handles the Login part of the Neoscrum 
     * it hits the api with the details provided by user
     *
     * @param {*} e is passed as to prevent the refreshing of page
     * 
     * @returns It sets the login condition to true and stores
     *  the token and name in localStorage
     */

    const submitHandler = async (e) => {
        e.preventDefault()
        await axios.post('http://180.149.241.208:3047/login', details).then(async (response) => {
            // console.log(response.data.message)
            // console.log(details)
            await props.fetchUsers(response.data.user_name)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("userName", response.data.user_name)
            setlogin(true)
        }).catch((err) => {
            alert(err.response.data.message)
        })
        // console.log(props.userData)
    }
    // useEffect(() => {
    //     if(localStorage.token == undefined){
    //         setlogin(true)
    //     }
    // })
    console.log(login)
    console.log(props.userData)
    // useEffect(() => {
    //     localStorage.setItem("token", props.userData.token)
    //     console.log(localStorage.token)
    //     if (localStorage.token) {
    //         setlogin(true)
    //     } else {
    //         setlogin(false)
    //     }
    // })


    return (
        <div id='cardcontain' className='text-center'>
            <h1 style={{ color: 'black' }}>Neo<span style={{ color: 'red' }}>Scrum</span></h1>
            <div className="card shadow" style={{ width: '22rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Login</h5>
                    <form onSubmit={submitHandler}>
                        <div className='form-group'>
                            {/* onChange={e => setdetails({ ...details, user_email: e.target.value })} */}
                            {/* Email input section */}
                            <input className='form-control inputformat' name='user_email' type='email' placeholder='Email *' value={details.user_email} onChange={e => setdetails({ ...details, user_email: e.target.value })} required />
                        </div>
                        <div className='form-group'>
                            {/* onChange={e => setdetails({ ...details, user_pass: e.target.value })} */}
                            {/* Password input section */}
                            <input className='form-control inputformat' name="user_pass" type='text' placeholder='Password *' value={details.user_pass} onChange={e => setdetails({ ...details, user_pass: e.target.value })} required />
                        </div>
                        <div className='form-group'>

                            {/* Login buttton */}
                            <button className="btn" type='submit' style={{ backgroundColor: '#252d7d', color: 'white' }}>Login</button>
                        </div>
                    </form>
                    <div className='text-left'>
                        <Link to='/registration'>
                            <a href='#'>Register Now</a>
                        </Link>
                    </div>
                    <div className='text-left'>
                    <Link to='/forgotpass'>
                        <a href='#'>Forgot Password</a>
                        </Link>
                    </div>
                </div>
            </div>
            {login && <Redirect to='/dashboard' />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: (data) => dispatch(fetchUsers(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
