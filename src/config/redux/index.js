import connectionSlice from "./connection/reducer";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = {
    connection: connectionSlice,
}
const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDe1faultMiddleware) => getDe1faultMiddleware({serializableCheck: false}),
})
export default store;
