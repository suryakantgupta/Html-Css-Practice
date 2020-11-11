import { CircularProgress, Container, Divider, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AccSidePanel from '../components/AccSidePanel'
import AddAddress from '../components/AddAddress'
import Address from '../components/atoms/Address'
import ChangePass from '../components/atoms/ChangePass'
import EditAddress from '../components/atoms/EditAddress'
import EditProfile from '../components/atoms/EditProfile'
import Profile from '../components/atoms/Profile'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loading from '../components/Loading'
import { fetchcustaddress, fetchCustProfile, updateCustProfile } from '../redux'
import Authentication from './Authentication'

function MyAccount() {

    const {page} = useParams()

    const [defaultPage, setdefaultPage] = useState({ order: false, profile: false, address: false, changepass: false })
    const [profilepage, setprofilepage] = useState(true) //This will handle toggle between profile and edit porfile
    const [editaddress, seteditaddress] = useState(true) //This will handle toggle between address and edit address
    const [addressid, setaddressid] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        if(page=='profile'){
            setdefaultPage({ order: false, profile: true, address: false, changepass: false })
        }else if(page=='address'){
            setdefaultPage({ order: false, profile: false, address: true, changepass: false })
        }else if(page=='changepass'){
            setdefaultPage({ order: false, profile: false, address: false, changepass: true })
        }
    }, [page])


    useEffect(() => {
        dispatch(fetchCustProfile())
        dispatch(fetchcustaddress())
    }, [])

    console.log(page)
    const loadings = useSelector(state => state.customer.loading)
    const aloading = useSelector(state => state.address.loading)

    /**
     * @description This function will set the profile page to edit profile when edit button is clicked
     */

    const setToEditProfile = () => {
        setprofilepage(false)
    }

    /**
     * @description This function will set the edit profile page to profile when save or cancel button is clicked
     */
    const setToProfile = async () => {
        setprofilepage(true)
    }

    /**
     * @description This function will set the Address page to edit address when edit button is clicked
     */

    const setToEditAddress = (data) => {
        setaddressid(data)
        seteditaddress(false)
    }

    /**
     * @description This function will set the edit address page to address when save or cancel button is clicked
     */
    const setToAddress = async () => {
        seteditaddress(true)
    }

    // const setDefault = (order, profile, address, changepass) => {
    //     setdefaultPage({
    //         order,
    //         profile,
    //         address,
    //         changepass
    //     })
    // }



    return (
        <div>
            
                <React.Fragment>
                    <Authentication
                        render={(isLogedin, setisLogedin) => (<Header isLogedin={isLogedin} setisLogedin={setisLogedin} />)}
                    />
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
                                {defaultPage.profile ? (loadings ? <Grid container justify='center'><CircularProgress /></Grid> : (profilepage ? <Profile setToEp={setToEditProfile} /> : <EditProfile setToP={setToProfile} />)) : null}
                                {defaultPage.address ? (aloading ? <Grid container justify='center'><CircularProgress /></Grid> :  (editaddress ? <Address setToEA={setToEditAddress} /> : <EditAddress addressid={addressid} setToA={setToAddress} />)) : null}
                                {defaultPage.changepass && <ChangePass />}
                            </Grid>
                        </Grid>
                    </Container>
                    <Footer />
                </React.Fragment>
            
        </div>
    )
}

export default MyAccount
