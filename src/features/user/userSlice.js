import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: sessionStorage.getItem("accessToken")
        ? JSON.parse(sessionStorage.getItem("accessToken"))
        : "",
    userInfo: sessionStorage.getItem("userInfo")
        ? JSON.parse(sessionStorage.getItem("userInfo"))
        : {},
}

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout:(state)=>{
state.user = null;
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
            sessionStorage.setItem("userInfo", JSON.stringify(state.userInfo));
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload.accessToken;
            sessionStorage.setItem("accessToken", JSON.stringify(state.accessToken));
        },
        logOutUser: (state, action) => {
            state.accessToken = '';
            state.userInfo = {};

            sessionStorage.setItem("userInfo", JSON.stringify(state.userInfo));
            sessionStorage.setItem("accessToken", JSON.stringify(state.accessToken));
        },
    },
});


export const {login,logout, setUserInfo, setAccessToken, logOutUser } = userSlice.actions;
export const selectUser = (state) => state.user.user
export default userSlice.reducer;
