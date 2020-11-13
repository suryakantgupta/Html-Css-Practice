import axios from 'axios'
import { bool } from 'prop-types'

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
        // console.log(data)
        axios.post('http://180.149.241.208:3022/register', {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            pass: data.pass,
            confirmPass: data.conpass,
            phone_no: data.mobile,
            gender: data.gender
        }).then((response) => {
            dispatch(userRegisterSuccess(response.data.message, response.data.success))
            // console.log(response)
        }).catch((error) => {
            dispatch(userRegisterFailure(error.response.data.message, error.response.data.success))
            // console.log(error.response)
        })
    }
}

export const userRegisterPost = () => {
    return {
        type: USER_REGISTER_POST
    }
}

export const userRegisterSuccess = (data, bool) => {
    return {
        type: USER_REGISTER_SUCCESS,
        payload: data,
        positive: bool
    }
}

export const userRegisterFailure = (error, bool) => {
    return {
        type: USER_REGISTER_FAILURE,
        payload: error,
        positive: bool
    }
}










export const postLogin = (data) => {
    return (dispatch) => {
        dispatch(userLoginPost())
        axios.post('http://180.149.241.208:3022/login', data).then((response) => {
            dispatch(userLoginSuccess(response.data, response.data.success))
            console.log(response.data)
        }).catch((error) => {
            dispatch(userLoginFailure(error.response.data.message, error.response.data.success))
            console.log(error.response)
        })
    }
}

export const userLoginPost = () => {
    return {
        type: USER_LOGIN_POST
    }
}

export const userLoginSuccess = (data, bool) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: data,
        positive: bool
    }
}

export const userLoginFailure = (error, bool) => {
    return {
        type: USER_LOGIN_FAILURE,
        payload: error,
        positive: bool
    }
}


export const postLogout = (data) => {
    return (dispatch) => {
        let temp = [...data]
        let temp2 = []
        temp.map((pd) => {
            pd.product_id.quantity = pd.quantity
            pd.product_id.total = pd.quantity * pd.product_id.product_cost
            temp2.push(pd.product_id)
        })
        temp2.push({ flag: 'logout' })
        // dispatch(userLoginPost())
        console.log(temp2)
        axios.post('http://180.149.241.208:3022/addProductToCartCheckout', temp2, {
            headers: {
                Authorization: `bearer ${localStorage.token}`
            }
        })
        // .then((response) => {
        //     // dispatch(userLogoutSuccess(response.data))
        //     console.log(response.data)
        // }).catch((error) => {
        //     // dispatch(userLogoutFailure(error.response.data))
        //     console.log(error.response, error)
        // })
    }
}

export const postCheckout = (data) => {
    return (dispatch) => {
        let temp = [...data]
        let temp2 = []
        temp.map((pd) => {
            pd.product_id.quantity = pd.quantity
            pd.product_id.total = pd.quantity * pd.product_id.product_cost
            temp2.push(pd.product_id)
        })
        temp2.push({ flag: 'checkout' })
        // dispatch(userLoginPost())
        console.log(temp2)
        axios.post('http://180.149.241.208:3022/addProductToCartCheckout', temp2, {
            headers: {
                Authorization: `bearer ${localStorage.token}`
            }
        }).then((response) => {
            // dispatch(userLogoutSuccess(response.data))
            console.log(response.data)
        }).catch((error) => {
            // dispatch(userLogoutFailure(error.response.data))
            console.log(error.response, error)
        })
    }
}

export const userLogoutPost = () => {
    return {
        type: USER_LOGIN_POST
    }
}

export const userLogoutSuccess = (data, bool) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: data,
        positive: bool
    }
}

export const userLogoutFailure = (error, bool) => {
    return {
        type: USER_LOGIN_FAILURE,
        payload: error,
        positive: bool
    }
}



