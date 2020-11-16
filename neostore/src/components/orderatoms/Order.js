import { Box, Divider, Grid, GridList, GridListTile, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'


function Order(props) {

    const [show, setshow] = useState(false)

    const history = useHistory()


    useEffect(() => {
        if (props.isLogedin) {
            setshow(true)
        } else {
            setshow(false)
            history.push('/login')
        }
    }, [props.isLogedin])

    const orderDetails = useSelector(state => state.getcart.data)
    const loadings = useSelector(state => state.customer.loading)
    // console.log(orderDetails)

    const getInvoice = (created, id, obj) => {
        axios.post('http://180.149.241.208:3022/getInvoiceOfOrder', {
            createdAt: created,
            product_details: obj,
            _id: id
        },
            {
                headers: {
                    Authorization: `bearer ${localStorage.token}`
                }
            }).then((response)=>{
                console.log(response)
                window.open(`http://180.149.241.208:3022/${response.data.receipt}`,'_blank')
            }).catch((error)=>{
                console.log(error)
            })
    }

    return (<React.Fragment>
        {/* {show && < div style={{ marginTop: '3%', marginBottom: '3%' }
        }>
            <Grid container justify='center' style={{ paddingBottom: '4%' }}>
                <Typography variant='h2'>No Orders Found</Typography>
            </Grid>

            <Grid container justify='center'>
                <Button href='/commonproducts' style={{ backgroundColor: '#3f51b5' }}>Go To Products Page</Button>
            </Grid>
        </div >} */}
        {!loadings && <Grid container direction='column' spacing={4} style={{ marginTop: '5%', marginBottom: '5%' }}>
            <React.Fragment>
                {orderDetails.product_details.map((pd) => (
                    <Grid item>
                        <Box boxShadow={4} borderRadius='5px'>
                            <Card>
                                <Card.Body>
                                    <Grid container direction='column'>
                                        <Grid item>
                                            <Typography><b style={{ color: 'orange' }}>TRANSIT </b>Order By:{pd._id}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <small>Placed on:{moment(pd.product_details[0].createdAt).format('MMMM Do YYYY')} /<span style={{ color: 'green' }}>{pd.product_details[0].total_cartCost}</span></small>
                                        </Grid>
                                        <Grid item>
                                            <Divider orientation='horizontal' />
                                        </Grid>
                                        <Grid container item justify='space-around' style={{ marginTop: '1em', marginBottom: '1em' }}>
                                            {/* <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',overflow:'hidden'}}> */}
                                            {/* <GridList> */}
                                            {pd.product_details.map((product) => (
                                                <Grid item >
                                                    <img style={{ height: '100px', width: '110px' }} src={`http://180.149.241.208:3022/${product.product_details[0].product_image}`} />
                                                </Grid>
                                            ))}
                                            {/* </GridList> */}
                                            {/* </div> */}
                                        </Grid>
                                        <Grid item>
                                            <Divider orientation='horizontal' />
                                        </Grid>
                                        <Grid item>
                                            <Button onClick={() => getInvoice(pd.product_details[0].createdAt, pd._id, pd.product_details)} style={{ backgroundColor: '#3f51b5', marginTop: '3em' }}>Download invoice as pdf</Button>
                                        </Grid>

                                    </Grid>
                                </Card.Body>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </React.Fragment>
        </Grid>}
    </React.Fragment >
    )
}

export default Order
