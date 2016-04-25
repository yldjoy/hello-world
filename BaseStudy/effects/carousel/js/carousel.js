;(function($){
	var Carousel = function(poster){
		this.pos = poster;
		this.itemList = [];//图片信息
		this.itemPos = [];//图片位置信息，同一顺位值固定的
		this.itemLen = 0;
		this.topIndex = 0;//第几张处于top
		this.autoPlayPointer = null;
		this.setting = {
			'width': 1000,//整体宽度
			'height': 270,//整体高度
			'topWidth': 640,//最上层宽度
			'topHeight': 270,//最上层高度
			'scale': 0.9,//缩放
			'autoPlay': true,//自动旋转
			'delay': 5000,//自动旋转时间间隔
			'speed': 500,//动画耗时
			'verticalAlign': 'middle'//垂直对齐方式
		};
		$.extend(this.setting, this.getSetting() || {});
		this.init();
	};

	Carousel.prototype = {
		init: function(){
			//获取图片和位置pos
			this.getPos();
			//注册点击事件
			this.pos.delegate('.poster-next-btn', 'click', {pos: this}, function(e){
				var pos = e.data.pos;
				pos.next(pos);
			});
			this.pos.delegate('.poster-prev-btn', 'click', {pos: this}, function(e){
				var pos = e.data.pos;
				pos.prev(pos);
			});
			//绘制初始化页面
			this.renderPos();
			//是否制动播放
			if(this.setting.autoPlay){
				var self = this;
				this.autoPlay();
				this.pos.hover(function(){clearTimeout(self.autoPlayPointer);}, function(){self.autoPlay();});
			}
		},
		autoPlay: function(){
			var self = this;
			self.next(self);
			this.autoPlayPointer = setTimeout(function(){self.autoPlay()},  this.setting.delay);
		},
		renderPos: function(){
			for(var i = 0, len = this.itemList.length; i < len; i++){
				var posIndex = (i - this.topIndex  >= 0 )? (i - this.topIndex) : (i - this.topIndex + len);
				$(this.itemList[i]).stop().animate({
					'width': this.itemPos[posIndex].width,
					'height': this.itemPos[posIndex].height,
					'position': 'absolute',
					'top': this.itemPos[posIndex].top + 'px',
					'left': this.itemPos[posIndex].left + 'px',
					'z-index': this.itemPos[posIndex].zIndex,
	
				}, this.setting.speed);
			}
		},
		getPos: function(){
			this.itemList = this.pos.find('.poster-item');
			this.itemLen  = this.itemList.length;
			var half = Math.floor(this.itemLen/2);
			for(var i = 0; i < this.itemLen; i++){
				var posObj = {};
				var unitWidth = (this.setting.width - this.setting.topWidth)/(2*half);
				if(i <= half){
					scaleValue = Math.pow(this.setting.scale, i);
					posObj.left = (this.setting.width -unitWidth*(half - i) - this.setting.topWidth*scaleValue).toFixed(2);
					posObj.zIndex = 10+half-i;
				} else if(i > half){
					scaleValue = Math.pow(this.setting.scale, this.itemLen - i);
					posObj.left = (unitWidth*(i - half - 1)).toFixed(2);
					posObj.zIndex = 10+i-1-half;
				}
				posObj.width = (this.setting.topWidth*scaleValue).toFixed(2);
				posObj.height = (this.setting.topHeight*scaleValue).toFixed(2);
				if(this.setting.verticalAlign == 'top'){
					posObj.top = 0;
				} else if(this.setting.verticalAlign == 'bottom'){
					posObj.top = this.setting.height - posObj.height;
				} else {
					posObj.top = ((this.setting.height - posObj.height)/2).toFixed(2);
				}
				this.itemPos.push(posObj);
			}
		},
		getSetting: function(){
			return JSON.parse(this.pos.attr('data-pos-setting'));
		},
		next: function(pos){
			pos.topIndex += 1;
			if(pos.topIndex > pos.itemLen){
				pos.topIndex = 0;
			}
			pos.renderPos();
		},
		prev: function(pos){
			pos.topIndex -= 1;
			if(pos.topIndex < 0){
				pos.topIndex = pos.itemLen;
			}
			pos.renderPos();
		}
	};

	Carousel.init = function(poster){
		new Carousel(poster);
	};
	window['Carousel'] = Carousel;
})(jQuery);

