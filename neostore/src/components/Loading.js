import { Grid } from '@material-ui/core'
import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loading = () => {
    return (
        <Grid container direction='column' justify='center' alignItems='center' style={{ height: '100%', backgroundColor: 'black', opacity: '80%', position: 'fixed', zIndex: 3 }}>
            <Grid item>
                <Spinner animation='grow' />
            </Grid>
            <Grid item>
                <h6 style={{ color: 'white', }}>Loading... Please wait</h6>
            </Grid>
        </Grid>
    )
}
export default Loading
