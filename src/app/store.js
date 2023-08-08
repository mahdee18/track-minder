import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from "../features/api/apiSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
  },
  middleware: (getDefultMiddlewares) => getDefultMiddlewares().concat(apiSlice.middleware),
});
