import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.scss';
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from './App';
import reducer from './store/reducers/todo';

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

