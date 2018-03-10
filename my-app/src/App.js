import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentHeader from './components/js/header'
import Cbodyone from './components/js/bodyIndex1'
import { Button,Input } from 'antd';

class App extends Component {
  componentWillMount(){
		//定义你的逻辑即可
		console.log("App - componentWillMount");
	}

	componentDidMount(){
		console.log("App - componentDidMount");
	}

  render() {
    let userid = 123456;
    let username = "nick";
    return (
      <div className="App">

        <ComponentHeader/>

        <Cbodyone userid={userid} username={username}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          VS VUE
        </p>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
        </div>
        <div className="example-input">
          <Input size="large" placeholder="large size" />
          <Input placeholder="default size" />
          <Input size="small" placeholder="small size" />
        </div>
        <div>
          {this.props.children}
				</div>

      </div>
    );
  }
}

export default App;
