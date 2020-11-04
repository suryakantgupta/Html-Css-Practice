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

const initialProductState = {
    loading: true,
    products: '',
    error: ''
}

const initialCategoryState = {
    loading: true,
    category: '',
    error: ''
}

const initialColorState = {
    loading: true,
    color: '',
    error: ''
}


export const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: ''
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                loading: false,
                products: '',
                error: action.payload
            }

        default:
            return state
    }
}


export const categoryReducer = (state = initialCategoryState, action) => {
    switch (action.type) {
        case FETCH_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CATEGORY_SUCCESS:
            return {
                loading: false,
                category: action.payload,
                error: ''
            }
        case FETCH_CATEGORY_FAILURE:
            return {
                loading: false,
                category: '',
                error: action.payload
            }

        default:
            return state
    }
}



export const colorReducer = (state = initialColorState, action) => {
    switch (action.type) {
        case FETCH_COLOR_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_COLOR_SUCCESS:
            return {
                loading: false,
                color: action.payload,
                error: ''
            }
        case FETCH_COLOR_FAILURE:
            return {
                loading: false,
                color: '',
                error: action.payload
            }

        default:
            return state
    }
}