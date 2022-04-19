
import { createStore,applyMiddleware,combineReducers } from "redux";
import {reducer} from "../redux/data/reducer"
import thunk from "redux-thunk";



const store=createStore(reducer)
export {store}