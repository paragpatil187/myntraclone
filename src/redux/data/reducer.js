import { SEARCH_DATA, STORE_DATA } from "./action";


const initState={
    data:[],
    search:""
}
export const productReducer=(store=initState,{type,payload})=>{
    switch(type){
        case STORE_DATA:
            return{...store,data:payload}
             case SEARCH_DATA:
                 return{...store,search:payload}
            default:
                return store;
    }
}
