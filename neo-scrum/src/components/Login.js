
import {TextField} from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './CardPanel.css'
import axios from 'axios'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { fetchUsers } from './redux'
import { connect } from 'react-redux'
import { data } from 'jquery'
import * as ReactBootstrap from 'react-bootstrap'

function Login(props) {

    /**
     * @description This gives us the state to store the user details for login
     * It is in the format in which api require the body so th whole state can be 
     * passed to the api.
     * 
     */

    const [details, setdetails] = useState({ user_email: '', user_pass: '' })
    const [eror, seteror] = useState({ peror: false, eeror: false })

    //This verifies that the user is loged in or notby checking the token
    if (localStorage.token) {
        var initialeState = true
    } else {
        var initialeState = false
    }

    const [login, setlogin] = useState({inlog:initialeState,spin:false})

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
        setlogin({...login,spin:true})
        await axios.post('http://180.149.241.208:3047/login', details).then(async (response) => {
            // console.log(response.data.message)
            // console.log(details)
            
            await props.fetchUsers(response.data.user_name)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("userName", response.data.user_name)
            
            setlogin({...login,inlog:true})
        }).catch((err) => {
            alert(err.response.data.message)
        })
        setlogin({...login,spin:false})
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






/**
 * @description This function validates the email Provided by the user
 * 
 * @returns It returns the appropriate erors if validation fails
 */


const bluremailFunction = () => {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let str = details.user_email
    if (str == '') {
        seteror({ ...eror, eeror: true })
    }
    else if (pattern.test(str)) {
        seteror({ ...eror, eeror: false })
    } else {
        seteror({ ...eror, eeror: true })
    }
}


/**
* @description This function validates the Password Provided by the user
* 
* @returns It returns the appropriate erors if validation fails
*/

const blurPassValidator = () => {
if (details.user_pass == '') {
    seteror({...eror,peror:true})
} else {
    if (details.user_pass < 8 || details.user_pass > 12) {
        seteror({...eror,peror:true})
    } else {
        let alphanumeric = "^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$";
        if (details.user_pass.match(alphanumeric)) {
            seteror({...eror,peror:false})
        } else {
            seteror({...eror,peror:true})
        }
    }
}
}








    return (
        <React.Fragment>
        {!login.spin && <div id='cardcontain' className='text-center'>
            <h1 style={{ color: 'black' }}>Neo<span style={{ color: 'red' }}>Scrum</span></h1>
            <div className="card shadow" style={{ width: '22rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Login</h5>
                    <form onSubmit={submitHandler}>
                        <div className='form-group'>
                            {/* onChange={e => setdetails({ ...details, user_email: e.target.value })} */}
                            {/* Email input section */}
                            <TextField fullWidth label="Email"
                                helperText={eror.eeror && 'Mail should be in format abc@gmail.com'}
                                value={details.user_email} onChange={e => setdetails({ ...details, user_email: e.target.value })}
                                error={eror.eeror}
                                onBlur={bluremailFunction}
                            />
                            {/* <input className='form-control inputformat' name='user_email' type='email' placeholder='Email *' value={details.user_email} onChange={e => setdetails({ ...details, user_email: e.target.value })} required /> */}
                        </div>
                        <div className='form-group'>
                            {/* onChange={e => setdetails({ ...details, user_pass: e.target.value })} */}
                            {/* Password input section */}
                            <TextField fullWidth label="Password"
                                helperText={eror.peror && 'Password should be AlphaNumeric with special character'}
                                value={details.user_pass} onChange={e => setdetails({ ...details, user_pass: e.target.value })}
                                error={eror.peror}
                                onBlur={blurPassValidator}/>
                            {/* <input className='form-control inputformat' name="user_pass" type='text' placeholder='Password *' value={details.user_pass} onChange={e => setdetails({ ...details, user_pass: e.target.value })} required /> */}
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
            {login.inlog && <Redirect to='/dashboard' />}
        </div>}
        {login.spin && <div style={{display:'grid', height:'100vh',width:'100vw',placeItems:"center"}}><ReactBootstrap.Spinner animation='border'/></div>}
        </React.Fragment>
    )
}


/**
 * @description  This functions handles  the redux part of the login page
 * it sends and receive data from redux to to props which can be used by props
 * @param {*} state is passed as parameter it is used to pass the state from 
 * redux to the function as props
 * @returns The Data from redux in props
 */

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
