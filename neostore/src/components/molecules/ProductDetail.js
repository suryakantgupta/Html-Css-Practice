import { AppBar, Avatar, Box, Button, ButtonGroup, Divider, Grid, Icon, IconButton, makeStyles, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types'
import { Carousel, Image } from 'react-bootstrap'
import cake from '../../images/cake.jpg'
import StarRatings from 'react-star-ratings';
import { BiRupee } from 'react-icons/bi'
import ShareIcon from '@material-ui/icons/Share';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import { AiFillFacebook } from 'react-icons/ai'
import { IoLogoGoogle } from 'react-icons/io'


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
    socialBox:{
        width:'50%'
    },
    [theme.breakpoints.down('sm')]:{
        socialBox:{
            width:'80%'
        }
    }
}));





function ProductDetail() {


    const mobile = useMediaQuery('(max-width:400px)')


    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };








    return (
        <div style={{ marginTop: '3%', marginBottom: '3%' }}>
            <Grid container justify='space-between'>
                <Grid item lg={6}>
                    {!mobile && <Grid container spacing={8} >
                        <Grid item>
                            <Image src={cake} width='100%' />
                        </Grid>
                        <Grid container item spacing={4}>
                            <Grid item>
                                <Image src={cake} fluid width='170rem' />
                            </Grid>
                            <Grid item>
                                <Image src={cake} fluid width='170rem' />
                            </Grid>
                            <Grid item>
                                <Image src={cake} fluid width='170rem' />
                            </Grid>
                        </Grid>
                    </Grid>}
                    {mobile && <Grid container xs={12}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={cake}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={cake}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={cake}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Grid>

                    }
                </Grid>
                <Grid item lg={5} xs={12}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item>
                            <Typography variant='h4' >Cake</Typography>
                        </Grid>
                        <Grid item>
                            <StarRatings rating={2} numberOfStars={5} starRatedColor='orange' starDimension='18px' starSpacing='1px' />
                        </Grid>
                        <Divider orientation='horizontal' style={{ marginTop: "3%" }} />
                        <Grid item>
                            <Typography variant='span'>Price:</Typography><Icon><BiRupee /></Icon><Typography variant='span'>9999</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>Color:</Typography>
                        </Grid>
                        <Grid item>
                            <Typography component='span'>Share</Typography><IconButton edge='start'><ShareIcon /></IconButton>
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
                                    <Button variant='contained'>Add to Cart</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='contained'>Rate Product</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>






            {/* <div className={classes.root}> */}
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
                            Description Will come here
        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            Features are Explained here
        </TabPanel>
                    </SwipeableViews>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductDetail
