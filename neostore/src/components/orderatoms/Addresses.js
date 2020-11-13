import { Box, CardActionArea, FormControlLabel, Grid, Radio, Toolbar, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { postCheckout, updatecustaddress } from '../../redux'

function Addresses(props) {

    const addresserror = useSelector(state => state.address.error)
    const address = useSelector(state => state.address.address)
    const [found, setfound] = useState(false)
    const [selectedValue, setSelectedValue] = useState(true)

    useEffect(() => {
        if (addresserror.status_code == 404) {
            setfound(false)
        } else {
            setfound(true)
        }
    }, [])

    console.log(address)
    // console.log(addresserror)
    const dispatch = useDispatch()
   const history = useHistory()
    const addcart = useSelector(state => state.addcart.data)


    const getaddress = () => {
        console.log(address.customer_address)
        const addresscards = address.customer_address.map((cd) => (<Box boxShadow={2}>
            <Card style={{ marginTop: '1em' }}>
                <Card.Body>
                    <Typography>{cd.address}</Typography>
                    <Typography>{cd.city}- {cd.pincode}</Typography>
                    <Typography>{cd.country}</Typography>
                    <FormControlLabel control={<Radio
                        checked={selectedValue == cd.address_id}
                        value={cd.address_id}
                        onChange={(e) => { setSelectedValue(e.target.value); cd.isdelivery = true; dispatch(updatecustaddress(cd)) }}
                    />} label='Select' />
                    <Button onClick={() => props.setToEA(cd.address_id)} style={{ backgroundColor: '#3f51b5' }}>Edit</Button>
                </Card.Body>
            </Card>
        </Box>
        ))

        return addresscards
    }


    return (
        <React.Fragment>
            {!found && <div style={{ marginTop: '4%' }}>
                <Grid container justify='center'>
                    <Typography variant='h2'>No Address Found</Typography>
                </Grid>

                <Grid container justify='center'>
                    <Button href='/addaddress' style={{ backgroundColor: '#3f51b5' }}>Add Address</Button>
                </Grid>
            </div>}

            {found && <div style={{ margin: '4%' }}>
                <Box boxShadow={2}>
                    <Card style={{ padding: '1em' }}>
                        <Card.Header style={{ backgroundColor: 'white' }}><Typography variant='h4'>Address</Typography></Card.Header>
                        <Card.Body>
                            {getaddress()}
                        </Card.Body>
                        <Card.Footer style={{ backgroundColor: 'white' }}>

                            <Grid container spacing={2}>
                                <Grid item>
                                    <Box boxShadow={2} borderRadius='5px'>
                                        <Button href='/addaddress' style={{ width: '100%', backgroundColor: 'white', color: 'black', border: 0 }}>Add Address</Button>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box boxShadow={2} borderRadius='5px'>
                                        <Button onClick={()=>{dispatch(postCheckout(addcart)); history.push('/order-placed')}} style={{ width: '100%', backgroundColor: 'white', color: 'black', border: 0 }} disabled={selectedValue==true}>Place Order</Button>
                                    </Box>
                                </Grid>
                            </Grid>

                        </Card.Footer>
                    </Card>
                </Box>
            </div>

            }
        </React.Fragment>
    )
}

export default Addresses
