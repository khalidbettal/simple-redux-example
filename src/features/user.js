import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the user
const userInitialState = {
    value: { name: "", age: 0, email: "" }
};

/**
 * Create a Redux slice for managing user state
 * @param {string} name - The name of the slice
 * @param {object} initialState - The initial state of the slice
 * @param {object} reducers - The reducer functions for the slice
 */
export const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        /**
         * Updates the user state with the provided payload
         * @param {object} state - The current state of the slice
         * @param {object} action - The Redux action object
         */
        login: (state, action) => {
            state.value = action.payload;
        },
        /**
         * Resets the user state to the initial state
         * @param {object} state - The current state of the slice
         */
        logout: (state) => {
            state.value = userInitialState.value;
        },
    },
});

// Extract the login and logout actions from the slice
export const { login, logout } = userSlice.actions;

// Export the reducer function for the user slice
export default userSlice.reducer;