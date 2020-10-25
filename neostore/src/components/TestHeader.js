import { AppBar, createMuiTheme, Grid, Icon, ThemeProvider, Toolbar, Typography, Input, Paper, makeStyles, Button, Badge, IconButton, withStyles, Menu, MenuItem } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import React from 'react'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';


const navbarTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000'
        }
    }
})

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
        searchBar:{
            justifyContent:'flex-end'
        }
    }
}))

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



function TestHeader() {

    const classes = useStyles();


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <ThemeProvider theme={navbarTheme}>
                <AppBar color="primary">
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

                                        <Typography display='inline' variant='h4'>Neo</Typography>
                                        <Typography display='inline' style={{ fontWeight: 'bold' }} color='secondary' variant='h4'>STORE</Typography>

                                    </ThemeProvider>
                                </Toolbar>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Grid container justify='space-evenly'>
                                <Grid item>
                                    <Toolbar>
                                        <Typography variant='h6' >Home</Typography>
                                    </Toolbar>
                                </Grid>
                                <Grid item>
                                    <Toolbar>
                                        <Typography variant='h6'>Products</Typography>
                                    </Toolbar>
                                </Grid>
                                <Grid item>
                                    <Toolbar>
                                        <Typography variant='h6'>Order</Typography>
                                    </Toolbar>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={5}>
                            <Grid container className={classes.searchGrid} spacing={1}>
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
                                            {/* <Paper> */}
                                            <Button
                                                className={classes.btnBgColor}
                                                style={{ backgroundColor: 'white', outline: 'none' }}

                                                startIcon={<Badge badgeContent={4} color='secondary'>
                                                    <ShoppingCartIcon />
                                                </Badge>}
                                            >
                                                Cart
                                        </Button>
                                            {/* </Paper> */}
                                        </Toolbar>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} lg={2}>

                                    <Toolbar disableGutters>
                                        {/* <Button className={classes.btnBgColor}>
                                            <AccountBoxIcon />
                                            <ExpandMoreIcon />
                                        </Button> */}
                                        {/* <Paper> */}
                                        <Button
                                            style={{ backgroundColor: 'white', outline: 'none', marginRight: '0.8rem' }}
                                            className={classes.btnBgColor}
                                            onClick={handleClick}
                                        >
                                            <AccountBoxIcon />
                                            <ExpandMoreIcon />
                                        </Button>
                                        {/* </Paper> */}
                                        <StyledMenu
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem>
                                                <ListItemText primary="Login" />
                                            </MenuItem>
                                            <MenuItem>
                                                <ListItemText primary="Register" />
                                            </MenuItem>
                                        </StyledMenu>
                                    </Toolbar>

                                </Grid>
                                {/* </Toolbar> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </AppBar>
            </ThemeProvider>
        </div>
    )
}

export default TestHeader
