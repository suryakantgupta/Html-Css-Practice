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
import CardError from '../components/molecules/CardError'
import { useParams } from 'react-router-dom'

function ProductModule() {

    const loading = useSelector(state => state.product.loading)
    const [active, setactive] = useState(1)
    const [disable, setdisable] = useState({ prev: false, next: false })
    // const [large,setlarge] = useState(0)

    const product = useSelector(state => state.product.products)
    const dispatch = useDispatch()
    const {name} = useParams()
    useEffect(() => {
        if(name==undefined){
            dispatch(fetchCommonProducts())
        }else{
            dispatch(fetchCommonProducts('','','','',name))
        }
        dispatch(fetchCategory())
        dispatch(fetchColor())
    }, [name])

    



    const getPageItem = () => {
        let number = 8
        let item = []

        for (let i = 0, j = 1; i < product.total_count; i = i + number, j++) {
            item.push(<PageItem onClick={() => setactive(j)} active={j === active}>{j}</PageItem>)
        }
        return item
    }

    useEffect(() => {
        if(active==1){
            setdisable({prev:true,next:false})
        }else if (active !=1 && active != (product.total_count / 8)) {
            setdisable({ prev:false, next: false })
        } else if(active == (product.total_count / 8)){
            setdisable({ prev:false, next: true })
        }
    }, [active])

const prevOnClick = () =>{
    setactive((prevState)=>prevState-1)
}
const nextOnClick = () =>{
    setactive((prevState)=>prevState+1)
}
const firstOnClick = () =>{
    setactive(1)
}
const lastOnClick = () =>{
    setactive((product.total_count / 8))
}


const cardError = useSelector(state => state.cardCategory.category)
const [title, settitle] = useState('All Categories')
const handleTitle = (data)=>{
settitle(data)
}
console.log(title)


    return (
        <React.Fragment>
            {loading ? <Loading /> :
                <React.Fragment>
                    <Header />
                    <Divider orientation='horizontal' style={{ marginTop: '3%' }} />
                    <Container >
                        <Grid container justify='space-evenly'>
                            <Grid container item xs={12} lg={3} justify='center' >
                                <Box width='80%'>
                                    <ProductSidePanel title={handleTitle} />
                                </Box>
                            </Grid>
                            <Grid container item xs={12} lg={8}>
                                
                                <ProductsCard title={title} pagenumber={active} />
                                
                            </Grid>
                        </Grid>
                        <Grid container justify='center' style={{ marginBottom: '10%' }}>
                            {cardError && <Pagination>
                                <Pagination.First onClick={firstOnClick} disabled={disable.prev} />
                                <Pagination.Prev onClick={prevOnClick} disabled={disable.prev}>Previous</Pagination.Prev>
                                {getPageItem()}
                                <Pagination.Next onClick={nextOnClick} disabled={disable.next}>Next</Pagination.Next>
                                <Pagination.Last onClick={lastOnClick} disabled={disable.next} />
                            </Pagination>}
                        </Grid>
                    </Container>
                    <Footer />
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default ProductModule
