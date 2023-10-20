import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the slice
const initialState = { value: "" };

/**
 * Redux slice for managing the theme state.
 */
export const themeSlice = createSlice({
  name: "theme",
  initialState,

  // Define the reducers for the slice
  reducers: {
    /**
     * Action to change the color value in the theme state.
     * @param {Object} state - The current state object.
     * @param {Object} action - The action object containing the payload.
     */
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Extract the action creators from the slice
export const { changeColor } = themeSlice.actions;

// Export the reducer function from the slice
export default themeSlice.reducer;