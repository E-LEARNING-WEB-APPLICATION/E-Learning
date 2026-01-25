import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: {
      count: 0,
      courseIds: [],
    },
  },
  reducers: {
    setWishlistCount: (state, action) => {
      state.value.count = action.payload;
    },

    addCourseToWishlist: (state, action) => {
      state.value.courseIds.push(action.payload);
      state.value.count += 1;
    },

    removeCourseFromWishlist: (state, action) => {
      state.value.courseIds = state.value.courseIds.filter(
        (id) => id !== action.payload,
      );
      state.value.count -= 1;
    },

    resetWishlist: (state) => {
      state.value.count = 0;
      state.value.courseIds = [];
    },
  },
});

export const {
  setWishlistCount,
  addCourseToWishlist,
  removeCourseFromWishlist,
  resetWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
