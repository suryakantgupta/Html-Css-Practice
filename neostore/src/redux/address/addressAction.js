import {
    GET_ADDRESS_REQUEST,
    GET_ADDRESS_SUCCESS,
    GET_ADDRESS_FAILURE,
    ADD_ADDRESS_REQUEST,
    ADD_ADDRESS_SUCCESS,
    ADD_ADDRESS_FAILURE,
    UPDATE_ADDRESS_REQUEST,
    UPDATE_ADDRESS_SUCCESS,
    UPDATE_ADDRESS_FAILURE,
    DELETE_ADDRESS_REQUEST,
    DELETE_ADDRESS_SUCCESS,
    DELETE_ADDRESS_FAILURE
} from "./addressTypes";
import axios from 'axios'

/**
 * @description This function make the api call to get customers address
 * @returns the dispatch function that will be the type in the reducer file
 */
export const fetchcustaddress = () => {
    return (dispatch) => {
        dispatch(fetchcustaddressrequest())
        axios.get('http://180.149.241.208:3022/getCustAddress', {
            headers: {
                Authorization: `bearer ${localStorage.token}`
            }
        }).then((response) => {
            dispatch(fetchcustaddresssuccess(response.data))
            // console.log(response.data)
        }).catch((error) => {
            dispatch(fetchcustaddressfailure(error.response.data))
            // console.log(error.response.data)
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


/**
 * @description This function make the api call to add new address
 * @returns the dispatch function that will be the type in the reducer file
 */

export const addcustaddress = (data) => {
    return (dispatch) => {
        dispatch(addcustaddressrequest())
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
            // console.log(response.data)
        }).catch((error) => {
            dispatch(addcustaddressfailure(error.response.data))
            // console.log(error.response.data)
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

/**
 * @description This function make the api call to update the existing customers address
 * @returns the dispatch function that will be the type in the reducer file
 */

export const updatecustaddress = (data) => {
    return (dispatch) => {
        dispatch(updatecustaddressrequest())
        axios.put('http://180.149.241.208:3022/updateAddress', {
            address_id:data.addressid,
            address: data.address,
            pincode: data.pincode,
            city: data.city,
            state: data.state,
            country: data.country,
            isDeliveryAddress:data.isdelivery
        }, {
            headers: {
                Authorization: `bearer ${localStorage.token}`
            }
        }).then((response) => {
            dispatch(updatecustaddresssuccess(response.data.success))
            // console.log(response.data)
        }).catch((error) => {
            dispatch(updatecustaddressfailure(error.response.data))
            // console.log(error.response.data)
        })
    }
}



export const updatecustaddressrequest = () => {
    return {
        type: UPDATE_ADDRESS_REQUEST
    }
}

export const updatecustaddresssuccess = (data) => {
    return {
        type: UPDATE_ADDRESS_SUCCESS,
        payload: data
    }
}

export const updatecustaddressfailure = (data) => {
    return {
        type: UPDATE_ADDRESS_FAILURE,
        payload: data
    }
}


/**
 * @description This function make the api call to delete customers address
 * @returns the dispatch function that will be the type in the reducer file
 */

export const deletecustaddress = (id) => {
    return (dispatch) => {
        dispatch(deletecustaddressrequest())
        axios.delete(`http://180.149.241.208:3022/deladdress/${id}`,{
            headers: {
                Authorization: `bearer ${localStorage.token}`
            }
        }).then((response) => {
            dispatch(deletecustaddresssuccess(response.data.success))
            // console.log(response.data)
        }).catch((error) => {
            dispatch(deletecustaddressfailure(error.response.data))
            // console.log(error.response.data)
        })
    }
}



export const deletecustaddressrequest = () => {
    return {
        type: DELETE_ADDRESS_REQUEST
    }
}

export const deletecustaddresssuccess = (data) => {
    return {
        type: DELETE_ADDRESS_SUCCESS,
        payload: data
    }
}

export const deletecustaddressfailure = (data) => {
    return {
        type: DELETE_ADDRESS_FAILURE,
        payload: data
    }
}

