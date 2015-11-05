import React from 'react';
require('./but_compon.css');

var But = React.createClass({
  render: function() {
    var row = [];
    this.props.data.forEach(function(item,key){
        row.push(<div key={key} className="g_flex1" onTouchStart={item.callback ? item.callback : ''}>{item.text}</div>);
    });
    var name = this.props.class ? "but_compon g_box g_boxH g_boxC "+this.props.class : "but_compon g_box g_boxH g_boxC"
    return (
      <div className={name}>
           {row}
      </div>
    );

  }
});

module.exports  = But;