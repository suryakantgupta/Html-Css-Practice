import { Box, Button, Collapse, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, Tooltip, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommonProducts } from '../../redux';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useHistory } from 'react-router-dom';


function AddressSidePanel() {


    const [open, setopen] = useState({ orders: false, account: false }) //This state handles the dropdown of category and color menu
    const history = useHistory()

    //This Handles the expansion and collapse of category
    const handleOrdersClick = () => {
        setopen({ ...open, orders: !open.orders })
    }

    //This Handles the expansion and collapse of color
    const handleAccountClick = () => {
        setopen({ ...open, account: !open.account })

    }



    return (
        <React.Fragment>

            <Grid container spacing={4} direction='column' style={{ marginTop: '10%' }} >
                <Grid item>
                    <Box borderRadius='5px' boxShadow={3} width={1}>
                        <List disablePadding>
                            <ListItem onClick={handleOrdersClick}>
                                <ListItemIcon style={{ color: 'black' }}>
                                    {open.orders ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </ListItemIcon>
                                <ListItemText primary='Orders' />
                            </ListItem>
                            <Collapse in={open.orders} unmountOnExit>
                                <List>
                                    <ListItem style={{justifyContent:'center'}}>
                                        <Button onClick={()=> history.push('/myaccount/orders')} style={{textTransform:"none",outline:"none"}}>Orders</Button>
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                    </Box>
                </Grid>
                <Divider orientation='horizontal' />
                <Grid item>
                    <Box borderRadius='5px' boxShadow={3} width={1} >
                        <List disablePadding>
                            <ListItem onClick={handleAccountClick}>
                                <ListItemIcon style={{ color: 'black' }}>
                                    {open.account ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </ListItemIcon>
                                <ListItemText primary='Account' />
                            </ListItem>
                            <Collapse in={open.account} unmountOnExit>
                                <List>
                                    <ListItem style={{justifyContent:'center'}}>
                                        <Button onClick={()=> history.push('/myaccount/profile')} style={{textTransform:"none",outline:"none"}}>Profile</Button>
                                        <Button onClick={()=> history.push('/myaccount/address')} style={{textTransform:"none",outline:"none"}}>Addresses</Button>
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default AddressSidePanel
