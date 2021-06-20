import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { RestaurantReducer } from "./data/reducer";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";

import rootRestaurant from "./data/resturant";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RestaurantReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootRestaurant);


const AppWithRouter = () => (
  <BrowserRouter>
    <Provider store = {store}>
      <App />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
