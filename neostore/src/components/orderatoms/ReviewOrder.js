import { Box, Button, Snackbar, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

function ReviewOrder(props) {

    const addcart = useSelector(state => state.addcart.data)
    const addcarttotal = useSelector(state => state.addcart.total)
    const [subtotal, setsubtotal] = useState(0)
    const [gst, setgst] = useState(0)
    const [total, settotal] = useState(0)
    const [show, setshow] = useState(false)
    useEffect(() => {
        let temp = 0
        addcart.map(element => {
            // console.log(temp)
            // console.log(element.quantity)
            temp += (element.quantity * element.product_id.product_cost)
            setsubtotal(temp)
        });
    }, [addcart])

    useEffect(() => {
        setgst(Math.ceil((subtotal * 5) / 100))
    }, [subtotal])

    useEffect(() => {
        settotal(subtotal + gst)
    }, [gst])



const history = useHistory()
    const handleproceed = () => {
        if (props.isLogedin) {
            props.next()
        } else {
            setshow(true)
        }
    }


    return (
        <Box boxShadow={2}>
            <Card>
                <Card.Body>
                    <Typography variant='h5'>Review Order</Typography>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell><Typography>SubTotal</Typography></TableCell>
                                <TableCell><Typography>{subtotal}</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography>GST(5%)</Typography></TableCell>
                                <TableCell><Typography>{gst}</Typography></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Typography>Order Total</Typography></TableCell>
                                <TableCell><Typography>{total}</Typography></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Button onClick={handleproceed} fullWidth style={{ outline: 'none', backgroundColor: '#3f51b5', color: 'white', textTransform: 'none' }}>Proceed to buy</Button>
                </Card.Body>
            </Card>
            <Snackbar open={show} autoHideDuration={2000} message='You have to login First' onClose={() => {setshow(false); history.push('/login')}} />
        </Box>
    )
}

export default ReviewOrder
