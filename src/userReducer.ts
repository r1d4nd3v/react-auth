import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  email: string | null;
  quote: IQuote;
}

export interface IQuote {
  author: string | null;
  quote: string | null;
}

const initialState: IInitialState = {
  email: null,
  quote: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onSaveUser: (state, action) => {
      state.email = action?.payload?.email;
    },
    onSaveQuote: (state, action) => {
      const { author, quote } = action?.payload;
      state.quote = { author, quote };
    },
    onLogout: (state) => {
      state.email = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSaveUser, onLogout, onSaveQuote } = userSlice.actions;

export default userSlice.reducer;
