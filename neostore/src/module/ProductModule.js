import { Container, Divider, Grid, Box, CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductsCard from '../components/molecules/ProductsCard'
import ProductSidePanel from '../components/molecules/ProductSidePanel'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import { fetchCategory, fetchColor, fetchCommonProducts } from '../redux'
import { useParams } from 'react-router-dom'
import Authentication from './Authentication'

function ProductModule() {


    /**
     * @description Here 3 states are declared for product functionality as follows
     * 1: It sets the active page no
     * 2: It handles the disabling effect of pagination
     * 3: It handles the setting of title according to category
     */
    const [active, setactive] = useState(1)
    const [disable, setdisable] = useState({ prev: false, next: false })
    const [title, settitle] = useState('All Categories')

    const loading = useSelector(state => state.product.loading)
    const cardError = useSelector(state => state.cardCategory.category)
    // const catloading = useSelector(state => state.cardCategory.loading)
    const product = useSelector(state => state.product.products)

    const dispatch = useDispatch()

    const { name, category } = useParams()


    /**
     * @description Here if the name or category of the product is provided then the product fetching is done accordingly
     * It also fetches the category and color
     */
    useEffect(() => {
        if (name === undefined) {
            dispatch(fetchCommonProducts('','','','','','',active,8))
        } else if (name === ' ' && category !== undefined) {
            dispatch(fetchCommonProducts('', category, '', '', ''))
        } else {
            dispatch(fetchCommonProducts('', '', '', '', name))
        }

    }, [name, category,active])


    useEffect(() => {
        dispatch(fetchCategory())
        dispatch(fetchColor())
    }, [])

    /**
     * It Governs the functionality of the pagination according to the listing of products
     */
    useEffect(() => {
        if (active === 1) {
            setdisable({ prev: true, next: false })
        } else if (active !== 1 && active !== (product.total_count / 8)) {
            setdisable({ prev: false, next: false })
        } else if (active === (product.total_count / 8)) {
            setdisable({ prev: false, next: true })
        }
    }, [active])

    /**
     * This works specifically when user click on the carousel image
     */
    useEffect(() => {
        if (category !== undefined) {
            try {
                settitle(product.product_details[0].category_id.category_name)
                console.log(product.product_details[0])
            } catch (error) {

            }
        }

    }, [product])


    //It make the pagination numbers according to the available products
    const getPageItem = () => {
        let number = 8
        let item = []

        for (let i = 0, j = 1; i < product.total_count; i = i + number, j++) {
            item.push(<PageItem onClick={() => setactive(j)} active={j === active}>{j}</PageItem>)
        }
        return item
    }

    const prevOnClick = () => {
        setactive((prevState) => prevState - 1)
    }
    const nextOnClick = () => {
        setactive((prevState) => prevState + 1)
    }
    const firstOnClick = () => {
        setactive(1)
    }
    const lastOnClick = () => {
        setactive((product.total_count / 8))
    }

    //This function handles  the title when user changes category
    const handleTitle = (data) => {
        settitle(data)
    }

    return (
        <React.Fragment>
            {/* {false ? <Loading /> : */}
                <React.Fragment>
                    <Authentication
                        render={(isLogedin, setisLogedin) => (<Header isLogedin={isLogedin} setisLogedin={setisLogedin} />)}
                    />
                    {/* <Header /> */}
                    <Divider orientation='horizontal' style={{ marginTop: '3%' }} />
                    <Container >
                        <Grid container justify='space-evenly'>
                            <Grid container item xs={12} lg={3} justify='center' >
                                <Box width='80%'>
                                    <ProductSidePanel title={handleTitle} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={8}>
                                {loading ? <Grid justify='center' alignContent='center' style={{ height: '100vh' }} container><CircularProgress /></Grid> : <ProductsCard title={title} pagenumber={active} />}
                                <Grid container style={{ marginBottom: '10%',marginLeft:'6%' }}>
                                    {cardError && <Pagination>
                                        <Pagination.First onClick={firstOnClick} disabled={disable.prev} />
                                        <Pagination.Prev onClick={prevOnClick} disabled={disable.prev}>Previous</Pagination.Prev>
                                        {getPageItem()}
                                        <Pagination.Next onClick={nextOnClick} disabled={disable.next}>Next</Pagination.Next>
                                        <Pagination.Last onClick={lastOnClick} disabled={disable.next} />
                                    </Pagination>}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                    <Footer />
                </React.Fragment>
            {/* } */}
        </React.Fragment>
    )
}

export default ProductModule
