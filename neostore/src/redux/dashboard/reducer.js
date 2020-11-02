import {
    FETCH_DASHBOARD_PRODUCTS_REQUEST,
    FETCH_DASHBOARD_PRODUCTS_SUCCESS,
    FETCH_DASHBOARD_PRODUCTS_FAILURE,
    CARD_DASHBOARD_PRODUCTS_REQUEST,
    CARD_DASHBOARD_PRODUCTS_SUCCESS,
    CARD_DASHBOARD_PRODUCTS_FAILURE
} from './types'

const initialState = {
    loading: true,
    products: [],
    error: ''
}

const initialCardState = {
    loading: true,
    products: [],
    error: ''
}




export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DASHBOARD_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        
            case FETCH_DASHBOARD_PRODUCTS_SUCCESS:
                return {
                    loading:false,
                    products:action.payload,
                    error:''
                }

            case FETCH_DASHBOARD_PRODUCTS_FAILURE:
                return {
                    loading:false,
                    products:[],
                    error:action.payload
                }
                default: return state
    }
}



export const cardreducer = (state = initialCardState, action) => {
    switch (action.type) {
        case CARD_DASHBOARD_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        
            case CARD_DASHBOARD_PRODUCTS_SUCCESS:
                return {
                    loading:false,
                    products:action.payload,
                    error:''
                }

            case CARD_DASHBOARD_PRODUCTS_FAILURE:
                return {
                    loading:false,
                    products:[],
                    error:action.payload
                }
                default: return state
    }
}