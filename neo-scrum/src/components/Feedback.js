import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class Feedback extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-subtitle">4 months ago</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="card-footer">
                            <small class="text-muted egodate">Given by: Iron Man<br />Posted Date: 2 feb 2015</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feedback
