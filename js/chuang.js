var mySwiper=new Swiper(".swiper-container",{
	direction:'vertical',
	onSlideChangeEnd: function(swiper){

	switch (swiper.activeIndex){
		case 1:
		$(".fontright").eq(0).addClass("active2");
		$(".fontleft").addClass("active1");
			break;
		case 3:
		$(".page4bg").addClass("bgActive");
		$(".page4 .p1").addClass("p1Active");
		$(".page4 .p2").addClass("p2Active");
		for(var i=0;i<=8;i++){
			$(".peoplePic img:nth-child("+i+")").addClass("imgActive"+i);
		}
            break;
		default:
			break;
	}
    }
});
// music play
var flag=true;
$(".footer>.miusc").on("click",function(){
	if(flag){
		this.src="img/musicoff.png";
		flag=false;
	}else{
		this.src="img/music.png";
		flag=true;
	}
})

// page1

var timer1=setInterval(lightShake,1000);
function lightShake(){
	$(".page1 .light img").eq(0).animate({
		top:"60%",
		left:"10%",
		opacity:"1"
	},1000)
	$(".page1 .light img").eq(1).animate({
		bottom:0,
		right:0,
		opacity:1
	},1000,function(){
		$(".page1 .font img").animate({
			width:"65%",
			opacity:1
		},1000)
	})	
}

// page4
var imgArr = $(".peoplePic>img");
	var changebigPicArr = $(".changebig>img");
	var index = 0;
for(var i=0;i<imgArr.length;i++){
	imgArr[i].getI = i;
	imgArr[i].addEventListener("touchstart", function(){
		index = this.getI;
		// console.log(index);
		for(var j=0;j<changebigPicArr.length;j++){
//			changebigPicArr.eq(j).removeClass("changebigActiv");
			changebigPicArr.eq(j).css("opacity","0");
		}
		//changebigPicArr.eq(this.getI).addClass("changebigActiv");
		changebigPicArr.eq(this.getI).animate({
			top: "26%",
			left:0,
			width:"100%",
			height:"53%",
			opacity: 1
		},1000,function(){
	
			  $(".lunbo")[0].style.left = index * $(".page4").outerWidth()+"px";
			  scroll();
			   $(".bigPic").css("display","inline-block");
	
			   $(".changebig").css("display","none");
			   $(".peoplePic").css("opacity","0");
		})	
	}) ;
}
$(".bigPic").css("display","none");
$(".page4 .lunbo >img").css("width",$(".page4").outerWidth())
$(".page4 .lunbo").css("width",($(".page4").outerWidth())*9)
$(".rigBtn").on("touchstart",function(){
	if(index>=8){
		index=0;
		$(".lunbo")[0].style.left = 0;
	}
	index++;
	scroll();
})
$(".leftBtn").on("touchstart",function(){
	
	if(index<=0){
		index=8;
		$(".lunbo")[0].style.left="800%";
	}
	index--;
	scroll();
})
var timer1;
var b = 0;
function scroll(){
	var t =0;
	var b =$(".lunbo")[0].offsetLeft;
	var c = -index * $(".page4").outerWidth() - b;
	var d = 100;
	clearInterval(timer1);
	timer1 =setInterval(function(){
		move();
	},10)
	function move(){
		t++;
		$(".lunbo")[0].style.left =  Tween.Cubic.easeInOut(t,b,c,d) + "px" ;
		if (t == d){
				clearInterval(timer1);
			}
	}
}
$(".bigPic>.butn").on("touchstart",function(){
	 $(".bigPic").css("display","none");
     $(".changebig").css("display","inline-block");
     $(".changebig").addClass("changeSmActiv")
      $(".peoplePic").animate({opacity:1},1000);  
})