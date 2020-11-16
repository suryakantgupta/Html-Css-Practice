import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Authentication from '../../module/Authentication'
import Footer from '../Footer'
import Header from '../Header'

function Checkout() {

    const history = useHistory()
    return (<React.Fragment>
        <Authentication
              render={(isLogedin, setisLogedin) => (<Header isLogedin={isLogedin} setisLogedin={setisLogedin} />)}
            />
        <Container>
            <div style={{ display: 'grid', height: '80vh', placeContent: 'center',margin:'10%' }}>
                <Grid container className='text-center' direction='column' spacing={5}>
                    <Grid item>
                        <Typography variant='h2'>Thank you for your order</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>Your order has been placed and is being processed</Typography>
                    </Grid>
                    <Grid item>
                        <Button onClick={() => history.push('/dashboard')} style={{ outline: 'none', textTransform: 'none' }}>Back to Homepage</Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
        <Footer />
    </React.Fragment>
    )
}

export default Checkout
