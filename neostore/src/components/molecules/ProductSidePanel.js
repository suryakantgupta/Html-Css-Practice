import { Box, Button, Collapse, createMuiTheme, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, MuiThemeProvider, ThemeProvider, Tooltip, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory, fetchColor } from '../../redux';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


const useStyles = makeStyles((theme) => ({
    allbutton: {
        textTransform: 'none',
    },
    catbutton: {
        textTransform: 'none',
        display: 'flex',
        justifyContent: 'flex-start'
    }
}))





function ProductSidePanel() {
    const classes = useStyles()

    const category = useSelector(state => state.category.category)
    const loadingCategory = useSelector(state => state.category.loading)
    const loadingColor = useSelector(state => state.color.loading)
    const color = useSelector(state => state.color.color)

    console.log(color)

    const [open, setopen] = useState({ category: false, color: false })

    const handleCategoryClick = () => {
        setopen({ ...open, category: !open.category })
    }

    const handleColorClick = () => {
        setopen({ ...open, color: !open.color })
    }

    const getCategory = () => {
        if(!loadingCategory){
            const listCategory = category.category_details.map((details) => <ListItem style={{ justifyContent: 'center' }} button divider><Typography>{details.category_name}</Typography></ListItem>)
            return listCategory
        }
    }

    const getColor = ()=>{
        if(!loadingColor){
            const listColor = color.color_details.map((details)=> <Tooltip title={details.color_name} placement="top-start"><ListItem component='li' style={{height:'30px',width:'40px',backgroundColor:details.color_code ,display:'inline-flex',margin:'1px 20px 1px 20px',border:'2px solid black',borderRadius:'5px'}} /></Tooltip>)
            return listColor
        }
    }





    return (
        <React.Fragment>
            
            <Grid container spacing={1} direction='column' style={{ marginTop: '10%' }} >
                <Grid item>
                    <Box borderRadius='5px' boxShadow={3} width={1}>
                        <Button size='large' fullWidth variant='outlined' className={classes.button} style={{ outline: 'none' }}>All Products</Button>
                    </Box>
                </Grid>
                <Grid item>
                    <Box borderRadius='5px' boxShadow={3} width={1}>
                        <List disablePadding>
                            <ListItem onClick={handleCategoryClick}>
                                <ListItemIcon style={{ color: 'black' }}>
                                    {open.category ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </ListItemIcon>
                                <ListItemText primary='Categories' />
                            </ListItem>
                            <Collapse in={open.category} style={{ padding: '1.5rem' }} unmountOnExit>
                                <List>
                                    {getCategory()}
                                </List>
                            </Collapse>
                        </List>

                        {/* <Button size='large' variant='outlined' fullWidth className={classes.catbutton} style={{outline:'none'}}><ExpandMoreIcon />Categories</Button> */}
                    </Box>
                </Grid>
                <Grid item>
                    <Box borderRadius='5px' boxShadow={3} width={1} >
                        <List disablePadding>
                            <ListItem onClick={handleColorClick}>
                                <ListItemIcon style={{ color: 'black' }}>
                                {open.color ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </ListItemIcon>
                                <ListItemText primary='Color' />
                            </ListItem>
                            <Collapse in={open.color} unmountOnExit>
                                <List>
                                    {getColor()}
                                </List>
                            </Collapse>
                        </List>
                        {/* <Button size='large' variant='outlined' fullWidth className={classes.catbutton} style={{ outline: 'none' }}><ExpandMoreIcon /> Order</Button> */}
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default ProductSidePanel
