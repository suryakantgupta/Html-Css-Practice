import React, { useEffect, useState } from 'react';
import ficon from '../images/facebook-icon.png';
import gicon from '../images/google-icon.png';
import ticon from '../images/twitter-icon.png';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { TextField, RadioGroup, InputAdornment, Button, IconButton, FormGroup, FormControlLabel, Radio, useMediaQuery } from '@material-ui/core';
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import clsx from 'clsx';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CallIcon from '@material-ui/icons/Call';
import { green, blue, red } from '@material-ui/core/colors';
import { postLogin } from '../redux';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



function LoginBody(props) {


    const useStyles = makeStyles({

        root: {

        },
        passColor: {
            '& .MuiSvgIcon-root': {
                color: '#000000'
            }
        },
        errborder: {
            '& fieldset': {
                borderWidth: '3px'
            }
        }
    })



    const classes = useStyles(); //object is define to use styles in material





    const [name, setname] = useState({ email: '', pass: '' })
    const [validateError, setError] = useState({ ehelperNotValid: false, echeckError: false, phelperNotValid: false, pcheckError: false })
    const [manage, setManage] = useState({ showPassword: false, cshowPassword: false })
    const [submitCheck, setSubmit] = useState({ echeck: true, pcheck: true })


    const blurEmailValidator = () => {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (name.email == '') {
            setError({ ...validateError, ehelperNotValid: false, echeckError: true })
            setSubmit({ ...submitCheck, echeck: true })
        } else {
            if (pattern.test(name.email)) {
                setError({ ...validateError, ehelperNotValid: false, echeckError: false })
                setSubmit({ ...submitCheck, echeck: false })
            } else {
                setError({ ...validateError, ehelperNotValid: true, echeckError: false })
                setSubmit({ ...submitCheck, echeck: true })
            }
        }
    }



    const blurPassValidator = () => {
        if (name.pass == '') {
            setError({ ...validateError, phelperNotValid: false, pcheckError: true })
            setSubmit({ ...submitCheck, pcheck: true })
        } else {
            if (name.pass.length < 8 || name.pass.length > 12) {
                setError({ ...validateError, phelperNotValid: true, pcheckError: false })
                setSubmit({ ...submitCheck, pcheck: true })
            } else {
                let alphanumeric = "^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$";
                if (name.pass.match(alphanumeric)) {
                    setError({ ...validateError, phelperNotValid: false, pcheckError: false })
                    setSubmit({ ...submitCheck, pcheck: false })
                } else {
                    setError({ ...validateError, phelperNotValid: true, pcheckError: false })
                    setSubmit({ ...submitCheck, pcheck: true })
                }
            }
        }
    }


    const handleClickShowPassword = () => {
        setManage({ ...manage, showPassword: !manage.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postLogin(name))
    }


    const history = useHistory()

    const loginsuccess = useSelector(state => state.login.success)

    useEffect(() => {
        if(loginsuccess.token != undefined && localStorage.token != "undefined"){
        localStorage.setItem('token', loginsuccess.token)
        props.setisLogedin(true)
        }
    }, [loginsuccess])

    useEffect(() => {
        if (props.isLogedin) {
            history.push('/dashboard')
        }
    })





    return (
        <div className='container' >
            <div className='row mt-5'>
                <div className='col-md-6 d-flex flex-column justify-content-end' id='socialloginbtn'>
                    <button className='btn fbtn shadow'><img className='mr-3' src={ficon} height='60rem' />Login with Facebook</button>
                    <button className='btn gbtn shadow'><img className='mr-3' src={gicon} height='60rem' />Login with Google</button>
                    <button className='btn tbtn shadow'><img className='mr-3' src={ticon} height='60rem' />Login with Twitter</button>
                </div>

                <div className='col-md-6'>
                    {/* <div className="card loginCard"> */}
                    <form className="card loginCard" onSubmit={handleSubmit}>
                        <div className="card-body">
                            <label id='logintoNeo' className="card-title">Login to NeoStore</label>

                            <div className={classes.passColor}>
                                <TextField
                                    style={{ height: '5rem' }}
                                    className={(validateError.echeckError || validateError.ehelperNotValid) && classes.errborder}
                                    label='Email Address'
                                    variant='outlined'
                                    type='email'
                                    fullWidth
                                    error={(validateError.echeckError || validateError.ehelperNotValid)}
                                    helperText={(validateError.echeckError && 'You must enter a value') || (validateError.ehelperNotValid && 'Example abc@gmail.com')}
                                    value={name.email}
                                    onChange={e => setname({ ...name, email: e.target.value })}
                                    onBlur={blurEmailValidator}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment>
                                                <EmailIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                    required />

                            </div>

                            <div className={classes.passColor}>
                                <TextField
                                    className={clsx(((validateError.pcheckError || validateError.phelperNotValid) && classes.errborder), ((!validateError.pcheckError && !validateError.phelperNotValid) && classes.helperPass))}
                                    style={{ height: '5rem', color: 'black' }}
                                    label='Password'
                                    variant='outlined'
                                    type={manage.showPassword ? 'text' : 'password'}
                                    fullWidth
                                    error={(validateError.pcheckError || validateError.phelperNotValid)}
                                    helperText={(validateError.pcheckError && 'You must enter a value') || (validateError.phelperNotValid && 'Password should be 8-12 AlphaNumeric character')}
                                    value={name.pass}
                                    onInput={(e) => { setname({ ...name, pass: e.target.value }) }}
                                    onBlur={blurPassValidator}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment>
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge='end'
                                                >

                                                    {manage.showPassword ? <VisibilityIcon /> : <VisibilityOff />}
                                                </IconButton>

                                            </InputAdornment>
                                        )

                                    }}
                                    required
                                />
                            </div>


                        </div>
                        <div className='ml-2 mb-2'>
                            <button className='btn' type='submit' id='loginbtn' disabled={submitCheck.echeck || submitCheck.pcheck}>Login</button>
                        </div>
                    </form>
                    {/* </div> */}

                </div>

            </div>
            <div className='row justify-content-center' style={{ marginBottom: '15%' }}>
                <div className='col-md-3 d-flex justify-content-start justify-content-md-end' id='regborder'>
                    <a href='/register'><label className='mb-0' id='regbtn'>Register Now</label></a>
                </div>
                <div className='col-md-3'>
                    <a href='/forgotpass'><label className='mb-0' id='regbtn'>Forgotten?</label></a>
                </div>
            </div>
        </div>
    )
}

export default LoginBody
