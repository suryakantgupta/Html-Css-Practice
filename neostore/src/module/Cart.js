import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import { Box, Grid } from '@material-ui/core';
import Ordertable from '../components/orderatoms/Ordertable';
import Authentication from './Authentication';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MdRemoveShoppingCart } from 'react-icons/md'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


export default function Cart() {
    const history = useHistory()
    const dispatch = useDispatch()
    const addcart = useSelector(state => state.addcart.data)
    const [activeStep, setActiveStep] = useState(0);

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div>
            <Authentication
                render={(isLogedin, setisLogedin) => (<Header isLogedin={isLogedin} setisLogedin={setisLogedin} />)}
            />
            <Stepper activeStep={activeStep} style={{ marginTop: '2em' }}>
                <Step key='Cart'>
                    <StepLabel >Cart</StepLabel>
                </Step>
                <Step key='Delivery Address'>
                    <StepLabel >Delivery Address</StepLabel>
                </Step>
            </Stepper>

            {addcart.length == 0 ? <Grid container style={{ marginTop: '4%', marginBottom: '12%' }} justify='center'>
                <Box>
                    <Grid container item direction='column' className='text-center' spacing={2}>
                        <Grid item>
                            <MdRemoveShoppingCart style={{ fontSize: '5em' }} />
                        </Grid>
                        <Grid item>
                            <Typography variant='h4'>YOUR CART IS CURRENTLY EMPTY</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>Before proceed to checkout you must add some products to you shopping cart.</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>You will find lots of intresting products on our products page</Typography>
                        </Grid>
                        <Grid item>
                            <Button onClick={() => history.push('/commonproducts')} style={{ backgroundColor: '#3f51b5' }}>Return to Product Page</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>

                :

                <Grid container justify={"space-around"} style={{ marginTop: '4%', marginBottom: '12%' }}>
                    <Grid item lg={7}>
                        <Box boxShadow={4}>
                            <Ordertable />
                        </Box>
                    </Grid>
                    <Grid item lg={3}>
                    </Grid>
                </Grid>}
            <Footer />
        </div>
    );
}