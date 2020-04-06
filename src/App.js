import React, { Component } from 'react'
import { BrowserRouter as Router, Route , swi} from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './components/home/Home'
import Statewise from './components/statewise/Statewise'
import Cases from './components/cases/Cases'
import './App.css'
import './Theme.js'
import "leaflet/dist/leaflet.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Navbar />
            <section id="contents">
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/statewise" component={Statewise} />
                <Route exact path="/cases" component={Cases} />
            </section>
        </div>
      </Router>
    )
  }
}

export default App
