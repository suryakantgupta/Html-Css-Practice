import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import testImg from '../asset/mark-zuckerberg-bio3.png'
import './Addfeedback.css'

class AddFeedback extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{width:'18rem'}}>
                    <img className="card-img-top" style={{padding:'20%'}} src={testImg}/>
                    <div className="card-body">
                        <h5 className="card-title">Name</h5>
                        <form>
                        <textarea className='form-control' placeholder="Write your feedback here" />
                        <button className='btn mt-2' id='submitfeedbtn'>Submit Feedback</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddFeedback
