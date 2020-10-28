import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Dashboard.css'
import testImg from '../asset/mark-zuckerberg-bio3.png'
import {connect} from 'react-redux'
import { fetchUsers } from './redux'
import Feedback from './molecules/Feedback.js'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {

    /**
     * @description This initialze the state for error message and condition
     * and also check for the login condition
     * @param {*} props is passed to pass it through the super to make the state
     * 
     */

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


    //This handles the logout by deleting the localStorage data

    handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem('userName')
    }

    /**
     * @description It is the liecycle method which is used to call the get api 
     * to get our feedback
     * @returns the response data in which all the details of feedback is embedded
     */

    componentDidMount = async () => {
        console.log(this.isLogedin)
        
        await this.props.fetchUsers(localStorage.userName)
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


        const myObj = [{
            "user_id": "180",
            "user_name": "Shubham Gupta",
            "user_email": "shubham.gupta@neosofttech.com",
            "feedback": {
                "feedback_data": "Cool",
                "posting_date": "29 Aug 2020"
            }
        },
        {
            "user_id": "180",
            "user_name": "Shubham Gupta",
            "user_email": "shubham.gupta@neosofttech.com",
            "feedback": {
                "feedback_data": "Cool",
                "posting_date": "29 Aug 2020"
            }
        },
        {
            "user_id": "180",
            "user_name": "Shubham Gupta",
            "user_email": "shubham.gupta@neosofttech.com",
            "feedback": {
                "feedback_data": "Cool",
                "posting_date": "29 Aug 2020"
            }
        },
        {
            "user_id": "180",
            "user_name": "Shubham Gupta",
            "user_email": "shubham.gupta@neosofttech.com",
            "feedback": {
                "feedback_data": "Cool",
                "posting_date": "29 Aug 2020"
            }
        },
        {
            "user_id": "180",
            "user_name": "Shubham Gupta",
            "user_email": "shubham.gupta@neosofttech.com",
            "feedback": {
                "feedback_data": "Cool",
                "posting_date": "29 Aug 2020"
            }
        },
        {
            "user_id": "180",
            "user_name": "Shubham Gupta",
            "user_email": "shubham.gupta@neosofttech.com",
            "feedback": {
                "feedback_data": "Cool",
                "posting_date": "29 Aug 2020"
            }
        },
        {
            "user_id": "180",
            "user_name": "Shubham Gupta",
            "user_email": "shubham.gupta@neosofttech.com",
            "feedback": {
                "feedback_data": "Cool",
                "posting_date": "29 Aug 2020"
            }
        },
        {
            "user_id": "180",
            "user_name": "Shubham Gupta",
            "user_email": "shubham.gupta@neosofttech.com",
            "feedback": {
                "feedback_data": "Cool",
                "posting_date": "29 Aug 2020"
            }
        }
        ]

        const feedbackList = myObj.map(userDetails => (<Feedback userName={userDetails.user_name} feedData={userDetails.feedback.feedback_data} postDate={userDetails.feedback.posting_date} />))


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
                                    <h1 id="dashName">{this.props.userData}</h1>
                                </div>
                                <div className='col-12 col-sm-4 col-md-4 col-lg-5 justify-content-center justify-content-lg-end' style={{ display: "flex", alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <div>
                                        <ul className="navbar-nav" >
                                            <li className="nav-item active mr-2 p-1">

                                                {/* Navigate to the add feeback section */}
                                                <Link to='/addfeedback'>
                                                    <button className="btn" id='addfeed'>Add FeedBack</button>
                                                </Link>
                                            </li>
                                            <li className="nav-item p-1">
                                                {/* Navigate to the add feeback section */}
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
                        {feedbackList}
                        {/* <Feedback userName={myObj[0].user_name} feedData={myObj[0].feedback.feedback_data} postDate={myObj[0].feedback.posting_date}/> */}
                    </div>
                    {/* Gives the error message in response */}
                    {!this.state.card && <div className='text-center'><h1>{this.state.message}</h1></div>}
                </div>}
                {/* Checks if the user is loged in or not */}
                {!this.isLogedin && <Redirect to='/login' />
                // <div className='text-center'>
                //     <h1>You have not logged in</h1>
                //     <a href='/login'>Please Login</a>
                // </div>
                }
            </React.Fragment>
        )
    }
}



/**
 * @description  This functions handles  the redux part of the login page
 * it sends and receive data from redux to to props which can be used by props
 * @param {*} state is passed as parameter it is used to pass the state from 
 * redux to the function as props
 * @returns The Data from redux in props
 */

const mapStateToProps = state => {
    return {
      userData: state.users
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: (data) => dispatch(fetchUsers(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)
