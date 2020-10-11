import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class PArentComp extends Component {

    constructor(props) {
        super()
    
        this.state = {
         name:'Surya'    
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Surya'
            })
        },2000)
    }
    
    render() {
        return (
            <div>
                Parent Component
                <PureComp name={this.state.name}></PureComp>
                <RegComp name={this.state.name}></RegComp>
            </div>
        )
    }
}

export default PArentComp
