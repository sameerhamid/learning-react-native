import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites";
export const store = configureStore({
  reducer: {
    // Define your reducers here
    favoriteMeals: favoritesReducer,
  },
});
