
$("#giftCom dl dd a").not(".first").hover(function(){
	$(this).addClass("hover");
},function(){
	$(this).removeClass("hover");
});

/*pruduct详情*/
	/*放大镜*/
	//鼠标划上去显示遮罩层和大图
	$("#webMain .smallImg").hover(function(){
		$("#webMain .cover").show();
		$("#webMain .bigImg").show();
	},function(){
		$("#webMain .cover").hide();
		$("#webMain .bigImg").hide();
	});

	//鼠标移动大图也跟动
	$("#webMain .smallImg").mousemove(function(e){
		var x = e.clientX;
		var y = e.clientY;
		
		var w = $("#webMain .cover").width();//获取遮罩的宽度
		var h = $("#webMain .cover").height();//获取遮罩的高度
		var oL = $("#webMain .smallImg").offset().left;//获取小图距离浏览器的左边距离
		var oT = $("#webMain .smallImg").offset().top;//获取小图距离浏览器的顶部距离
		var oWidth = $("#webMain .smallImg").width()-w;//
		var oHeight =$("#webMain .smallImg").height()-h;//
		var ol = x-w/2-oL;
		var ot =y-h/2-oT+$(document).scrollTop();
		//不让遮罩层出小图
		if(ol>oWidth){
		
			ol = oWidth;
		}else if(ol<0){
			ol=0;
		}

		if(ot>oHeight){
			ot = oHeight;
		}else if(ot<0){
			ot = 0;
		}

		$("#webMain .cover").css({left:ol+"px",top:ot+"px"});

		preX = ol/oWidth;
		preY = ot/oHeight;
		//大图的left和top;
		var bigL = ($("#webMain .bigImg img").width()-$("#webMain .bigImg").width())*preX;
		var bigR = ($("#webMain .bigImg img").height()-$("#webMain .bigImg").height())*preY;

		//大图定位；
		$("#webMain .bigImg img").css({left:-bigL,top:-bigR});
	});
	/*商品描述选项卡*/
	$("#productDes ul li").click(function(){
		var _index =$(this).index();
		$(this).addClass("active").siblings("li").removeClass("active");
		$("#productDes .ProductSelect div").eq(_index).show().siblings().hide();
	});