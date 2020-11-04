import { AppBar, createMuiTheme, Grid, Icon, ThemeProvider, Toolbar, Typography, Input, Paper, makeStyles, Button, Badge, IconButton, withStyles, Menu, MenuItem, Snackbar ,Link, } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import React, { useState } from 'react'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';



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


    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setopen] = useState(false)

    //It handles the dropdown menu response
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleLogout =()=>{
        localStorage.removeItem('token')
        setopen(true)
        window.location.reload()
    }
    const history = useHistory()
    const handleonClose =()=>{
        setopen(false)
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
<Link href='/dashboard' color='inherit' style={{textDecoration:'none',textTransform:'none'}}>
                                    <Typography display='inline' style={{color:"white"}} variant='h4'>Neo</Typography>
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
                                    <Link href='/dashboard' style={{textDecoration:'none'}}>
                                    <Typography variant='h6' style={{color:"white"}} >Home</Typography>
                                    </Link>
                                </Toolbar>
                            </Grid>
                            <Grid item>
                                <Toolbar>
                                <Link href='/commonproducts' style={{textDecoration:'none'}}>
                                    <Typography variant='h6' style={{color:"white"}}>Products</Typography>
                                    </Link>
                                </Toolbar>
                            </Grid>
                            <Grid item>
                                <Toolbar>
                                    <Typography variant='h6' style={{color:"Swhite"}}>Order</Typography>
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
                                        <Paper component='form' classes={{ root: classes.root }}>
                                            <SearchIcon style={{ color: 'black' }} fontSize='large' />
                                            <Input type='search' fullWidth
                                                placeholder='Search..'
                                                disableUnderline
                                            >
                                            </Input>
                                        </Paper>
                                    </Toolbar>
                                </Grid>
                            </Grid>
                            <Grid item xs={6} lg={2}>
                                <Grid container justify='flex-end'>
                                    <Toolbar disableGutters>
                                        <Button
                                            className={classes.btnBgColor}
                                            style={{ backgroundColor: 'white', outline: 'none', marginRight: '4px' }}

                                            startIcon={<Badge badgeContent={4} color='secondary'>
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
                                                <Link href='/login' style={{ textDecoration: 'none' }}>
                                                    <ListItemText style={{ color: 'black' }} primary="Login" />
                                                </Link>}
                                        </MenuItem>

                                        <MenuItem>
                                            <Link href='/register' style={{ textDecoration: 'none' }}>
                                                <ListItemText style={{ color: 'black' }} primary="Register" />
                                            </Link>
                                        </MenuItem>
                                    </StyledMenu>
                                </Toolbar>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </AppBar>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleonClose} message='You have successfully loged out' >
                {/* <Alert>
                    
                </Alert> */}
            </Snackbar>
        </ThemeProvider>

    )
}

export default Header
