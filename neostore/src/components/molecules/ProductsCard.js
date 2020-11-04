import {Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import React, { useEffect } from 'react'
import ProductCard from './ProductCard';
import { BiRupee } from 'react-icons/bi'
import { fetchCommonProducts } from '../../redux';
import {useDispatch, useSelector} from 'react-redux'

const useStyles = makeStyles((theme) => ({
    placeSort: {
        justifyContent: 'flex-end'
    },
    placeCard: {
        marginBottom: '3%'
    },
    [theme.breakpoints.down('sm')]: {
        placeSort: {
            justifyContent: 'center'
        },
        placeCard: {
            justifyContent: 'center'
        }
    }
}))

function ProductsCard(props) {

    const classes = useStyles()
    
    const product = useSelector(state => state.product.products)

// console.log(product.product_details.slice(0,5))
    const getCards = ()=>{
        if(props.pagenumber==1){
            const cards = product.product_details.slice(0,props.pagenumber*8).map((product)=><Grid item><ProductCard product={product}/></Grid>)
            return cards
        }else{
            const cards = product.product_details.slice((props.pagenumber-1)*8,props.pagenumber*8).map((product)=><Grid item><ProductCard product={product}/></Grid>)
            return cards
        }
        
    }

    console.log(props.pagenumber)

    return (
        <React.Fragment>
            <Grid container className={classes.placeSort}>
                <Grid item>
                    <Toolbar>
                        <Typography display='inline'>Sort By:</Typography>
                        <IconButton style={{ outline: 'none' }}>
                            <StarIcon />
                        </IconButton>
                        <IconButton style={{ outline: 'none' }}>
                            <ArrowUpwardIcon />
                        </IconButton>
                        <IconButton style={{ outline: 'none' }}>
                            <ArrowDownwardIcon />
                        </IconButton>
                    </Toolbar>
                </Grid>
            </Grid>
            <Grid container className={classes.placeCard} spacing={2}>
                {getCards()}
            </Grid>
            
        </React.Fragment>
    )
}

export default ProductsCard
