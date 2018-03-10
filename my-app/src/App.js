import React,{Component} from 'react'
import bodyOne from './components/js/bodyIndex1'
// import {Router,Route,hashHistory} from 'react-router'
import ComponentHeader from './components/js/header'
import footer from './components/js/footer'
import ComponentDetails from './components/js/details'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export default class Root extends Component{
  render(){
    return(
      <Router>
        <div>
          <ComponentHeader/>
          <Route component={bodyOne} exact path="/">
          </Route>
          <Route component={ComponentDetails} path="/details"></Route>
          <Route component={footer} path="/list"></Route>
        </div>
      </Router>
    )
  }

}
