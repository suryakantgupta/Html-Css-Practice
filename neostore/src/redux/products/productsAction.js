import axios from 'axios'
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_FAILURE,
    FETCH_CATEGORY_SUCCESS,
    FETCH_COLOR_REQUEST,
    FETCH_COLOR_SUCCESS,
    FETCH_COLOR_FAILURE
} from './productsTypes'

export const fetchCommonProducts = () => {
    return (dispatch) => {
        dispatch(fetchproductsrequest())
        axios.get('http://180.149.241.208:3022/commonproducts')
            .then((response) => {
                dispatch(fetchproductssuccess(response.data))
                // console.log(response.data)
            }).catch((error) => {
                // console.log(error.response)
                dispatch(fetchproductsfailure(error.response))
            })
    }
}

export const fetchproductsrequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchproductssuccess = (data) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const fetchproductsfailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}




export const fetchCategory = () => {
    return (dispatch) => {
        dispatch(fetchcategoryrequest())
        axios.get('http://180.149.241.208:3022/getAllCategories')
            .then((response) => {
                dispatch(fetchcategorysuccess(response.data))
                console.log(response.data)
            }).catch((error) => {
                console.log(error.response)
                dispatch(fetchcategoryfailure(error.response))
            })
    }
}

export const fetchcategoryrequest = () => {
    return {
        type: FETCH_CATEGORY_REQUEST
    }
}

export const fetchcategorysuccess = (data) => {
    return {
        type: FETCH_CATEGORY_SUCCESS,
        payload: data
    }
}

export const fetchcategoryfailure = (error) => {
    return {
        type: FETCH_CATEGORY_FAILURE,
        payload: error
    }
}



export const fetchColor = () => {
    return (dispatch) => {
        dispatch(fetchcolorrequest())
        axios.get('http://180.149.241.208:3022/getAllColors')
            .then((response) => {
                dispatch(fetchcolorsuccess(response.data))
                console.log(response.data)
            }).catch((error) => {
                console.log(error.response)
                dispatch(fetchcolorfailure(error.response))
            })
    }
}

export const fetchcolorrequest = () => {
    return {
        type: FETCH_COLOR_REQUEST
    }
}

export const fetchcolorsuccess = (data) => {
    return {
        type: FETCH_COLOR_SUCCESS,
        payload: data
    }
}

export const fetchcolorfailure = (error) => {
    return {
        type: FETCH_COLOR_FAILURE,
        payload: error
    }
}