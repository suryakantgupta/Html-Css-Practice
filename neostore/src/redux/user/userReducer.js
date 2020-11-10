import {
    USER_REGISTER_POST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOGIN_POST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
} from './userTypes'

const initialUserState = {
    loading: false,
    success: null,
    error: null
}

const initialLoginState = {
    loading: false,
    success: '',
    error: ''
}

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case USER_REGISTER_POST:
            return {
                ...state,
                loading: true
            }

        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                success: action.payload,
                error: null
            }

        case USER_REGISTER_FAILURE: {
            return {
                loading: false,
                success: null,
                error: action.payload
            }
        }


        default: return state
    }
}






export const userloginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case USER_LOGIN_POST:
            return {
                ...state,
                loading: true
            }

        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                success: action.payload,
                error: ''
            }

        case USER_LOGIN_FAILURE: {
            return {
                loading: false,
                success: '',
                error: action.payload
            }
        }
        default: return state
    }
}