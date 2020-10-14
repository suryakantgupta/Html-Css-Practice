import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './CardPanel.css'
import { event } from 'jquery'
import Axios from 'axios'

class LoginPanel extends Component {


    /** 
Constructor function initiallizes the state for the registration link

@description: This will initialize the state with empty string type

@param {Props} is passed as parameter to the constructor function

@return: It will return the state for userEmail userPass
with the type as string

*/


    constructor(props) {
        super()
        this.state = {
            user_email: '',
            user_pass: ''
        }
    }

    /**
     * @description This function updates the value of input box in realTime in which user is 
     * providing the input
     * 
     * @param {event} is passed as to access the target in which user is giving the input 
     * 
     * @return It sets the state of the input area and in this way the inputs provided by user is 
     * handled in real  time
     */


    handleLogin = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    /**
 * @description blurmailFunction validates the email given by user 
 * It access the email by the state of the registration page and it 
 * test it with the regex pattern for a valid mail 
 * 
 * @returns It will return Wrong mail as an alert if mail is not valid,
 * for a valid mail it will just give the boolean true
 */


    bluremailFunction = () => {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let str = this.state.user_email
        if (pattern.test(str)) {
            return true;
        } else {
            alert("Wrong Mail")
            return false;
        }
    }


    /**
     * @description This function handle the submission of the registration page
     * in the process it calls for email validation and on basis of it this decide to
     * give error of hit the api for registraion
     * 
     * 
     * @param {*} e is passed to prevent the refresh of the page
     */


    submitHandler = (e) => {
        e.preventDefault()
        if (this.bluremailFunction()) {
            // console.log(this.state)
            // Axios.post('',this.state).then((response)=>{
            //     console.log(response)
            // }).catch((err)=>{
            //     console.log(err)
            // })
            localStorage.setItem("token", "testtoken")
            console.log(localStorage.token)
        }
    }


    /**
     * @description This renders the card of Login on the page
     */

    render() {
        return (
            <div id='cardcontain'>
                <h1 style={{ color: 'black' }}>Neo<span style={{ color: 'red' }}>Scrum</span></h1>
                <div className="card shadow" style={{ width: '22rem' }}>
                    <div className="card-body">
                        <h5 className="card-title text-center">Login</h5>
                        <form onSubmit={this.submitHandler}>
                            <div className='form-group'>
                                <input className='form-control inputformat' name='user_email' type='email' placeholder='Email *' onChange={this.handleLogin} required />
                            </div>
                            <div className='form-group'>
                                <input className='form-control inputformat' name="user_pass" type='text' placeholder='Password *' onChange={this.handleLogin} required />
                            </div>
                            <div className='form-group'>
                                <button className="btn" type='submit' style={{ backgroundColor: '#252d7d', color: 'white' }}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPanel
