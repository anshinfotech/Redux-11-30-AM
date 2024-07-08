import { configureStore } from "@reduxjs/toolkit";
import { fetchReducer } from "../Reducer/fetchProductsReducer";

const myStore = new configureStore({
    reducer:{
        prd:fetchReducer
    }
})

export default myStore