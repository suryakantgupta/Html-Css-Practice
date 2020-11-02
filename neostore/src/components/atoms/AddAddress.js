import { Box, Button, Divider, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { Card } from 'react-bootstrap'
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({

    profile: {
    },
    [theme.breakpoints.down('sm')]: {
        profile: {
            textAlign: 'center'
        }
    }
}))

function AddAddress() {

    const classes = useStyles()

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
                                        label='Address'
                                        multiline
                                        rows={4}
                                        variant='outlined'
                                    />
                            </Grid>

                            <Grid container item>
                            </Grid>

                            <Grid container item>
                            </Grid>

                            <Grid container item>
                            </Grid>

                            <Grid container item>

                            </Grid>

                            <Grid container item>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider orientation='horizontal' />
                    <Button variant='outlined' style={{ outline: 0, marginTop: '3%', textTransform: 'none' }} startIcon={<EditIcon />} >Edit</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AddAddress
