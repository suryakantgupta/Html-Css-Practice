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

const initialProductState = {
    loading: true,
    products: '',
    error: ''
}

const initialByIdState = {
    loading: true,
    product: '',
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

const initialCardState = {
    category:true
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


export const byidReducer = (state = initialByIdState, action) => {
    switch (action.type) {
        case FETCH_BYID_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_BYID_SUCCESS:
            return {
                loading: false,
                product: action.payload,
                error: ''
            }
        case FETCH_BYID_FAILURE:
            return {
                loading: false,
                product: '',
                error: action.payload
            }

        default:
            return state
    }
}




export const cardCategoryReducer = (state = initialCardState, action) => {
    switch (action.type) {
        case FETCH_CARD_CATEGORY:
            return {
                category: action.payload
            }
        case FETCH_CARD_CATEGORY_S:
            return {
                category: action.payload
            }
            
        default:
            return state
    }
}