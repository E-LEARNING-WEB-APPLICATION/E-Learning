import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "./../slices/topics/topicSlice";
import sectionReducer from "./../slices/section/sectionSlice";
import wishlistReducer from "./../slices/wishlist/wishlistSlice";

export const store = configureStore({
  reducer: {
    topics: topicReducer,
    sections: sectionReducer,
    wishlist: wishlistReducer,
  },
});
