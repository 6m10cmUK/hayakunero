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
        },2800);
    },4000);


});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
	$('.TextTyping').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); //spanタグを取得
			//spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 200;
				//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop(); //delay処理を止める
				$(this).css("display", "none"); //spanタグ非表示
			});
		}
	});
}