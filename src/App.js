import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

// import { connect } from 'react-redux'
// import {echo} from './actions/echo'
// import {serverMessage} from './reducers/echo'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App