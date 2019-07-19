import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';

const firebase = require('firebase');
require('firebase/firestore'); // Required for side-effects?????

firebase.initializeApp({
  apiKey: 'AIzaSyAWSewCMRQDgn421JojNCdv0LZIHJO4cz8',
  authDomain: 'blaze-chatty.firebaseapp.com',
  databaseURL: 'https://blaze-chatty.firebaseio.com',
  projectId: 'blaze-chatty',
  storageBucket: 'blaze-chatty.appspot.com',
  messagingSenderId: '462510060404',
  appId: '1:462510060404:web:05484d148abf5bd6'
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent} />
      <Route path="/signup" component={SignupComponent} />
      <Route path="/dashboard" component={DashboardComponent} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
