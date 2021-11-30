import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: null,
  },
  reducers: {
    onSaveUser: (state, action) => {
      state.email = action?.payload?.email;
    },
		onLogout: (state) => {
			state.email = null
		}
  },
});

// Action creators are generated for each case reducer function
export const { onSaveUser, onLogout } = userSlice.actions;

export default userSlice.reducer;
