import { Box, Button, Divider, FormControlLabel, Grid, Input, InputAdornment, makeStyles, Radio, RadioGroup, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import EditIcon from '@material-ui/icons/Edit';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { updateCustProfile } from '../../redux';
// const imageToBase64 = require('image-to-base64');
const fileUpload = require('fuctbase64');

const useStyles = makeStyles((theme) => ({
    profile: {

    },
    [theme.breakpoints.down('sm')]: {
        profile: {
            textAlign: 'center'
        }
    }
}))











function EditProfile(props) {

    const customer = useSelector(state => state.customer.customer)
    const [name, setname] = useState({ firstName: customer.first_name, lastName: customer.last_name, email: customer.email, mobile: customer.phone_no, gender: customer.gender, dob: customer.dob, b64image: '' })
    const [validateError, setError] = useState({ fhelperNotValid: false, fcheckError: false, lhelperNotValid: false, lcheckError: false, ehelperNotValid: false, echeckError: false, phelperNotValid: false, pcheckError: false, chelperNotValid: false, ccheckError: false, mhelperNotValid: false, mcheckError: false })
    const dispatch = useDispatch()
    const uloading = useSelector(state => state.updatecustomer.loading)
    const classes = useStyles()


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

        } else {
            if (name.firstName.match(pattern)) {
                setError({ ...validateError, fhelperNotValid: false, fcheckError: false })

            } else {
                setError({ ...validateError, fhelperNotValid: true, fcheckError: false })

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

        } else {
            if (name.lastName.match(pattern)) {
                setError({ ...validateError, lhelperNotValid: false, lcheckError: false })

            } else {
                setError({ ...validateError, lhelperNotValid: true, lcheckError: false })

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

            } else {
                if (name.mobile.match(pattern)) {
                    setError({ ...validateError, mhelperNotValid: false, mcheckError: false })

                } else {
                    setError({ ...validateError, mhelperNotValid: true, mcheckError: false })

                }
            }
        }
        else if (name.mobile == '') {
            setError({ ...validateError, mhelperNotValid: false, mcheckError: true })

        }
        else {
            setError({ ...validateError, mhelperNotValid: true, mcheckError: false })

        }
        console.log(name.mobile.length)
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

        } else {
            if (pattern.test(name.email)) {
                setError({ ...validateError, ehelperNotValid: false, echeckError: false })

            } else {
                setError({ ...validateError, ehelperNotValid: true, echeckError: false })

            }
        }
    }

    const [loading, setloading] = useState(uloading)

useEffect(() => {
    
    if(uloading==false){
        window.location.reload()
    }else{
        setloading(uloading)
    }
}, [uloading])

// console.log(loading)
    const handleSubmit = () => {
        dispatch(updateCustProfile(name))
    }





    return (
        <div>
            <Card style={{ marginTop: '5%' }}>
                <Card.Body>
                    <Card.Title>
                        <Typography className={classes.profile} variant='h4'>Edit Profile</Typography>
                    </Card.Title>
                    <Divider orientation='horizontal' />
                    <Box marginY='5%'>
                        <Grid container direction='column' spacing={1}>
                            <Grid item>
                                <TextField
                                    // className={(validateError.fcheckError || validateError.fhelperNotValid) && classes.errborder}
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

                            </Grid>

                            <Grid item>
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
                            </Grid>

                            <Grid item>
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
                            </Grid>

                            <Grid item>
                                <TextField
                                    id="date"
                                    variant='outlined'
                                    label="Date of Birth"
                                    type="date"
                                    fullWidth
                                    helperText=' '
                                    value={name.dob}
                                    onChange={(e) => setname({ ...name, dob: e.target.value })}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>

                            <Grid item>
                                <TextField
                                    // className={clsx(((validateError.mcheckError || validateError.mhelperNotValid) && classes.errborder), ((!validateError.mcheckError && !validateError.mhelperNotValid) && classes.helperMobile))}
                                    label='Mobile Number'
                                    variant='outlined'
                                    type='text'
                                    fullWidth
                                    error={(validateError.mcheckError || validateError.mhelperNotValid)}
                                    helperText={(validateError.mcheckError && 'You must enter a value') || (validateError.mhelperNotValid && 'Please enter a valid mobile number') || (' ')}
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
                            </Grid>

                            <Grid item>
                                <TextField
                                    // className={(validateError.echeckError || validateError.ehelperNotValid) && classes.errborder}
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
                            </Grid>
                            {/* setname({ ...name, image: e.target.value }); */}
                            <Grid item>
                                <input type='file' style={{ fontFamily: 'Arial' }} onChange={(e) => {

                                    fileUpload(e).then((data) => {
                                        console.log(data)
                                        setname({ ...name, b64image: data.base64 })
                                    })
                                }} accept='image/*' />
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider orientation='horizontal' style={{ marginBottom: '3%' }} />
                    <Grid container spacing={1}>
                        <Grid item>
                            <Box borderRadius={5} boxShadow={2}>
                                <Button variant='outlined' style={{ outline: 0, textTransform: 'none' }} onClick={handleSubmit} startIcon={<SaveIcon />}>Save</Button>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box borderRadius={5} boxShadow={2}>
                                <Button onClick={props.setToP} variant='outlined' style={{ outline: 0, textTransform: 'none' }} startIcon={<CloseIcon />} >Cancel</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Card.Body>
            </Card>
        </div>
    )
}

export default EditProfile
