import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'; // Make sure to provide the correct path
import './index.css'; // Include your Tailwind CSS
import App from './App';

// Create the Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

// Render the App component wrapped with the Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
