import { Avatar, Box, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import cake from '../../images/cake.jpg'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux'
import { deletecart, delfromcart, fetchcart, minuscart, pluscart } from '../../redux'


function Ordertable() {



    const dispatch = useDispatch()
    const addcart = useSelector(state => state.addcart.data)

    const handleplus = (product) => {
        if (product.quantity < 10) {
            dispatch(pluscart(product.product_id.product_id))
        }else{
            alert('Maximum limit reached')
        }
    }

    const handleminus = (product) => {
        if (product.quantity > 1) {
            dispatch(minuscart(product.product_id.product_id))
        }else{
            alert('Minimum limit reached')
        }
    }
    // console.log(addcart)

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {addcart.map((product) => {
                        return (
                            <TableRow>
                                <TableCell>
                                    <Grid container spacing={4}>
                                        <Grid item>
                                            <img style={{ height: '5em', width: '5em' }} src={`http://180.149.241.208:3022/${product.product_id.product_image}`} />
                                            {/* <Avatar style={{ height: '4em', width: '4em' }} src={`http://180.149.241.208:3022/${product.product_image}`} variant='square' /> */}
                                        </Grid>
                                        <Grid item>
                                            <Typography>{product.product_id.product_name}</Typography>
                                            <Typography>by-<small>{product.product_id.product_producer}</small></Typography>
                                            <Typography>Status:{product.product_id.product_stock > 0 ? <span style={{color:'green'}}>In Stock</span> : 'Out of Stock'}</Typography>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell>
                                    <Grid container>
                                        <Grid item>
                                            <IconButton onClick={() => handleminus(product)} style={{ padding: 0, margin: '0 10px 0 0', outline: 'none' }}>
                                                <AiFillMinusCircle style={{ color: '#f44336' }} />
                                            </IconButton>
                                        </Grid>
                                        <Grid item>
                                            <Box width='28px' height='25px' style={{ backgroundColor: '#f8f8f8', border: '1px solid lightgray', display: 'grid', placeContent: 'center' }}>
                                                {product.quantity}
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <IconButton onClick={() => handleplus(product)} style={{ padding: 0, margin: '0 0 0 10px', outline: 'none' }}>
                                                <AiFillPlusCircle style={{ color: '#f44336' }} />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell>
                                    <Typography>{product.product_id.product_cost}</Typography>
                                </TableCell>
                                <TableCell>{product.product_id.product_cost * product.quantity}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() =>{
                                                var r = window.confirm('Product will be removed from cart')
                                                if(r==true){
                                                    setTimeout(function () { dispatch(deletecart(product.product_id.product_id)) }, 2000)
                                                }else{
                                        
                                                }}}
                                                 style={{ outline: 'none' }}>
                                        <DeleteOutlineIcon style={{ color: '#af1616' }} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Ordertable
