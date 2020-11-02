import { Button, Container, Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductCarousel from '../components/molecules/ProductCarousel'
import { connect } from 'react-redux'
import { fetchDashboardCardProducts, fetchDashboardProducts } from '../redux'
import { Loading } from '../components/Loading'
import ProductCard from '../components/molecules/ProductCard'


function Dashboard(props) {



    useEffect(() => {
        props.fetchDashboardProducts()
        props.fetchDashboardCardProducts()
    }, [])

    
    return (
        <div>
            <Header />

            {props.data.loading ? <Loading /> : <ProductCarousel />}
            <div style={{ display: 'grid', placeItems: 'center' }}>
                <Typography>Popular Products</Typography>
                <Button style={{ outline: "none", textTransform: "none" }}>View all</Button>
            </div>
            <Container>
            {props.cardData.loading ? <Loading /> : 
            <Grid container spacing={3}>
            {props.cardData.products.product_details.map(pd=>
                
                    <Grid item>
                <ProductCard title={pd.DashboardProducts[0].product_name} price={pd.DashboardProducts[0].product_cost} />
                </Grid>
                // {console.log(pd.DashboardProducts[0].product_name)}
            )}
            </Grid>
            }
            </Container>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.carousel,
        cardData:state.card
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDashboardProducts: () => dispatch(fetchDashboardProducts()),
        fetchDashboardCardProducts :()=>dispatch(fetchDashboardCardProducts())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
