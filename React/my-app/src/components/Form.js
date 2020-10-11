import React, { Component } from 'react'




export class Form extends Component {

    constructor(props) {
        super()
    
        this.state = {
            username:'' 
        }
    }

    nameChangeHandler = (event)=>{
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <div>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.nameChangeHandler}/>
            </div>
        )
    }
}

export default Form
