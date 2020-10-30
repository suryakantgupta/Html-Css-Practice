import { Box, Button, createMuiTheme, Grid, makeStyles, MuiThemeProvider, ThemeProvider, Typography } from '@material-ui/core'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




const useStyles = makeStyles((theme) => ({
    allbutton: {
        textTransform: 'none',
    },
    catbutton:{
        textTransform: 'none',
         display: 'flex', 
         justifyContent: 'flex-start'
    }
}))





function ProductSidePanel() {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Grid container spacing={1} direction='column' style={{marginTop:'10%'}} >
                <Grid item>
                    <Box borderRadius='5px' boxShadow={3} width={1}>
                        <Button size='large' fullWidth variant='outlined' className={classes.button} style={{outline:'none'}}>All Products</Button>
                    </Box>
                </Grid>
                <Grid item>
                    <Box borderRadius='5px' boxShadow={3} width={1}>
                        <Button size='large' variant='outlined' fullWidth className={classes.catbutton} style={{outline:'none'}}><ExpandMoreIcon />Categories</Button>
                    </Box>
                </Grid>
                <Grid item>
                    <Box borderRadius='5px' boxShadow={3} width={1} >
                        <Button size='large' variant='outlined' fullWidth className={classes.catbutton} style={{outline:'none'}}><ExpandMoreIcon /> Order</Button>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default ProductSidePanel
