import React from 'react';

var Head = React.createClass({
  quit: function(){
      //引入alert组件
      alert('退出');
  },
  render: function() {
  	
  	var obj = this.props.data;
    return (
      <div className="head_compon g_box g_bgGray1 g_boxH g_boxC g_pl20 g_Gray1 g_lh45">
       		<div className="g_flex1 g_f2">
       			  {obj.name}
       		</div>
       		<div className={obj.isLogin ? 'g_bgGray2 backBut g_pl10 g_pr10' : 'g_hide'} onTouchStart={this.quit}>
       			  {obj.butText}
       		</div>
      </div>
    );

  }
});

module.exports  = Head;