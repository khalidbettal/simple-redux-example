import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './features/user';
import themeReducer from './features/theme';

// Create a Redux store with userReducer and themeReducer as reducers
const store = configureStore({
  reducer: {
    user: userReducer ,
    theme: themeReducer,
  },
});

// Create a root for rendering React components
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside a Provider component,
// which provides the Redux store to the App and its child components
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Measure the performance of the app and report the results
reportWebVitals();
