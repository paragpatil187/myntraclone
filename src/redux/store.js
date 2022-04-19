
import { createStore,applyMiddleware,combineReducers } from "redux";
import {reducer} from "../redux/data/reducer"
import thunk from "redux-thunk";
import { loginReducer } from "./Login/reducer";

const rootReducer=combineReducers({
    login:loginReducer,
    product:reducer
})
const store=createStore(rootReducer,applyMiddleware(thunk))
export {store}