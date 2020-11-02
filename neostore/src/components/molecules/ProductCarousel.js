import { Box, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import cake from '../../images/cake.jpg'
import { fetchDashboardProducts } from '../../redux'

function ProductCarousel() {

    const dispatch = useDispatch()

    const products = useSelector(state => state.carousel.products)
    const allCategories = products.category_details.map(productImg => (<Carousel.Item>
        <img
            style={{height:'400px', width:'100%'}}
            src={`http://180.149.241.208:3022/${productImg.product_image}`}
            alt="First slide"
        />
    </Carousel.Item>))

    return (
        <Box marginY={10}>
        <Grid container >
            <Carousel style={{width:'100%'}}>
                {allCategories}
            </Carousel>
        </Grid>
        </Box>
    )
}

export default ProductCarousel
