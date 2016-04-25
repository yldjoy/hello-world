;(function($){
	var Carousel = function(poster){
		this.pos = poster;
		this.itemList = [];//图片信息
		this.itemPos = [];//图片位置信息，同一顺位值固定的
		this.topIndex = 2;//第几张处于top
		this.setting = {
			'width': 1000,//整体宽度
			'height': 270,//整体高度
			'topWidth': 640,//最上层宽度
			'topHeight': 270,//最上层高度
			'scale': 0.9,//缩放
			'autoPlay': true,//自动旋转
			'delay': 1000,//自动旋转时间间隔
			'speed': 500,//动画耗时
			'verticalAlign': 'middle'//垂直对齐方式
		};
		$.extend(this.setting, this.getSetting() || {});
		this.renderPos();


	}

	Carousel.prototype = {
		renderPos: function(){
			this.getPos();
			for(var i = 0, len = this.itemList.length; i < len; i++){
				var posIndex = (i - this.topIndex  >= 0 )? (i - this.topIndex) : (i - this.topIndex + len);
				$(this.itemList[i]).css({
					'width': this.itemPos[posIndex].width,
					'height': this.itemPos[posIndex].height,
					'position': 'absolute',
					'top': this.itemPos[posIndex].top + 'px',
					'left': this.itemPos[posIndex].left + 'px',
					'z-index': this.itemPos[posIndex].zIndex,
	
				});
			}
		},
		getPos: function(){
			this.itemList = this.pos.find('.poster-item');
			var len = this.itemList.length;
			if(len % 2 == 0) {itemList.pop();len -= 1;}
			var half = Math.floor(len/2);
			for(var i = 0; i < len; i++){
				var posObj = {};
				var unitWidth = (this.setting.width - this.setting.topWidth)/(2*half);
				if(i <= half){
					scaleValue = Math.pow(this.setting.scale, i);
					posObj.left = (this.setting.width -unitWidth*(half - i) - this.setting.topWidth*scaleValue).toFixed(2);
					posObj.zIndex = 10+half-i;
				} else if(i > half){
					scaleValue = Math.pow(this.setting.scale, len - i);
					posObj.left = (unitWidth*(i - half - 1)).toFixed(2);
					posObj.zIndex = 10+i-1-half;
				}
				posObj.width = (this.setting.topWidth*scaleValue).toFixed(2);
				posObj.height = (this.setting.topHeight*scaleValue).toFixed(2);
				if(this.setting.verticalAlign == 'top'){
					posObj.top = 0;
				} else if(this.setting.verticalAlign == 'bottom'){
					posObj.bottom = 0;
				} else {
					posObj.top = ((this.setting.height - posObj.height)/2).toFixed(2);
				}
				this.itemPos.push(posObj);
			}
			console.log(this.itemPos);

		},
		getSetting: function(){
			return JSON.parse(this.pos.attr('data-pos-setting'));
		}
	};

	Carousel.init = function(poster){
		new Carousel(poster);
	};
	window['Carousel'] = Carousel;
})(jQuery);

