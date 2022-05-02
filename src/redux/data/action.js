
 export const STORE_DATA="STORE_DATA"
 export const SEARCH_DATA="SEARCH_DATA"
 export const ADD_CART="ADD_CART"
export const REMOVE_FROM_CART="REMOVE_FROM_CART"
export const DELETE_CART="DELETE_CART"
export const REMOVE_ALL="REMOVE_ALL"
export const INC_ITEM="INC_ITEM"
export const DEC_ITEM="DEC_ITEM"
export const ITEM_CART="ITEM_CART"
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
export const incrementitem = (payload) => ({
    type: INC_ITEM,
    payload: payload,
  });
  export const decrementitem = (payload) => ({
    type: DEC_ITEM,
    payload: payload,
  });

export const removeallcart=()=>({
    type:REMOVE_ALL,
    
})
export const ItemCart = (payload) => ({
    type: ITEM_CART,
    payload: payload,
  });

export default storeData