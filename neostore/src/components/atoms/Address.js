import { Box, CardActionArea, Grid, Toolbar, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Address(props) {

    const addresserror = useSelector(state => state.address.error)
    const address = useSelector(state => state.address.address)
    const [found, setfound] = useState(false)

    useEffect(() => {
        if (addresserror.status_code == 404) {
            setfound(false)
        } else {
            setfound(true)
        }
    }, [])

    console.log(address)
    // console.log(addresserror)


    const getaddress = () => {
        const addresscards = address.customer_address.map((cd) => (<Box boxShadow={2}>
            <Card style={{ marginTop: '1em' }}>
                <Card.Body>
                    <Typography>{cd.address}</Typography>
                    <Typography>{cd.city}- {cd.pincode}</Typography>
                    <Typography>{cd.country}</Typography>
                    <Button onClick={()=>props.setToEA(cd.address_id)} style={{ backgroundColor: '#3f51b5' }}>Edit</Button>
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

            {found && <div style={{ marginTop: '4%' }}>
                <Box boxShadow={2}>
                    <Card style={{ padding: '1em' }}>
                        <Card.Header style={{ backgroundColor: 'white' }}><Typography variant='h4'>Address</Typography></Card.Header>
                        <Card.Body>
                            {getaddress()}
                        </Card.Body>
                        <Card.Footer style={{ backgroundColor: 'white' }}><Box boxShadow={2} width='20%' borderRadius='5px'><Button href='/addaddress' style={{ width: '100%', backgroundColor: 'white', color: 'black', border: 0 }}>Add Address</Button></Box></Card.Footer>
                    </Card>
                </Box>
            </div>

            }
        </React.Fragment>
    )
}

export default Address
