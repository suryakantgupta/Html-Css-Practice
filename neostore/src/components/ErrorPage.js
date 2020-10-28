import { Avatar,makeStyles, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import goku from '../images/Goku.png'


const useStyles = makeStyles((theme)=>({
    large:{
        height:theme.spacing(60),
        width:theme.spacing(40)
    }
    }))
    
    


function ErrorPage() {
    const classes = useStyles()
    return (
        <Container>
            <Grid container justify='center'>
                <Grid item>
                    <Avatar variant='square' src={goku} className={classes.large} />
                </Grid>
                <Grid item>
                    <Grid container direction='column'>
                        <Grid item>
                    <Typography variant='h1'>Ooops</Typography>
                    </Grid>
                    <Grid item>
                    <Typography variant='h3'>404 Page Not Found</Typography>
                    </Grid>
                    <Grid item>
                    <Typography variant='h5'>We cant seem to find the page you are looking for</Typography>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ErrorPage
