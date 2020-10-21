import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LoginBody from '../components/LoginBody'
import RegBody from '../components/RegBody'

function User() {
    return (
        <div>
            <Header />
            {/* <LoginBody /> */}
            <RegBody />
            <Footer />
        </div>
    )
}

export default User
