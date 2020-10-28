import React from 'react'
import ErrorPage from '../components/ErrorPage'
import Footer from '../components/Footer'
import ForgetPass from '../components/ForgetPass'
import Header from '../components/Header'
import LoginBody from '../components/LoginBody'
import RegBody from '../components/RegBody'

function User(props) {


    var login = false
    var register = false
    var forgot = false


    if (props.body == 'login') {
        login = true;
    } else if (props.body == 'register') {
        register = true
    } else if (forgot== 'forgot') {
        forgot = true;
    }


    return (
        <div>
            <Header />
            <ErrorPage />
            {/* {login && <LoginBody />} */}
            {/* {register && <RegBody />} */}
            {/* <ForgetPass /> */}
            <Footer />
        </div>
    )
}

export default User
