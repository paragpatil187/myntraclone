export const LOGIN_LOADING="LOGIN_LOADING";
export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const LOGIN_FAILURE="LOGIN_FAILURE";

export const loginLoading=()=>({
    type:LOGIN_LOADING
})

export const loginSuccess=(payload)=>({
    type:LOGIN_SUCCESS,
    payload
})

export const loginFailure=()=>({
    type:LOGIN_FAILURE
})

export const login =(payload)=>(dispatch)=>{
  dispatch(loginLoading())
    dispatch(loginSuccess({token:123456,email:"parag"}))
    fetch("https://reqres.in/api/login",{
      method:"POST",
      body:JSON.stringify(payload),
      headers:{
        "Content-Type":"application/json"
      }
    }).then((res)=>res.json())
    .then((res)=> dispatch(loginSuccess({token:res.token,email:payload.email})))
    
    .catch((err)=>dispatch(loginFailure()))
  }
