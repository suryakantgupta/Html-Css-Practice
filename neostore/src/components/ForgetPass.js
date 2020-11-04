import React, { useState } from 'react'
import { createMuiTheme, TextField, ThemeProvider, Typography } from '@material-ui/core'
import createTypography from '@material-ui/core/styles/createTypography'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'

function ForgetPass() {

    const [validateError, setError] = useState({ ehelperNotValid: false, echeckError: false })
    const [email, setEmail] = useState('')
    const [modal, setModal] = useState({ err: false, message: '' })

    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://180.149.241.208:3022/forgotPassword', { email })
            .then((response) => {
                console.log(response)
                localStorage.setItem('ftoken', response.data.token)
                history.push('/recoverpass')
            }).catch((err) => {
                console.log(err.response)
                setModal({ err: true, message: err.response.data.message })
            })
    }

    const handleClose = () => {
        window.location.reload()
        setModal({ ...modal, err: false })
    }



    const blurEmailValidator = () => {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        email == '' ? setError({ ehelperNotValid: false, echeckError: true }) : pattern.test(email) ? setError({ ehelperNotValid: false, echeckError: false }) : setError({ ehelperNotValid: true, echeckError: false })
    }


    return (
        <div className='row justify-content-center w-100 m-0'>
            <div className="card shadow-sm d-flex flex-column" style={{ height: '20rem', width: '44rem', backgroundColor: '#f9f9f9', marginTop: '8%', marginBottom: '10%', border: 0, borderBottom: '2px solid lightgray' }}>
                <form onSubmit={handleSubmit}>
                    <div className='card-title p-2 m-4 d-flex justify-content-center' style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid lightgray' }}>

                        <Typography variant='h4' style={{ fontSize: '2.4rem' }} >Recover Password</Typography>

                    </div>
                    <div className="card-body d-flex justify-content-center">

                        <TextField
                            // className={(validateError.echeckError || validateError.ehelperNotValid) && classes.errborder}
                            label='Email Address'
                            variant='outlined'
                            type='email'
                            fullWidth
                            error={(validateError.echeckError || validateError.ehelperNotValid)}
                            helperText={(validateError.echeckError && 'You must enter a value') || (validateError.ehelperNotValid && 'example abc@gmail.com') || ' '}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            onBlur={blurEmailValidator}
                            required
                        />
                    </div>
                    <div className='d-flex justify-content-center mb-3'>
                        <button className='btn shadow-sm' type='submit' style={{ backgroundColor: '#3f51b5', color: 'white' }}>Submit</button>
                    </div>
                </form>
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
            </div>

        </div>

    )
}

export default ForgetPass
