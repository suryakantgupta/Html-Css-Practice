import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import {reducer,cardreducer} from './dashboard/reducer'
import {userReducer, userloginReducer} from './user/userReducer'
import { productReducer,categoryReducer,colorReducer,byidReducer,cardCategoryReducer } from './products/productsReducer'
import {customerProfileReducer} from './profile/profileReducer'

const rootReducer = combineReducers({
  carousel: reducer,
  card: cardreducer,
  user: userReducer,
  login:userloginReducer,
  product:productReducer,
  category:categoryReducer,
  color:colorReducer,
  byid:byidReducer,
  cardCategory:cardCategoryReducer,
  customer:customerProfileReducer
})


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
