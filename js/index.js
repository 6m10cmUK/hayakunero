$(window).on('load', function () {
    $("#version").html("var 0.1.22");


	var element = $(".TextTyping");
	element.each(function () {
		var text = $(this).html();
		var textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " ") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);

	});
    setTimeout(()=>{
        $(".TextTyping").css({opacity:1});
        TextTypingAnime();
    },1000);

    setTimeout(()=>{
        $(".circle").css({display:"block"})
        .animate({
            width:"5000px",
            height:"5000px"
        }, 2000)

        setTimeout(()=>{
            $(".triangle").css({display:"block"})
            .animate({
                width: "3464px",
                height: "3000px",
            },2000);
        },500);

        setTimeout(()=>{
            $(".triangle_img").css({display:"block"})
            .animate({
                width: "3464px",
                height: "3000px",
            },2000);
        },800);
        setTimeout(()=>{
            $(".circle").css({display:"none"})
            $(".triangle").css({display:"none"})
            $(".characters").css({display:"block"});
            $(".left_menu").css({display:"block"}).animate({
                opacity:"1",
                left:"20px"
            },500);
            $(".right_menu").css({display:"block"}).animate({
                opacity:"1",
                right:"20px"
            },500);  
        },2800);
    },4000);
});

function TextTypingAnime() {
	$('.TextTyping').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); 
			thisChild.each(function (i) {
				var time = 200;
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop();
				$(this).css("display", "none");
			});
		}
	});
}

function pageLoad(pagename){
    $("#page").animate({height:"100%"},500);
    setTimeout(()=>{
        $(".page_close").css({display:"block"})
        .animate({opacity:1},200);
    },500);
    $(".page_Content").animate({opacity:1},500).load(`html/${pagename}.html`);
}

function pageClose(){
    $(".page_close").css({display:"none",opacity:0});
    $("#page").animate({height:"0"},200);
}

function pageJump(pagename){
    window.location.href = pagename+".html";
}