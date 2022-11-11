import { combineReducers } from "redux";
import ShoppingCartReducer from './reducers'


const allReducer = combineReducers({
    All_items: ShoppingCartReducer
})

export default allReducer;