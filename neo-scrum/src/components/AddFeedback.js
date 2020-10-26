import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import testImg from '../asset/mark-zuckerberg-bio3.png'
import './Addfeedback.css'
import { Link } from 'react-router-dom'
import axios from 'axios'





class AddFeedback extends Component {

    constructor(props) {
        super(props)

        this.state = {
            card: false,
            message: ''
        }
    }


    componentDidMount = async () => {
        let response = await axios.get('http://180.149.241.208:3047/dashboard', {
            headers: {
                Authorization: localStorage.token
            }
        })
        if (response.data.data.length == 0) {
            this.setState({
                card: false,
                message: response.data.message
            })
        }
    }





    render() {
        return (
            <div className='container-fluid'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                    <div className='container-fluid'>
                        <div className='row' style={{ margin: 0, width: '100%' }} >
                            <div className='col-12 col-sm-2 col-md-2 col-lg-1'>
                                <img className="card-img-top" id="dashimg" src={testImg} />
                            </div>
                            <div className='col-12 col-sm-4 col-md-5 col-lg-5' style={{ display: "flex", alignItems: 'center', textAlign: "center" }}>
                            <Link to='/dashboard' style={{textDecoration:'none'}}><h1 id="dashName" style={{color:"black"}}>{localStorage.user_name}</h1></Link>
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
                <div>
                    {this.state.card && <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" style={{ padding: '20%' }} src={testImg} />
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <form>
                                <textarea className='form-control' placeholder="Write your feedback here" />
                                <button className='btn mt-2' id='submitfeedbtn'>Submit Feedback</button>
                            </form>
                        </div>
                    </div>}
                    {!this.state.card && <div className='text-center'><h1>{this.state.message}</h1></div>}
                </div>
            </div>
        )
    }
}
export default AddFeedback
