import React from 'react';
require('./row_compon.css');

var Row = React.createClass({
  render: function() {
    var row = [],
        rowData = this.props.data,
        len     = rowData.length;
    if(len == 1){
        var oneData = rowData[0];
        if(!oneData.noEditor){
            var name = "g_pl10 g_flex1",id=(oneData.id ? oneData.id : '');
            row.push(<input id={id} key='0' onBlur={oneData.callback ? oneData.callback : ''} className={name} placeholder={oneData.text} />);
        }else{
            var name = "g_pl10 g_flex1 g_borderNo",id=(oneData.id ? oneData.id : '');
            row.push(<input id={id} key='0' className={name} value={oneData.text} disabled />);
        }
    }else{
        rowData.forEach(function(item,key) {
                switch(key){
                    case 0:
                        if(item.text){
                            var name = "g_Gray1 g_tar g_pr10";
                            row.push(<div key={key} className={name}>{item.text}</div>);
                        }
                        break;
                    case 1:
                        if(!item.noEditor){
                            var name = "g_pl10 g_flex1",id=(item.id ? item.id : '');
                            row.push(<input id={id} key={key} onBlur={item.callback ? item.callback : ''} className={name} placeholder={item.text} />);
                        }else{
                            var name = "g_pl10 g_flex1 g_borderNo",id=(item.id ? item.id : '');
                            row.push(<input id={id} key={key} className={name} value={item.text} disabled />);
                        }
                        break;
                    case 2:
                        var name = "g_ml10",id=(item.id ? item.id : '');
                        row.push(<div id={id} key={key} className={name}>{item.text}</div>);
                        break;
                }
        });
    }
    var name = this.props.class ? "row_compon g_box g_boxH g_boxC "+this.props.class : "row_compon g_box g_boxH g_boxC"
    return (
      <div className={name}>
           {row}
      </div>
    );

  }
});

module.exports  = Row;