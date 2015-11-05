(function(win){
	var Utils = {

			//正则验证
			validator:{
					mobile:function(){

					}
			},

			//发送请求
			sendAjax:function(obj){
				$.ajax({
					  type: 'POST',
					  url: '/projects',
					  data: { name: 'Zepto.js' },
					  dataType: 'json',
					  timeout: 300,
					  context: $('body'),
					  success: function(data){
					    this.append(data.project.html)
					  },
					  error: function(xhr, type){
					    alert('Ajax error!')
					  }
				})
			}

	}
	win.Utils = Utils;
})(window)