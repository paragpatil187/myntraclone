
import { createStore,applyMiddleware,combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import { productReducer } from "./Data/reducer";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/reducer";
import { AddressReducer } from "./address/Reducer";
//import { cartReducer } from "./Cart/reducer";
const rootReducer=combineReducers({
    data : productReducer,
    login : loginReducer,
    AdressDataData:AddressReducer,

    
    
})
const store=createStore(rootReducer,composeWithDevTools( applyMiddleware(thunk)
));
export {store}