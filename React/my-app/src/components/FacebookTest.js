import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

function FacebookTest() {
    const [state, setstate] = useState({ isLogedIn: false, userid: '', name: '', email: '', pictures: '' })
    const [fbContent, setfbContent] = useState()



    const componentClicked = () => {
        console.log('Clicked')
    }

    const responseFacebook = (response) => {
        console.log(response)
    }

    const checkLogIn = () => {
        // let fbContent;
        if (state.isLogedIn) {
            return null
        } else {
            return (<FacebookLogin
                appId="3280125515449210"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} />)
        }
        // return fbContent
    }
const responseGoogle =(response)=>{
    console.log(response)
}

    const checkgLogIn = () => {
        // let fbContent;
        if (state.isLogedIn) {
            return null
        } else {
            return (<GoogleLogin
                clientId='936606794399-0kv3krotdqet5d93vaguli3qk50eu3m8.apps.googleusercontent.com'
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />)
        }
        // return fbContent
    }



    return (
        <div>
            {/* {checkLogIn()} */}
            {checkgLogIn()}
        </div >
    )
}

export default FacebookTest
