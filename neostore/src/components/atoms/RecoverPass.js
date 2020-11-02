import { Divider, Grid, TextField, Typography,InputAdornment,IconButton, Container } from '@material-ui/core'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function RecoverPass() {


    const [rcpass, setrcpass] = useState({ vcode: '', npass: '', cpass: '' })
    const [showPassword,setSP] = useState({p:false,c:false})
    const [validateError, setError] = useState({ phelperNotValid: false, pcheckError: false, chelperNotValid: false, ccheckError: false })





/**
 * @description This function validates the Password Provided by the user
 * 
 * @returns It returns the appropriate erors if validation fails
 */

const blurPassValidator = () => {
    if (rcpass.npass == '') {
        setError({...validateError, phelperNotValid: false, pcheckError: true })
    } else {
        if (rcpass.npass.length < 8 || rcpass.npass.length > 12) {
            setError({...validateError, phelperNotValid: true, pcheckError: false })
        } else {
            let alphanumeric = "^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$";
            if (rcpass.npass.match(alphanumeric)) {
                setError({...validateError, phelperNotValid: false, pcheckError: false })
            } else {
                setError({...validateError, phelperNotValid: true, pcheckError: false })
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
    if (rcpass.cpass == '') {
        setError({...validateError, chelperNotValid: false, ccheckError: true })
    } else {
        if (rcpass.cpass == rcpass.npass) {
            setError({...validateError, chelperNotValid: false, ccheckError: false })
        } else {
            setError({...validateError, chelperNotValid: true, ccheckError: false })
        }
    }
}







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
                <Grid container justify='center' style={{marginTop:'10%',marginBottom:'10%'}}>
            <Card style={{  width: '44rem', backgroundColor: '#f9f9f9', border: 0, borderBottom: '2px solid lightgray' }}>
                <Card.Body>
                    <Grid container direction='column' spacing={3}>
                        <Grid container item justify='center'>
                            <Typography variant='h4' style={{ fontSize: '2.4rem' }} >Recover Password</Typography>
                        </Grid>
                        <Grid item>
                            <Divider orientation='horizontal' />
                        </Grid>
                        <Grid item>
                            <TextField
                                // className={(validateError.fcheckError || validateError.fhelperNotValid) && classes.errborder}
                                label='Verification Code'
                                variant='outlined'
                                type='text'
                                fullWidth
                                // error={(validateError.fcheckError || validateError.fhelperNotValid)}
                                helperText=' '
                                // helperText={(validateError.fcheckError && 'You must enter a value') || (validateError.fhelperNotValid && 'Not Valid') || ''}
                                value={rcpass.vcode}
                                onChange={e => setrcpass({ ...rcpass, vcode: e.target.value })} />

                        </Grid>
                        <Grid item>
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
                </Card.Body>
            </Card>
            </Grid>
            </Container>
        </React.Fragment>
    )
}

export default RecoverPass
