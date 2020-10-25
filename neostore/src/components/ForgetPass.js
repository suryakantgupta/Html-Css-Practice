import React, { useState } from 'react'
import {TextField, Typography} from '@material-ui/core'

function ForgetPass() {

    const [email,setEmail] = useState('')


    return (
        <div className='row justify-content-center'>
            <div className="card shadow-sm" style={{height:'18rem', width: '44rem', backgroundColor: '#f9f9f9',marginTop:'8%',marginBottom:'10%',border:0 }}>
                <div className='card-title p-2 m-4 d-flex justify-content-center' style={{backgroundColor: '#f9f9f9',borderBottom:'1px solid lightgray'}}>
                <Typography variant='h4'>Recover Password</Typography>
                </div>
                <div className="card-body d-flex justify-content-center flex-column">
                    
                    <TextField
                        label='Email Address'
                        variant='outlined'
                        type='email'
                        style={{width:'80%'}}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='d-flex justify-content-center mb-4'>
                    <button className='btn shadow-sm' style={{backgroundColor:'#3f51b5',color:'white'}}>Submit</button>
                </div>
            </div>
        </div>
        
    )
}

export default ForgetPass
