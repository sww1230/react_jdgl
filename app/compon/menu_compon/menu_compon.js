import React from 'react';
import ReactDOM from 'react-dom';
// var $ = require('../js/zepto.js');

var Cloumn = React.createClass({
    changeRender:function(Page){
        document.getElementById('mainCon').innerHTML = '';
        ReactDOM.render(
            <Page />,
            document.getElementById('mainCon')
        );
    },
    changePage:function(){
        // React.findDOMNode(this.refs.myTextInput).focus();
        // event.currentTarget.getAttribute('name');
        $('#'+this.props.data.page).addClass('g_active').siblings().removeClass('g_active');
        switch(this.props.data.page){
            case 'create':
              this.changeRender(require('../../pages/create/create.js'));
              break;
            case 'examine':
              this.changeRender(require('../../pages/examine/examine.js'));
              break;
            case 'release':
              this.changeRender(require('../../pages/release/release.js'));
              break;
        }
    },
    render : function(){
        return (
            <div id={this.props.data.page} className={this.props.data.page == 'create' ? "g_active g_flex1" : "g_flex1"} onTouchStart={this.changePage}>{this.props.data.text}</div>
        );
    }
});

var Menu = React.createClass({

  render: function() {

      var rows = [];
      this.props.data.forEach(function(item,key) {
          rows.push(<Cloumn key={key} data={item} />);
      });
      return (
        <div className={this.props.isShow ? "menu_compon g_box g_lh45 g_bgGray3 g_Gray2 g_f1 g_tac" : "g_hide"} >
         		{rows}
        </div>
      );
  }
});

module.exports  = Menu;