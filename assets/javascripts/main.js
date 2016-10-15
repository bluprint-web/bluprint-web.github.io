window.onload = function() {
		
		var targetTop = $(".scale").offset().top - 200;
		var isOverScale = false;
		var $scaleContainers = [$('.mock-box__top'), $('.mock-box__left'), $('.mock-box__bottom'), $('.mock-box__right')];
		var $scaleLines = [$('.mock-box__top-line'), $('.mock-box__left-line'), $('.mock-box__bottom-line'), $('.mock-box__right-line')];
		var textAnimationDuration = 400;
		var $topVal = $('.mock-box__top-val');
		var $leftVal = $('.mock-box__left-val');
		var $bottomVal = $('.mock-box__bottom-val');
		var $rightVal = $('.mock-box__right-val');
		var topCount = 0;
		var leftCount = 0;
		var bottomCount = 0;
		var rightCount = 0;
		var topMax = 58.6;
		var leftMax = 123.8;
		var bottomMax = 640;
		var rightMax = 1136;
		var topStep = topMax/textAnimationDuration;
		var leftStep = leftMax/textAnimationDuration;
		var rightStep = rightMax/textAnimationDuration;
		var bottomStep = bottomMax/textAnimationDuration;
		
		textZeroPointZero($topVal);
		textZero($rightVal);
		textZeroPointZero($leftVal);
		textZero($bottomVal);
		
		$(window).scroll(function() {
			var top = $(this).scrollTop();
			
			//ポイントを過ぎたら
			if(top > targetTop && !isOverScale) {
				isOverScale = true;
				//背景を透過させる
				$('.scale__capture')
				.addClass('scale__capture--animate')
				.on('transitionend', function(e){
					//メモリを表示する
					jQuery.each($scaleContainers, function(e){
						this.addClass(this.attr("class") + "--animate");
					})
				});
				
				//メモリの表示が終わったらメモリをアニメーションする
				$scaleContainers[0].on('transitionend', function(e){
					jQuery.each($scaleLines, function(e){
						this.addClass(this.attr("class") + "--animate");
						topValCount();
						leftValCount();
						rightValCount();
						bottomValCount();
					})
					
				});
			}
		});
		
		function topValCount() {
			if (topCount < topMax) {
				topCount += topStep;
				var val = Math.round(topCount * 10);
				val /= 10;
				$topVal.text(val.toFixed(1));
				setTimeout(topValCount, 1/textAnimationDuration);
			} else {
				topCount = topMax;
				$topVal.text(topCount);
			}
		}
		
		function leftValCount() {
			if (leftCount < leftMax) {
				leftCount += leftStep;
				var val = Math.round(leftCount * 10);
				val /= 10;
				$leftVal.text(val.toFixed(1));
				setTimeout(leftValCount, 1/textAnimationDuration);
			} else {
				leftCount = leftMax;
				$leftVal.text(leftCount);
			}
		}
		
		function rightValCount() {
			if (rightCount < rightMax) {
				rightCount += rightStep;
				var val = Math.round(rightCount);
				$rightVal.text(val);
				setTimeout(rightValCount, 1/textAnimationDuration);
			} else {
				rightCount = rightMax;
				$rightVal.text(rightCount);
			}
		}
		
		function bottomValCount() {
			if (bottomCount < bottomMax) {
				bottomCount += bottomStep;
				var val = Math.round(bottomCount);
				$bottomVal.text(val);
				setTimeout(bottomValCount, 1/textAnimationDuration);
			} else {
				bottomCount = bottomMax;
				$bottomVal.text(bottomCount);
			}
		}
		
		function textZero($target) {
			$target.text("0")
		}
		function textZeroPointZero($target) {
			$target.text("0.0")
		}
}
