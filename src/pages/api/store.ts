import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { authApi } from '../../service/auth'

export const store = configureStore({
    reducer: {
        authApi: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        // serializableCheck: {
        //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // },
    }).concat(authApi.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;