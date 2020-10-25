import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import Footer from '../components/Footer'
import ForgetPass from '../components/ForgetPass'
import Header from '../components/Header'
import LoginBody from '../components/LoginBody'
import RegBody from '../components/RegBody'
import TestHeader from '../components/TestHeader'
import theme from '../components/theme'

function User() {
    return (
        <div>
            <TestHeader />
            {/* <Header /> */}
            {/* <ForgetPass /> */}
            {/* <LoginBody /> */}
            {/* <ThemeProvider theme={theme}>
            <RegBody />
            </ThemeProvider> */}
            {/* <Footer /> */}
        </div>
    )
}

export default User
