
import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './types'

export const fetchUsers = (data) => {
//   return () => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: data
      }
    // dispatch(fetchUsersSuccess(data))
    // axios
    //   .post('http://180.149.241.208:3047/login',details)
    //   .then(response => {
    //     // response.data is the users
    //     const users = response.data
    //     dispatch(fetchUsersSuccess(users))
    //   })
    //   .catch(error => {
    //     // error.message is the error message
    //     dispatch(fetchUsersFailure(error.message))
    //   })
//   }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}
