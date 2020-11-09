import { Container, Divider, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import AccSidePanel from '../components/AccSidePanel'
import AddAddress from '../components/atoms/AddAddress'
import EditProfile from '../components/atoms/EditProfile'
import Profile from '../components/atoms/Profile'
import Footer from '../components/Footer'
import Header from '../components/Header'

function MyAccount() {


    const [defaultPage, setdefaultPage] = useState({order:false,profile:true,address:false,changepass:false})

    const setDefault = (order,profile,address,changepass)=>{
        setdefaultPage({
            order,
            profile,
            address,
            changepass
        })
    }



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
                        <AccSidePanel setPage={setDefault} />
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <EditProfile />
                        {defaultPage.profile && <Profile />}
                        {defaultPage.address && <AddAddress />}
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    )
}

export default MyAccount
