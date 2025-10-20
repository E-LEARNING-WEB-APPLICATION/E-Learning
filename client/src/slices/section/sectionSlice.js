import { createSlice } from "@reduxjs/toolkit";

const sectionSlice = createSlice({
    name: "section",
    initialState: { value: [] },
    reducers: {
        add: (state, action) => {
            state.value = action.payload;
        },

    },
});

export const { add } = sectionSlice.actions;
export default sectionSlice.reducer;
