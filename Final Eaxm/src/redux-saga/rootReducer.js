import userReducer from "./user/reducer/reducer";
import  { combineReducers } from 'redux';



let rootReducer = combineReducers({
    userReducer,
})

export default rootReducer;