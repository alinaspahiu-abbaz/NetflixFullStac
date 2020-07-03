import React from 'react';
import './App.css';
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom"
import HomePage from "./components/HomePage"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends React.Component {

  state = {
    books: []
  }
  
  render() {
    return (

      <Router>
        
        <Navigation />
        <HomePage />
        <Footer />
        
    </Router>
    
    )
  }
}
export default App;
