import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './CardPanel.css'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { TextField } from '@material-ui/core'


function Registration() {


    const [detailes, setdetailes] = useState({ user_name: '', user_email: '', profile_image: '' })

    const [eror, seteror] = useState({ neror: false, eeror: false })

    const [login,setlogin] = useState(false)



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
                            <TextField fullWidth label="Email"
                                helperText={eror.eeror && 'Not Valid'}
                                value={detailes.user_email} onChange={e => setdetailes({ ...detailes, user_email: e.target.value })}
                                error={eror.eeror}
                                onBlur={bluremailFunction}
                            />
                            {/* <input className='form-control inputformat' name="user_email" type='email' placeholder='Email *' value={this.state.empEmail} onChange={this.handleRegistration} required /> */}
                        </div>
                        <div className='form-group'>

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
