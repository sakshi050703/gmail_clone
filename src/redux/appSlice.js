import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    open: false,
    emails: [],
    selectedMail: null,
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setEmails: (state, action) => {
      state.emails = action.payload;
    },
    setSelectedMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  }
});
export const { setOpen, setEmails, setSelectedMail } = appSlice.actions;
export default appSlice.reducer;