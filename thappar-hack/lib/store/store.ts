import { configureStore } from "@reduxjs/toolkit";

const dummyReducer = (state = {}, action: any) => state;

export const makeStore = () => {
    return configureStore({
        reducer: {
            dummy: dummyReducer, // Temporary reducer to avoid errors
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
