import { Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { BiRupee } from 'react-icons/bi'
import { fetchcardcategoryfailure, fetchcardcategorysuccess, fetchCommonProducts } from '../../redux';
import { useDispatch, useSelector } from 'react-redux'
import CardError from './CardError'

const useStyles = makeStyles((theme) => ({
    placeSort: {
        justifyContent: 'space-between'
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
    const [sortBy, setsortBy] = useState({ normal: true, rating: false, lowtohigh: false, hightolow: false })
    const dispatch = useDispatch()






    const ltoh = () => {
        let ltohProduct = product.product_details
        ltohProduct.sort((a, b) => {
            return a.product_cost - b.product_cost
        })
        try {
            if (props.pagenumber == 1) {
                const cards = ltohProduct.slice(0, props.pagenumber * 8).map((product) => <Grid item><ProductCard product={product} /></Grid>)
                dispatch(fetchcardcategorysuccess())
                return cards
            } else {
                const cards = ltohProduct.slice((props.pagenumber - 1) * 8, props.pagenumber * 8).map((product) => <Grid item><ProductCard product={product} /></Grid>)
                dispatch(fetchcardcategorysuccess())
                return cards
            }
        } catch (errror) {
            dispatch(fetchcardcategoryfailure())
            return <CardError />
        }
        // console.log(ltohProduct)
    }


    const htol = () => {
        let htolProduct = product.product_details
        htolProduct.sort((a, b) => {
            return b.product_cost - a.product_cost
        })
        try {
            if (props.pagenumber == 1) {
                const cards = htolProduct.slice(0, props.pagenumber * 8).map((product) => <Grid item><ProductCard product={product} /></Grid>)
                dispatch(fetchcardcategorysuccess())
                return cards
            } else {
                const cards = htolProduct.slice((props.pagenumber - 1) * 8, props.pagenumber * 8).map((product) => <Grid item><ProductCard product={product} /></Grid>)
                dispatch(fetchcardcategorysuccess())
                return cards
            }
        } catch (errror) {
            dispatch(fetchcardcategoryfailure())
            return <CardError />
        }
        // console.log(ltohProduct)
    }


    const highrating = () => {
        let ratingProduct = product.product_details
        ratingProduct.sort((a, b) => {
            return b.product_rating - a.product_rating
        })
        try {
            if (props.pagenumber == 1) {
                const cards = ratingProduct.slice(0, props.pagenumber * 8).map((product) => <Grid item><ProductCard product={product} /></Grid>)
                dispatch(fetchcardcategorysuccess())
                return cards
            } else {
                const cards = ratingProduct.slice((props.pagenumber - 1) * 8, props.pagenumber * 8).map((product) => <Grid item><ProductCard product={product} /></Grid>)
                dispatch(fetchcardcategorysuccess())
                return cards
            }
        } catch (errror) {
            dispatch(fetchcardcategoryfailure())
            return <CardError />
        }
        // console.log(ltohProduct)
    }


    const getCards = () => {
        try {
            if (props.pagenumber == 1) {
                const cards = product.product_details.slice(0, props.pagenumber * 8).map((product) => <Grid item><ProductCard product={product} /></Grid>)
                dispatch(fetchcardcategorysuccess())
                return cards
            } else {
                const cards = product.product_details.slice((props.pagenumber - 1) * 8, props.pagenumber * 8).map((product) => <Grid item><ProductCard product={product} /></Grid>)
                dispatch(fetchcardcategorysuccess())
                return cards
            }
        } catch (errror) {
            dispatch(fetchcardcategoryfailure())
            return <CardError />
        }


    }

    

    return (
        <React.Fragment>
                <Grid container className={classes.placeSort}>
                    <Grid item>
                        <Toolbar>
                        <Typography variant='h4'>{props.title}</Typography>
                        </Toolbar>
                    </Grid>
                    <Grid item>
                        <Toolbar>
                            <Typography display='inline'>Sort By:</Typography>
                            <IconButton onClick={() => setsortBy({ lowtohigh: false, rating: true, normal: false, hightolow: false })} style={{ outline: 'none', color: '#3366bb' }}>
                                <StarIcon />
                            </IconButton>
                            <IconButton onClick={() => setsortBy({ hightolow: false, rating: false, normal: false, lowtohigh: true })} style={{ outline: 'none', color: '#3366bb' }}>
                                <small>₹</small><ArrowUpwardIcon />
                            </IconButton>
                            <IconButton onClick={() => setsortBy({ lowtohigh: false, rating: false, normal: false, hightolow: true })} style={{ outline: 'none', color: '#3366bb' }}>
                                <small>₹</small><ArrowDownwardIcon />
                            </IconButton>
                        </Toolbar>
                    </Grid>
                </Grid>
                <Grid container className={classes.placeCard} spacing={2}>
                    {sortBy.normal && getCards()}
                    {sortBy.lowtohigh && ltoh()}
                    {sortBy.hightolow && htol()}
                    {sortBy.rating && highrating()}
                </Grid>
            
        </React.Fragment>
    )
}

export default ProductsCard
