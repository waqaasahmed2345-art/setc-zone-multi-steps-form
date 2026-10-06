import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },

    setUserDetails: (state, action) => {
      state.fName = action.payload.fName;
    },

    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    removeToken: (state) => {
      state.token = null;
      state.fName = ""; // Clear firstName
      localStorage.removeItem("token");
    },
    addApplicant: (state, action) => {
      if (state.userData) {
        state.userData.applicants.push(action.payload);
      }
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { login, logout, setUserDetails, setToken, removeToken } =
  userSlice.actions;

export default userSlice.reducer;
