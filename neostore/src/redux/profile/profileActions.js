import {
    GET_CUST_PROFILE_REQUEST,
    GET_CUST_PROFILE_SUCCESS,
    GET_CUST_PROFILE_FAILURE,
    UPDATE_CUST_PROFILE_REQUEST,
    UPDATE_CUST_PROFILE_SUCCESS,
    UPDATE_CUST_PROFILE_FAILURE
} from './profileTypes'
import axios from 'axios'

export const fetchCustProfile = () => {
    return (dispatch) => {
        dispatch(fetchcustprofilerequest())
        axios.get('http://180.149.241.208:3022/getcustprofile',
            {
                headers: {
                    Authorization: `bearer ${localStorage.token}`
                }
            }).then((response) => {
                dispatch(fetchcustprofilesuccess(response.data.customer_proile))
                // console.log(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }
}

export const fetchcustprofilerequest = () => {
    return {
        type: GET_CUST_PROFILE_REQUEST
    }
}
export const fetchcustprofilesuccess = (data) => {
    return {
        type: GET_CUST_PROFILE_SUCCESS,
        payload: data
    }
}
export const fetchcustprofilefailure = (data) => {
    return {
        type: GET_CUST_PROFILE_FAILURE,
        payload: data
    }
}



export const updateCustProfile = (datas) => {
    return (dispatch) => {
        dispatch(updatecustprofilerequest())
        const data = new FormData()
        data.append('first_name', datas.firstName)
        data.append('last_name', datas.lastName)
        data.append('email', datas.email)
        data.append('gender',datas.gender)
        data.append('phone_no', datas.mobile)
        data.append('dob', datas.dob)
        data.append('profile_img', `data:image/jpeg;base64,${datas.b64image}`)
        axios.put('http://180.149.241.208:3022/profile', data,
            {
                headers: {
                    Authorization: `bearer ${localStorage.token}`
                }

            }).then((response) => {
                dispatch(updatecustprofilesuccess())
                console.log(response.data)
            }).catch((error) => {
                console.log(error.response)
            })
    }
}

export const updatecustprofilerequest = () => {
    return {
        type: UPDATE_CUST_PROFILE_REQUEST
    }
}
export const updatecustprofilesuccess = () => {
    return {
        type: UPDATE_CUST_PROFILE_SUCCESS,
        // payload: data
    }
}
export const updatecustprofilefailure = () => {
    return {
        type: UPDATE_CUST_PROFILE_FAILURE,
        // payload:data
    }
}



