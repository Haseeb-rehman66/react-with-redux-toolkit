import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "../slice";

export const store = configureStore ({
    reducer: {
        account: accountSlice,
    },
});


export default store;