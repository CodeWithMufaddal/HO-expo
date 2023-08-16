import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    isAuthenticated: true,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: state => {
            state.isAuthenticated = true;
        },
        signOut: state => {
            state.isAuthenticated = false;
        },
    },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;

