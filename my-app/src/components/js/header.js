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
        {/* <h1>这里是脑壳</h1>*/}
        {/* <p>{userName === ''? '用户还没有登录': userName}</p>*/}
        {/* <p><input type="button" value={userName} disabled={flag} /></p>*/}
        {/*  {html}*/}
        {/* 很棒棒的注释哟 */}{/*需要进行 Unicode 的转码*/}
        {/* <p dangerouslySetInnerHTML ={{__html : html2}}></p> */}
          <Router>
              <ul>
                <li><Link to={`/`}>首页</Link></li>
      					<li><Link to={`/details`}>嵌套的详情页面</Link></li>
      					<li><Link to={`/list`}>列表页面</Link></li>
      				</ul>

              {/*<hr/>*/}

              {/*
                <Route exact path="/" component={Home}/>
                <Route path="/details" component={details}/>
                <Route path="/list" component={list}/>
                */}
          </Router>
      </header>
    );
  }
}

export default ComponentHeader;
