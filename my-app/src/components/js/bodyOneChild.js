import React,{ Component } from 'react'
//var footerCss  =  require("../../css/footer.css")
export default class CbodyoneChild extends Component{

  render(){
    const styleComponentHeader = {
			header: {
				backgroundColor: "#333333",
				color: "#FFFFFF",
				//"padding-top": "15px",
				paddingBottom: "15px"
			},
			//还可以定义其他的样式
		};
    return(
      <div>
        <p style={styleComponentHeader.header}>子页面一样式展示</p>
        <p>子页面输入：<input type="text" onChange={this.props.handleChildValueChange}/></p>
        <p id="smallFontSizeFooter">{this.props.userid} {this.props.username} {this.props.id}</p>
    </div>
    )
  }
}
