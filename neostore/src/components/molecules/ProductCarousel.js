import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

function ProductCarousel() {
    const history = useHistory()
    const products = useSelector(state => state.carousel.products)
    //This maps the carousel from the Dashboard
    // console.log(products.category_details)
    const allCategories = products.category_details.map(productImg => (<Carousel.Item onClick={()=>history.push(`/commonproducts/ /${productImg.category_id}`)}>
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
