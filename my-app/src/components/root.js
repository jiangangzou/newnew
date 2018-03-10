import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import bodyOne from './js/bodyIndex1'
import bodyOneChild from './js/bodyOneChild'
// import {Router,Route,hashHistory} from 'react-router'
import footer from './js/footer'
import ComponentDetails from './js/details'
import {
  Router,
  Route
} from 'react-router-dom'

export default class Root extends Component{
  render(){
    return(
      <Router>
        <Route component={bodyOne} path="/">
          <Route component={ComponentDetails} path="details"></Route>
        </Route>
        <Route component={footer} path="list"></Route>

      </Router>
    )
  }

}
