
$("#giftCom dl dd a").not(".first").hover(function(){
	$(this).addClass("hover");
},function(){
	$(this).removeClass("hover");
});

/*pruduct����*/
	/*�Ŵ�*/
	//��껮��ȥ��ʾ���ֲ�ʹ�ͼ
	$("#webMain .smallImg").hover(function(){
		$("#webMain .cover").show();
		$("#webMain .bigImg").show();
	},function(){
		$("#webMain .cover").hide();
		$("#webMain .bigImg").hide();
	});

	//����ƶ���ͼҲ����
	$("#webMain .smallImg").mousemove(function(e){
		var x = e.clientX;
		var y = e.clientY;
		
		var w = $("#webMain .cover").width();//��ȡ���ֵĿ���
		var h = $("#webMain .cover").height();//��ȡ���ֵĸ߶�
		var oL = $("#webMain .smallImg").offset().left;//��ȡСͼ�������������߾���
		var oT = $("#webMain .smallImg").offset().top;//��ȡСͼ����������Ķ�������
		var oWidth = $("#webMain .smallImg").width()-w;//
		var oHeight =$("#webMain .smallImg").height()-h;//
		var ol = x-w/2-oL;
		var ot =y-h/2-oT+$(document).scrollTop();
		//�������ֲ��Сͼ
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
		//��ͼ��left��top;
		var bigL = ($("#webMain .bigImg img").width()-$("#webMain .bigImg").width())*preX;
		var bigR = ($("#webMain .bigImg img").height()-$("#webMain .bigImg").height())*preY;

		//��ͼ��λ��
		$("#webMain .bigImg img").css({left:-bigL,top:-bigR});
	});
	/*��Ʒ����ѡ�*/
	$("#productDes ul li").click(function(){
		var _index =$(this).index();
		$(this).addClass("active").siblings("li").removeClass("active");
		$("#productDes .ProductSelect div").eq(_index).show().siblings().hide();
	});