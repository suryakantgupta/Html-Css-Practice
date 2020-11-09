import { Divider, Grid, TextField, Typography, InputAdornment, IconButton, Container, Icon, Snackbar, } from '@material-ui/core'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ErrorIcon from '@material-ui/icons/Error';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'

function RecoverPass() {


    /**
     * Five States are declare here and there usses are as follows
     * 1- All the feilds of Recover Password values are holded by this state
     * 2- Password icon on and off is managed by this state
     * 3- On Validation showing error is done by this state
     * 4- It handles the Modal to show Error
     * 5- It Handles the Snackbar on successfull operation
     */
    const [rcpass, setrcpass] = useState({ vcode: '', npass: '', cpass: '' })
    const [showPassword, setSP] = useState({ p: false, c: false })
    const [validateError, setError] = useState({ phelperNotValid: false, pcheckError: false, chelperNotValid: false, ccheckError: false })
    const [modal, setModal] = useState({ err: false, message: '' })
    const [open, setopen] = useState(false)


    /**
     * @description This function validates the Password Provided by the user
     * First it checks for the empty Field then it checks the lenght 
     * if that critatria meets it checks the alphanumeric part
     * 
     * @returns It returns the appropriate erors if validation fails
     */

    const blurPassValidator = () => {
        if (rcpass.npass === '') {
            setError({ ...validateError, phelperNotValid: false, pcheckError: true })
        } else {
            if (rcpass.npass.length < 8 || rcpass.npass.length > 12) {
                setError({ ...validateError, phelperNotValid: true, pcheckError: false })
            } else {
                let alphanumeric = "^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$";
                if (rcpass.npass.match(alphanumeric)) {
                    setError({ ...validateError, phelperNotValid: false, pcheckError: false })
                } else {
                    setError({ ...validateError, phelperNotValid: true, pcheckError: false })
                }
            }
        }
    }

    /**
     * @description This function validates the Confirm Password Provided by the user
     * by verifying that it has the same value as New Password
     * 
     * @returns It returns the appropriate erors if validation fails
     */

    const blurConPassValidator = () => {
        if (rcpass.cpass === '') {
            setError({ ...validateError, chelperNotValid: false, ccheckError: true })
        } else {
            if (rcpass.cpass === rcpass.npass) {
                setError({ ...validateError, chelperNotValid: false, ccheckError: false })
            } else {
                setError({ ...validateError, chelperNotValid: true, ccheckError: false })
            }
        }
    }


    const history = useHistory() // This hook is used to redirect to other pages when certain condition meets


     /**
     * @description This function handles the on submit action by preventing
     * the refresh of the page and calling the api of recover pass
     * @param {*} e is pass to prevent the refreshing of the page
     */

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://180.149.241.208:3022/recoverPassword', {
            otpCode: rcpass.vcode,
            newPass: rcpass.npass,
            confirmPass: rcpass.cpass
        }, {
            headers: {
                Authorization: `bearer ${localStorage.ftoken}`
            }
        }).then((response) => {
            setopen(true)
            // console.log(response.data.message)
            setModal({ ...modal, message: response.data.message })
        }).catch((error) => {
            setModal({ err: true, message: error.response.data.message })
        })
    }


    /**
     * @description: This function handles the Closing of modal when error occurred
     */
    const handleClose = () => {
        window.location.reload()
        setModal({ ...modal, err: false })
    }

    /**
     * @description This Function handles the closing of Snackbar after successful operation 
     */

    const handleonClose = () => {
        setopen(false)
        history.push('/login')
    }


   

    /**
     * @description All these 4 function handlesthe password icon on and off functioning
     */
    const handleClickShowPassword = () => {
        setSP({ ...showPassword, p: !showPassword.p });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClickcShowPassword = () => {
        setSP({ ...showPassword, c: !showPassword.c });
    };
    const handleMouseDowncPassword = (event) => {
        event.preventDefault();
    };


    return (
        <React.Fragment>
            <Container>
                <Grid container justify='center' style={{ marginTop: '10%', marginBottom: '10%' }}>
                    <Card style={{ width: '44rem', backgroundColor: '#f9f9f9', border: 0, borderBottom: '2px solid lightgray' }}>
                        <Card.Body>
                            <form onSubmit={handleSubmit}>
                                <Grid container direction='column' spacing={3}>
                                    <Grid container item justify='center'>
                                        <Typography variant='h4' style={{ fontSize: '2.4rem' }} >Recover Password</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Divider orientation='horizontal' />
                                    </Grid>
                                    <Grid container item justify='center'>
                                        <Typography style={{ color: 'red' }} ><Icon><ErrorIcon /></Icon>Verification code has been sent to your registered mail ID</Typography>
                                    </Grid>
                                    <Grid item>
                                        {/* Verification Code Input */}
                                        <TextField
                                            // className={(validateError.fcheckError || validateError.fhelperNotValid) && classes.errborder}
                                            label='Verification Code'
                                            variant='outlined'
                                            type='text'
                                            fullWidth
                                            helperText=' '
                                            value={rcpass.vcode}
                                            onChange={e => setrcpass({ ...rcpass, vcode: e.target.value })}
                                            required
                                        />

                                    </Grid>

                                    <Grid item>
                                        {/* New Password Input */}
                                        <TextField
                                            // className={(validateError.fcheckError || validateError.fhelperNotValid) && classes.errborder}
                                            label='New Password'
                                            variant='outlined'
                                            type={showPassword.p ? 'text' : 'password'}
                                            fullWidth
                                            error={(validateError.pcheckError || validateError.phelperNotValid)}
                                            helperText={(validateError.pcheckError && 'You must enter a value') || (validateError.phelperNotValid && 'Password should be 8-12 alphanumeric characters') || ' '}
                                            value={rcpass.npass}
                                            onChange={e => setrcpass({ ...rcpass, npass: e.target.value })}
                                            onBlur={blurPassValidator}
                                            required
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment>
                                                        <IconButton
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge='end'
                                                        >
                                                            {showPassword.p ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </Grid>

                                    <Grid item>
                                        {/* Confirm Password Input */}
                                        <TextField
                                            // className={(validateError.fcheckError || validateError.fhelperNotValid) && classes.errborder}
                                            label='Confirm Password'
                                            variant='outlined'
                                            type={showPassword.c ? 'text' : 'password'}
                                            fullWidth
                                            error={(validateError.ccheckError || validateError.chelperNotValid)}
                                            helperText={(validateError.ccheckError && 'You must enter a value') || (validateError.chelperNotValid && 'Password and confirm password does not match') || ' '}
                                            value={rcpass.cpass}
                                            onChange={e => setrcpass({ ...rcpass, cpass: e.target.value })}
                                            onBlur={blurConPassValidator}
                                            required
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment>
                                                        <IconButton
                                                            onClick={handleClickcShowPassword}
                                                            onMouseDown={handleMouseDowncPassword}
                                                            edge='end'
                                                        >
                                                            {showPassword.c ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </Grid>

                                </Grid>
                                <div className='d-flex justify-content-center mt-3'>
                                    <button className='btn shadow-sm' type='submit' style={{ backgroundColor: '#3f51b5', color: 'white' }}>Submit</button>
                                </div>
                            </form>
                        </Card.Body>
                    </Card>
                    <Snackbar
                        open={open}
                        autoHideDuration={3000}
                        onClose={handleonClose}
                        message={modal.message}
                    />
                    <Modal show={modal.err}>
                        <Modal.Header>
                            Error Occurred
                </Modal.Header>
                        <Modal.Body>{modal.message}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
          </Button>
                        </Modal.Footer>
                    </Modal>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default RecoverPass
