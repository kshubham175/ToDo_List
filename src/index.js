import React from 'react';
import ReactDOM from 'react-dom';
import {PersistGate} from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import configureStore from './store/index';
import {Provider} from 'react-redux';
const {store, persistor} = configureStore();

window.store=store;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  ,
  document.getElementById('root')
);


