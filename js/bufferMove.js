
function bufferMove(obj, target, fn, ratio=8){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var bBtn = true;
		for(var sAttr in target){
			//获取当前值
			if(sAttr === 'opacity'){
				var iCur = getStyle(obj, 'opacity') * 100;
			}else{
				var iCur = parseInt(getStyle(obj, sAttr));
			}
			//计算速度
			var iSpeed = (target[sAttr] - iCur) / ratio;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			//计算下一次的值
			var iNext = iSpeed + iCur;
			//计算结果
			if(sAttr === 'opacity'){
				obj.style.opacity = iNext / 100;
				obj.style.filter = 'alpha(opacity:'+ iNext +')';
			}else{
				obj.style[sAttr] = iNext + 'px';
			}
			//清除定时器
			if(iNext !== target[sAttr]){
				bBtn = false;
			}

		}


		if(bBtn === true){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},50)
}
function getStyle(obj, sAttr){
	if(obj.currentStyle){
		return obj.currentSttyle[sAttr];
	}else{
		return getComputedStyle(obj, false)[sAttr];
	}
}
