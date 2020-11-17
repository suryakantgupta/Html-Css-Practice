// require('dotenv').config()
import axios from 'axios'
import { BASE_URL } from '../../config'
import {
    FETCH_DASHBOARD_PRODUCTS_REQUEST,
    FETCH_DASHBOARD_PRODUCTS_SUCCESS,
    FETCH_DASHBOARD_PRODUCTS_FAILURE,
    CARD_DASHBOARD_PRODUCTS_REQUEST,
    CARD_DASHBOARD_PRODUCTS_SUCCESS,
    CARD_DASHBOARD_PRODUCTS_FAILURE
  } from './types'
  


  /**
   * @description this makes call for the product in the carausel of dashboard
   */
export const fetchDashboardProducts = ()=>{
    return (dispatch)=>{
        dispatch(fetchProductsRequest())
        axios.get(`${BASE_URL}/getAllCategories`)
        .then(response => {
            dispatch(fetchProductsSuccess(response.data))
        })
        .catch(error =>{
            console.log(error)
        })
    }
}


export const fetchProductsRequest = () => {
    return {
      type: FETCH_DASHBOARD_PRODUCTS_REQUEST
    }
  }
  
  export const fetchProductsSuccess = productsData => {
    return {
      type:FETCH_DASHBOARD_PRODUCTS_SUCCESS,
      payload: productsData
    }
  }
  
  export const fetchProductsFailure = error => {
    return {
      type: FETCH_DASHBOARD_PRODUCTS_FAILURE,
      payload: error
    }
  }
  
  /**
   * @description this makes call for the product in the card section of dashboard
   */

  export const fetchDashboardCardProducts = ()=>{
    return (dispatch)=>{
        dispatch(cardProductsRequest())
        axios.get(`http://180.149.241.208:3022/defaultTopRatingProduct`)
        .then(response => {
            dispatch(cardProductsSuccess(response.data))
        })
        .catch(error =>{
            console.log(error)
        })
    }
}

  export const cardProductsRequest = () => {
    return {
      type: CARD_DASHBOARD_PRODUCTS_REQUEST
    }
  }
  
  export const cardProductsSuccess = productsData => {
    return {
      type: CARD_DASHBOARD_PRODUCTS_SUCCESS,
      payload: productsData
    }
  }
  
  export const cardProductsFailure = error => {
    return {
      type: CARD_DASHBOARD_PRODUCTS_FAILURE,
      payload: error
    }
  }
  