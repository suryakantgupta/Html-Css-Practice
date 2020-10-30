import { ButtonGroup, Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import React from 'react'
import ProductCard from './ProductCard';


const useStyles = makeStyles((theme)=>({
    placeSort:{
        justifyContent:'flex-end'
    },
    [theme.breakpoints.down('sm')]:{
        placeSort:{
            justifyContent:'center'
        },
        placeCard:{
            justifyContent:'center'
        }
    }
}))

function ProductsCard() {

    const classes = useStyles()



    return (
        <React.Fragment>
            <Grid container className={classes.placeSort}>
                <Grid item>
                    <Toolbar>
                        <Typography display='inline'>Sort By:</Typography>
                        <IconButton style={{outline:'none'}}>
                            <StarIcon/>
                        </IconButton>
                        <IconButton style={{outline:'none'}}>
                            <ArrowUpwardIcon />
                        </IconButton>
                        <IconButton style={{outline:'none'}}>
                            <ArrowDownwardIcon />
                        </IconButton>
                    </Toolbar>
                </Grid>
            </Grid>
            <Grid container className={classes.placeCard} spacing={2}>
                <Grid item>
                    <ProductCard />
                </Grid>
                <Grid item>
                    <ProductCard />
                </Grid>
                <Grid item>
                    <ProductCard />
                </Grid>
                <Grid item>
                    <ProductCard />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default ProductsCard
