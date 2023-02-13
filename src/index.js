import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// import './index.css';
import { createStore } from "redux";
import reducer from "./reducers/merch-list-reducer";;
import { Provider } from 'react-redux';


const store = createStore(reducer);
store.subscribe(() =>
  console.log(store.getState())
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);