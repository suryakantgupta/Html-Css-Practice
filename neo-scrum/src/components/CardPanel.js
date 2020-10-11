import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './CardPanel.css'
import Axios from 'axios'


class CardPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
             user_name:'',
             user_email:'',
             profile_image:''
        }
    }

    handleRegistration = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    bluremailFunction = (event)=>{
        let pattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        let str=this.state.user_email
        if(pattern.test(str)){
            return true;
        }else{
            alert("Wrong Mail")
            return false;
        }
        }

        submitHandler = (e)=>{
            e.preventDefault()
            if(this.bluremailFunction()){
                console.log(this.state)
            //  Axios.post('http://180.149.241.208:3000/registration',this.state).then((response)=>{
            //      console.log(response)
            //  }).catch((err)=>{
            //      console.log(err)
            //  })   
            }   
        }


    render() {
        return (
            <div id='cardcontain'>
                <h1 style={{ color: 'black' }}>Neo<span style={{ color: 'red' }}>Scrum</span></h1>
                <div className="card" style={{ width: '20rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Enter New Developer</h5>
                        <form onSubmit={this.submitHandler}>
                            <div className='form-group'>
                                <input className='form-control' name="user_name" type='text' placeholder='Employee Name *' value={this.state.empName} onChange={this.handleRegistration} required/>
                            </div>
                            <div className='form-group'>
                                <input className='form-control' name="user_email" type='email' placeholder='Email *' value={this.state.empEmail} onChange={this.handleRegistration} required/>
                            </div>
                            <div className='form-group'>
                                <input name="profile_image" type='file' accept='.jpeg , .jpg , .png' onChange={this.handleRegistration} required/>
                            </div>
                            <div className='form-group'>
                                <button className="btn" type='submit' style={{ backgroundColor: '#252d7d', color: 'white' }}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardPanel
