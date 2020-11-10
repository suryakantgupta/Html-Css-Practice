import { Box, Button, Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import EditIcon from '@material-ui/icons/Edit';
import EditProfile from './EditProfile';
import { fetchCustProfile } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';



const useStyles = makeStyles((theme) => ({
    profile: {

    },
    [theme.breakpoints.down('sm')]: {
        profile: {
            textAlign: 'center'
        }
    }
}))

function Profile(props) {

    const classes = useStyles()

    const customer = useSelector(state => state.customer.customer)


    // console.log(customer)







    return (
        <div>
            <Card style={{ marginTop: '5%' }}>
                <Card.Body>
                    <Card.Title>
                        <Typography className={classes.profile} variant='h4'>Profile</Typography>
                    </Card.Title>
                    <Divider orientation='horizontal' />
                    <Box width='70%' marginY='5%'>
                        <Grid container direction='column' spacing={4}>
                            <Grid container item>
                                <Grid item xs={6}>
                                    <b style={{ fontFamily: 'Arial', fontSize: '1.1rem' }}>First Name</b>
                                    {/* <Typography variantMapping=''>First Name</Typography> */}
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{customer.first_name}</Typography>
                                </Grid>
                            </Grid>

                            <Grid container item>
                                <Grid item xs={6}>
                                    <b style={{ fontFamily: 'Arial', fontSize: '1.1rem' }}>Last Name</b>
                                    {/* <Typography>Last Name</Typography> */}
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{customer.last_name}</Typography>
                                </Grid>
                            </Grid>

                            <Grid container item>
                                <Grid item xs={6}>
                                    <b style={{ fontFamily: 'Arial', fontSize: '1.1rem' }}>Gender</b>
                                    {/* <Typography>Gender</Typography> */}
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{customer.gender}</Typography>
                                </Grid>
                            </Grid>

                            <Grid container item>
                                <Grid item xs={6}>
                                    <b style={{ fontFamily: 'Arial', fontSize: '1.1rem' }}>Date of Birth</b>
                                    {/* <Typography>Date of Birth</Typography> */}
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{customer.dob}</Typography>
                                </Grid>
                            </Grid>

                            <Grid container item>
                                <Grid item xs={6}>
                                    <b style={{ fontFamily: 'Arial', fontSize: '1.1rem' }}>Mobile Number</b>
                                    {/* <Typography>Mobile Number</Typography> */}
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{customer.phone_no}</Typography>
                                </Grid>
                            </Grid>

                            <Grid container item>
                                <Grid item xs={6}>
                                    <b style={{ fontFamily: 'Arial', fontSize: '1.1rem' }}>Email</b>
                                    {/* <Typography>Email</Typography> */}
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>{customer.email}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider orientation='horizontal' />
                    <Button onClick={props.setToEp} variant='outlined' style={{ outline: 0, marginTop: '3%', textTransform: 'none' }} startIcon={<EditIcon />} >Edit</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Profile
