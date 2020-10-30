import { Container, Divider, Grid, ThemeProvider, createMuiTheme, Box } from '@material-ui/core'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductDetail from '../components/molecules/ProductDetail'
import ProductsCard from '../components/molecules/ProductsCard'
import ProductSidePanel from '../components/molecules/ProductSidePanel'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'


function ProductModule() {
    return (
        <React.Fragment>
            <Header />
            {/* <Divider orientation='horizontal' style={{ marginTop: '3%' }} />
            <Container>
                <Grid container>
                    <Grid container item xs={12} lg={3} justify='center' >
                        <Box width='80%'>
                            <ProductSidePanel />
                        </Box>
                    </Grid>
                    <Grid container item xs={12} lg={9}>
                        <ProductsCard />
                    </Grid>
                </Grid>
                <Grid container justify='center' style={{marginBottom:'10%'}}>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev>Previous</Pagination.Prev>
                    <PageItem>{1}</PageItem>
                    <PageItem>{2}</PageItem>
                    <PageItem>{3}</PageItem>
                    <PageItem>{4}</PageItem>
                    <Pagination.Prev>Next</Pagination.Prev>
                    <Pagination.Last />
                </Pagination>
            </Grid>
            </Container> */}

            <Container>
                <ProductDetail />
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default ProductModule
