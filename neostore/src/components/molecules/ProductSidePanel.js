import { Box, Button, Collapse, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, Tooltip, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommonProducts } from '../../redux';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useHistory } from 'react-router-dom';

//This adds css to material components 
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





function ProductSidePanel(props) {
    const classes = useStyles()
    const history = useHistory()
    /**
     * @description These selector hooks are used to access data from redux as follows
     * 1: It Fetches the category data 
     * 2: It fecthes the loading state of the category data
     * 3: It fetches the loading state of the color data
     * 4: It Fetches the color data
     */
    const category = useSelector(state => state.category.category)
    const loadingCategory = useSelector(state => state.category.loading)
    const loadingColor = useSelector(state => state.color.loading)
    const color = useSelector(state => state.color.color)


    const dispatch = useDispatch()


    const [open, setopen] = useState({ category: false, color: false }) //This state handles the dropdown of category and color menu

    //This Handles the expansion and collapse of category
    const handleCategoryClick = () => {
        if (open.category && !open.color) {
            setopen({ ...open, category: !open.category })
        } else if (!open.category && open.color) {
            setopen({ color: false, category: !open.category })
        } else {
            setopen({ ...open, category: true })
        }
    }

    //This Handles the expansion and collapse of color
    const handleColorClick = () => {
        if (!open.category && open.color) {
            setopen({ ...open, color: !open.color })
        } else if (open.category && !open.color) {
            setopen({ category: false, color: !open.color })
        } else {
            setopen({ ...open, color: true })
        }
    }

    //This function lists the category in the menu
    const getCategory = () => {
        if (!loadingCategory) {
            const listCategory = category.category_details.map((details) => <ListItem key={details.category_id} onClick={() => { dispatch(fetchCommonProducts('', details.category_id)); props.title(details.category_name) }} style={{ justifyContent: 'center' }} button divider><Typography>{details.category_name}</Typography></ListItem>)
            return listCategory
        }
    }

    //This function lists the color in the menu
    const getColor = () => {
        if (!loadingColor) {
            const listColor = color.color_details.map((details) => <Tooltip key={details.color_id} title={details.color_name} placement="top-start"><ListItem key={details.color_id} onClick={() => dispatch(fetchCommonProducts('', '', details.color_id))} component='li' style={{ height: '30px', width: '40px', backgroundColor: details.color_code, display: 'inline-flex', margin: '1px 20px 1px 20px', border: '2px solid black', borderRadius: '5px' }} /></Tooltip>)
            return listColor
        }
    }


    return (
        <React.Fragment>

            <Grid container spacing={1} direction='column' style={{ marginTop: '10%' }} >
                <Grid item>
                    <Box borderRadius='5px' boxShadow={3} width={1}>
                        <Button size='large' onClick={() => { history.push('/commonproducts'); props.title("All Categories");window.location.reload() }} fullWidth variant='outlined' className={classes.button} style={{ outline: 'none', textTransform: 'none' }}>All Products</Button>
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
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default ProductSidePanel
