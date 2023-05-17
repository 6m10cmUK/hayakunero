// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	//spanタグを追加する
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
        TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
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