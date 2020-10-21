import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ficon from '../images/facebook-icon.png'
import gicon from '../images/google-icon.png'
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityIcon from '@material-ui/icons/Visibility';
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
                        <label className="card-title regToNeo">Register to NeoSTORE</label>







                        <form >

                            <TextField
                                required
                                id="outlined-required"
                                label="First Name"
                                variant="outlined"
                            />


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

                            {/* <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl> */}

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
