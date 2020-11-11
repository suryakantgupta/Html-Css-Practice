import { Avatar, Box, Button, Container, Divider, Grid, IconButton, makeStyles, Tab, Tabs, Tooltip, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SwipeableViews from 'react-swipeable-views';
import { Carousel, Image } from 'react-bootstrap'
import StarRatings from 'react-star-ratings';
import ShareIcon from '@material-ui/icons/Share';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import { AiFillFacebook } from 'react-icons/ai'
import { IoLogoGoogle } from 'react-icons/io'
import Header from '../Header';
import Footer from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchById } from '../../redux/products/productsAction';
import Loading from '../Loading'
import { GlassMagnifier,SideBySideMagnifier } from 'react-image-magnifiers'
import Authentication from '../../module/Authentication';
import ReactImageMagnify from 'react-image-magnify'

/**
 * @description This functional component renders the sliding part of /description and features
 * 
 * @param {*} props is passsed for the customization according to the use case
 */

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '50%',
    },
    socialBox: {
        width: '50%'
    },
    [theme.breakpoints.down('sm')]: {
        socialBox: {
            width: '80%'
        }
    }
}));


/**
 * Main component
 */
function ProductDetail() {
    const mobile = useMediaQuery('(max-width:400px)')// Identifies the device
    const dispatch = useDispatch()
    const { id } = useParams() //Extract the id from url

    const product = useSelector(state => state.byid.product.product_details)
    const loading = useSelector(state => state.byid.loading)

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [image, setimage] = useState()

    //This function fecth the product by id
    useEffect(() => {
        dispatch(fetchById(id))
    }, [id])
    useEffect(() => {
        if (!loading) {
            setimage(`http://180.149.241.208:3022/${product[0].product_image}`)
        }
    }, [loading])

    /**
     * @description These two function handles the sliding to description and features
     * @param {*} event 
     * @param {*} newValue 
     */
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };




    return (

        <React.Fragment>
            {loading ? <Loading /> :
                <React.Fragment>
                    <Authentication
            render={(isLogedin,setisLogedin)=>(<Header isLogedin={isLogedin} setisLogedin={setisLogedin} />)}
            />
                    {/* <Header /> */}
                    <Container style={{ marginBottom: '7%' }}>
                        <div style={{ marginTop: '3%', marginBottom: '3%' }}>
                            <Grid container justify='space-between'>
                                <Grid item lg={6}>
                                    {!mobile && <Grid container spacing={8} >
                                        <Grid item>
                                            <ReactImageMagnify {...{
                                                smallImage:{
                                                    src:image,
                                                    isFluidWidth:true
                                                },
                                                largeImage:{
                                                    src:image,
                                                    width:2000,
                                                    height:600
                                                }
                                            }}
                                            style={{zIndex:2}}
                                            />
                                            {/* <Image src={image} width='100%' /> */}
                                        </Grid>
                                        <Grid container item spacing={4}>
                                            {product[0].subImages_id.product_subImages.map((name) =>
                                                <Grid item>
                                                    <Image src={`http://180.149.241.208:3022/${name}`} onClick={() => setimage(`http://180.149.241.208:3022/${name}`)} fluid width='170rem' />
                                                </Grid>)
                                            }
                                        </Grid>
                                    </Grid>}
                                    {mobile && <Grid container xs={12}>
                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={`http://180.149.241.208:3022/${product[0].product_image}`}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={`http://180.149.241.208:3022/${product[0].subImages_id.product_subImages[0]}`}
                                                    alt="Third slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={`http://180.149.241.208:3022/${product[0].subImages_id.product_subImages[1]}`}
                                                    alt="Third slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={`http://180.149.241.208:3022/${product[0].subImages_id.product_subImages[2]}`}
                                                    alt="Forth slide"
                                                />
                                            </Carousel.Item>
                                        </Carousel>
                                    </Grid>

                                    }
                                </Grid>
                                <Grid item lg={5} xs={12}>
                                    <Grid container direction='column' spacing={2}>
                                        <Grid item>
                                            <Typography variant='h4' >{product[0].product_name}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <StarRatings rating={parseFloat(product[0].product_rating)} numberOfStars={5} starRatedColor='orange' starDimension='18px' starSpacing='1px' />
                                        </Grid>
                                        <Divider orientation='horizontal' style={{ marginTop: "3%" }} />
                                        <Grid item>
                                            <Typography style={{ fontSize: '1.1rem' }} component='span'>Price:</Typography><Typography variant='span' style={{ color: 'green' }}>{`₹${product[0].product_cost}`}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography style={{ fontSize: '1.1rem' }}>Color:<Tooltip title={product[0].color_id.color_name} placement="top-start"><Box style={{ height: '20px', width: '30px', backgroundColor: product[0].color_id.color_code, display: 'inline-block' }}></Box></Tooltip></Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography component='span' variant='h6'>Share</Typography><IconButton edge='start'><ShareIcon /></IconButton>
                                        </Grid>
                                        <Grid container item>
                                            <Box className={classes.socialBox}>
                                                <Grid container justify='space-between'>

                                                    <Avatar style={{ backgroundColor: '#3b5998' }}><AiFillFacebook /></Avatar>
                                                    <Avatar style={{ backgroundColor: '#db4437' }}><IoLogoGoogle /></Avatar>
                                                    <Avatar style={{ backgroundColor: '#25d366' }}><WhatsAppIcon /></Avatar>
                                                    <Avatar style={{ backgroundColor: '#E60023' }}><PinterestIcon /></Avatar>
                                                    <Avatar style={{ backgroundColor: '#00acee' }}><TwitterIcon /></Avatar>

                                                </Grid>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Grid container spacing={2}>
                                                <Grid item>
                                                    <Button variant='contained' style={{ backgroundColor: '#00acee', color: 'white' }}>Add to Cart</Button>
                                                </Grid>
                                                <Grid item>
                                                    <Button variant='contained' style={{ backgroundColor: '#754b10', color: 'white' }}>Rate Product</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>

                            <Grid container direction='column'>
                                <Grid item>
                                    <Box width='50%'>
                                        <Tabs
                                            value={value}
                                            onChange={handleChange}
                                            indicatorColor="primary"
                                            textColor="primary"
                                            variant="fullWidth"
                                        >
                                            <Tab style={{ textTransform: 'none', outline: 'none' }} label="Description" />
                                            <Tab style={{ textTransform: 'none', outline: 'none' }} label="Features" />
                                        </Tabs>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <SwipeableViews
                                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                        index={value}
                                        onChangeIndex={handleChangeIndex}
                                        width='100%'
                                    >
                                        <TabPanel value={value} index={0} dir={theme.direction}>
                                            {product[0].product_desc}
                                        </TabPanel>
                                        <TabPanel value={value} index={1} dir={theme.direction}>
                                            <b>Dimensions</b>:{product[0].product_dimension}<br />
                                    <b>Material</b>:{product[0].product_material}<br />
                                    <b>Manufacturer</b>:{product[0].product_producer}<br />
                                        </TabPanel>
                                    </SwipeableViews>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                    <Footer />
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default ProductDetail
