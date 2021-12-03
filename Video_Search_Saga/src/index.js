import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from './store/reducer'
import createSagaMiddleware from 'redux-saga';
import watcher from './store/sagaWatcher';

const saga = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(saga))
saga.run(watcher)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


