import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import predictApi from '../services/predictAPI/predict';

export const store = configureStore({
    reducer: {
        [predictApi.reducerPath]: predictApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(predictApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
