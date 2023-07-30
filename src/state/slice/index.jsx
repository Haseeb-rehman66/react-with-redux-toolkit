import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}



 export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        deposite: (state, action) => {
            state.value += action.payload;
        },
        withdraw: (state, action) => {
            state.value -= action.payload;
        },

    }
});


export default accountSlice.reducer;

export const {deposite, withdraw} = accountSlice.actions;