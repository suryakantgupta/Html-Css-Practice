import { Box, Button, Grid, Typography, Link, Snackbar } from '@material-ui/core'
import StarRatings from 'react-star-ratings';
import { Card, } from 'react-bootstrap'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../../redux';

function ProductCard(props) {

  const [open, setopen] = useState({ show: false, message: '' })


  // IT destructures the props from parent element
  const { product_name, product_cost, product_rating, product_image, product_id } = props.product
  // console.log(props.product.product_id)

  const dispatch = useDispatch()
  const addcart = useSelector(state => state.addcart.data)
  // console.log(addcart)

// console.log(props.product)

/**
 * @description This function handle add to cart products and also checks that if the
 * product is already in the cart or not
 */
  const handleAddtoCart = () => {
    const temp ={
      quantity:1,
      product_id:props.product
    }
    // console.log(addcart.filter((product)=>product_id==product.product_id).length==0)
    if (addcart.filter((product) => product_id == product.product_id.product_id).length == 0) {
      dispatch(addtocart(temp))
      setopen({ show: true, message: 'Added Successfully' })
    } else {
      setopen({ show: true, message: 'Already Added to the Cart' })
    }
  }

  const handleClose = () => {
    setopen({ show: false, message: '' })
  }

  return (
    <React.Fragment>
      <Card style={{ width: '16rem', height: '20rem', borderBottom: '2px solid lightgray', borderTop: 0 }}>
        <Card.Body>
          <img alt='Product' src={`http://180.149.241.208:3022/${product_image}`} style={{ height: '8rem', width: '100%' }} />
          <Typography align='center' style={{ height: '3em' }} className='pt-2'>
            <Link href={`/productdetail/${product_id}`}>{product_name}</Link>
          </Typography>
          <Card.Text style={{ display: 'flex', justifyContent: "center" }} >
            <b style={{ fontFamily: 'Arial' }}>{`₹${product_cost}`}</b>
          </Card.Text>
          <Grid container justify='center'>
            <Box width='75%'>
              <Button onClick={handleAddtoCart} style={{ outline: 'none', backgroundColor: '#f44336', color: 'white' }} fullWidth variant="contained">Add to Cart</Button>
            </Box>
          </Grid>
          <Grid container justify='center'>
            <StarRatings rating={parseFloat(product_rating)} numberOfStars={5} starRatedColor='orange' starDimension='18px' starSpacing='1px' />
          </Grid>
        </Card.Body>
      </Card>
      <Snackbar open={open.show} autoHideDuration={2000} onClose={handleClose} message={open.message} />
    </React.Fragment>
  )
}

export default ProductCard
