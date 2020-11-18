import { Box, Button, Grid, Snackbar, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductCarousel from '../components/molecules/ProductCarousel'
import { connect, useDispatch, useSelector } from 'react-redux'
import { fetchcart, fetchDashboardCardProducts, fetchDashboardProducts, loginfalse } from '../redux'
import { Loading } from '../components/Loading'
import ProductCard from '../components/molecules/ProductCard'
import Authentication from './Authentication'
import { useHistory } from 'react-router-dom'


function Dashboard(props) {


const dispatch = useDispatch()
const show = useSelector(state => state.login.show)
    useEffect(() => {
        props.fetchDashboardProducts()
        props.fetchDashboardCardProducts()
    }, [])

    const history = useHistory()
    // const [open, setopen] = useState({ show: false, message: '' })


    return (
        <div>
            <Authentication
            render={(isLogedin,setisLogedin)=>(<Header isLogedin={isLogedin} setisLogedin={setisLogedin} />)}
            />
            {props.data.loading ? <Loading /> : <ProductCarousel />}
            <div style={{ display: 'grid', placeItems: 'center',marginBottom:'4%',marginTop:'10%' }}>
                <Typography>Popular Products</Typography>
                <Button onClick={()=>history.push('/commonproducts')} style={{ outline: "none", textTransform: "none" }}>View all</Button>
            </div>
            <Box display='flex' style={{marginBottom:'10%'}} justifyContent='center'>
                {props.cardData.loading ? '' :
                <div style={{width:'73%'}}>
                    <Grid container spacing={3}>
                        {props.cardData.products.product_details.map(pd =>
                            <Grid item>
                                <ProductCard product={pd.DashboardProducts[0]} />
                            </Grid>
                        )}
                    </Grid>
                    </div>
                }
                </Box>
                 <Snackbar open={show} autoHideDuration={3000} onClose={() => dispatch(loginfalse())} message={'Login Successful'} />
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.carousel,
        cardData: state.card
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDashboardProducts: () => dispatch(fetchDashboardProducts()),
        fetchDashboardCardProducts: () => dispatch(fetchDashboardCardProducts())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
