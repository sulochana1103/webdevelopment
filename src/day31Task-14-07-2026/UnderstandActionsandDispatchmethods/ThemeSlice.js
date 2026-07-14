import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",

  initialState: {
    theme: "Light",
  },

  reducers: {
    changeTheme: (state) => {
      state.theme = "Dark";
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;