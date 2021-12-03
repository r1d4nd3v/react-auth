import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  email: string | null;
  image: string | null;
}
const initialState: IInitialState = {
  email: null,
  image: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onSaveUser: (state, action) => {
      state.email = action?.payload?.email;
    },
    onSaveImage: (state, action) => {
      state.image = action?.payload?.url;
    },
    onLogout: (state) => {
      state.email = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSaveUser, onLogout, onSaveImage } = userSlice.actions;

export default userSlice.reducer;
