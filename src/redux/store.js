import { createStore } from "redux";
import { reducer } from "./data/reducer";

const store=createStore(reducer)
export{store}