
 export const STORE_DATA="STORE_DATA"
 export const SEARCH_DATA="SEARCH_DATA"
const storeData=(payload)=>({
    type:STORE_DATA,
    payload:payload
})
export const searchData=(payload)=>({
    type:SEARCH_DATA,
    payload:payload

})

export default storeData