(function($){
	var $imgList = $('#img-list li'),
		$btnL = $('.left-btn'),
		$btnR = $('.right-btn'),
		$btnPlay = $('.play'),
		$manBox = $('#man-box');
    var settings = {};
	var defaults = {
		autoPlay: true,
		autoInterval: 3000, //毫秒
		deg: 5
	};
	var imgsArr = [["1.jpg","2.jpg","3.jpg","4.jpg"], ["5.jpg","6.jpg","7.jpg","8.jpg"], ["9.jpg","10.jpg","11.jpg","12.jpg"]];
	var curIndex = 0;
	var imgsArrLen = imgsArr.length;
	var imgsObjArr = function(){
		return imgsArr.map(function(item1){
			return item1.map(function(item2){
				var img = new Image();
				img.src = item2;
				return img;
			});
		});
	}();
	var autoInterval;

	$btnL.on('click', function(){
		$manBox.filter(':animated').stop();
		switchImg(-1);
		// play();
	});
	$btnR.on('click', function(){
		$manBox.filter(':animated').stop();
		switchImg(1);
		// play();
	});
	function Transfrom(userSet){
		settings = $.extend(settings, defaults, userSet);
		// if(settings.autoPlay){
		// 	play();
		// }
	};
    function switchImg(n){
    	curIndex = curIndex + n;
    	if(curIndex >= imgsArrLen){
    		curIndex-=imgsArrLen;
    	} else if(curIndex < 0){
    		curIndex += imgsArrLen;
    	}
    	$imgList.each(function(index, item){
    		var $newImg = $(imgsObjArr[curIndex][index]);
    		n > 0 ? $newImg.css("left", "-218px") : $newImg.css("right", "-218px");
    		var $oldImg = $(item).children('img');
    		$oldImg.after($newImg);
    		var ani = n > 0 ? {"left": "15px"} : {"right": "15px"};
    		var delayTime = n > 0 ? (200*index) : 200*(imgsArrLen-index);
    		$newImg.animate(ani, 500+delayTime, function(){$newImg.siblings().remove();}); 		
    	});

    }
    function play(){
    	autoInterval = setInterval(function(){switchImg(1)}, 5000);
    }
    function stop(){
    	clearInterval(autoInterval);
    }
	window.Transfrom = Transfrom;
})(jQuery)