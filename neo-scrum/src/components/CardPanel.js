import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './CardPanel.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {TextField} from '@material-ui/core'


class CardPanel extends Component {

    /** 
    Constructor function initiallizes the state for the registration link
    
    @description: This will initialize the state with empty string type
    
    @param {Props} is passed as parameter to the constructor function
    
    @return: It will return the state for userName userEmail profileImage
    with the type as string
    
    */



    constructor(props) {
        super(props)

        this.resMessage = React.createRef()
        this.state = {
            user_name: '',
            user_email: '',
            profile_image: '',
            notValid:false
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


    handleRegistration = (event) => {
        this.setState({
            user_name: event.target.value
        })
    }



    blurNameFunction = () =>{
        let pattern = /^[A-Za-z ]+$/
        if(this.state.user_name==''){
            return this.state.notValid=true
            console.log(this.state.notValid)
        }else if(this.state.user_name.match(pattern)){
            this.state.notValid=false
        }else{
            this.state.notValid=true
        }
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
            console.log(this.state)
            // axios.post('http://180.149.241.208:3001/registration',this.state).then((response)=>{
            //      console.log(response)
            //      this.resMessage.current.innerHTML = "success"
            //  }).catch((err)=>{
            //      console.log(err)
            //  })   
        }
    }

    /**
     * @description This renders the card of the registration on the page
     */

    render() {
        return (
            <div id='cardcontain' className='text-center'>
                <h1 style={{ color: 'black' }}>Neo<span style={{ color: 'red' }}>Scrum</span></h1>
                <div className="card shadow" style={{ width: '22rem'}}>
                    <div className="card-body">
                        <h5 className="card-title text-center">Enter New Developer</h5>
                        <form onSubmit={this.submitHandler}>
                            <div className='form-group'>

                            <TextField fullWidth label="Employee Name"
                            name='user_name'
                            helperText={this.state.notValid && 'Not Valid'}
                            value={this.state.user_name} onChange={this.handleRegistration}
                            error={this.state.notValid}
                            onBlur={this.blurNameFunction}
                            />

                                {/* <input className='form-control inputformat' name="user_name" type='text' placeholder='Employee Name *' value={this.state.empName} onChange={this.handleRegistration} required />

                                 */}
                            </div>
                            <div className='form-group'>
                                <input className='form-control inputformat' name="user_email" type='email' placeholder='Email *' value={this.state.empEmail} onChange={this.handleRegistration} required />
                            </div>
                            <div className='form-group'>
                                <input name="profile_image" type='file' accept='.jpeg , .jpg , .png' onChange={this.handleRegistration}/>
                            </div>
                            <div className='form-group'>
                                <Link to='/login'>
                                <button className="btn" type='submit' style={{ backgroundColor: '#252d7d', color: 'white' }}>Submit</button>
                                </Link>
                            </div>
                        </form>
                        <p ref={this.resMessage}></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardPanel
