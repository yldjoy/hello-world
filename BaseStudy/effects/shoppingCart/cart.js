window.onload = function(){
	if(!document.getElementsByClassName){
		document.getElementsByClassName = function(cls){
			var eles = document.getElementsByTagName('*');
			var result = [];
			for(var i = 0, len = eles.length; i < len; i++){
				if (eles[i].className.split(' ').indexOf(cls) != -1){
					result.push(eles[i]);
				}
			}
		}
	}
	checks = document.getElementsByClassName("check");//checkbox
	checkAlls = document.getElementsByClassName("check-all");//全选
	items = document.getElementsByClassName("item");//商品
	totalPrice = document.getElementById("total-price");//总价
	totalNum = document.getElementById("total-num");//总数量
	selectItem = document.getElementById("selected-item");
	selectItemUl = selectItem.getElementsByTagName('ul')[0];
	selectToggle = document.getElementById('selected-toggle');
	bind();
	getCartTotal();
}

function bind(){
	//全选
	for(var i =0, len = checkAlls.length; i < len; i++){
		checkAlls[i].onclick = function(e){
			var el = e.srcElement || e.target;
			for(var i = 0, len = items.length; i < len; i++){
				getElesByClassName(items[i], 'check')[0].checked = el.checked;
			}
			for(var i = 0, len = checkAlls.length; i < len; i++){
				checkAlls[i].checked = el.checked;
			}
			getCartTotal();
		}
	}
	//单行商品点击, 事件委托
	for(var i = 0, len = items.length; i < len; i++){
		items[i].onclick = function(e){
			var curTag = e.currentTarget;//事件监听对象
			var tag = e.target;//真正触发事件的对象

			if(objHasClass(tag, 'increase')){
				var num = getElesByClassName(curTag, 'num-input')[0];
				var curNum = parseInt(num.value);
				var newNum = curNum + 1;
				getItemTotal(curTag, newNum);
			} else if(objHasClass(tag, 'decrease')) {
				var num = getElesByClassName(curTag, 'num-input')[0];
				var curNum = parseInt(num.value);
				var newNum = (curNum - 1) >= 1? (curNum -1) : 1;
				getItemTotal(curTag, newNum);
			} else if(objHasClass(tag, 'delete')) {
				curTag.parentNode.removeChild(curTag);
				items = document.getElementsByClassName("item");
			}
			getCartTotal();
		}
	}

	//选中删除
	document.getElementById('footer-del').onclick = deleteChose;

	//已选商品显示/隐藏
	selectToggle.onclick = toggleSelectDiv;

	//取消选择
	selectItem.onclick = function(e){cancelChose(e);};
}

function getCartTotal(){
	var totalNumValue = 0;
	var totalPriceValue = 0;
	for(var i = 0, len = items.length; i < len; i++){
		if(getElesByClassName(items[i], 'check')[0].checked){
			var num = parseInt(getElesByClassName(items[i], 'num-input')[0].value);
			var subtotal = parseFloat(getElesByClassName(items[i], 'subtotal')[0].innerHTML);
			totalNumValue += num;
			totalPriceValue += subtotal;
		}
	}
	totalNum.innerHTML = totalNumValue;
	totalPrice.innerHTML = totalPriceValue.toFixed(2);
	addChoseItems();
	updateCheckAll();
}
function getItemTotal(obj, newNum){
	var num = getElesByClassName(obj, 'num-input')[0];
	var price = getElesByClassName(obj, 'unit-price')[0];
	var subtotal = getElesByClassName(obj, 'subtotal')[0];
	var unitPrice = parseFloat(price.innerHTML);
	var newSubT = (newNum*unitPrice).toFixed(2);
	num.value = newNum;
	subtotal.innerHTML = newSubT;
}
function deleteChose(){
	for(var i = 0, len = items.length; i < len; i++){
		if(getElesByClassName(items[i], 'check')[0].checked){
			items[i].parentNode.removeChild(items[i]);
			i--;
			len--;
		}
	}
	getCartTotal();
}
function addChoseItems(){
	var html = '';
	var hasItem = false;
	for(var i = 0, len = items.length; i < len; i++){
		if(getElesByClassName(items[i], 'check')[0].checked){
			html +='<li class="fl"><input type="text" style="display:none" value="'+
			items[i].getElementsByTagName('input')[0].value +'"> <img class="selected-img" src="' + 
			items[i].getElementsByTagName('img')[0].src + '" alt="' +
			items[i].getElementsByTagName('img')[0].alt + '"/>' +
			'<div class="cancel">取消选择</div></li>';
			hasItem = true;
		}
	}
	selectItemUl.innerHTML = html;
	if(!hasItem){
		selectItemUl.parentNode.className = 'hide';
		selectToggle.innerHTML = '︽';
	}
}
function toggleSelectDiv(){
	if(selectItem.className == 'hide'){
		var selected = false;
		for(var i = 0, len = items.length; i < len; i++){
			if(getElesByClassName(items[i], 'check')[0].checked){
				selected = true;
				break;
			}
		}
		if(selected){
			selectToggle.innerHTML = '︾';
			selectItem.className = 'show';
		}
	} else {
		selectToggle.innerHTML = '︽';
		selectItem.className = 'hide';
	}
}

function cancelChose(e){
	var curTag = e.currentTarget;//事件监听对象
	var tag = e.target;//真正触发事件的对象
	if(tag.className == 'cancel'){
		var cancelLi = tag.parentNode;
		var cancelId = cancelLi.getElementsByTagName('input')[0].value;
		cancelLi.parentNode.removeChild(cancelLi);
		for(var i = 0, len = items.length; i < len; i++){
			var inputArr = items[i].getElementsByTagName('input');
			if(inputArr[0].value == cancelId){
				inputArr[1].click();
				break;
			}
		}
	}
}
function updateCheckAll(){
	var checkAll = true;
	for(var i = 0, len = items.length; i < len; i++){
		checkAll = checkAll && getElesByClassName(items[i], 'check')[0].checked
	}
	for(var j = 0, len = checkAlls.length; j < len; j++){
		checkAlls[j].checked = checkAll;
	}
}
function getElesByClassName(obj, cls){
	var result = [];
	var eles = obj.getElementsByTagName('*');
	for(var i = 0, len = eles.length; i < len; i++){
		if(eles[i].className.split(' ').indexOf(cls) != -1){
			result.push(eles[i]);
		}
	}
	return result;
}

function objHasClass(obj, cls){
	if(obj.className.split(' ').indexOf(cls) != -1){
		return true;
	} else {
		return false;
	}
}