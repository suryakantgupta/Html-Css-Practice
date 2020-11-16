import { AppBar, createMuiTheme, Grid, ThemeProvider, Toolbar, Typography, makeStyles, Button, Badge, withStyles, Menu, MenuItem, Snackbar, Link, } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import React, { useEffect, useRef, useState } from 'react'
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommonProducts, postLogout } from '../redux';
import { Modal, ModalBody } from 'react-bootstrap';


/**
 * @description This is the Search Bar Component to give suggetions in the dropdown
 * suggesstion are the name of the product that is available
 * @param {*} props is passed to get the list of option in the dropdown
 */
const SearchbarDropdown = (props) => {

    const { options, onInputChange } = props; //props are destructured in the option list and event type

    const ulRef = useRef(); //This provide ref to ul for DOM manipulation
    const inputRef = useRef(); //This provide ref to the search input field for DOM manipulation
    const history = useHistory() //It is used to redirect to other page when certain conditions are met

    /**
     * @description This function adds the functionality to the input feild of
     * the search bar by setting the display of the ul from none to flex
     */
    useEffect(() => {
        inputRef.current.addEventListener('click', (event) => {
            event.stopPropagation();
            ulRef.current.style.display = 'flex';
            onInputChange(event);
        });

        inputRef.current.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                history.push(`/commonproducts/${inputRef.current.value}`)
            }
        })
        // console.log(inputRef)
        // ulRef.current.style.display = 'none';
        // document.addEventListener('click', (event) => {
        //     ulRef.current.style.display = 'none';
        // });
    }, []);


    return (
        <div className="search-bar-dropdown">
            <SearchIcon className='mt-1' style={{ position: 'absolute', color: 'black', height: '1.5em', width: '1.5em' }} />
            <input
                id="search-bar"
                type="text"
                className="form-control"
                placeholder="Search"
                ref={inputRef}
                onChange={onInputChange}
            />

            <ul id="results" className="list-group" ref={ulRef}>
                {/* This Function makes the list in dropdown menu */}
                {options.map((option) => {
                    return (
                        <button
                            type="button"
                            key={option.product_id}
                            onClick={(e) => {
                                inputRef.current.value = option.product_name;
                            }}
                            className="list-group-item list-group-item-action"
                        >
                            {option.product_name}
                        </button>
                    );
                })}
            </ul>
        </div>
    );
};




/**
 * @description This sets the background of the navbar by creating
 *  a new theme for primary color of the Appbar
 */
const navbarTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000'
        }
    }
})


/**
 * @description This section overides the style of the components
 *  provided by material ui 
 * 
 * @param theme is passed as paramter to identify the type of
 *  screen and make the component responsive
 */
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        height: '3rem',
        width: '20rem'
    },
    btnBgColor: {
        height: '3rem',
        width: '6rem',
        textTransform: 'none'
    },
    logoGrid: {
        justifyContent: 'center'
    },
    searchGrid: {
        justifyContent: 'flex-end'
    },
    searchBar: {
        justifyContent: 'center'
    },
    [theme.breakpoints.up('md')]: {
        logoGrid: {
            justifyContent: 'flex-start'
        },
        searchBar: {
            justifyContent: 'flex-end'
        }
    }
}))


/**
 * @description This section is made to design the dropdown menu on the AppBar
 * 
 */


const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));



function Header(props) {
    const classes = useStyles(); //Creates the instance of the styles to be used in the material component
    const history = useHistory()
    /**
     * @description Three states are declared to handle the rendering in header
     * 1-It handles all the option provided by search bar
     * 2 and 3 are used to handle the dropdown of the login and register menu
     */

    const [options, setOptions] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setopen] = useState(false)
    const [mopen, setmopen] = useState(false)

    const dispatch = useDispatch() //This hook is used to dispacth the action in the redux

    /**
     * These hooks are used to access the data from redux
     */
    const product = useSelector(state => state.product.products)
    const loading = useSelector(state => state.product.loading)
    const addcart = useSelector(state => state.addcart.data)

    /**
     * @description This hook check the component did mount state the it dispatches the api call
     * for product
     */

    useEffect(() => {
        if (loading) {
            dispatch(fetchCommonProducts())
        }
    }, [])


    /**
     * @description This function checks for the input in search feild and 
     * accordingy gives the suggesstion from the products available
     * 
     * @param {*} event is used to access the value in searcg bar 
     */

    const onInputChange = (event) => {
        if (!loading) {
            try {
                setOptions(
                    product.product_details.filter((option) => option.product_name.includes(event.target.value))
                );
            } catch (error) {
                setOptions([])
            }

        }

    };




    //It handles the dropdown menu response
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //It removes the token on logout and refresh the page
    const handleLogout = () => {
        dispatch(postLogout(addcart))
        console.log(addcart)
        // localStorage.setItem('cart',JSON.stringify([]))
        
        setopen(true)
        // window.location.reload()
    }

    //This handles the snackbar when it is closed
    const handleonClose = () => {
        setopen(false)
        localStorage.removeItem('token')
        localStorage.removeItem('cart')
        window.location.reload()
    }

    const handleOrderClick = () => {
        if (props.isLogedin) {
            history.push('/myaccount/order')
        } else {
            setmopen(true)
        }
    }


    return (
        // <Grid container>
        <ThemeProvider theme={navbarTheme}>
            <AppBar color="primary" position='static' style={{ margin: 0 }}>
                <Grid container>
                    <Grid item xs={12} lg={3} >
                        <Grid container className={classes.logoGrid}>
                            <Toolbar>
                                <ThemeProvider theme={() => createMuiTheme({
                                    palette: {
                                        secondary: {
                                            main: '#ff0000'
                                        }
                                    },
                                    typography: {
                                        h4: {
                                            fontFamily: 'Arial',
                                            fontSize: '2.4rem'
                                        }
                                    }
                                })}>
                                    <Link href='/dashboard' color='inherit' style={{ textDecoration: 'none', textTransform: 'none' }}>
                                        <Typography display='inline' style={{ color: "white" }} variant='h4'>Neo</Typography>
                                        <Typography display='inline' style={{ fontWeight: 'bold' }} color='secondary' variant='h4'>STORE</Typography>
                                    </Link>
                                </ThemeProvider>
                            </Toolbar>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Grid container justify='space-evenly'>
                            <Grid item>
                                <Toolbar>
                                    {/* <Link href='/dashboard' style={{ textDecoration: 'none' }}> */}
                                    <Typography onClick={() => history.push('/dashboard')} variant='h6' style={{ color: "white" }} >Home</Typography>
                                    {/* </Link> */}
                                </Toolbar>
                            </Grid>
                            <Grid item>
                                <Toolbar>
                                    {/* <Link href='/commonproducts' style={{ textDecoration: 'none' }}> */}
                                    <Typography onClick={() => history.push('/commonproducts')} variant='h6' style={{ color: "white" }}>Products</Typography>
                                    {/* </Link> */}
                                </Toolbar>
                            </Grid>
                            <Grid item>
                                <Toolbar>
                                    <Typography onClick={handleOrderClick} variant='h6' style={{ color: "Swhite" }}>Order</Typography>
                                </Toolbar>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={5}>
                        <Grid container className={classes.searchGrid}>
                            {/* <Toolbar> */}
                            <Grid item xs={12} lg={8}>
                                <Grid container className={classes.searchBar}>
                                    <Toolbar disableGutters>
                                        {/* SearchBar */}
                                        <SearchbarDropdown options={options} onInputChange={onInputChange} />
                                    </Toolbar>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} lg={2}>
                                <Grid container justify='flex-end'>
                                    <Toolbar disableGutters>
                                        <Button
                                            onClick={() => history.push('/maincart')}
                                            className={classes.btnBgColor}
                                            style={{ backgroundColor: 'white', outline: 'none', marginRight: '4px' }}
                                            startIcon={<Badge badgeContent={addcart == null ? 0 : addcart.length} color='secondary' showZero>
                                                <ShoppingCartIcon />
                                            </Badge>}
                                        >
                                            Cart
                                        </Button>
                                    </Toolbar>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} lg={2}>
                                <Toolbar disableGutters>
                                    <Button
                                        style={{ backgroundColor: 'white', outline: 'none', marginRight: '0.8rem' }}
                                        className={classes.btnBgColor}
                                        onClick={handleClick}
                                    >
                                        {props.isLogedin ? <AccountCircleIcon /> : <AccountBoxIcon />}
                                        <ExpandMoreIcon />
                                    </Button>
                                    <StyledMenu
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem>
                                            {props.isLogedin ?
                                                <ListItemText style={{ color: 'black' }} onClick={handleLogout} primary="Logout" /> :
                                                // <Link href='/login' style={{ textDecoration: 'none' }}>
                                                    <ListItemText onClick={()=>history.push('/login')} style={{ color: 'black' }} primary="Login" />
                                                // {/* </Link> */}
                                                }
                                        </MenuItem>

                                        <MenuItem>
                                            {props.isLogedin ?
                                                // <Link href='/myaccount/profile' style={{ textDecoration: 'none' }}>
                                                    <ListItemText onClick={()=>history.push('/myaccount/profile')} style={{ color: 'black' }} primary="Profile" />
                                                // </Link>
                                                :

                                                // <Link href='/register' style={{ textDecoration: 'none' }}>
                                                    <ListItemText onClick={()=>history.push('/register')} style={{ color: 'black' }} primary="Register" />
                                                // </Link>
                                                }
                                        </MenuItem>
                                    </StyledMenu>
                                </Toolbar>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </AppBar>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleonClose} message='You have successfully loged out' />
            <Modal show={mopen} onHide={() => { setmopen(false); history.push('/login') }} >
                <ModalBody>
                    <Typography>You must log in first</Typography>
                </ModalBody>
            </Modal>
        </ThemeProvider>

    )
}

export default Header
