import { configureStore } from "@reduxjs/toolkit";
import imdbReducer from "../features/imdb/imdbSlice";
import counterReducer from "../features/counterSlicer";
import typeSlicer from "../features/imdb/typeSlicer";

export const store = configureStore({
    reducer: {
        movies: imdbReducer,
        counter: counterReducer,
        type: typeSlicer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
