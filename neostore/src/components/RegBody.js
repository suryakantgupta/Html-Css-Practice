import React, { useState } from 'react'
import { TextField, RadioGroup, InputAdornment, IconButton, FormControlLabel, Radio } from '@material-ui/core';
import {
    makeStyles,
} from '@material-ui/core/styles';
import ficon from '../images/facebook-icon.png'
import gicon from '../images/google-icon.png'
import clsx from 'clsx';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CallIcon from '@material-ui/icons/Call';






function RegBody() {

/**
 * @description It gives the styles to the material ui components used in this file
 * 
 * @param ClassName is passed in makestyles to use with the material component
 *  
 */


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
        },
        helperPass: {
            '& .MuiFormHelperText-contained': {
                margin: '0 0 0 79%',
                '@media (max-width:400px)':{
                    margin: '0 0 0 40%'
                }
            }
        },
        helperMobile: {
            '& .MuiFormHelperText-contained': {
                margin: '0 0 0 95%',
                '@media (max-width:400px)':{
                    margin: '0 0 0 80%'
                }
            }
        },
        formgroup: {
            height: '5rem'
        }
    })
    


    const classes = useStyles(); //object is define to use styles in material

/**
 * @description Here three states are used to manage the values and validation of Form
 * 
 * 1: First one  manages the values of the form fields provided by the user
 * 
 * 2: Second one manages the Validation of the fields in form
 * 
 * 3: Third controls the toggle  of the password icon
 */

    const [name, setname] = useState({ firstName: '', lastName: '', email: '', pass: '', conpass: '', mobile: '', gender:'male'})
    const [validateError, setError] = useState({ fhelperNotValid: false, fcheckError: false, lhelperNotValid: false, lcheckError: false, ehelperNotValid: false, echeckError: false, phelperNotValid: false, pcheckError: false, chelperNotValid: false, ccheckError: false, mhelperNotValid: false, mcheckError: false })
    const [manage, setManage] = useState({ showPassword: false, cshowPassword: false })




/**
 * @description This function validates the First name Provided by the user
 * 
 * @returns It returns the appropriate erors if validation fails
 */

const blurfnameValidator = () => {
        let pattern = /^[A-Za-z]+$/
        name.firstName === '' ? setError({ fhelperNotValid: false, fcheckError: true }) : name.firstName.match(pattern) ? setError({ fhelperNotValid: false, fcheckError: false }) : setError({ fhelperNotValid: true, fcheckError: false })
    }


/**
 * @description This function validates the Last name Provided by the user
 * 
 * @returns It returns the appropriate erors if validation fails
 */

    const blurlnameValidator = () => {
        let pattern = /^[A-Za-z]+$/
        name.lastName === '' ? setError({ lhelperNotValid: false, lcheckError: true }) : name.firstName.match(pattern) ? setError({ lhelperNotValid: false, lcheckError: false }) : setError({ lhelperNotValid: true, lcheckError: false })
    }


/**
 * @description This function validates the email Provided by the user
 * 
 * @returns It returns the appropriate erors if validation fails
 */


    const blurEmailValidator = () => {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        name.email === '' ? setError({ ehelperNotValid: false, echeckError: true }) : pattern.test(name.email) ? setError({ ehelperNotValid: false, echeckError: false }) : setError({ ehelperNotValid: true, echeckError: false })
    }



/**
 * @description This function validates the Password Provided by the user
 * 
 * @returns It returns the appropriate erors if validation fails
 */

const blurPassValidator = () => {
    if (name.pass === '') {
        setError({ phelperNotValid: false, pcheckError: true })
    } else {
        if (name.pass.length < 8 || name.pass.length > 12) {
            setError({ phelperNotValid: true, pcheckError: false })
        } else {
            let alphanumeric = "^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$";
            if (name.pass.match(alphanumeric)) {
                setError({ phelperNotValid: false, pcheckError: false })
            } else {
                setError({ phelperNotValid: true, pcheckError: false })
            }
        }
    }
}

/**
 * @description This function validates the Confirm Password Provided by the user
 * 
 * @returns It returns the appropriate erors if validation fails
 */

const blurConPassValidator = () => {
    if (name.conpass === '') {
        setError({ chelperNotValid: false, ccheckError: true })
    } else {
        if (name.conpass === name.pass) {
            setError({ chelperNotValid: false, ccheckError: false })
        } else {
            setError({ chelperNotValid: true, ccheckError: false })
        }
    }
}

/**
 * @description This function validates the Mobile Number Provided by the user
 * 
 * @returns It returns the appropriate erors if validation fails
 */

    const blurMobileValidator = () => {
        let pattern = /^[0-9]+$/
        if (name.mobile[0] == 7 || name.mobile[0] == 8 || name.mobile[0] == 9) {
            if (name.mobile.length < 10) {
                setError({ mhelperNotValid: true, mcheckError: false })
            } else {
                if (name.mobile.match(pattern)) {
                    setError({ mhelperNotValid: false, mcheckError: false })
                } else {
                    setError({ mhelperNotValid: true, mcheckError: false })
                }
            }
        }
        else if (name.mobile === '') {
            setError({ mhelperNotValid: false, mcheckError: true })
        }
        else {
            setError({ mhelperNotValid: true, mcheckError: false })
        }
        console.log(name.mobile.length)
    }

    

/**
 * This Section handles the icon chanage of the password and Confirm Password fields
 */
    const handleClickShowPassword = () => {
        setManage({ ...manage, showPassword: !manage.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickcShowPassword = () => {
        setManage({ ...manage, cshowPassword: !manage.cshowPassword });
    };

    const handleMouseDowncPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div className='container' style={{ marginBottom: '10%' }}>
            <div className='d-flex justify-content-center flex-column flex-sm-row mt-5 mb-4' style={{ borderBottom: '1px solid lightgray' }}>
                <div className='m-2'>
                    <button className='btn fbtn shadow' style={{ width: '15rem' }} ><img className='' src={ficon} height='60rem' />Login with Facebook</button>
                </div>

                <div className='m-2'>
                    <button className='btn gbtn shadow' style={{ width: '15rem' }}><img className='' src={gicon} height='60rem' />Login with Google</button>
                </div>
            </div>
            <div className='row justify-content-center'>

                <div className="card shadow-sm" style={{ width: '55rem', borderBottom: '2px solid lightgray', borderLeft: '1px', borderRight: '1px', borderTop: 0 }}>
                    <div className="card-body">
                        <label className="card-title regToNeo">Register to NeoSTORE</label>







                        <form className={classes.root}>

                            <div className={classes.formgroup}>
                                <TextField
                                    className={(validateError.fcheckError || validateError.fhelperNotValid) && classes.errborder}
                                    label='First Name'
                                    variant='outlined'
                                    type='text'
                                    fullWidth
                                    error={(validateError.fcheckError || validateError.fhelperNotValid)}
                                    helperText={(validateError.fcheckError && 'You must enter a value') || (validateError.fhelperNotValid && 'It can only accepts alphabets') || ' '}
                                    value={name.firstName}
                                    onChange={e => setname({ ...name, firstName: e.target.value })}
                                    onBlur={blurfnameValidator}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment>
                                                <TextFieldsIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </div>


                            <div className={classes.formgroup}>
                                <TextField
                                    className={(validateError.lcheckError || validateError.lhelperNotValid) && classes.errborder}
                                    label='Last Name'
                                    variant='outlined'
                                    type='text'
                                    fullWidth
                                    error={(validateError.lcheckError || validateError.lhelperNotValid)}
                                    helperText={(validateError.lcheckError && 'You must enter a value') || (validateError.lhelperNotValid && 'It  can only accepts alphabets') || ' '}
                                    value={name.lastName}
                                    onInputCapture={e => setname({ ...name, lastName: e.target.value })}
                                    onBlur={blurlnameValidator}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment>
                                                <TextFieldsIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </div>


                            <div className={classes.formgroup}>
                                <TextField
                                    className={(validateError.echeckError || validateError.ehelperNotValid) && classes.errborder}
                                    label='Email Address'
                                    variant='outlined'
                                    type='email'
                                    fullWidth
                                    error={(validateError.echeckError || validateError.ehelperNotValid)}
                                    helperText={(validateError.echeckError && 'You must enter a value') || (validateError.ehelperNotValid && 'example abc@gmail.com') || ' '}
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
                                />
                            </div>

                            <div className={clsx(classes.formgroup, classes.passColor)}>
                                <TextField
                                    className={clsx(((validateError.pcheckError || validateError.phelperNotValid) && classes.errborder), ((!validateError.pcheckError && !validateError.phelperNotValid) && classes.helperPass))}
                                    label='Password'
                                    variant='outlined'
                                    type={manage.showPassword ? 'text' : 'password'}
                                    fullWidth
                                    error={(validateError.pcheckError || validateError.phelperNotValid)}
                                    helperText={(validateError.pcheckError && 'You must enter a value') || (validateError.phelperNotValid && 'Password should be 8-12 alphanumeric characters') || ('8-12 Alphanumeric character')}
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
                                />
                            </div>

                            <div className={clsx(classes.formgroup, classes.passColor)}>
                                <TextField
                                    className={clsx(((validateError.ccheckError || validateError.chelperNotValid) && classes.errborder), ((!validateError.ccheckError && !validateError.chelperNotValid) && classes.helperPass))}
                                    label='Confirm Password'
                                    variant='outlined'
                                    type={manage.cshowPassword ? 'text' : 'password'}
                                    fullWidth
                                    error={(validateError.ccheckError || validateError.chelperNotValid)}
                                    helperText={(validateError.ccheckError && 'You must enter a value') || (validateError.chelperNotValid && 'Password and confirm password is not same') || ('8-12 Alphanumeric character')}
                                    value={name.conpass}
                                    onInput={(e) => { setname({ ...name, conpass: e.target.value }) }}
                                    onBlur={blurConPassValidator}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment>
                                                <IconButton
                                                    onClick={handleClickcShowPassword}
                                                    onMouseDown={handleMouseDowncPassword}
                                                    edge='end'
                                                >

                                                    {manage.cshowPassword ? <VisibilityIcon /> : <VisibilityOff />}
                                                </IconButton>

                                            </InputAdornment>
                                        )

                                    }}
                                />
                            </div>

                            <div className={classes.formgroup}>
                                <TextField
                                    className={clsx(((validateError.mcheckError || validateError.mhelperNotValid) && classes.errborder), ((!validateError.mcheckError && !validateError.mhelperNotValid) && classes.helperMobile))}
                                    label='Mobile Number'
                                    variant='outlined'
                                    type='text'
                                    fullWidth
                                    error={(validateError.mcheckError || validateError.mhelperNotValid)}
                                    helperText={(validateError.mcheckError && 'You must enter a value') || (validateError.mhelperNotValid && 'Not Valid') || (`${name.mobile.length}/10`)}
                                    value={name.mobile}
                                    onInput={(e) => { setname({ ...name, mobile: e.target.value }) }}
                                    onBlur={blurMobileValidator}
                                    inputProps={{ maxLength: 10 }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment>
                                                <CallIcon />
                                            </InputAdornment>
                                        ),

                                    }}
                                />
                            </div>

                            <div>
                                <RadioGroup row>
                                    <FormControlLabel
                                    label='Male'
                                    labelPlacement='end'
                                control={<Radio
                                    checked={name.gender === 'male'}
                                    onChange={(e)=>{setname({...name,gender:e.target.value}) }}
                                    value="male"
                                />}
                                />
                                <FormControlLabel
                                label='Female'
                                labelPlacement='end'
                                control={<Radio
                                    checked={name.gender === 'female'}
                                    onChange={(e)=>{setname({...name,gender:e.target.value}) }}
                                    value="female"
                                    label='fred'
                                />}
                                />
                                </RadioGroup>
                            </div>
                        </form>
                    </div>
                    <div className='ml-2 mb-2'>
                        <button className='btn' id='loginbtn'>Register</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default RegBody
