import { Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function Order(props) {

    const [show, setshow] = useState(false)

    const history = useHistory()


    useEffect(() => {
        if (props.isLogedin) {
            setshow(true)
        } else {
            setshow(false)
            history.push('/login')
        }
    }, [props.isLogedin])


    return (<React.Fragment>
        {show && < div style={{ marginTop: '3%', marginBottom: '3%' }
        }>
            <Grid container justify='center' style={{ paddingBottom: '4%' }}>
                <Typography variant='h2'>No Orders Found</Typography>
            </Grid>

            <Grid container justify='center'>
                <Button href='/addaddress' style={{ backgroundColor: '#3f51b5' }}>Go To Products Page</Button>
            </Grid>
        </div >}
    </React.Fragment>
    )
}

export default Order
