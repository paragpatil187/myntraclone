import { ADD_CART, SEARCH_DATA, STORE_DATA } from "./action";


const initState={
    data:[],
    search:"",
    cart:[],
    
}
export const productReducer=(store=initState,{type,payload})=>{
    switch(type){
        case STORE_DATA:
            return{...store,data:payload}
             case SEARCH_DATA:
                 return{...store,search:payload}
                 case ADD_CART:
                    return {...store,cart:payload}; 
            default:
                return store;
    }
}
