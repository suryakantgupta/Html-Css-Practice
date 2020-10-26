import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import Footer from '../components/Footer'
import ForgetPass from '../components/ForgetPass'
import Header from '../components/Header'
import LoginBody from '../components/LoginBody'
import RegBody from '../components/RegBody'
import theme from '../components/theme'

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
            {/* {login && <LoginBody />} */}
            {/* {register && <RegBody />} */}
            <ForgetPass />
            <Footer />
        </div>
    )
}

export default User
