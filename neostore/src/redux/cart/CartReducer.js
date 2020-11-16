import {
    FETCH_CART_REQUEST,
    FETCH_CART_SUCCESS,
    FETCH_CART_FAILURE,
    ADD_TO_CART,
    DELETE_FROM_CART,
    PLUS_CART,
    MINUS_CART,
    FETCH_ORDER_DETAILS
} from './CartTypes'

const initialCartState = {
    // loading: true,
    data: '',
    // error: ''
}
const addtocartState = {
    data: JSON.parse(localStorage.getItem('cart')) == undefined ? [] : JSON.parse(localStorage.getItem('cart')),
    quantity: JSON.parse(localStorage.getItem('quantity')),
    // total:0
}



export const getCartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case FETCH_ORDER_DETAILS:
            return {
                data: action.payload
            }

        // case FETCH_CART_SUCCESS:
        //     return {
        //         loading: true,
        //         data: action.payload,
        //         error: ''
        //     }
        // case FETCH_CART_FAILURE:
        //     return {
        //         loading: true,
        //         data: '',
        //         error: action.payload
        //     }
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
            temp = temp.filter((product) => product.product_id.product_id != action.payload)
            localStorage.setItem('cart', JSON.stringify(temp))
            return {
                data: JSON.parse(localStorage.getItem('cart'))
            }

        case PLUS_CART:
            let temp2 = JSON.parse(localStorage.getItem('cart'))
            // let total=0
            temp2 = temp2.map((product) => {
                if (product.product_id.product_id == action.payload) {
                    let temp = product
                    temp.quantity += 1
                    // total += temp.quantity*product.product_id.product_cost
                    return temp
                } else {
                    return product
                }
            })
            localStorage.setItem('cart', JSON.stringify(temp2))
            return {
                data: JSON.parse(localStorage.getItem('cart')),
                // total:total
            }


        case MINUS_CART:
            let temp3 = JSON.parse(localStorage.getItem('cart'))
            // let total2=0
            temp3 = temp3.map((product) => {
                if (product.product_id.product_id == action.payload) {
                    let temp = product
                    temp.quantity -= 1
                    // total2 -= temp.quantity*product.product_id.product_cost
                    return temp
                } else {
                    return product
                }
            })
            localStorage.setItem('cart', JSON.stringify(temp3))
            return {
                data: JSON.parse(localStorage.getItem('cart')),
                // total:total2
            }

        case FETCH_CART_SUCCESS:
            // console.log(action.payload)
            if (localStorage.getItem('cart') == undefined || localStorage.getItem('cart') == '[]') {
                let temp = []
                // console.log(action.payload != undefined)
                if (action.payload != undefined) {
                    temp.push(action.payload)
                    localStorage.setItem('cart', JSON.stringify(temp))
                } else {
                    temp = []
                    localStorage.setItem('cart', JSON.stringify(temp))
                }
            } else {
                let temp = JSON.parse(localStorage.getItem('cart'))
                if (action.payload != undefined) {
                    if (temp.filter((product) => product.product_id.product_id == action.payload.product_id.product_id).length == 0) {
                        temp.push(action.payload)
                        localStorage.setItem('cart', JSON.stringify(temp))
                    }
                    // temp.push(action.payload)
                    // localStorage.setItem('cart', JSON.stringify(temp))
                }
            }
            return {
                data: JSON.parse(localStorage.getItem('cart'))
            }




        default:
            return state
    }
}