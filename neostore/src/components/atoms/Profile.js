import { Box, Button, Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import EditIcon from '@material-ui/icons/Edit';

const [profile, setprofile] = useState(true) //This will handle toggle between profile and edit porfile

/**
 * @description This function
 */

 const setToEditProfile = ()=>{
setprofile(false)
 }

 /**
  * 
  */
const setToProfile = ()=>{
setprofile(true)
}



const useStyles= makeStyles((theme)=>({
    profile:{

    },
[theme.breakpoints.down('sm')]:{
    profile:{
        textAlign:'center'     
    }
}
}))

function Profile() {

    const classes=useStyles()

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
                                    <b style={{fontFamily:'Arial',fontSize:'1.1rem'}}>First Name</b>
                                    {/* <Typography variantMapping=''>First Name</Typography> */}
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>Suryakant</Typography>
                                </Grid>
                            </Grid>

                            <Grid container item>
                                <Grid item xs={6}>
                                <b style={{fontFamily:'Arial',fontSize:'1.1rem'}}>Last Name</b>
                                    {/* <Typography>Last Name</Typography> */}
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>Gupta</Typography>
                                </Grid>
                            </Grid>

                            <Grid container item>
                                <Grid item xs={6}>
                                <b style={{fontFamily:'Arial',fontSize:'1.1rem'}}>Gender</b>
                                    {/* <Typography>Gender</Typography> */}
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>Male</Typography>
                                </Grid>
                            </Grid>

                            <Grid container item>
                                <Grid item xs={6}>
                                <b style={{fontFamily:'Arial',fontSize:'1.1rem'}}>Date of Birth</b>
                                    {/* <Typography>Date of Birth</Typography> */}
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>26/10/1998</Typography>
                                </Grid>
                            </Grid>

                            <Grid container item>
                                <Grid item xs={6}>
                                <b style={{fontFamily:'Arial',fontSize:'1.1rem'}}>Mobile Number</b>
                                    {/* <Typography>Mobile Number</Typography> */}
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>8286620992</Typography>
                                </Grid>
                            </Grid>

                            <Grid container item>
                                <Grid item xs={6}>
                                <b style={{fontFamily:'Arial',fontSize:'1.1rem'}}>Email</b>
                                    {/* <Typography>Email</Typography> */}
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>suryakant.gupta@neosoftmail.com</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider orientation='horizontal' />
                    <Button variant='outlined' style={{outline:0,marginTop:'3%',textTransform:'none'}} startIcon={<EditIcon />} >Edit</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Profile
