import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthSpotify from './auth/AuthSpotify.js';

export default class App extends React.Component {
  

  render() {

    return(
<div>
<AuthSpotify />
</div>
      )
  }
}
