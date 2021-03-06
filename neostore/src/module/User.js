import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import RecoverPass from '../components/atoms/RecoverPass'
import ErrorPage from '../components/ErrorPage'
import Footer from '../components/Footer'
import ForgetPass from '../components/ForgetPass'
import Header from '../components/Header'
import Loading from '../components/Loading'
import LoginBody from '../components/LoginBody'
import RegBody from '../components/RegBody'
import Authentication from './Authentication'

function User(props) {

    const [body, setbody] = useState({ login: false, register: false, forgot: false, recover: false })


    useEffect(() => {
        if (props.body == 'login') {
            setbody({ login: true })
        } else if (props.body == 'register') {
            setbody({ register: true })
        } else if (props.body == 'forgot') {
            setbody({ forgot: true })
        } else if (props.body == 'recover') {
            setbody({ recover: true })
        }
    }, [props.body])

    const loading = useSelector(state => state.user.loading)
    const loginloading = useSelector(state => state.login.loading)



    return (
        <div>

            {/* <ErrorPage /> */}
            {body.login && (
                <React.Fragment>
                    {loginloading && <Loading />}
                    <Header />
                    <Authentication 
                    render={(isLogedin,setisLogedin)=>(<LoginBody isLogedin={isLogedin} setisLogedin={setisLogedin} />)}
                    />
                    {/* <LoginBody /> */}
                    <Footer />
                </React.Fragment>)
            }
            {body.recover && (
                <React.Fragment>
                    <Header />
                    <RecoverPass />
                    <Footer />
                </React.Fragment>
            )
            }
            {body.forgot && (
                <React.Fragment>
                    <Header />
                    <ForgetPass />
                    <Footer />
                </React.Fragment>
            )
            }
            {body.register && ( 
                <React.Fragment>
                    {loading && <Loading />}
                    <Header />
                    <RegBody />
                    <Footer />
                </React.Fragment>)
            }
        </div>
    )
}

export default User
