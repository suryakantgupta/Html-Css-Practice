import { Container, Divider, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AccSidePanel from '../components/AccSidePanel'
import AddAddress from '../components/atoms/AddAddress'
import EditProfile from '../components/atoms/EditProfile'
import Profile from '../components/atoms/Profile'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loading from '../components/Loading'
import { fetchCustProfile } from '../redux'

function MyAccount() {


    const [defaultPage, setdefaultPage] = useState({ order: false, profile: true, address: false, changepass: false })
    const [loading, setloading] = useState(true)
    const [profilepage, setprofilepage] = useState(true) //This will handle toggle between profile and edit porfile

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCustProfile())
    }, [])
    const loadings = useSelector(state => state.customer.loading)

    useEffect(() => {
        setloading(loadings)
    }, [loadings])

    /**
     * @description This function will set the profile page to edit profile when edit button is clicked
     */

    const setToEditProfile = () => {
        setprofilepage(false)
    }

    /**
     * @description This function will set the edit profile page to profile when save or cancel button is clicked
     */
    const setToProfile = () => {
        setprofilepage(true)
    }

    const setDefault = (order, profile, address, changepass) => {
        setdefaultPage({
            order,
            profile,
            address,
            changepass
        })
    }



    return (
        <div>
            {loading ? <Loading /> :
                <React.Fragment>
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
                                {defaultPage.profile && (profilepage ? <Profile setToEp={setToEditProfile} /> : <EditProfile setToP={setToProfile} />)}
                                {defaultPage.address && <AddAddress />}
                            </Grid>
                        </Grid>
                    </Container>
                    <Footer />
                </React.Fragment>
            }
        </div>
    )
}

export default MyAccount
