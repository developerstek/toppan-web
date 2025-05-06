import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeState } from "../../utilities/interfaces";

const initialState: ThemeState = {
  primaryColor: "#0047BB",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setPrimaryColor(state, action: PayloadAction<string>) {
      state.primaryColor = action.payload;
    },
  },
});

export const { setPrimaryColor } = themeSlice.actions;

export default themeSlice.reducer;
