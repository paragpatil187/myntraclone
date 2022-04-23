
import {
  ADD_CART,
  DELETE_CART,
  REMOVE_ALL,
  SEARCH_DATA,
  STORE_DATA,
} from "./action";

const initState = {
  data: [],
  search: "",
  cart: [],
};
export const productReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case STORE_DATA:
      return { ...store, data: payload };
    case SEARCH_DATA:
      return { ...store, search: payload };
    case ADD_CART:
      var newCart = [...store.cart, payload];
      return { ...store, cart: newCart };

    case DELETE_CART:
      var xn = store.cart.filter((e) => {
        if (e.id != payload) {
          return e;
        }
      });
      // console.log("xn",xn)
     
      return { ...store, cart: [...xn] };
    case REMOVE_ALL:
      return { ...store, cart: [] };
    default:
      return store;
  }
};
