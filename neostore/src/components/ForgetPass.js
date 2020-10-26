import React, { useState } from 'react'
import { createMuiTheme, TextField, ThemeProvider, Typography } from '@material-ui/core'
import createTypography from '@material-ui/core/styles/createTypography'

function ForgetPass() {

    const [email, setEmail] = useState('')


    return (
        <div className='row justify-content-center w-100 m-0'>
            <div className="card shadow-sm d-flex flex-column" style={{ height: '20rem', width: '44rem', backgroundColor: '#f9f9f9', marginTop: '8%', marginBottom: '10%',border:0, borderBottom: '2px solid lightgray' }}>
                <div className='card-title p-2 m-4 d-flex justify-content-center' style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid lightgray' }}>
                    
                        <Typography variant='h4' style={{fontSize:'2.4rem'}} >Recover Password</Typography>
                    
                </div>
                <div className="card-body d-flex justify-content-center">

                    <TextField
                        label='Email Address'
                        variant='outlined'
                        type='email'
                        style={{ width: '80%' }}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='d-flex justify-content-center mb-3'>
                    <button className='btn shadow-sm' style={{ backgroundColor: '#3f51b5', color: 'white' }}>Submit</button>
                </div>
            </div>
        </div>

    )
}

export default ForgetPass
