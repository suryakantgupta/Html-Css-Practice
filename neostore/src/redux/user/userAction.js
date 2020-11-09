import axios from 'axios'

import {
    USER_REGISTER_POST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOGIN_POST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
} from './userTypes'

export const postNewRegister = (data) => {
    return (dispatch) => {
        dispatch(userRegisterPost())
        console.log(data)
        axios.post('http://180.149.241.208:3022/register', {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            pass: data.pass,
            confirmPass: data.conpass,
            phone_no: data.mobile,
            gender: data.gender
        }).then((response) => {
            dispatch(userRegisterSuccess(response.data.message))
            console.log(response)
        }).catch((error) => {
            dispatch(userRegisterFailure(error.response.data.message))
            console.log(error.response)
            // dispatch(userRegisterFailure())
        })
    }
}

export const userRegisterPost = () => {
    return {
        type: USER_REGISTER_POST
    }
}

export const userRegisterSuccess = (data) => {
    return {
        type: USER_REGISTER_SUCCESS,
        payload: data
    }
}

export const userRegisterFailure = (error) => {
    return {
        type: USER_REGISTER_FAILURE,
        payload: error
    }
}










export const postLogin = (data) => {
    return (dispatch) => {
        dispatch(userLoginPost())
        axios.post('http://180.149.241.208:3022/login',data).then((response) => {
            dispatch(userLoginSuccess(response.data))
            console.log(response.data)
        }).catch((error) => {
            dispatch(userLoginFailure(error.response.data.message))
            console.log(error.response)
            // dispatch(userRegisterFailure())
        })
    }
}

export const userLoginPost = () => {
    return {
        type: USER_LOGIN_POST
    }
}

export const userLoginSuccess = (data) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: data
    }
}

export const userLoginFailure = (error) => {
    return {
        type: USER_LOGIN_FAILURE,
        payload: error
    }
}

