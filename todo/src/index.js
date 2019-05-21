import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import rootReducer from './reducers/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



const store = createStore(counter);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
