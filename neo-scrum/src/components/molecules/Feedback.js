import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Feedback.css'

class Feedback extends Component {
    // It makes the new card for each of the feedback data
    render() {
        return (
            <div className="p-2">
                <div className="card shadow-lg feedcard">
                    <div className='card-header' style={{ backgroundColor: "white", border: 0 }}>
                        <h5 className="card-title feedcardtitle">Feedback <small className="card-subtitle feedcardsubtitle">4 months ago</small></h5>
                    </div>
                    <div className="card-body">

                        <p className="card-text">{this.props.feedData}</p>
                    </div>
                    <div className="card-footer" style={{ textAlign: "right", border: 0 }}><small>sent by: {this.props.userName} <br /> posted on: {this.props.postDate}</small></div>
                </div>
            </div>
        )
    }
}

export default Feedback