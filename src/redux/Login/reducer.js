import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "./action";

const initState = {
  loading: false,
  error: false,
  isAuthenticated: false,
  token: "",
  username: "",
};
export const loginReducer = (store=initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...store, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...store,
        error: false,
        isAuthenticated: true,
        token: payload.token,
        username: payload.username,
      };
      case LOGIN_FAILURE:
          return{
              ...store,
              error: true,
        isAuthenticated: false,
        token: "",
        username: "",
          }
      default:return store;
  }
};
