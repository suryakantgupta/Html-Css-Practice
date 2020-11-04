import { Container, Divider, Grid, ThemeProvider, createMuiTheme, Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductDetail from '../components/molecules/ProductDetail'
import ProductsCard from '../components/molecules/ProductsCard'
import ProductSidePanel from '../components/molecules/ProductSidePanel'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import { fetchCategory, fetchColor, fetchCommonProducts } from '../redux'

function ProductModule() {

    const loading = useSelector(state => state.product.loading)
    const [active, setactive] = useState(1)
    const product = useSelector(state => state.product.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCommonProducts())
        dispatch(fetchCategory())
        dispatch(fetchColor())
    }, [])


    const getPageItem = () => {
        let number = 8
        let item = []
        for (let i = 0, j = 1; i < product.total_count; i = i + number, j++) {
            item.push(<PageItem onClick={()=>setactive(j)} active={j===active}>{j}</PageItem>)
        }
        return item
    }


    // {/* <Container>
    //     <ProductDetail />
    // </Container> */}


    return (
        <React.Fragment>
            {loading ? <Loading /> :
                <React.Fragment>
                    <Header />
                    <Divider orientation='horizontal' style={{ marginTop: '3%' }} />
                    <Container>
                        <Grid container>
                            <Grid container item xs={12} lg={3} justify='center' >
                                <Box width='80%'>
                                    <ProductSidePanel />
                                </Box>
                            </Grid>
                            <Grid container item xs={12} lg={9}>
                                <ProductsCard pagenumber={active} />
                            </Grid>
                        </Grid>
                        <Grid container justify='center' style={{ marginBottom: '10%' }}>
                            <Pagination>
                                <Pagination.First />
                                <Pagination.Prev>Previous</Pagination.Prev>
                                {getPageItem()}
                                <Pagination.Prev>Next</Pagination.Prev>
                                <Pagination.Last />
                            </Pagination>
                        </Grid>
                    </Container>
                    <Footer />
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default ProductModule
