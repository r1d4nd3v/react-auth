import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  email: string | null;
}
const initialState: IInitialState = {
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onSaveUser: (state, action) => {
      state.email = action?.payload?.email;
    },
    onLogout: (state) => {
      state.email = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSaveUser, onLogout } = userSlice.actions;

export default userSlice.reducer;
