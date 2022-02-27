import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    value: number;
}

const initialState: InitialState = {
    value: 1,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: state => {
            state.value++;
        },
        decrement: state => {
            state.value--;
        }
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
