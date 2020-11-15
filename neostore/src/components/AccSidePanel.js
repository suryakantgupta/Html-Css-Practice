import { Avatar, Box, Button, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core'
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
    const customer = useSelector(state => state.customer)// This gets the details of customer by making the api call

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
                        <Box width='55%'>
                            <Button fullWidth onClick={() => history.push('/myaccount/order')} startIcon={<SubjectIcon />} color='primary'>
                                Order
                    </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Box width='55%'>
                            <Button fullWidth onClick={() => history.push('/myaccount/profile')} startIcon={<AccountBoxIcon />} color='primary'>
                                Profile
                    </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Box width='55%'>
                            <Button fullWidth onClick={() => history.push('/myaccount/address')} startIcon={<HomeIcon />} color='primary'>
                                Address
                    </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justify='center'>
                        <Box width='55%'>
                            <Button fullWidth onClick={() => history.push('/myaccount/changepass')} startIcon={<CompareArrowsIcon />} color='primary'>
                                Change Password
                    </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment >
    )
}

export default AccSidePanel
