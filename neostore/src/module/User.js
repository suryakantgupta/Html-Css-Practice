import React, { useState,useEffect } from 'react'
import RecoverPass from '../components/atoms/RecoverPass'
import ErrorPage from '../components/ErrorPage'
import Footer from '../components/Footer'
import ForgetPass from '../components/ForgetPass'
import Header from '../components/Header'
import LoginBody from '../components/LoginBody'
import RegBody from '../components/RegBody'

function User(props) {

    const [body, setbody] = useState({login:false,register:false,forgot:false,recover:false})
    

useEffect(() => {
    if (props.body == 'login') {
        setbody({login:true})
    } else if (props.body == 'register') {
        setbody({register:true})
    } else if (props.body == 'forgot') {
        setbody({forgot:true})
    }else if(props.body == 'recover'){
        setbody({recover:true})
    }
}, [])
    


    return (
        <div>
            <Header />
            {/* <ErrorPage /> */}
            {body.login && <LoginBody />}
            {body.register && <RegBody />}
            {body.forgot && <ForgetPass />}
            {body.recover && <RecoverPass />}
            <Footer />
        </div>
    )
}

export default User
