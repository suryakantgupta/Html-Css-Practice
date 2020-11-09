import { Avatar, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import SubjectIcon from '@material-ui/icons/Subject';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
// import image from '../images/our_team_zoe.jpg'
import React from 'react'
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    large: {
        height: theme.spacing(30),
        width: theme.spacing(30)
    }
}))


function AccSidePanel(props) {

    const classess = useStyles()

    const customer = useSelector(state => state.customer)

    return (
        <React.Fragment>
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <Grid container justify='center'>
                        <Avatar alt='Profile' src={`http://180.149.241.208:3022/${customer.customer.profile_img}`} className={classess.large} />
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Typography variant='h5'>
                            {`${customer.customer.first_name} ${customer.customer.last_name}`}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Button onClick={() => props.setPage(true, false, false, false)} startIcon={<SubjectIcon />} color='primary'>
                            Order
                    </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Button onClick={() => props.setPage(false, true, false, false)} startIcon={<AccountBoxIcon />} color='primary'>
                            Profile
                    </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Button onClick={() => props.setPage(false, false, true, false)} startIcon={<HomeIcon />} color='primary'>
                            Address
                    </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Button onClick={() => props.setPage(false, false, false, true)} startIcon={<CompareArrowsIcon />} color='primary'>
                            Change Password
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment >
    )
}

export default AccSidePanel
