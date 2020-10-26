import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Dashboard.css'
import testImg from '../asset/mark-zuckerberg-bio3.png'
import Feedback from './Feedback'

import { Link } from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            card: false,
            message: ''
        }
        if (localStorage.token) {
            this.isLogedin = true
        } else {
            this.isLogedin = false
        }
    }


    handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem('user_name')
    }

    componentDidMount = async () => {
        console.log(this.isLogedin)
        const response = await axios.get('http://180.149.241.208:3047/feedback', {
            headers: {
                Authorization: localStorage.token
            }
        })
        // console.log(response.data.feedback)
        if (response.data.feedback.length == 0) {
            this.setState({
                card: false,
                message: response.data.message
            })
        }
    }

    render() {


        // const myObj = [{
        //     "user_id": "180",
        //     "user_name": "Shubham Gupta",
        //     "user_email": "shubham.gupta@neosofttech.com",
        //     "feedback": {
        //         "feedback_data": "Cool",
        //         "posting_date": "29 Aug 2020"
        //     }
        // },
        // {
        //     "user_id": "180",
        //     "user_name": "Shubham Gupta",
        //     "user_email": "shubham.gupta@neosofttech.com",
        //     "feedback": {
        //         "feedback_data": "Cool",
        //         "posting_date": "29 Aug 2020"
        //     }
        // },
        // {
        //     "user_id": "180",
        //     "user_name": "Shubham Gupta",
        //     "user_email": "shubham.gupta@neosofttech.com",
        //     "feedback": {
        //         "feedback_data": "Cool",
        //         "posting_date": "29 Aug 2020"
        //     }
        // },
        // {
        //     "user_id": "180",
        //     "user_name": "Shubham Gupta",
        //     "user_email": "shubham.gupta@neosofttech.com",
        //     "feedback": {
        //         "feedback_data": "Cool",
        //         "posting_date": "29 Aug 2020"
        //     }
        // },
        // {
        //     "user_id": "180",
        //     "user_name": "Shubham Gupta",
        //     "user_email": "shubham.gupta@neosofttech.com",
        //     "feedback": {
        //         "feedback_data": "Cool",
        //         "posting_date": "29 Aug 2020"
        //     }
        // },
        // {
        //     "user_id": "180",
        //     "user_name": "Shubham Gupta",
        //     "user_email": "shubham.gupta@neosofttech.com",
        //     "feedback": {
        //         "feedback_data": "Cool",
        //         "posting_date": "29 Aug 2020"
        //     }
        // },
        // {
        //     "user_id": "180",
        //     "user_name": "Shubham Gupta",
        //     "user_email": "shubham.gupta@neosofttech.com",
        //     "feedback": {
        //         "feedback_data": "Cool",
        //         "posting_date": "29 Aug 2020"
        //     }
        // },
        // {
        //     "user_id": "180",
        //     "user_name": "Shubham Gupta",
        //     "user_email": "shubham.gupta@neosofttech.com",
        //     "feedback": {
        //         "feedback_data": "Cool",
        //         "posting_date": "29 Aug 2020"
        //     }
        // }
        // ]

        // const feedbackList = myObj.map(userDetails => (<Feedback userName={userDetails.user_name} feedData={userDetails.feedback.feedback_data} postDate={userDetails.feedback.posting_date} />))


        return (
            <React.Fragment>
                {this.isLogedin && <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                        <div className='container-fluid'>
                            <div className='row' style={{ margin: 0, width: '100%' }} >
                                <div className='col-12 col-sm-2 col-md-2 col-lg-1'>
                                    <img className="card-img-top" id="dashimg" src={testImg} />
                                </div>
                                <div className='col-12 col-sm-4 col-md-5 col-lg-5' style={{ display: "flex", alignItems: 'center', textAlign: "center" }}>
                                    <h1 id="dashName">{localStorage.user_name}</h1>
                                </div>
                                <div className='col-12 col-sm-4 col-md-4 col-lg-5 justify-content-center justify-content-lg-end' style={{ display: "flex", alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <div>
                                        <ul className="navbar-nav" >
                                            <li className="nav-item active mr-2 p-1">
                                                <Link to='/addfeedback'>
                                                    <button className="btn" id='addfeed'>Add FeedBack</button>
                                                </Link>
                                            </li>
                                            <li className="nav-item p-1">
                                                <Link to='/login'>
                                                    <button className="btn" id='logout' onClick={this.handleLogout}>Logout</button>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </nav>
                    <div id="feedback">
                        {/* {feedbackList} */}
                        {/* <Feedback userName={myObj[0].user_name} feedData={myObj[0].feedback.feedback_data} postDate={myObj[0].feedback.posting_date}/> */}
                    </div>
                    {!this.state.card && <div className='text-center'><h1>{this.state.message}</h1></div>}
                </div>}
                {!this.isLogedin && <div className='text-center'>
                    <h1>You have not logged in</h1>
                </div>}
            </React.Fragment>
        )
    }
}

export default Dashboard
