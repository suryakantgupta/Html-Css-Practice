import { Avatar, Button, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core'
import SubjectIcon from '@material-ui/icons/Subject';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    large: {
        height: theme.spacing(25),
        width: theme.spacing(25)
    }
}))


function AccSidePanel(props) {

    const history = useHistory()

    const classess = useStyles()

    const customer = useSelector(state => state.customer)

    return (
        <React.Fragment>
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <Grid container justify='center'>
                        {customer.loading ? <CircularProgress /> : <Avatar alt='Profile' src={`http://180.149.241.208:3022/${customer.customer.profile_img}`} className={classess.large} />}
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Typography variant='h5'>
                            {!customer.loading && `${customer.customer.first_name} ${customer.customer.last_name}`}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Button onClick={() => history.push('/myaccount/order')} startIcon={<SubjectIcon />} color='primary'>
                            Order
                    </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Button onClick={() => history.push('/myaccount/profile')} startIcon={<AccountBoxIcon />} color='primary'>
                            Profile
                    </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Button onClick={() => history.push('/myaccount/address')} startIcon={<HomeIcon />} color='primary'>
                            Address
                    </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Button onClick={() => history.push('/myaccount/changepass')} startIcon={<CompareArrowsIcon />} color='primary'>
                            Change Password
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment >
    )
}

export default AccSidePanel
