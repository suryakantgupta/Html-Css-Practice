import { Container, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import AccSidePanel from '../components/AccSidePanel'
import AddAddress from '../components/atoms/AddAddress'
import Profile from '../components/atoms/Profile'
import Footer from '../components/Footer'
import Header from '../components/Header'

function MyAccount() {
    return (
        <div>
            <Header />
            <Container style={{ marginTop: '3%', marginBottom: '10%' }}>
                <Grid container>
                    <Typography variant='h4'>My Account</Typography>
                </Grid>
                <Divider />

                <Grid container>
                    <Grid item xs={12} lg={4}>
                        <AccSidePanel />
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        {/* <Profile /> */}
                        <AddAddress />
                    </Grid>
                </Grid>



            </Container>
            <Footer />
        </div>
    )
}

export default MyAccount
