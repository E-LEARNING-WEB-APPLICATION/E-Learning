import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
    name: "topic",
    initialState: { value: [] },
    reducers: {
        add: (state, action) => {
            state.value = action.payload;
        },

    },
});

export const { add } = topicSlice.actions;
export default topicSlice.reducer;
