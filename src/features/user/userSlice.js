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
    initialState,
    reducers: {
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

export default userSlice.reducer;
export const { setUserInfo, setAccessToken, logOutUser } = userSlice.actions;