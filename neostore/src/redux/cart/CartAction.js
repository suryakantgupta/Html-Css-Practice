import {
    FETCH_CART_REQUEST,
    FETCH_CART_SUCCESS,
    FETCH_CART_FAILURE,
    ADD_TO_CART,
    DELETE_FROM_CART
} from './CartTypes'
import axios from 'axios'

export const fetchcart = () => {
    return (dispatch) => {
        dispatch(fetchcartrequest)
        axios.get('http://180.149.241.208:3022/getCartData', {
            headers: {
                Authorization: `bearer ${localStorage.token}`
            }

        }).then((response) => {
            dispatch(fetchcartsuccess(response.data))
            console.log(response.data)
        }).catch((error) => {
            // dispatch(fetchcartfailure(error.response.data))
            console.log(error.response)
        })
    }
}

export const fetchcartrequest = () => {
    return {
        type: FETCH_CART_REQUEST
    }
}
export const fetchcartsuccess = (data) => {
    return {
        type: FETCH_CART_SUCCESS,
        payload: data
    }
}
export const fetchcartfailure = (data) => {
    return {
        type: FETCH_CART_FAILURE,
        payload: data
    }
}


export const addtocart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}

export const delfromcart = (id) => {
    return {
        type: DELETE_FROM_CART,
        payload:id
    }
}