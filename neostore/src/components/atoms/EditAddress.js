import { Box, Button, Divider, Grid, makeStyles, Snackbar, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { addcustaddress } from '../../redux';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    profile: {

    },
    [theme.breakpoints.down('sm')]: {
        profile: {
            textAlign: 'center'
        }
    }
}))



function EditAddress(props) {
    const classes = useStyles()

    const addressdata = useSelector(state => state.address.address)

// console.log(addressdata.customer_address)

    useEffect(() => {
        addressdata.customer_address.map((cd)=>{
            if(cd.address_id == props.addressid){
                setadd({ address: cd.address, pincode: cd.pincode, city: cd.city, state: cd.state, country: cd.country })
            }
        })
    }, [])

    const [add, setadd] = useState({ address: '', pincode: '', city: '', state: '', country: '' })
    const [validate, setvalidate] = useState({ address: false, pincode: false, city: false, state: false, country: false })
    const [v, setv] = useState({ amessage: '', pmessage: '', cmessage: '', smessage: '', comessage: '', })
    const [check, setcheck] = useState({ address: true, pincode: true, city: true, state: true, country: true })
    const [open, setopen] = useState(false)
    const history = useHistory()















    /**
     * @description This function Validate the address field if it is empty or not
     */
    const bluraddress = () => {
        if (add.address.trim().length == 0) {
            setvalidate({ ...validate, address: true })
            setv({ ...v, amessage: 'You must enter a value' })
            setcheck({ ...check, address: true })
        } else {
            setvalidate({ ...validate, address: false })
            setcheck({ ...check, address: false })
        }
    }

    /**
 * @description This function Validate the pincode field if it is empty or not
 * and pincode can be only numbers
 */

    const blurpincode = () => {
        let pattern = /^[0-9]+$/
        if (add.pincode.trim().length == 0) {
            setvalidate({ ...validate, pincode: true })
            setv({ ...v, pmessage: 'You must enter a value' })
            setcheck({ ...check, pincode: true })
        } else {
            if (add.pincode.match(pattern)) {
                setvalidate({ ...validate, pincode: false })
                setcheck({ ...check, pincode: false })
            } else {
                setvalidate({ ...validate, pincode: true })
                setv({ ...v, pmessage: 'It can only accept numbers' })
                setcheck({ ...check, pincode: true })
            }
        }
    }


    /**
 * @description This function Validate the city field if it is empty or not
 * and thiscan be only alphabet
 */
    const blurcity = () => {
        let pattern = /^[A-Za-z]+$/
        if (add.city.trim().length == 0) {
            setvalidate({ ...validate, city: true })
            setv({ ...v, cmessage: 'You must enter a value' })
            setcheck({ ...check, city: true })
        } else {
            if (add.city.match(pattern)) {
                setvalidate({ ...validate, city: false })
                setcheck({ ...check, city: false })
            } else {
                setvalidate({ ...validate, city: true })
                setv({ ...v, cmessage: 'It can only accept alphabets' })
                setcheck({ ...check, city: true })
            }
        }
    }


    /**
 * @description This function Validate the state field if it is empty or not
 * and this can be only alphabet
 */

    const blurstate = () => {
        let pattern = /^[A-Za-z]+$/
        if (add.state.trim().length == 0) {
            setvalidate({ ...validate, state: true })
            setv({ ...v, smessage: 'You must enter a value' })
            setcheck({ ...check, state: true })
        } else {
            if (add.state.match(pattern)) {
                setvalidate({ ...validate, state: false })
                setcheck({ ...check, state: false })
            } else {
                setvalidate({ ...validate, state: true })
                setv({ ...v, smessage: 'It can only accept alphabets' })
                setcheck({ ...check, state: true })
            }
        }
    }

    /**
     * @description This function Validate the country field if it is empty or not
     * and this can be only alphabet
     */


    const blurcountry = () => {
        let pattern = /^[A-Za-z]+$/
        if (add.country.trim().length == 0) {
            setvalidate({ ...validate, country: true })
            setv({ ...v, comessage: 'You must enter a value' })
            setcheck({ ...check, country: true })
        } else {
            if (add.country.match(pattern)) {
                setvalidate({ ...validate, country: false })
                setcheck({ ...check, country: false })
            } else {
                setvalidate({ ...validate, country: true })
                setv({ ...v, comessage: 'It can only accept alphabets' })
                setcheck({ ...check, country: true })
            }
        }
    }


    const dispatch = useDispatch()

    /**
     * @description This button handles the submit of new address
     * and dispathes teh function in redux
     * @param add is the details provided by the user and it is passed to the
     * redux function
     */
    const handleSubmit = () => {
        dispatch(addcustaddress(add))
        setopen(true)
    }

    const handleonClose = () => {
        setopen(false)
        history.push('/myaccount')
    }


    return (
        <div>
            <Card style={{ marginTop: '5%' }}>
                <Card.Body>
                    <Card.Title>
                        <Typography className={classes.profile} variant='h4'>Edit Address</Typography>
                    </Card.Title>
                    <Divider orientation='horizontal' />
                    <Box marginY='5%'>
                        <Grid container direction='column' spacing={4}>
                            <Grid container item>
                                <TextField
                                    error={validate.address}
                                    helperText={(validate.address && v.amessage) || ' '}
                                    type='text'
                                    label='Address'
                                    multiline
                                    rows={4}
                                    variant='outlined'
                                    style={{ width: '50%' }}
                                    value={add.address}
                                    onChange={(e) => setadd({ ...add, address: e.target.value })}
                                    onBlur={bluraddress}
                                />
                            </Grid>
                            <Grid container item>
                                <TextField label='Pincode' variant='outlined'
                                    type='text'
                                    error={validate.pincode}
                                    helperText={(validate.pincode && v.pmessage) || ' '}
                                    value={add.pincode}
                                    onChange={(e) => setadd({ ...add, pincode: e.target.value })}
                                    onBlur={blurpincode}
                                    inputProps={{ maxlength: 6 }}
                                />
                            </Grid>

                            <Grid container item spacing={2}>
                                <Grid item>
                                    <TextField label='City' variant='outlined'
                                        type='text'
                                        error={validate.city}
                                        helperText={(validate.city && v.cmessage) || ' '}
                                        value={add.city}
                                        onChange={(e) => setadd({ ...add, city: e.target.value })}
                                        onBlur={blurcity}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField label='State' variant='outlined'
                                        type='text'
                                        error={validate.state}
                                        helperText={(validate.state && v.smessage) || ' '}
                                        value={add.state}
                                        onChange={(e) => setadd({ ...add, state: e.target.value })}
                                        onBlur={blurstate}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container item>
                                <TextField label='Country' variant='outlined'
                                    type='text'
                                    error={validate.country}
                                    helperText={(validate.country && v.comessage) || ' '}
                                    value={add.country}
                                    onChange={(e) => setadd({ ...add, country: e.target.value })}
                                    onBlur={blurcountry}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider orientation='horizontal' />
                    <Grid container style={{ marginTop: '1em' }} spacing={1}>
                        <Grid item>
                            <Box borderRadius='5px' boxShadow={2}>
                                <Button onClick={handleSubmit} variant='outlined' id='savebtn' style={{ outline: 0, textTransform: 'none' }} startIcon={<SaveIcon />} disabled={check.address || check.city || check.pincode || check.country || check.state}>Save</Button>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box borderRadius='5px' boxShadow={2}>
                                <Button onClick={props.setToA} variant='outlined' style={{ outline: 0, textTransform: 'none' }} startIcon={<CloseIcon />} >Close</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Card.Body>
            </Card>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleonClose} message='Customer Address was registered successfully' />
        </div>
    )
}

export default EditAddress
