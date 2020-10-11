import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Dashboard.css'
import Feedback from './Feedback'

class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" >Navbar</a>
                    <div className="container-fluid" id="list">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" >Add FeedBack</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Feedback />
            </div>
        )
    }
}

export default Dashboard
