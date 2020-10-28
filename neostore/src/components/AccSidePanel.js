import { Avatar, Button, Card, Grid, makeStyles, Typography } from '@material-ui/core'
import SubjectIcon from '@material-ui/icons/Subject';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
// import image from '../images/our_team_zoe.jpg'
import React from 'react'


const useStyles = makeStyles((theme)=>({
large:{
    height:theme.spacing(30),
    width:theme.spacing(30)
}
}))



function AccSidePanel() {
    const classess = useStyles()
    return (
        <React.Fragment>
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <Grid container justify='center'>
                        <Avatar alt='Surya' src='../images' className={classess.large}/>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Typography variant='h5'>
                            Suryakant Gupta
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Button startIcon={<SubjectIcon />} color='primary'>
                            Order
                    </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Button startIcon={<AccountBoxIcon />} color='primary'>
                            Profile
                    </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Button startIcon={<HomeIcon />} color='primary'>
                            Address
                    </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Button startIcon={<CompareArrowsIcon />} color='primary'>
                            Change Password
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment >
    )
}

export default AccSidePanel
