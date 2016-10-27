$(function(){
	/*$(".page2 span").eq(0).css("background","#B61B1F");
	var $li=$(".list li");
	for(var i=0;i<$li.length;i++){
		var $span=$("<span></span>")
		$(".page2").append($span);
	}*/
	$(".spot_paging li:first").addClass("active");
	if(!$(".e_c_lists").is(":animated")){
		$(".spot_paging li").mouseover(function(){
			var width_li=900;
			$(this).addClass("active").siblings().removeClass("active");
			var num=$(this).index()*width_li;
			$(".e_c_lists").animate({"left":"-"+num})
		})
	}
	/*var numLi=$(".e_c_lists li").length;
	//自动控制图片轮播
	var i=0;  //初始i=0
	var t=setInterval(move,1500);  //设置定时器，1.5秒切换下一站轮播图
	//向左切换函数
	function moveL(){
		i--;
		if(i==-1){
			i=numLi-1;  //如果这是第一张图片再按向左的按钮则切换到最后一张图
		}
		$(".spot_paging li").eq(i).addClass("active").siblings().removeClass("active");  //对应底部数字添加背景
		$(".e_c_lists li").eq(i).fadeIn(300).siblings().fadeOut(300);  //对应图片切换
	}
	//向右切换函数
	function move(){
		i++;
		if(i==numLi){
			i=0;  //如果这是最后一张图片再按向右的按钮则切换到第一张图
		}
		$(".spot_paging li").eq(i).addClass("active").siblings().removeClass("active");  //对应底部数字添加背景
		$(".e_c_lists li").eq(i).fadeIn(300).siblings().fadeOut(300);  //对应图片切换
	}*/
})