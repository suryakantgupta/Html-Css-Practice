import { Box, Button, Grid, Icon, Typography, Link } from '@material-ui/core'
import StarRatings from 'react-star-ratings';
import { Card, Image } from 'react-bootstrap'
import cake from '../../images/cake.jpg'
import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { BiRupee } from 'react-icons/bi'

function ProductCard(props) {
  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Img variant="top" src={cake} />
          <Typography align='center'>
            <Link>{props.title}</Link>
          </Typography>
          <Card.Text style={{display:'flex', justifyContent:"center"}} >
  <b style={{fontFamily:'Arial'}}><Icon ><BiRupee/></Icon>{props.price}</b>
          </Card.Text>
          <Grid container justify='center'>
            <Box width='75%'>
              <Button style={{ outline: 'none' }} fullWidth variant="contained">Add to Cart</Button>
            </Box>
          </Grid>
          <Grid container justify='center'>
            <StarRatings rating={2} numberOfStars={5} starRatedColor='orange' starDimension='18px' starSpacing='1px' />
          </Grid>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default ProductCard
