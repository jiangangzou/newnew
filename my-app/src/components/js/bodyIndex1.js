import React, { Component } from 'react';
import CbodyoneChild from './bodyOneChild'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import ReactMixin from 'react-mixin';
import MixinLog from './mixins';
//设置默认值
const defaultProps = {
	username: '这是一个默认的用户名'
};

class Cbodyone extends Component {
  constructor() {
    super(); //调用基类的所有的初始化方法
    this.state = {
      username: "Parry",
      age: 20
    }//初始化赋值
  }


  componentWillMount() {
      console.log("componentWillMount");
  }

  componentDidMount() {
      console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
      console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate() {
      console.log("shouldComponentUpdate");
      return true;        // 记得要返回true
  }

  componentWillUpdate() {
      console.log("componentWillUpdate");
  }

  componentDidUpdate() {
      console.log("componentDidUpdate");
  }

  componentWillUnmount() {
      console.log("componentWillUnmount");
  }

  changeUserInfo(age) {
    this.setState({age: age});
    //第一种方式
		// var mySubmitBotton  = document.getElementById('submitButton');
		// console.log(mySubmitBotton);
		// ReactDOM.findDOMNode(mySubmitBotton).style.color = 'red';

		//第二种方式
		console.log(this.refs.submitButton);
		this.refs.submitButton.style.color = 'red';
    MixinLog.log();
    MixinLog.componentDidMount();
  }

  handleChildValueChange(event) {
		//防止冒泡
    this.setState({age: event.target.value});
  }

  render() {

    // var agen = 30;
    // setTimeout(() => {
		// 	//更改 state 的时候
    //   agen+=1;
		// 	this.setState({username: "IMOOC", age: agen});
		// }, 4000);

    return(

      <div>
        <h2>这里是身体1</h2>
        <p>{this.state.username} {this.state.age}</p>
        <p>接收到的父页面的属性：userid: {this.props.userid} username: {this.props.username}</p>
        <input id="submitButton" ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this,99)}/>
				<CbodyoneChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
      </div>

    );
  }
}

Cbodyone.propTypes = {//要求父级传的值必须是number类型
	username: PropTypes.string,
  userid: PropTypes.number
};
// 如果父级未传值，那么就设置为默认值
Cbodyone.defaultProps = defaultProps;
ReactMixin(Cbodyone.prototype, MixinLog)
export default Cbodyone;
