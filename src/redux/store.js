
import { createStore,applyMiddleware,combineReducers, compose } from "redux";
import { productReducer } from "./Data/reducer";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/reducer";
const rootReducer=combineReducers({
    data : productReducer,
    login : loginReducer
    
})
const store=createStore(rootReducer
    //compose( applyMiddleware(thunk))
)
export {store}