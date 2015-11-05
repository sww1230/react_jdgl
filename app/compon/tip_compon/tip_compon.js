import React from 'react';
import ReactDOM from 'react-dom';
require('./tip_compon.css');
var But = require('../but_compon/but_compon.js'); 

var Tip = React.createClass({
  render: function() {
  	var obj     = this.props.data,
        content = obj.id+'_content',
        iconCon   = [],
        buttonCon = [];
    if(obj.icon){
        var icon    = obj.id+'_'+obj.icon+'_icon';
        iconCon.push(<div key="0" className={icon} ></div>);
    }
    if(obj.button && obj.button.length > 0){
        var but = obj.id+'_but';
        buttonCon.push(<div key="0" className="g_mt5">
                        <But class={but} data={obj.button} />
                     </div>);
    }
    return (
      <div className="tip_compon g_posF g_box g_boxV g_mr20 g_ml20">
          <div className="g_flex1"></div>
       		<div className={obj.id} >
              {iconCon}
              <div className={content}></div>
          </div>
          {buttonCon}
          <div className="g_flex1"></div>
      </div>
    );

  }
});

Tip.init = function(obj){
    Tip.tipDom = obj.id = obj.id ? obj.id : 'tipBox';
    $('body').append("<div id='"+obj.id+"' class='g_posF g_bgOpacity'></div>");
    ReactDOM.render(
        <Tip data={obj}/>,
        document.getElementById(obj.id)
    );
    $('.'+obj.id+'_content').append(obj.content);
    if(!obj.button || !obj.button.length){
        $("#"+obj.id).one('touchstart',function(){
            Tip.del();
        })
    }
}

Tip.del = function(){
    $('#'+Tip.tipDom).remove();
}

module.exports  = Tip;