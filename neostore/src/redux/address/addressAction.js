import {
    GET_ADDRESS_REQUEST,
    GET_ADDRESS_SUCCESS,
    GET_ADDRESS_FAILURE,
    ADD_ADDRESS_REQUEST,
    ADD_ADDRESS_SUCCESS,
    ADD_ADDRESS_FAILURE
} from "./addressTypes";
import axios from 'axios'

export const fetchcustaddress = () => {
    return (dispatch) => {
        dispatch(fetchcustaddressrequest)
        axios.get('http://180.149.241.208:3022/getCustAddress', {
            headers: {
                Authorization: `bearer ${localStorage.token}`
            }
        }).then((response) => {
            dispatch(fetchcustaddresssuccess(response.data))
            console.log(response.data)
        }).catch((error) => {
            dispatch(fetchcustaddressfailure(error.response.data))
            console.log(error.response.data)
        })
    }
}



export const fetchcustaddressrequest = () => {
    return {
        type: GET_ADDRESS_REQUEST
    }
}

export const fetchcustaddresssuccess = (data) => {
    return {
        type: GET_ADDRESS_SUCCESS,
        payload: data
    }
}

export const fetchcustaddressfailure = (data) => {
    return {
        type: GET_ADDRESS_FAILURE,
        payload: data
    }
}




export const addcustaddress = (data) => {
    return (dispatch) => {
        dispatch(addcustaddressrequest)
        axios.post('http://180.149.241.208:3022/address', {
            address: data.address,
            pincode: data.pincode,
            city: data.city,
            state: data.state,
            country: data.country
        }, {
            headers: {
                Authorization: `bearer ${localStorage.token}`
            }
        }).then((response) => {
            dispatch(addcustaddresssuccess(response.data))
            console.log(response.data)
        }).catch((error) => {
            dispatch(addcustaddressfailure(error.response.data))
            console.log(error.response.data)
        })
    }
}



export const addcustaddressrequest = () => {
    return {
        type: ADD_ADDRESS_REQUEST
    }
}

export const addcustaddresssuccess = (data) => {
    return {
        type: ADD_ADDRESS_SUCCESS,
        payload: data
    }
}

export const addcustaddressfailure = (data) => {
    return {
        type: ADD_ADDRESS_FAILURE,
        payload: data
    }
}