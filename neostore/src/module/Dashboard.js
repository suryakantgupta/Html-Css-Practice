import { Box, Button, Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductCarousel from '../components/molecules/ProductCarousel'
import { connect } from 'react-redux'
import { fetchDashboardCardProducts, fetchDashboardProducts } from '../redux'
import { Loading } from '../components/Loading'
import ProductCard from '../components/molecules/ProductCard'
import Authentication from './Authentication'


function Dashboard(props) {



    useEffect(() => {
        props.fetchDashboardProducts()
        props.fetchDashboardCardProducts()
    }, [])


    return (
        <div>
            <Authentication
            render={(isLogedin,setisLogedin)=>(<Header isLogedin={isLogedin} setisLogedin={setisLogedin} />)}
            />
            

            {props.data.loading ? <Loading /> : <ProductCarousel />}
            <div style={{ display: 'grid', placeItems: 'center',marginBottom:'4%' }}>
                <Typography>Popular Products</Typography>
                <Button style={{ outline: "none", textTransform: "none" }}>View all</Button>
            </div>
            {/* <Container > */}
            <Box display='flex' style={{marginBottom:'10%'}} justifyContent='center'>
                {props.cardData.loading ? '' :
                <div style={{width:'73%'}}>
                    <Grid container spacing={3}>
                        {props.cardData.products.product_details.map(pd =>

                            <Grid item>
                                <ProductCard product={pd.DashboardProducts[0]} />
                            </Grid>
                            // {console.log(pd.DashboardProducts[0].product_name)}
                        )}
                    </Grid>
                    </div>
                }
                </Box>
            {/* </Container> */}
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
