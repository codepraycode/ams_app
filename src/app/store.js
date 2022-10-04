import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountSlice";
import memberSlice from "./memberSlice";

const store = configureStore({
    reducer:{
        [accountSlice.name]:accountSlice.reducer,
        [memberSlice.name]: memberSlice.reducer,
    }
}
);

export default store;