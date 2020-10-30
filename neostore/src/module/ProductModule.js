import { Container, Divider, Grid, ThemeProvider, createMuiTheme, Box } from '@material-ui/core'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductsCard from '../components/molecules/ProductsCard'
import ProductSidePanel from '../components/molecules/ProductSidePanel'

function ProductModule() {
    return (
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
                        <ProductsCard />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default ProductModule
