import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;









































































// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: { user: null, token: null },
//   reducers: {
//     login: (state, action) => {
//       state.user = { id: action.payload.userId, name: action.payload.name };
//       state.token = action.payload.token;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//     updateProfileImage: (state, action) => {
//       if (state.user) {
//         state.user.profileImage = action.payload;
//       }
//     },
//   },
// });

// export const { login, logout, updateProfileImage } = authSlice.actions;
// export default authSlice.reducer;

