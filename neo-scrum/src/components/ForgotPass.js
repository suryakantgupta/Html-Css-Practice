import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { TextField } from '@material-ui/core'


function ForgotPass() {

    /**
     * @description This gives us 3 state to manage our data
     * 1- Manages the User detail
     * 2- Manages the Error
     * 3- manages the login detail
     */

    const [detailes, setdetailes] = useState({ user_name: '', user_email: '', profile_image: '' })
    const [eror, seteror] = useState({ neror: false, eeror: false })
    const [login, setlogin] = useState(false)


    /**
     * @description THis is used to validate the name parameter 
     * It check that full nameis provided and no number 
     * should be in strings
     * @returns It sets the approprite error condition if the 
     * input doesn't meet the requirements
     * 
     */
    const bluremailFunction = () => {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let str = detailes.user_email
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
     * @description It handles the submit of user details it hits the api when all the 
     * details are validated
     * 
     * @param {*} e is paassed to prevent the page from refreshing
     * 
     * @returns it sets the lgogin as true and after successful api hit
     * it redirects to login page
     */

    const submitHandler = (e) => {
        e.preventDefault()
    }



    return (
        <div id='cardcontain' className='text-center'>
            <h1 style={{ color: 'black' }}>Neo<span style={{ color: 'red' }}>Scrum</span></h1>
            <div className="card shadow" style={{ width: '22rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Enter Your Email</h5>
                    <form onSubmit={submitHandler}>
                        <div className='form-group'>
                        </div>
                        <div className='form-group'>
                            {/* This handles the Employee Email  */}
                            <TextField fullWidth label="Email"
                                helperText={eror.eeror && 'Mail should be in format abc@gmail.com'}
                                value={detailes.user_email} onChange={e => setdetailes({ ...detailes, user_email: e.target.value })}
                                error={eror.eeror}
                                onBlur={bluremailFunction}
                            />
                            {/* <input className='form-control inputformat' name="user_email" type='email' placeholder='Email *' value={this.state.empEmail} onChange={this.handleRegistration} required /> */}
                        </div>
                        <div className='form-group'>
                            {/* This handles the Employee profile and accepts only jpg jpeg png */}
                            <Link>
                            <button type='submit' onClick={bluremailFunction} className='btn bg-info'>Send Mail</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className='text-left'>
                <Link to='/login'>
                <a>Go back to Login</a>
                </Link>
            </div>
        </div>
    )
}

export default ForgotPass
