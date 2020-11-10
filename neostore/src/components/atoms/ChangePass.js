import { Grid, IconButton, InputAdornment, Snackbar, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Button, Card, Modal, ModalBody } from 'react-bootstrap'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from 'axios'
import { useHistory } from 'react-router-dom';



function ChangePass() {


    const [validateError, setError] = useState({ old: false, new: false, confirm: false })
    const [message, setmessage] = useState({ old: '', new: '', confirm: '', snack: '' })
    /**
     * @description This function validates the Password Provided by the user
     * and check that if it is Alphanumeric or not
     * @returns It returns the appropriate erors if validation fails
     */

    const blurOld = () => {
        if (value.old == '') {
            setError({ ...validateError, old: true })
            setmessage({ ...message, old: 'You must enter a value' })
        } else {
            if (value.old.length < 8 || value.old.length > 12) {
                setError({ ...validateError, old: true })
                setmessage({ ...message, old: 'Password should be 8-12 alphanumeric characters' })
            } else {
                let alphanumeric = "^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$";
                if (value.old.match(alphanumeric)) {
                    setError({ ...validateError, old: false })
                } else {
                    setError({ ...validateError, old: true })
                    setmessage({ ...message, old: 'Password should be 8-12 alphanumeric characters' })
                }
            }
        }
    }

    const blurnew = () => {
        if (value.new == '') {
            setError({ ...validateError, new: true })
            setmessage({ ...message, new: 'You must enter a value' })
        } else {
            if (value.new.length < 8 || value.new.length > 12) {
                setError({ ...validateError, new: true })
                setmessage({ ...message, new: 'Password should be 8-12 alphanumeric characters' })
            } else {
                let alphanumeric = "^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$";
                if (value.new.match(alphanumeric)) {
                    setError({ ...validateError, new: false })
                } else {
                    setError({ ...validateError, new: true })
                    setmessage({ ...message, new: 'Password should be 8-12 alphanumeric characters' })
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

    const blurConfirm = () => {
        if (value.confirm == '') {
            setError({ ...validateError, confirm: true })
            setmessage({ ...message, confirm: 'You must enter a value' })
        } else {
            if (value.new == value.confirm) {
                setError({ ...validateError, confirm: false })
            } else {
                setError({ ...validateError, confirm: true })
                setmessage({ ...message, confirm: 'Password and confirm password does not match' })
            }
        }
    }





    /**
     * This Section handles the icon chanage of the password and Confirm Password fields
     */

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleold = () => {
        setmanage({ ...manage, old: !manage.old });
    };
    const handlenew = () => {
        setmanage({ ...manage, new: !manage.new });
    };
    const handleconfirm = () => {
        setmanage({ ...manage, confirm: !manage.confirm });
    };

    const [open, setopen] = useState(false)

    /**
     * @description This function will handle the submit by making api calls 
     * to the changepassword api and if successfull or an error occurs it will give the respective reponse
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://180.149.241.208:3022/changePassword', {
            oldPass: value.old,
            newPass: value.new,
            confirmPass: value.confirm
        }, {
            headers: {
                Authorization: `bearer ${localStorage.token}`
            }
        }).then((response) => {
            setmessage({ ...message, snack: response.data.message })
            setopen(true)
        }).catch((error) => {
            setmessage({ ...message, snack: error.response.data.message })
            setmopen(true)
        })
    }
    const history = useHistory()
    const handleonClose = () => {
        setopen(false)
        window.location.reload()
        // history.push('/myaccount')
    }

    const [mopen, setmopen] = useState(false)
    const handlemonClose = () => {
        setmopen(false)
    }

    const [value, setvalue] = useState({ old: '', new: '', confirm: '' })
    const [manage, setmanage] = useState({ old: false, new: false, confirm: false })

    return (
        <div style={{ marginTop: '5%', marginBottom: '5%' }}>
            <Card style={{ backgroundColor: '#f9f9f9', padding: '1em' }}>
                <Card.Header style={{ backgroundColor: '#f9f9f9' }}><Typography align='center' variant='h3'>Change Password</Typography></Card.Header>
                <Card.Body>
                    <form onSubmit={handleSubmit}>
                        <Grid container direction='column' spacing={3}>

                            <Grid item>
                                <TextField
                                    required
                                    type={manage.old ? 'text' : 'password'}
                                    error={validateError.old}
                                    helperText={(validateError.old && message.old) || ' '}
                                    variant='outlined'
                                    fullWidth
                                    label='Old Password'
                                    value={value.old}
                                    onChange={(e) => setvalue({ ...value, old: e.target.value })}
                                    onBlur={blurOld}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment>
                                                <IconButton
                                                    onClick={handleold}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge='end'
                                                >
                                                    {manage.old ? <VisibilityIcon /> : <VisibilityOff />}
                                                </IconButton>

                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    required
                                    type={manage.new ? 'text' : 'password'}
                                    error={validateError.new}
                                    helperText={(validateError.new && message.new) || ' '}
                                    variant='outlined'
                                    fullWidth
                                    label='New Password'
                                    value={value.new}
                                    onChange={(e) => setvalue({ ...value, new: e.target.value })}
                                    onBlur={blurnew}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment>
                                                <IconButton
                                                    onClick={handlenew}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge='end'
                                                >
                                                    {manage.new ? <VisibilityIcon /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    required
                                    type={manage.confirm ? 'text' : 'password'}
                                    error={validateError.confirm}
                                    helperText={(validateError.confirm && message.confirm) || ' '}
                                    variant='outlined'
                                    fullWidth
                                    label='Confirm Password'
                                    value={value.confirm}
                                    onChange={(e) => setvalue({ ...value, confirm: e.target.value })}
                                    onBlur={blurConfirm}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment>
                                                <IconButton
                                                    onClick={handleconfirm}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge='end'
                                                >
                                                    {manage.confirm ? <VisibilityIcon /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid container item justify='center'>
                                <Button type='submit' style={{ backgroundColor: '#3f51b5' }}>Submit</Button>
                            </Grid>

                        </Grid>
                    </form>
                </Card.Body>
            </Card>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleonClose} message={message.snack} />
            <Modal show={mopen} onHide={handlemonClose}>
                <ModalBody>{message.snack}</ModalBody>
            </Modal>
        </div>
    )
}

export default ChangePass