import { Avatar, Box, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import cake from '../../images/cake.jpg'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux'
import { delfromcart, fetchcart } from '../../redux'


function Ordertable() {

    const [multiplier, setmultiplier] = useState(1)


    const dispatch = useDispatch()
    const addcart = useSelector(state => state.addcart.data)

    useEffect(() => {
        dispatch(fetchcart())
    }, [])
    console.log(addcart)

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
                                            <img style={{ height: '5em', width: '5em' }} src={`http://180.149.241.208:3022/${product.product_image}`} />
                                            {/* <Avatar style={{ height: '4em', width: '4em' }} src={`http://180.149.241.208:3022/${product.product_image}`} variant='square' /> */}
                                        </Grid>
                                        <Grid item>
                                            <Typography>{product.product_name}</Typography>
                                            <Typography>by-<small>{product.product_producer}</small></Typography>
                                            <Typography>Status:{product.product_stock > 0 ? 'In Stock' : 'Out of Stock'}</Typography>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell>
                                    <Grid container>
                                        <Grid item>
                                            <IconButton onClick={()=>setmultiplier((prev)=>prev-1)} style={{padding:0, margin: '0 10px 0 0',outline:'none' }}>
                                                <AiFillMinusCircle style={{ color: '#f44336' }} />
                                            </IconButton>
                                        </Grid>
                                        <Grid item>
                                            <Box width='28px' height='25px' style={{ backgroundColor: '#f8f8f8', border: '1px solid lightgray', display: 'grid', placeContent: 'center' }}>
                                                {multiplier}
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <IconButton onClick={()=>setmultiplier((prev)=>prev+1)} style={{padding:0, margin: '0 0 0 10px',outline:'none' }}>
                                                <AiFillPlusCircle style={{ color: '#f44336' }} />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell>
                                    <Typography>{product.product_cost}</Typography>
                                </TableCell>
                                <TableCell>{product.product_cost*multiplier}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => dispatch(delfromcart(product.product_id))} style={{ outline: 'none' }}>
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
