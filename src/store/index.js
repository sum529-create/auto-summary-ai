import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key:'memo',
  version:1,
  storage
}

const persistedReducer = persistReducer(persistConfig, notesReducer)

export const store = configureStore({
  reducer: {
    notes: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // redux-persist에서 발생하는 비직렬화 경고 무시
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})