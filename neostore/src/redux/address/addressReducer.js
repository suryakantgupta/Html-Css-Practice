import {
    GET_ADDRESS_REQUEST,
    GET_ADDRESS_SUCCESS,
    GET_ADDRESS_FAILURE,
    ADD_ADDRESS_REQUEST,
    ADD_ADDRESS_SUCCESS,
    ADD_ADDRESS_FAILURE
} from "./addressTypes";

const initialaddressState = {
    loading: false,
    address: '',
    error: ''
}

const addaddressState = {
    loading: false,
    address: '',
    error: ''
}

export const getAddressReducer = (state = initialaddressState, action) => {
    switch (action.type) {
        case GET_ADDRESS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ADDRESS_SUCCESS:
            return {
                loading: false,
                address:action.payload,
                error:''
            }
        case GET_ADDRESS_FAILURE:
            return {
                loading: false,
                address:'',
                error:action.payload
            }

        default:
            return state
    }
}

export const addAddressReducer = (state = addaddressState, action) => {
    switch (action.type) {
        case ADD_ADDRESS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_ADDRESS_SUCCESS:
            return {
                loading: false,
                address:action.payload,
                error:''
            }
        case ADD_ADDRESS_FAILURE:
            return {
                loading: false,
                address:'',
                error:action.payload
            }

        default:
            return state
    }
}