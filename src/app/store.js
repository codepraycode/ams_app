import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountSlice";


const store = configureStore({
    reducer:{
        [accountSlice.name]:accountSlice.reducer,
    }
}
);

export default store;