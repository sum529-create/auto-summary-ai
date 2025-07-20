import { configureStore } from "@reduxjs/toolkit";
import reducer from "./notesSlice";

export const store = configureStore({
  reducer: {
    notes: reducer
  }
})