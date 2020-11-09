import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { BiErrorCircle } from 'react-icons/bi'


function CardError() {


    return (
        <div style={{ height: '100vh', width: '100%', display: 'grid', placeContent: 'center' }}>
            <Grid container justify='center'>
                <BiErrorCircle style={{ height: '18rem', width: '18rem', color: '#f0a7a2' }} />
            </Grid>
            <Grid container justify='center'>
                <Typography variant='h2' style={{ fontWeight: 700 }}>No Product Found</Typography>
            </Grid>
        </div>
    )
}

export default CardError

