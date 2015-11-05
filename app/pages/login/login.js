import React from 'react';

require('./login.css');
var Row = require('../../compon/row_compon/row_compon.js'); 
var But = require('../../compon/but_compon/but_compon.js'); 
var Tip = require('../../compon/tip_compon/tip_compon.js'); 


var Login = React.createClass({
  changeFun:function(){
      var mobileVal = $('#mobile').val(),
          passwrod  = $('#passwrod').val();

      var obj = {
          button:[{
              text:'知道了',
              callback:function(){
                  Tip.del();
              }
          },{
              text:'知道了',
              callback:function(){
                  Tip.del();
              }
          }],
          content:'<div> 用户：'+mobileVal+'</div><div> 密码：'+passwrod+'</div>',
          icon:'succeed', //succeed failed ''
          id:'tipBox'
      }
      Tip.init(obj);
  },
  getInitialState: function() {  
    var that = this;
    return {
        form:[
                [{
                      text:'手机号码'
                },{
                      text:'请输入号码',
                      id:'mobile'
                },{
                  text:'ddddddd',
                  class:'ddd'
                }],
                [{
                        text:'输入密码'
                  },{
                        text:'请输入密码',
                        id:'passwrod',
                        callback:function(){
                          //that.changeFun();
                        }
                }]/*,
                [{
                        text:'图片验证'
                  },{
                        text:'请输入验证',
                        id:'verify'
                  },{
                        id:'img_verify'
                }]*/
              ],
          but:[{
                text:"登录",
                callback:function(){
                    that.changeFun();
                }
              },{
                text:"取消",
                callback:function(){
                    that.removeFun();
                }
              }]
    }
  },
  render: function() {
  	var Rows     = [],
        formData = this.state.form;
        
  	formData.forEach(function(item,key){
  		  Rows.push(<Row class="login_h50" key={key}  data={item} />);
  	});

    return (
      	<div className="login_page">
       			{Rows}
       			<But class="login_but" data={this.state.but} />
      	</div>
    );

  }
});

module.exports  = Login;