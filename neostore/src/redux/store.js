import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import {reducer,cardreducer} from './dashboard/reducer'
import {userReducer, userloginReducer} from './user/userReducer'
import { productReducer,categoryReducer,colorReducer,byidReducer,cardCategoryReducer } from './products/productsReducer'
import {customerProfileReducer , updatecustomerProfileReducer} from './profile/profileReducer'
import { addAddressReducer, getAddressReducer, updateAddressReducer } from './address/addressReducer'
import { addtocartReducer, getCartReducer } from './cart/CartReducer'

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
  customer:customerProfileReducer,
  updatecustomer:updatecustomerProfileReducer,
  address:getAddressReducer,
  addaddress:addAddressReducer,
  updateaddress:updateAddressReducer,
  // getcart:getCartReducer,
  addcart:addtocartReducer
})


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
