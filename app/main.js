import './style/normalize.css'; 
import './style/global.css'; 

import React from 'react';
import ReactDOM from 'react-dom';







// var Config_data = require('./config_data/config_data.js');

var Head_compon = require('./compon/head_compon/head_compon.js'); 
var Menu_compon = require('./compon/menu_compon/menu_compon.js'); 



var Home, isLogin;
if(localStorage.isLogin){
  	Home = require('./pages/create/create.js'); 
  	isLogin = true;
}else{
  	Home = require('./pages/login/login.js'); 
  	isLogin = false;
}

var Wrap = React.createClass({
  getInitialState: function() {
        return {
                    head_config:{
                        name:"借贷管理",
                        butText:'退出',
                        isLogin:isLogin
                    },
                    menu_config:[
                        {
                          text:'建标',
                          page:'create'
                        },{
                          text:'审标',
                          page:'examine'
                        },{
                          text:'发标',
                          page:'release'
                        }
                    ]
                };
    },
  render: function() {
    return (
      <div className="g_page g_box g_boxV">
       		<Head_compon data={this.state.head_config} />
       		<Menu_compon isShow={isLogin} data={this.state.menu_config} />
       		<div className="g_flex1" id="mainCon">
       			  <Home />
       		</div>
      </div>
    );
  }
});

ReactDOM.render(
  <Wrap />,
  document.getElementById('mainBody')
);





