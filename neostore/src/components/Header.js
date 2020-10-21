import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Dropdown } from 'react-bootstrap'
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';

function Header() {
    return (
        <div className='container-fluid p-0'>
            <nav className="navbar navbar-expand-md p-0">
<div className='container-fluid p-0'>
                <div className='row w-100'>
                    <div className="col-md-3">
                        <a className="ml-3" href='#'><label className='neo'>Neo</label><label className='store'>STORE</label></a>
                    </div>
                    <div className="col-md-4 d-flex align-items-center">
                        <ul className="navbar-nav d-flex justify-content-around align-items-center w-100">
                            <li className="nav-item active">
                                <a className='nav-link' href="#"><label className="navlink">Home</label></a>
                            </li>
                            <li className="nav-item">
                                <a className='nav-link' href="#"><label className="navlink">Products</label></a>
                            </li>
                            <li className="nav-item">
                                <a className='nav-link' href="#"><label className="navlink">Order</label></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 offset-md-1 d-flex justify-content-end align-items-center flex-md-row flex-column">
                        <div className="flex-fill cartsection m-1" id="topSearch" >
                            <SearchIcon id="searchicon" />
                            <input className="form-control" id='topSearchInput' placeholder="Search.." />
                        </div>
                        <div className="m-1 cartsection">
                            <button className="btn bgCart"><ShoppingCartIcon /> Cart</button>
                        </div>
                        <div className="m-1 cartsection">
                            <Dropdown >
                                <Dropdown.Toggle id="dropdown-basic"><AccountBoxSharpIcon style={{ fill: 'black' }} /><ExpandMoreSharpIcon style={{ fill: 'black' }} /></Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Register</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Header