import { Box, Button, Container, Divider, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import EditIcon from '@material-ui/icons/Edit';
import Header from './Header';
import AddressSidePanel from './atoms/AddressSidePanel';
import Footer from './Footer';
import AddAddressField from './atoms/AddAddressField';
import { fetchcustaddress } from '../redux';
import { useDispatch } from 'react-redux';
import Authentication from '../module/Authentication';

const useStyles = makeStyles((theme) => ({

    profile: {
    },
    [theme.breakpoints.down('sm')]: {
        profile: {
            textAlign: 'center'
        }
    }
}))

function AddAddress() {

    const classes = useStyles()
    const dispatch = useDispatch()


    //This will make the api call to get the customer address

    return (
        <div>
            <React.Fragment>
                <Authentication
                    render={(isLogedin, setisLogedin) => (<Header isLogedin={isLogedin} setisLogedin={setisLogedin} />)}
                />
                {/* <Header /> */}
                <Container style={{ marginTop: '3%', marginBottom: '10%' }}>
                    <Grid container>
                        <Typography variant='h4'>My Account</Typography>
                    </Grid>
                    <Divider />
                    <Grid container justify='space-evenly'>
                        <Grid container item xs={12} lg={3}>
                            <Box width='80%'>
                                <AddressSidePanel />
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={8}>
                            <AddAddressField />
                        </Grid>
                    </Grid>
                </Container>
                <Footer />
            </React.Fragment>
        </div>
    )
}

export default AddAddress
