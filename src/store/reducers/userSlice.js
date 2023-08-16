import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "muffy",
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Set user data from action.payload
      return action.payload;
    }, updateUser: (state, action) => {
      return { ...state, name: action.payload }
    },
  }
});
export const { updateUser, setUser } = userSlice.actions;
export default userSlice.reducer;