import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import {reducer,cardreducer} from './dashboard/reducer'


const rootReducer = combineReducers({
  carousel: reducer,
  card: cardreducer
})


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
