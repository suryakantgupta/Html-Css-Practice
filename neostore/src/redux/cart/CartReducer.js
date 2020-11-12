import {
    FETCH_CART_REQUEST,
    FETCH_CART_SUCCESS,
    FETCH_CART_FAILURE,
    ADD_TO_CART,
    DELETE_FROM_CART
} from './CartTypes'

const initialCartState = {
    loading: true,
    data: '',
    error: ''
}
const addtocartState = {
    data: JSON.parse(localStorage.getItem('cart'))
}



export const getCartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case FETCH_CART_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CART_SUCCESS:
            return {
                loading: true,
                data: action.payload,
                error: ''
            }
        case FETCH_CART_FAILURE:
            return {
                loading: true,
                data: '',
                error: action.payload
            }
        default:
            return state
    }
}

export const addtocartReducer = (state = addtocartState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (localStorage.getItem('cart') == undefined) {
                let temp = []
                temp.push(action.payload)
                localStorage.setItem('cart', JSON.stringify(temp))
            } else {
                let temp = JSON.parse(localStorage.getItem('cart'))
                temp.push(action.payload)
                localStorage.setItem('cart', JSON.stringify(temp))

            }
            return {
                data: JSON.parse(localStorage.getItem('cart'))
            }

        case DELETE_FROM_CART:
            let temp = JSON.parse(localStorage.getItem('cart'))
            temp = temp.filter((product) => product.product_id != action.payload)
            localStorage.setItem('cart', JSON.stringify(temp))
            return{
                data: JSON.parse(localStorage.getItem('cart'))
            }
            
        default:
            return state
    }
}