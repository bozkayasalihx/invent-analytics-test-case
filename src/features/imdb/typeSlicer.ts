import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Selectiontype = "movie" | "series" | "episode" | undefined;

interface InitialState {
    type: Selectiontype;
}

const initialState: InitialState = {
    type: undefined,
};

const TypeSlice = createSlice({
    name: "selectionType",
    initialState,
    reducers: {
        setType: (state, action: PayloadAction<Selectiontype>) => {
            state.type = action.payload;
        },
    },
});

export const { setType } = TypeSlice.actions;
export default TypeSlice.reducer;
