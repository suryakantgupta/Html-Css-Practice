import React, { useEffect, useState } from 'react'
import { TextField, RadioGroup, InputAdornment, IconButton, FormControlLabel, Radio, Button } from '@material-ui/core';
import {
    makeStyles,
} from '@material-ui/core/styles';
import { Button as Btn } from 'react-bootstrap'
import ficon from '../images/facebook-icon.png'
import gicon from '../images/google-icon.png'
import clsx from 'clsx';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CallIcon from '@material-ui/icons/Call';
import { useDispatch, useSelector } from 'react-redux';
import { postNewRegister } from '../redux';
import { useHistory } from 'react-router-dom'
import { Modal } from 'react-bootstrap';






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
                '@media (max-width:400px)': {
                    margin: '0 0 0 40%'
                }
            }
        },
        helperMobile: {
            '& .MuiFormHelperText-contained': {
                margin: '0 0 0 95%',
                '@media (max-width:400px)': {
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
     * @description Here Five states are used to manage the values and validation of Form
     * 
     * 1: First one  manages the values of the form fields provided by the user
     * 
     * 2: Second one manages the Validation of the fields in form
     * 
     * 3: Third controls the toggle  of the password icon
     * 
     * 4: This checks if all the feilds are filled and validated then it enables the register button
     * 
     * 5: It manages the Modal on specific condition to show
     */

    const [name, setname] = useState({ firstName: '', lastName: '', email: '', pass: '', conpass: '', mobile: '', gender: 'male' })
    const [validateError, setError] = useState({ fhelperNotValid: false, fcheckError: false, lhelperNotValid: false, lcheckError: false, ehelperNotValid: false, echeckError: false, phelperNotValid: false, pcheckError: false, chelperNotValid: false, ccheckError: false, mhelperNotValid: false, mcheckError: false })
    const [manage, setManage] = useState({ showPassword: false, cshowPassword: false })
    const [submitCheck, setSubmit] = useState({ fcheck: true, lcheck: true, echeck: true, pcheck: true, ccheck: true, mcheck: true })
    const [show, setShow] = useState({ success: false, failure: false });

    const dispatch = useDispatch() //This hooks dispatches the function in the redux

    /**
     * @description Here three Selector hooks are used as follows
     * 1- It containes the response body after registration
     * 2-It check the loading state and shows the loader
     * 3-It store the error it it has occurred and show it to the user
     * 4- It check if api was successful or not it gives boolean value
     */
    const success = useSelector(state => state.user.success)
    const loading = useSelector(state => state.user.loading)
    const error = useSelector(state => state.user.error)
    const positive = useSelector(state => state.user.positive)

    /**
     * @description This function validates the First name Provided by the user
     * is all alphabet it will give error if anything otherthan alphabets is entered
     * 
     * @returns It returns the appropriate erors if validation fails
     */

    const blurfnameValidator = () => {
        let pattern = /^[A-Za-z]+$/
        if (name.firstName == '') {
            setError({ ...validateError, fhelperNotValid: false, fcheckError: true })
            setSubmit({ ...submitCheck, fcheck: true })
        } else {
            if (name.firstName.match(pattern)) {
                setError({ ...validateError, fhelperNotValid: false, fcheckError: false })
                setSubmit({ ...submitCheck, fcheck: false })
            } else {
                setError({ ...validateError, fhelperNotValid: true, fcheckError: false })
                setSubmit({ ...submitCheck, fcheck: true })
            }
        }
    }


    /**
     * @description This function validates the Last name Provided by the user
     * is all alphabet it will give error if anything otherthan alphabets is entered
     * 
     * @returns It returns the appropriate erors if validation fails
     */

    const blurlnameValidator = () => {
        let pattern = /^[A-Za-z]+$/
        if (name.lastName == '') {
            setError({ ...validateError, lhelperNotValid: false, lcheckError: true })
            setSubmit({ ...submitCheck, lcheck: true })
        } else {
            if (name.lastName.match(pattern)) {
                setError({ ...validateError, lhelperNotValid: false, lcheckError: false })
                setSubmit({ ...submitCheck, lcheck: false })
            } else {
                setError({ ...validateError, lhelperNotValid: true, lcheckError: false })
                setSubmit({ ...submitCheck, lcheck: true })
            }
        }
    }

    /**
     * @description This function validates the email Provided by the user
     * is in the correct format
     * @returns It returns the appropriate erors if validation fails
     */


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

    /**
     * @description This function validates the Password Provided by the user
     * and check that if it is Alphanumeric or not
     * @returns It returns the appropriate erors if validation fails
     */

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

    /**
     * @description This function validates the Confirm Password Provided by the user
     * by checking that if it matches password or not
     * 
     * @returns It returns the appropriate erors if validation fails
     */

    const blurConPassValidator = () => {
        if (name.conpass == '') {
            setError({ ...validateError, chelperNotValid: false, ccheckError: true })
            setSubmit({ ...submitCheck, ccheck: true })
        } else {
            if (name.conpass == name.pass) {
                setError({ ...validateError, chelperNotValid: false, ccheckError: false })
                setSubmit({ ...submitCheck, ccheck: false })
            } else {
                setError({ ...validateError, chelperNotValid: true, ccheckError: false })
                setSubmit({ ...submitCheck, ccheck: true })
            }
        }
    }

    /**
     * @description This function validates the Mobile Number Provided by the user
     * mobile number should begin with 6,7,8,9 and it should be of proper length
     * 
     * @returns It returns the appropriate erors if validation fails
     */

    const blurMobileValidator = () => {
        let pattern = /^[0-9]+$/
        if (name.mobile[0] == 6 || name.mobile[0] == 7 || name.mobile[0] == 8 || name.mobile[0] == 9) {
            if (name.mobile.length < 10) {
                setError({ ...validateError, mhelperNotValid: true, mcheckError: false })
                setSubmit({ ...submitCheck, mcheck: true })
            } else {
                if (name.mobile.match(pattern)) {
                    setError({ ...validateError, mhelperNotValid: false, mcheckError: false })
                    setSubmit({ ...submitCheck, mcheck: false })
                } else {
                    setError({ ...validateError, mhelperNotValid: true, mcheckError: false })
                    setSubmit({ ...submitCheck, mcheck: true })
                }
            }
        }
        else if (name.mobile == '') {
            setError({ ...validateError, mhelperNotValid: false, mcheckError: true })
            setSubmit({ ...submitCheck, mcheck: true })
        }
        else {
            setError({ ...validateError, mhelperNotValid: true, mcheckError: false })
            setSubmit({ ...submitCheck, mcheck: true })
        }
    }


    /**
     * @description It handles the submit action of the register button
     * 
     * @param {*} e is passed  to prevent the page from refreshing
     * 
     * @returns It dispatches the function in redux and post the user data thorugh api
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postNewRegister(name))
    }


    useEffect(() => {
        if (positive == true) {
            setShow({ ...show, success: true })
        } else if (positive == false) {
            setShow({ ...show, failure: true })
        }
    }, [positive])

    const history = useHistory() //This hook is used to redirect the user to other pages

    //This handles the closing of success modal 
    const handleClose = () => {
        setShow({ ...show, success: false })
        history.push('/login')
    };
    //This handles the closing of error modal
    const handleeClose = () => {
        setShow({ ...show, failure: false })
    };

    

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
        <React.Fragment>
            <div className='container' style={{ marginBottom: '10%' }}>
                <div className='d-flex justify-content-center flex-column flex-sm-row mt-5 mb-4' style={{ borderBottom: '1px solid lightgray' }}>
                    <div className='m-2'>
                        <button className='btn fbtn shadow' style={{ width: '15rem' }} ><img alt='Register with Facebook' src={ficon} height='60rem' />Login with Facebook</button>
                    </div>

                    <div className='m-2'>
                        <button className='btn gbtn shadow' style={{ width: '15rem' }}><img alt='Register with Google' src={gicon} height='60rem' />Login with Google</button>
                    </div>
                </div>

                <div className='row justify-content-center'>

                    <div className="card shadow-sm" style={{ width: '55rem', borderBottom: '2px solid lightgray', borderLeft: '1px', borderRight: '1px', borderTop: 0 }}>
                        <form className={classes.root} onSubmit={handleSubmit} >
                            <div className="card-body">
                                <label className="card-title regToNeo">Register to NeoSTORE</label>

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
                                        helperText={(validateError.echeckError && 'You must enter a value') || (validateError.ehelperNotValid && 'Example abc@gmail.com') || ' '}
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
                                        helperText={(validateError.mcheckError && 'You must enter a value') || (validateError.mhelperNotValid && 'Please enter a valid mobile number') || (`${name.mobile.length}/10`)}
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
                                                checked={name.gender == 'male'}
                                                onChange={(e) => { setname({ ...name, gender: e.target.value }) }}
                                                value="male"
                                            />}
                                        />
                                        <FormControlLabel
                                            label='Female'
                                            labelPlacement='end'
                                            control={<Radio
                                                checked={name.gender == 'female'}
                                                onChange={(e) => { setname({ ...name, gender: e.target.value }) }}
                                                value="female"
                                                label='fred'
                                            />}
                                        />
                                    </RadioGroup>
                                </div>

                            </div>
                            <div className='ml-2 mb-2'>
                                <Button type='submit' variant='contained' id='loginbtn' disabled={submitCheck.fcheck || submitCheck.lcheck || submitCheck.echeck || submitCheck.pcheck || submitCheck.ccheck || submitCheck.mcheck}>Register</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <Modal show={show.success}>
                    <Modal.Header>
                        Successfully registered
                 </Modal.Header>
                    <Modal.Body>{success}</Modal.Body>
                    <Modal.Footer>
                        <Btn variant="secondary" onClick={handleClose}>
                            Close
           </Btn>
                    </Modal.Footer>
                </Modal>

                <Modal show={show.failure}>
                    <Modal.Header>
                        Error Occurred
                 </Modal.Header>
                    <Modal.Body>{error}</Modal.Body>
                    <Modal.Footer>
                        <Btn variant="secondary" onClick={handleeClose}>
                            Close
           </Btn>
                    </Modal.Footer>
                </Modal>
            </div>
        </React.Fragment>
    )
}

export default RegBody
