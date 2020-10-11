import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './CardPanel.css'
import { event } from 'jquery'

class LoginPanel extends Component {

    constructor(props) {
        super()
        this.state = {
             user_email:'',
             user_pass:''
        }
    }
    
    handleLogin = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

submitHandler = (e)=>{
 e.preventDefault()
 console.log(this.state)
}



    render() {
        return (
            <div id='cardcontain'>
                <h1 style={{ color: 'black' }}>Neo<span style={{ color: 'red' }}>Scrum</span></h1>
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Login</h5>
                        <form onSubmit={this.submitHandler}>
                            <div className='form-group'>
                                <input name='user_email' className='form-control' type='email' placeholder='Email *' onChange={this.handleLogin} required/>
                            </div>
                            <div className='form-group'>
                                <input className='form-control' name="user_pass" style={{ border: 0, borderBottom: '1px solid black' }} type='text' placeholder='Password *' onChange={this.handleLogin} required/>
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
