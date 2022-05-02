
import {
  ADD_CART,
  DEC_ITEM,
  DELETE_CART,
  INC_ITEM,
  REMOVE_ALL,
  SEARCH_DATA,
  STORE_DATA,
  ITEM_CART
} from "./action";

const initState = {
  data: [],
  search: "",
  cart: [],
  add:[],
  remove:[],
};
export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case STORE_DATA:
      return { ...state, data: payload };
    case SEARCH_DATA:
      return { ...state, search: payload };
    case ADD_CART:
      // var newCart = [...store.cart, payload];
      // return { ...store, cart: newCart };
      let newArray = [];
      let uniqueObject = {};

      // Loop for the array elements
      for (let i in state.cart) {
        // Extract the title
        let objid = state.cart[i]["id"];

        // Use the title as the index
        // if (uniqueObject[objid] == undefined) {
        uniqueObject[objid] = state.cart[i];
        // uniqueObject[objid]["quantity"] = 1;
        // } else {
        //   let quan = uniqueObject[objid]["quantity"];
        //   uniqueObject[objid]["quantity"] = quan + 1;
        // }
      }
      if (uniqueObject[payload.id] == undefined) {
        uniqueObject[payload.id] = payload;
        uniqueObject[payload.id]["quantity"] = 1;
      } else {
        let quan = uniqueObject[payload.id]["quantity"];
        uniqueObject[payload.id]["quantity"] = quan + 1;
      }

      // Loop to push unique object into array
      for (let i in uniqueObject) {
        newArray.push(uniqueObject[i]);
      }
      console.log(newArray);
      return { ...state, cart: newArray };
    case ITEM_CART:
      var itemcart = [...payload];
      return { ...state, cart: itemcart };
    case INC_ITEM:
      // var increment = [...state.add, payload];
      // return { ...state, add: increment };
      var Incre = state.cart.map((e) => {
        if (e.id == payload) {
          let xyz = e;
          xyz["quantity"] = xyz["quantity"] + 1;
          return xyz;
          // return {...e,e["quantity"]:(e["quantity"]+1)};
        } else {
          return e;
        }
      });
      console.log("cartinc", Incre);
      return { ...state, cart: [...Incre] };
    case DEC_ITEM:
      // var decrement = [...state.remove, payload];
      // return { ...state, remove: decrement };
      var decre = state.cart.map((e) => {
        if (e.id == payload) {
          // return {...e,e["quantity"]:(e["quantity"]-1)};
          let xyz = e;
          xyz["quantity"] = xyz["quantity"] - 1;
          return xyz;
        } else {
          return e;
        }
      });
      console.log("cartdec", ...decre);
      return { ...state, cart: [...decre] };

    case DELETE_CART:
      var xn = state.cart.filter((e) => {
        if (e.id != payload) {
          return e;
        }
      });
      // console.log("xn",xn)
     
      return { ...state, cart: [...xn] };
    case REMOVE_ALL:
      return { ...state, cart: [] }; 
    default:
      return state;
  }
};
