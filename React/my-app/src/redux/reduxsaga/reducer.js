import { GET_NEWS, NEWS_RECIEVED } from './types'


const initialState = {

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                loading: true
            }
        case NEWS_RECIEVED:
            return {
                ...state,
                loading: false,
                news: action.json
            }
        default:
            return state
    }
}