import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

import "./payment.css";
import { removeallcart } from "../../redux/Data/action";

export default function Payment() {
    const dispatch=useDispatch()
   const navigate = useNavigate();
//    const AddressData=useSelector((state)=>
//        state.AddressDataData.AddressDataData
//    )
// const data=useSelector((state)=>state.data.data)
//   console.log(data)
  const adddata=useSelector((state)=>state.AdressDataData.AddressDataData)
  console.log("adddata",adddata)
//   const AddressDetails = useSelector(
//     (store) => store.AddressDataData.AddressDataData
//   )

  const handleCheckout = () => {
    console.log("paymentpage");
    dispatch(removeallcart())
    navigate("/paymentsuccess");
  }

   const [cardNumber, setCardNumber] = useState("");
   const [cvvNumber, setcvvNumber] = useState("");

  return (
    <>
      <div className="big-div">
        <div className="payment-div">
          <div className="ConatctDetails">
            <div>
              <p>
                <b>PAYMENT</b>
              </p>
            </div>
            <br />

            <div className="payment-symbol-div">
              <img
                src="http://www.credit-card-logos.com/images/multiple_credit-card-logos-1/credit_card_logos_23.gif"
                alt="All Cards"
              ></img>
            </div>
            <br />

            <Box>
              <InputLabel htmlFor="standard-adornment-amount">
                CARD NUMBER
              </InputLabel>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Must be 16 digit No*"
                  onChange={(elem) => {
                    setCardNumber(elem.target.value);
                    if(cardNumber.length>14){
                       alert("no exceeds")
                    }
                  }}
                />
              </div>

              <div>
                <div>
                  <InputLabel htmlFor="standard-adornment-amount">
                    EXP MONTH /EXP YEAR
                  </InputLabel>
                  <br />
                  <TextField id="outlined-basic" label="MM/Year*" />
                </div>
                <div>
                  <InputLabel htmlFor="standard-adornment-amount">
                    CVV
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    label="3 digits*"
                    variant="outlined"
                    onChange={(elem) => {
                      setcvvNumber(elem.target.value);
                     if (cvvNumber.length > 2) {
                        alert("Number Exceed");
                      }
                    }}
                  />
                </div>
              </div>
            </Box>
            <button className="Make-Payment" onClick={handleCheckout}>
              <b>Make Payment</b>
            </button>
          </div>
        </div>

       <div className="address-div-list">
          <div className="address-list">
            <h3>
              <b>Your Shipping Address</b>
            </h3>
            <hr />
            <div className="all-shipping-address">
              <div className="address-div-one">
                {" "}
                <h4>Name: {adddata ? adddata.name : ""}</h4>
              </div>
              <hr />
              <div className="address-div-one">
                <h4>Address: {adddata ? adddata.address : ""}</h4>
              </div>
              <hr />
              <div className="address-div-one">
                <h4>
                  Locality: {adddata ? adddata.locality : ""},
                  City / District: {adddata ? adddata.city : ""}
                </h4>
              </div>
              <hr />
              <div className="address-div-one">
                <h4>Pincode: {adddata ? adddata.pincode : ""}</h4>
              </div>
              <hr />
              <div className="address-div-one">
                <h4>Mobile: {adddata ? adddata.mobile : ""}</h4>
              </div>
              <hr />
            </div>
          </div>
        </div>
         
      </div>
    </>
  )
}
