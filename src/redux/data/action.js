
 export const STORE_DATA="STORE_DATA"
 export const SEARCH_DATA="SEARCH_DATA"
 export const ADD_CART="ADD_CART"
export const REMOVE_FROM_CART="REMOVE_FROM_CART"
export const DELETE_CART="DELETE_CART"
const storeData=(payload)=>({
    type:STORE_DATA,
    payload:payload
})
export const searchData=(payload)=>({
    type:SEARCH_DATA,
    payload:payload

})
export const addCart=(payload)=>({
    type:ADD_CART,
    payload:payload
})
export const deleteCart=(payload)=>({
    type:DELETE_CART,
    payload:payload

})

export default storeData