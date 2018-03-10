import React, { Component } from 'react';
import Home from './bodyIndex1'
import details from './bodyOneChild'
//import {Router,Route,hashHistory} from 'react-router'
import list from './details'

//import {Link} from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class ComponentHeader extends Component {

  constructor(){
    super();
    this.state={
      miniHeader: false
    }
  };
  switchHeader(){
    this.setState({
      miniHeader: !this.state.miniHeader
    })
  };
  render() {
    const styleComponentHeader = {
      header: {
        backgroundColor: "#333333",
        color: "#FFFFFF",
        //"padding-top": (this.state.miniHeader) ? "3px" : "15px",
        //paddingBottom: (this.state.miniHeader) ? "3px" : "15px"
      },
      //还可以定义其他的样式
    };
    var userName = 'anniu';
    var flag = true;
    var html = <h2>很可以的</h2>;
    var html2 = "IMO \u0020 OC&nbsp;LESSON abcd";

    return (
      <header className="ComponentHeader"
        onClick={this.switchHeader.bind(this)}
        style={styleComponentHeader.header}>
        <ul>
          <li><Link to='/'>首页</Link></li>
          <li><Link to='/details'>嵌套的详情页面</Link></li>
          <li><Link to='/list'>列表页面</Link></li>
        </ul>
      </header>
    );
  }
}

export default ComponentHeader;
