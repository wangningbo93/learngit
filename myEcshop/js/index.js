
	/*ͷ�������Ч��ʼ*/
	$("#Top img.close").click(function(){
		$("#Top").slideUp();//������������
	});
	/*ͷ�������Ч����*/

	/*���������Լ�������Ч��ʼ*/
	$("#Adv ul li.adv").hover(function(){
		var _left = $(this).position().left;
		var _width = $(this).width();
		$("#Adv ul li.last").css("width",_width).show().stop().animate({left:_left},200);
	},function(){
		$("#Adv ul li.last").hide();
	});
	$(window).scroll(function(){
		var _top = $(window).scrollTop();
		var _height = $("#TopMain").height();
		if(_top >= _height){
			$("#Adv ul li .Menu").hide();
			$("#Adv").addClass("gd");
		}else{
			$("#Adv").removeClass("gd");
			$("#Adv ul li .Menu").show();
		}
	});
	/*���������Լ�������Ч����*/

	/*�����˵���ʼ*/
	$("#Adv ul li.first ol li").hover(function(){
		
		$(this).addClass("hover");
		var _index = $(this).index();
		console.log(_index);
		var _top = 0;
		for(var i = 0;i <= _index; i++){
			if(i == 0||i == 1){
				$("#Adv ul li .Menu ol li .MenuList").css("top","0px");
			}
			if(i == 2){
				$("#Adv ul li .Menu ol li .MenuList").css("top","-140px");
			}
			if(i == 3){
				$("#Adv ul li .Menu ol li .MenuList").css("top","-181px");
			}
			if(i == 4){
				$("#Adv ul li .Menu ol li .MenuList").css("top","-210px");
			}
			if(i == 5){
				$("#Adv ul li .Menu ol li .MenuList").css("top","-252px");
			}
		}
	
		
	},function(){

		$(this).removeClass("hover");
	});
	/*�����˵�����*/

	/*�ֲ�ͼ��Ч��ʼ*/
		//btnsЧ��
		var _index = 0;
		var _qindex = 0;
		var timerFlash = null;
		$("#Part1 .PartCon .flash .btns span").mouseover(function(){
			clearInterval(timerFlash);
			_index = $(this).index();
			playFlash();
			_qindex = _index;
		}).mouseout(function(){
			scrollFlash();
		});

		//��ť�л�
		$("#Part1 .PartCon .flash a.prev").click(function(){
			_index--;
			if(_index < 0){
				_index = 5;
				_qindex = 0;
			}	
			playFlash();
			_qindex = _index;
		});

		//���л���ť
		$("#Part1 .PartCon .flash a.next").click(function(){
			_index++;
			if(_index > 5){
				_index = 0;
				_qindex = 5;
			}
			playFlash();
			_qindex = _index;
		});
		
		function playFlash(){
			$("#Part1 .PartCon .flash .btns span").eq(_index).addClass("hover").siblings("span").removeClass("hover");
			if(_index == 0 && _qindex ==5){
				next();
			}else if(_index == 5 && _qindex ==0){
				prev();
			}else if(_index>_qindex){
				next();
			}else if(_index < _qindex){
				prev();
			 }
		}

		function prev(){
			$("#Part1 .PartCon .flash .scroll img").eq(_qindex).stop().animate({"left":"820px"},300);
			$("#Part1 .PartCon .flash .scroll img").eq(_index).css("left","-820px").animate({"left":"0px"},300);
		}
		function next(){
			$("#Part1 .PartCon .flash .scroll img").eq(_qindex).stop().animate({"left":"-820px"},300);
			$("#Part1 .PartCon .flash .scroll img").eq(_index).css("left","820px").animate({"left":"0px"},300);
		}

		//��ʱ�ֲ�
		scrollFlash();
		function scrollFlash(){
			timerFlash=setInterval(function(){
				_index++;
			if(_index > 5){
				_index = 0;
				_qindex = 5;
			}
			playFlash();
			_qindex = _index;
			},2000);
		}

		//����Ƶ�.scroll��ʾ���Ұ�ť
		$(".flash").hover(function(){
		//��ʾ
		$("a.prev,a.next").show();
		},function(){
		//����
		$("a.prev,a.next").hide();
		});

		$("a.prev,a.next").hover(function(){
			clearInterval(timerFlash);
		},function(){
			scrollFlash();
		});
	/*�ֲ�ͼ��Ч����*/

	/*Part2 ����������ʽ��ʼ*/
	$("#Part2 .long .imgList ul li").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});

		/*����ʱ��ʽ*/
		var timer = null;
		function dtime(){
			var newTime = new Date(2015,11,11);
			var nowTime = new Date();
			var t = parseInt(newTime - nowTime)/1000;
			if(t<0){
				clearInterval(timer);
			}else{
			dDay = changeNum(parseInt(t/86400));
			dHour = changeNum(parseInt(t%86400/3600));
			dMinute = changeNum(parseInt(t%86400%3600/60));
			dSecond =changeNum(parseInt(t%86400%3600%60));
			$("#Part2 .long .imgList ul li .time span font").eq(0).html(dDay);
			$("#Part2 .long .imgList ul li .time span font").eq(1).html(dHour);
			$("#Part2 .long .imgList ul li .time span font").eq(2).html(dMinute);
			$("#Part2 .long .imgList ul li .time span font").eq(3).html(dSecond);
			}
		}
		
		timer = setInterval(dtime,1000);

		function changeNum(num){
			if(num<10){
				return "0"+num;
			}else{
				return ""+num;
			}
		}
		dtime();
		/*�л�ѡ�Ч��*/
		var mark = 0;
		var timerimgList = null;
		$("#Part2 .xstitle span.goChange").click(function(){
			playAuto();
			
		});
		$("#Part2 .xstitle span.goChange").hover(function(){
			clearInterval(timerimgList);
		},function(){
			setInterval(playAuto,2000);
		});
		
		function playAuto(){
			if(mark==0){
				mark=1;
			}else{
				mark=0;
			}
			$("#Part2 .long .imgList").eq(mark).show().siblings().hide();
		}

		timerimgList = setInterval(playAuto,10000);


	/*Part2 ����������ʽ����*/

	/*Part3 �ʻ�Ч����ʼ*/
		/*flowerNav ��ʼ*/
			$("#Part3 .flowerNav ul li").not(".flowerHead").hover(function(){
				$(this).addClass("hover").siblings().removeClass("hover");
				var _index = $(this).index();
				$("#Part3 .flowerCon .flowerRight .flowerComm").eq(_index).show().siblings().hide();
			});

			$("#Part3 .flowerCon .flowerRight .flowerComm ul li").hover(function(){
				$(this).find("span").slideDown();
			},function(){
				$(this).find("span").slideUp();
			});
				
		
		/*flowerNav ����*/

		/*�ַ���Ч����ʼ*/
		$("#Part3 .flowerCon .flowerLeft .flowerList ul li").hover(function(){
			$(this).find("span").addClass("hover").parent().siblings("li").find("span").removeClass("hover");

			$(this).stop().animate({"width":"382px"},300).siblings("li").stop().animate({"width":"50px"},300);
			
		});
		/*�ַ���Ч����ʼ*/

	/*Part3 �ʻ�Ч������*/

	/*Part4 ����Ч����ʼ*/
		/*���������ֻ�ɫ��͵�������*/
		$("#Part4 .dgShow .dgLeft ul li").click(function(){
			$("#Part4 .dgShow .dgLeft .gray").show();
			$("#Part4 .dgShow .dgLeft .moreInfo").show();
			$("#Part4 .dgShow .dgLeft .moreInfo a").show();
			var _index = $(this).index();
			var liLength = $("#Part4 .dgShow .dgLeft ul li").length;
			var bigSrc = $(this).find("img").attr("src");
			$("#Part4 .dgShow .dgLeft .moreInfo .bigImg").find("img").attr("src",bigSrc);

			/*�����߰�ť�л�*/
			$("#Part4 .dgShow .dgLeft .moreInfo a.prev").click(function(){
				_index--;
				if(_index < 0){
					_index =  liLength;
				}
				bigSrc = $("#Part4 .dgShow .dgLeft ul li").eq(_index).find("img").attr("src");
				$("#Part4 .dgShow .dgLeft .moreInfo .bigImg").find("img").attr("src",bigSrc);
			});
			/*����ұ߰�ť�л�*/
			$("#Part4 .dgShow .dgLeft .moreInfo a.next").click(function(){
				_index++;
				if(_index ==  liLength){
					_index = 0;
				}
				bigSrc = $("#Part4 .dgShow .dgLeft ul li").eq(_index).find("img").attr("src");
				$("#Part4 .dgShow .dgLeft .moreInfo .bigImg").find("img").attr("src",bigSrc);
			});
		});
		/*�����ɫ����ʧ��������*/
		$("#Part4 .dgShow .dgLeft .gray").click(function(){
			$(this).hide();
			$("#Part4 .dgShow .dgLeft .moreInfo").hide();
		});

		/*���ѡ����ʽ��ӱ���*/

		$("#Part4 .dgShow .dgLeft .moreInfo .infoPrice .dgType dl").click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");
		});
	/*Part4 ����Ч������*/
	/*F1 �ֲ���Ч��ʼ*/
	function CommPlay(objNo,timer){
		var CommTimer = null;
		var Comm_index = 0;
		var btnLength = $(objNo).find(".CommFlash .btn ul li").length;
		/*���������ʾ���Ұ�ť�Ƴ�����*/
		$(objNo).find(".CommFlash").hover(function(){
			$(objNo).find(".CommFlash .flashImg a").show();
		},function(){
			$(objNo).find(".CommFlash .flashImg a").hide();
		});
		/*��������±��л�*/
		$(objNo).find(".CommFlash .btn ul li").hover(function(){
			clearInterval(CommTimer);
			Comm_index = $(this).index();
			prevAndNext();
		},function(){
			commAutoPlay(timer);
		});
		/*������밴ťֹͣ�ֲ�*/
		$(objNo).find(".CommFlash .flashImg a").hover(function(){
			clearInterval(CommTimer);
		},function(){
			commAutoPlay(timer);
		});
		/*����������л�ͼƬ*/
		$(objNo).find(".CommFlash .flashImg a.next").click(function(){
			Comm_index++;
			if(Comm_index > btnLength-1){
				Comm_index = 0;
			}
			prevAndNext();
		});

		$(objNo).find(".CommFlash .flashImg a.prev").click(function(){
			Comm_index--;
			if(Comm_index < 0){
				Comm_index = btnLength-1;
			}
				prevAndNext();
		});
		/*��װ���л�����*/
		function prevAndNext(){
			$(objNo).find(".CommFlash .btn ul li").eq(Comm_index).addClass("hover").
			siblings("li").removeClass("hover");
			$(objNo).find(".CommFlash .flashImg ul.scroll").stop().animate({left:Comm_index*-450},300);
		}
		/*�Զ��ֲ�����*/
		function commAutoPlay(timer){
		CommTimer = setInterval(function(){
				Comm_index--;
				if(Comm_index < 0){
				Comm_index = btnLength-1;
			}
				prevAndNext();
			
			},timer);
		}
		commAutoPlay(timer);
	}
	CommPlay("#F1",3000);
	CommPlay("#F2",2000);
	CommPlay("#F3",1500);
	CommPlay("#F4",3000);
	/*F2 �ֲ���Ч����*/