import React from 'react';
import ficon from '../images/facebook-icon.png';
import gicon from '../images/google-icon.png';
import ticon from '../images/twitter-icon.png';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function LoginBody() {
    return (
        <div className='container' >
            <div className='row mt-5'>
                <div className='col-md-6 d-flex flex-column justify-content-end' id='socialloginbtn'>
                    <button className='btn fbtn shadow'><img className='mr-3' src={ficon} height='60rem' />Login with Facebook</button>
                    <button className='btn gbtn shadow'><img className='mr-3' src={gicon} height='60rem' />Login with Google</button>
                    <button className='btn tbtn shadow'><img className='mr-3' src={ticon} height='60rem' />Login with Twitter</button>
                </div>
                <div className='col-md-6'>
                    <div className="card loginCard">

                        <div className="card-body">
                            <label id='logintoNeo' className="card-title">Login to NeoStore</label>
                            <form>
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

                            </form>
                        </div>
                        <div className='ml-2 mb-2'>
                            <button className='btn' id='loginbtn'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center' style={{marginBottom:'15%'}}>
                <div className='col-md-3 d-flex justify-content-start justify-content-md-end' id='regborder'>
                    <a href='#'><label className='mb-0' id='regbtn'>Register Now</label></a>
                </div>
                <div className='col-md-3'>
                    <a href='#'><label className='mb-0' id='regbtn'>Forgotten?</label></a>
                </div>
            </div>
        </div>
    )
}

export default LoginBody
