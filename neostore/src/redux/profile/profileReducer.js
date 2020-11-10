import {
    GET_CUST_PROFILE_REQUEST,
    GET_CUST_PROFILE_SUCCESS,
    GET_CUST_PROFILE_FAILURE,
    UPDATE_CUST_PROFILE_REQUEST,
    UPDATE_CUST_PROFILE_SUCCESS,
    UPDATE_CUST_PROFILE_FAILURE
} from './profileTypes'

const initialProfileState = {
    loading:true,
    customer:'',
    error:''
}
const initialProfileUpdateState = {
    loading:null,
    // customer:'',
    // error:''
}

export const customerProfileReducer = (state = initialProfileState,action)=>{
    switch (action.type) {
        case GET_CUST_PROFILE_REQUEST:
            return{
                loading:true
            }
        case GET_CUST_PROFILE_SUCCESS:
            return{
                loading:false,
                customer:action.payload,
                error:''
            }
        case GET_CUST_PROFILE_FAILURE:
            return{
                loading:false,
                customer:'',
                error:action.payload
            }
    
        default:
            return state
    }
}




export const updatecustomerProfileReducer = (state = initialProfileUpdateState,action)=>{
    switch (action.type) {
        case UPDATE_CUST_PROFILE_REQUEST:
            return{
                loading:true
            }
        case UPDATE_CUST_PROFILE_SUCCESS:
            return{
                loading:false,
                // customer:action.payload,
                // error:''
            }
        case UPDATE_CUST_PROFILE_FAILURE:
            return{
                loading:false,
                // customer:'',
                // error:action.payload
            }
    
        default:
            return state
    }
}