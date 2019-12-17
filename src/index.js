import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import Routes from './routes'
import promise from 'redux-promise'
import usersReducer from './reducers/usersReducer'

const reducers = combineReducers({
  users: usersReducer
})

const store = applyMiddleware(promise)(createStore)(reducers)
ReactDOM.render(
  <Provider store= {store}>
      <Routes/>
  </Provider>
, document.getElementById('root'));
