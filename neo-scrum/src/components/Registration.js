import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './CardPanel.css'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { TextField } from '@material-ui/core'


function Registration() {

    /**
     * @description This gives us 3 state to manage our data
     * 1- Manages the User detail
     * 2- Manages the Error
     * 3- manages the login detail
     */

    const [detailes, setdetailes] = useState({ user_name: '', user_email: '', profile_image: '' })
    const [eror, seteror] = useState({ neror: false, eeror: false })
    const [login,setlogin] = useState(false)


    /**
     * @description THis is used to validate the name parameter 
     * It check that full nameis provided and no number 
     * should be in strings
     * @returns It sets the approprite error condition if the 
     * input doesn't meet the requirements
     * 
     */

    const blurNameFunction = () => {
        let pattern = /^[A-Za-z ]+$/
        if (detailes.user_name == '') {
            seteror({ ...eror, neror: true })
        } else if (detailes.user_name.match(pattern)) {
            seteror({ ...eror, neror: false })
        } else {
            seteror({ ...eror, neror: true })
        }
    }



    /**
     * @description THis is used to validate the email parameter 
     * It check that email in correct format is provided
     *
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
        console.log(detailes)
        axios.post('http://180.149.241.208:3047/registration',detailes).then((response)=>{
             console.log(response.data.data.message)
setlogin(true)
         }).catch((err)=>{
             console.log(err)
         })   
    }

    

    return (
        <div id='cardcontain' className='text-center'>
            <h1 style={{ color: 'black' }}>Neo<span style={{ color: 'red' }}>Scrum</span></h1>
            <div className="card shadow" style={{ width: '22rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Enter New Developer</h5>
                    <form onSubmit={submitHandler}>
                        <div className='form-group'>
                            {/* This handles the Employee Input  */}
                            <TextField fullWidth label="Employee Name"
                                helperText={eror.neror && 'Not Valid'}
                                value={detailes.user_name} onChange={e => setdetailes({ ...detailes, user_name: e.target.value })}
                                error={eror.neror}
                                onBlur={blurNameFunction}
                            />

                            {/* <input className='form-control inputformat' name="user_name" type='text' placeholder='Employee Name *' value={this.state.empName} onChange={this.handleRegistration} required />

                                 */}
                        </div>
                        <div className='form-group'>
                            {/* This handles the Employee Email  */}
                            <TextField fullWidth label="Email"
                                helperText={eror.eeror && 'Not Valid'}
                                value={detailes.user_email} onChange={e => setdetailes({ ...detailes, user_email: e.target.value })}
                                error={eror.eeror}
                                onBlur={bluremailFunction}
                            />
                            {/* <input className='form-control inputformat' name="user_email" type='email' placeholder='Email *' value={this.state.empEmail} onChange={this.handleRegistration} required /> */}
                        </div>
                        <div className='form-group'>
                            {/* This handles the Employee profile and accepts only jpg jpeg png */}
                            <input name="profile_image" type='file' accept='.jpeg , .jpg , .png' onChange={(e) => setdetailes({ ...detailes, profile_image: e.target.value })} />
                        </div>
                        <div className='form-group'>
                                <button className="btn" type='submit' style={{ backgroundColor: '#252d7d', color: 'white' }}>Submit</button>
                        </div>
                    </form>
                    
                <div className='text-left'>
                        <Link to='/login'>
                            <a href='#'>Login</a>
                        </Link>
                    </div>
                </div>
            </div>
            {login && <Redirect to='/login' />}
        </div>
    )
}

export default Registration
