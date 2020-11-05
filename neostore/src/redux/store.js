import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import {reducer,cardreducer} from './dashboard/reducer'
import {userReducer, userloginReducer} from './user/userReducer'
import { productReducer,categoryReducer,colorReducer,byidReducer,cardCategoryReducer } from './products/productsReducer'


const rootReducer = combineReducers({
  carousel: reducer,
  card: cardreducer,
  user: userReducer,
  login:userloginReducer,
  product:productReducer,
  category:categoryReducer,
  color:colorReducer,
  byid:byidReducer,
  cardCategory:cardCategoryReducer
})


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
