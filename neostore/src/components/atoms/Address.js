import { Box, CardActionArea, Grid, IconButton, Toolbar, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link, useHistory } from 'react-router-dom'
import { deletecustaddress, fetchcustaddress } from '../../redux';

function Address(props) {

    const [found, setfound] = useState(false) //This Will render specific page if address is found or not found

    const addresserror = useSelector(state => state.address.error)//This will determine if address is not found
    const address = useSelector(state => state.address.address)//This will give the available address of the customer
    // const deladd = useSelector(state => state.deladd.loading)//This will give false response when delete address api call s completed

    const dispatch = useDispatch()//This will call the functions in redux
    const history = useHistory()//This is used to route to other components

    /**
     * @description This function determines the status code response from api and sets the specific page
     * if address is found or not
     * @returns It sets the found state
     */
    useEffect(() => {
        if (addresserror.status_code == 404) {
            setfound(false)
        } else {
            setfound(true)
        }
    }, [])

    /**
     * @description This function handles the click of delete button
     * it call the api of get address of customer after calling the delete api
     */
    const handleClick = () => {
        setTimeout(function () { dispatch(fetchcustaddress()) }, 2000)
    }


    /**
     * @description This function renders the address cards 
     */
    const getaddress = () => {
        const addresscards = address.customer_address.map((cd) => (<Box boxShadow={2}>
            <Card style={{ marginTop: '1em' }}>
                <Card.Body>
                    <Grid container justify='space-between'>
                        <Grid item>
                            <Typography>{cd.address}</Typography>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={() => { dispatch(deletecustaddress(cd.address_id)); handleClick() }} style={{ padding: 0, outline: 'none' }}><DeleteForeverIcon style={{ color: '#f44336' }} /></IconButton>
                        </Grid>
                    </Grid>
                    <Typography>{cd.city}- {cd.pincode}</Typography>
                    <Typography>{cd.country}</Typography>
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
                    <Button onClick={()=>history.push('/addaddress')} style={{ backgroundColor: '#3f51b5' }}>Add Address</Button>
                </Grid>
            </div>}

            {found && <div style={{ marginTop: '4%' }}>
                <Box boxShadow={2}>
                    <Card style={{ padding: '1em' }}>
                        <Card.Header style={{ backgroundColor: 'white' }}><Typography variant='h4'>Address</Typography></Card.Header>
                        <Card.Body>
                            {getaddress()}
                        </Card.Body>
                        <Card.Footer style={{ backgroundColor: 'white' }}><Box boxShadow={2} width='20%' borderRadius='5px'><Button onClick={()=>history.push('/addaddress')} style={{ width: '100%', backgroundColor: 'white', color: 'black', border: 0 }}>Add Address</Button></Box></Card.Footer>
                    </Card>
                </Box>
            </div>

            }
        </React.Fragment>
    )
}

export default Address
