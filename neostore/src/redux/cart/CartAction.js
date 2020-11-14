import {
    FETCH_CART_REQUEST,
    FETCH_CART_SUCCESS,
    FETCH_CART_FAILURE,
    ADD_TO_CART,
    DELETE_FROM_CART,
    PLUS_CART,
    MINUS_CART,
    FETCH_ORDER_DETAILS,
} from './CartTypes'
import axios from 'axios'

export const fetchcart = () => {
    return (dispatch) => {
        // dispatch(fetchcartrequest)
        axios.get('http://180.149.241.208:3022/getCartData', {
            headers: {
                Authorization: `bearer ${localStorage.token}`
            }
        }).then((response) => {
            response.data.product_details.map((product) => dispatch(fetchcartsuccess(product)))
            console.log(response.data)
        }).catch((error) => {
            dispatch(fetchcartsuccess(error.response))
            console.log(error.response)
        })
    }
}



export const deletecart = (id) => {
    console.log(id)
    return (dispatch) => {
        // dispatch(fetchcartrequest)
        axios.delete(`http://180.149.241.208:3022/deletecustomercart/${id}`, {
            headers: {
                Authorization: `bearer ${localStorage.token}`
            }
        }).then((response) => {
            dispatch(delfromcart(id))
            console.log(response.data)
        }).catch((error) => {
            dispatch(delfromcart(id))
            console.log(error.response)
        })
    }
}

// export const fetchcartrequest = () => {
//     return {
//         type: FETCH_CART_REQUEST
//     }
// }
export const fetchcartsuccess = (data) => {
    return {
        type: FETCH_CART_SUCCESS,
        payload: data
    }
}
// export const fetchcartfailure = (data) => {
//     return {
//         type: FETCH_CART_FAILURE,
//         payload: data
//     }
// }


export const addtocart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}

export const delfromcart = (id) => {
    return {
        type: DELETE_FROM_CART,
        payload: id
    }
}
export const pluscart = (id) => {
    return {
        type: PLUS_CART,
        payload: id
    }
}
export const minuscart = (id) => {
    return {
        type: MINUS_CART,
        payload: id
    }
}

export const fetchorderdetails = () => {
    return (dispatch) => {
        axios.get('http://180.149.241.208:3022/getOrderDetails', {
            headers: {
                Authorization: `bearer ${localStorage.token}`
            }
        }).then((response) => {
            dispatch(getorderdetails(response.data))
            console.log(response.data)
        })
    }
}

export const getorderdetails = (data) => {
    return {
        type: FETCH_ORDER_DETAILS,
        payload: data
    }
}