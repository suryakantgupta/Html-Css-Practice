import { Grid } from '@material-ui/core'
import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'
import { connect } from 'react-redux'

export const Loading = () => {
    return (
        <Grid container direction='column' justify='center' alignItems='center' style={{height:'100%',backgroundColor:'black',opacity:'80%',position:'absolute'}}>
            <Grid item>
            <Spinner animation='grow'/>
            </Grid>
            <Grid item>
            <h6 style={{color:'white',}}>Loading... Please wait</h6>
            </Grid>
        </Grid>
    )
}
export default Loading
