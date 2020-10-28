import React from 'react'

function Authentication() {

    if(localStorage.token){
        initialState=true
    }else{
        initialState=false
    }

    const [isLogedin, setisLogedin] = useState(initialState)


    return (
        <div>
            {props.render({isLogedin})}
        </div>
    )
}

export default Authentication