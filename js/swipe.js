var direction, position;
var onTouch = 0;
const minimumDistance = 10;

var leftmenu = false;
var rightmenu = false;

var profile = false;

$(function() {
	$(".sp_touch_area").bind("touchstart", onTouchStart);
	$(".sp_touch_area").bind("touchmove", onTouchMove);
	$(".sp_touch_area").bind("touchend", onTouchEnd);

  $(".profile").bind("touchstart", onTouchStart);
	$(".profile").bind("touchmove", onTouchMove);
	$(".profile").bind("touchend", onTouchEnd);

	//スワイプ開始時の横方向の座標を格納
	function onTouchStart(event) {
    onTouch = 0;
    position = getPosition(event);
	}
	
	//スワイプの方向（left／right）を取得
	function onTouchMove(event) {
    onTouch++;
		direction = (position > getPosition(event)) ? "L" : "R";
	}
	
	//スワイプ終了時に方向（left／right）をクラス名に指定
	function onTouchEnd(event) {
    if(onTouch > minimumDistance){
      if(!profileCheck()){
        console.log(onTouch, direction);
        MenuOpen(direction);
      } else {
        console.log("profile", onTouch, direction);
        if(direction == "L"){
          rightgo();
        }else 
        if(direction == "R"){
          leftgo();
        }
      }
    }
	}

  function profileCheck(){
    if($(".profile").css("display") == "none"){
      return false;
    } else 
    if($(".profile").css("display") == "block"){
      return true;
    }
  }
	
	//横方向の座標を取得
	function getPosition(event) {
		return event.originalEvent.touches[0].pageX;
	}

  function MenuOpen(direction){
    console.log(rightmenu);
    if(!rightmenu && !leftmenu && direction == "R"){
      leftMenuOpen()
    } else
    if(!rightmenu && leftmenu && direction == "L"){
      leftMenuClose();
    } else
    if(!rightmenu && !leftmenu && direction == "L"){
      rightMenuOpen()
    } else
    if(rightmenu && !leftmenu && direction == "R"){
      rightMenuClose();
    }

  }

  $(".sp_left_menu_sign").on("click", ()=>{
    console.log(leftmenu);
    if(!leftmenu){
      leftMenuOpen()
    } else
    if(leftmenu){
      leftMenuClose()
    }
  });

  function leftMenuOpen(){
    leftmenu = true;
    $(".sp_left_menu").addClass("sp_left_menu_open");
    $(".sp_left_menu_sign .yazirushi").css({transform: "rotate(-90deg)"});
  }

  function leftMenuClose(){
    leftmenu = false;
    $(".sp_left_menu").removeClass("sp_left_menu_open");
    $(".sp_left_menu_sign .yazirushi").css({transform: "rotate(90deg)"});
  }

  function rightMenuOpen(){
    rightmenu = true;
    $(".sp_right_menu").addClass("sp_right_menu_open");
    $(".sp_right_menu_sign .yazirushi").css({transform: "rotate(90deg)"});
  }

  function rightMenuClose(){
    rightmenu = false;
    $(".sp_right_menu").removeClass("sp_right_menu_open");
    $(".sp_right_menu_sign .yazirushi").css({transform: "rotate(-90deg)"});
  }

});
