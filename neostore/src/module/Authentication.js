import React, { useState } from 'react'

function Authentication(props) {

    let initialState
    if(localStorage.token !== undefined && localStorage.token !== "undefined"){
        initialState = true
    }else{
        initialState=false
    }


    const [isLogedin, setisLogedin] = useState(initialState)


    return (
        <div>
            {props.render(isLogedin,setisLogedin)}
        </div>
    )
}

export default Authentication