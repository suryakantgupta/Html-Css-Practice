import { Box, Button, Grid, Icon, Typography, Link } from '@material-ui/core'
import StarRatings from 'react-star-ratings';
import { Card, Image } from 'react-bootstrap'
import cake from '../../images/cake.jpg'
import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { BiRupee } from 'react-icons/bi'

function ProductCard(props) {



  const { product_name, product_cost, product_rating, product_image } = props.product


  return (
    <React.Fragment>
      <Card style={{ width: '16rem', height: '20rem',borderBottom:'2px solid lightgray',borderTop:0 }}>
        <Card.Body>
        <img src={`http://180.149.241.208:3022/${product_image}`} style={{height:'8rem',width:'100%'}} />
          {/* <Card.Img variant="top" src={`http://180.149.241.208:3022/${product_image}`} /> */}
          <Typography align='center' style={{height:'3em'}} className='pt-2'>
            <Link href='#'>{product_name}</Link>
          </Typography>
          <Card.Text style={{ display: 'flex', justifyContent: "center" }} >
            <b style={{ fontFamily: 'Arial' }}><Icon ><BiRupee></BiRupee></Icon>{product_cost}</b>
          </Card.Text>
          <Grid container justify='center'>
            <Box width='75%'>
              <Button style={{ outline: 'none', backgroundColor: '#f44336', color: 'white' }} fullWidth variant="contained">Add to Cart</Button>
            </Box>
          </Grid>
          <Grid container justify='center'>
            <StarRatings rating={parseFloat(product_rating)} numberOfStars={5} starRatedColor='orange' starDimension='18px' starSpacing='1px' />
          </Grid>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default ProductCard
