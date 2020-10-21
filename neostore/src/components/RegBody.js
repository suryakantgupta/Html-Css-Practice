import React from 'react'
import ficon from '../images/facebook-icon.png'
import gicon from '../images/google-icon.png'
import EmailIcon from '@material-ui/icons/Email';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CallIcon from '@material-ui/icons/Call';


function RegBody() {
    return (
        <div className='container' style={{ marginBottom: '10%' }}>
            <div className='d-flex justify-content-center mt-5 mb-4' style={{ borderBottom: '1px solid lightgray' }}>
                <div className='m-2'>
                    <button className='btn fbtn shadow' style={{ width: '15rem' }} ><img className='' src={ficon} height='60rem' />Login with Facebook</button>
                </div>

                <div className='m-2'>
                    <button className='btn gbtn shadow' style={{ width: '15rem' }}><img className='' src={gicon} height='60rem' />Login with Google</button>
                </div>
            </div>
            <div className='row justify-content-center'>

                <div className="card" style={{ width: '55rem' }}>
                    <div className="card-body">
                        <label id='logintoNeo' className="card-title">Register to NeoSTORE</label>
                        <form>

                            <div className='form-group input-group'>

                                <input className='login-control' placeholder='First Name' id='loginEmail' />

                                <div className='input-group-append'>
                                    <span className='input-group-text' style={{ backgroundColor: 'white', borderLeft: 0 }}><TextFieldsIcon /></span>
                                </div>
                            </div>

                            <div className='form-group input-group'>

                                <input className='login-control' placeholder='Last name' id='loginEmail' />

                                <div className='input-group-append'>
                                    <span className='input-group-text' style={{ backgroundColor: 'white', borderLeft: 0 }}><TextFieldsIcon /></span>
                                </div>
                            </div>

                            <div className='form-group input-group'>

                                <input className='login-control' placeholder=' Email Address' id='loginEmail' />

                                <div className='input-group-append'>
                                    <span className='input-group-text' style={{ backgroundColor: 'white', borderLeft: 0 }}><EmailIcon /></span>
                                </div>
                            </div>

                            <div className='input-group form-group'>
                                <input className='login-control' placeholder=' Password' id='loginEmail' />
                                <div className='input-group-append'>
                                    <span className='input-group-text' style={{ backgroundColor: 'white', borderLeft: 0 }}><VisibilityIcon /></span>
                                </div>
                            </div>

                            <div className='form-group input-group'>

                                <input className='login-control' placeholder='Confirm Password' id='loginEmail' />

                                <div className='input-group-append'>
                                    <span className='input-group-text' style={{ backgroundColor: 'white', borderLeft: 0 }}><VisibilityIcon /></span>
                                </div>
                            </div>

                            <div className='form-group input-group'>

                                <input className='login-control' placeholder='Mobile No.' id='loginEmail' />

                                <div className='input-group-append'>
                                    <span className='input-group-text' style={{ backgroundColor: 'white', borderLeft: 0 }}><CallIcon /></span>
                                </div>
                            </div>

                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label class="form-check-label" for="inlineRadio1">Male</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label class="form-check-label" for="inlineRadio2">Female</label>
                            </div>
                        </form>
                    </div>
                    <div className='ml-2 mb-2'>
                        <button className='btn' id='loginbtn'>Register</button>
                    </div>
                </div>


            </div>

            <div className="user-input-wrp">
                <br />
                <input type="text" className="inputText" required />
                <span className="floating-label">Your email address</span>
            </div>
        </div>
    )
}

export default RegBody
