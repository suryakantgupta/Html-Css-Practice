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
    FETCH_COLOR_FAILURE,
    FETCH_BYID_REQUEST,
    FETCH_BYID_SUCCESS,
    FETCH_BYID_FAILURE,
    FETCH_CARD_CATEGORY,
    FETCH_CARD_CATEGORY_S
} from './productsTypes'

/**
 * @description This function gets the product as per parameter and if  nothing is passed then 
 * it gets all the products
 * @param {*} id is the product ID
 * @param {*} category_id It is the category id of the product
 * @param {*} color_id It is the color id of the product
 * @param {*} sortBy 
 * @param {*} name 
 * @param {*} sortIn 
 */

export const fetchCommonProducts = (id = '', category_id = '', color_id = '', sortBy = '', name = '', sortIn = '',pageNo,perPage) => {
    return (dispatch) => {
        dispatch(fetchproductsrequest())
        axios.get('http://180.149.241.208:3022/commonproducts', {
            params: {
                id,
                category_id,
                color_id,
                sortBy,
                name,
                sortIn,
                pageNo,
                perPage
            }
        }).then((response) => {
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



/**
 * @description This function fetch the list of category
 */
export const fetchCategory = () => {
    return (dispatch) => {
        dispatch(fetchcategoryrequest())
        axios.get('http://180.149.241.208:3022/getAllCategories')
            .then((response) => {
                dispatch(fetchcategorysuccess(response.data))
                // console.log(response.data)
            }).catch((error) => {
                // console.log(error.response)
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


/**
 * @description This function fetch the list of color
 */
export const fetchColor = () => {
    return (dispatch) => {
        dispatch(fetchcolorrequest())
        axios.get('http://180.149.241.208:3022/getAllColors')
            .then((response) => {
                dispatch(fetchcolorsuccess(response.data))
                // console.log(response.data)
            }).catch((error) => {
                // console.log(error.response)
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



/**
 * @description This function fetches the product details by id
 * @param {*} id 
 */

export const fetchById = (id) => {
    return (dispatch) => {
        dispatch(fetchbyidrequest())
        axios.get(`http://180.149.241.208:3022/getProductByProdId/${id}`)
            .then((response) => {
                dispatch(fetchbyidsuccess(response.data))
                // console.log(response.data)
            }).catch((error) => {
                // console.log(error.response)
                dispatch(fetchbyidfailure(error.response))
            })
    }
}

export const fetchbyidrequest = () => {
    return {
        type: FETCH_BYID_REQUEST
    }
}

export const fetchbyidsuccess = (data) => {
    return {
        type: FETCH_BYID_SUCCESS,
        payload: data
    }
}

export const fetchbyidfailure = (error) => {
    return {
        type: FETCH_BYID_FAILURE,
        payload: error
    }
}


export const fetchcardcategoryfailure = () => {
    return {
        type: FETCH_CARD_CATEGORY,
        payload: false
    }
}
export const fetchcardcategorysuccess = () => {
    return {
        type: FETCH_CARD_CATEGORY_S,
        payload: true
    }
}