import React from 'react';

import './App.scss';
import Header from './Header.js'
import Body from './Body.js'

import { Provider } from 'react-redux'

import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
