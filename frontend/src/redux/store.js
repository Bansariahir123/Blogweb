import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import blogReducer from "./blogSlice";

const storedUser = localStorage.getItem("user");

const preloadedState = {
  auth: { user: storedUser ? JSON.parse(storedUser) : null },
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
  },
  preloadedState,
});

export default store;
