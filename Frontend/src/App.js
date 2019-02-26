import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import logo from './logo.svg';
import Calc from './components/calculator/Calc';
import RoutePage from './RoutePage';



class App extends Component {
  render() {
    return (
      //Use Browser Router to route to different pages
      <BrowserRouter>
        <div>
          {/* App Component Has a Child Component called Main*/}
          <RoutePage/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
