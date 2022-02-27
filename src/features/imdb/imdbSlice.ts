import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
    results: Array<AxiosResponse>;
    temp: Array<AxiosResponse>;
}

const initialState: SearchState = {
    results: [],
    temp: [],
};

export const searchSlice = createSlice({
    name: "searchResults",
    initialState,
    reducers: {
        setSearchResults: (
            state,
            action: PayloadAction<Array<AxiosResponse>>
        ) => {
            state.results = action.payload;
        },

        sortByDate(state, action: PayloadAction<string>) {
            let i = 0;
            const temp = [...state.results];
            const newSortedList: Array<AxiosResponse> = [];
            while (i < state.results.length) {
                if (temp[i].Year.includes("-")) {
                    temp[i].Year.replace("-", "");
                }
                console.log("temp", temp);
                if (temp[i].Year >= action.payload) {
                    newSortedList.push(temp[i]);
                }
                i++;
            }
            state.temp = newSortedList;
        },
    },
});

export const { setSearchResults, sortByDate } = searchSlice.actions;
export default searchSlice.reducer;
