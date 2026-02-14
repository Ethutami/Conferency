import { configureStore } from '@reduxjs/toolkit';
import events from './eventsSlice';

export const store = configureStore({
    reducer: {
        events,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
