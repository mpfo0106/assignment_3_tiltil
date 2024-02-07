import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    nickname: "강준호",
  },

  reducers: {
    updateNickname(state, action) {
      state.nickname = action.payload;
    },
  },
});

export const { updateNickname } = userSlice.actions;
export default userSlice.reducer;
