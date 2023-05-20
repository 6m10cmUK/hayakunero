// タップ時の誤動作を防ぐためのスワイプ時の処理を実行しない最小距離
const minimumDistance = 30
// スワイプ開始時の座標
let startX = 0
let startY = 0
// スワイプ終了時の座標
let endX = 0
let endY = 0

// 解説①：移動を開始した座標を取得
window.addEventListener('touchstart', (e) =>  {
  startX = e.touches[0].pageX
  startY = e.touches[0].pageY
})

// 解説②：移動した座標を取得
window.addEventListener('touchmove', (e) =>  {
  endX = e.changedTouches[0].pageX
  endY = e.changedTouches[0].pageY
})


// 解説③：移動距離から左右or上下の処理を実行
window.addEventListener('touchend', (e) =>  {
  // スワイプ終了時にx軸とy軸の移動量を取得
  // 左スワイプに対応するためMath.abs()で+に変換
  const distanceX = Math.abs(endX - startX)
  const distanceY = Math.abs(endX - startY)
  const X = endX - startX;

  // 左右のスワイプ距離の方が上下より長い && 小さなスワイプは検知しないようにする
  if (distanceX > distanceY && distanceX > minimumDistance) {
    // スワイプ後の動作
    console.log(distanceX);
    if(X > 0){
        // spMenuOpen("R");
    }else{
        // spMenuOpen("L");
    }
    
    return false;
  }
});

var left_menu = false;
var right_menu = false;

var profile = false;
var isLock = false;

function spLeftMenuOpenBt(){
  console.log("spLeftMenuOpenBt: "+left_menu);
  isLock = true;
  if(!left_menu){
    left_menu = true;
    $(".sp_left_menu").addClass("sp_left_menu_open");
    $(".sp_left_menu .sp_left_menu_sign .yazirushi").css({transform:"rotate(-90deg)"});
  }else
  if(left_menu){
    left_menu = false;
    $(".sp_left_menu").removeClass("sp_left_menu_open");
    $(".sp_left_menu .sp_left_menu_sign .yazirushi").css({transform:"rotate(90deg)"});
  }
  setTimeout(()=>{
    isLock = false;
  },50);
}

function spMenuOpen(direction){
  if(isLock){
    return;
  }
  console.log("spMenuOpen: "+left_menu);
    if(profile){
      console.log("profile");
      if(direction == "R"){
        rightgo();
      }else
      if(direction == "L"){
        leftgo();
      }
    }else 
    if(!left_menu && !right_menu && direction == "R"){
        left_menu = true;
        $(".sp_left_menu").addClass("sp_left_menu_open");
        $(".sp_left_menu .sp_left_menu_sign .yazirushi").css({transform:"rotate(-90deg)"});
    }else
    if(left_menu && !right_menu && direction == "L"){
        left_menu = false;
        $(".sp_left_menu").removeClass("sp_left_menu_open");
        $(".sp_left_menu .sp_left_menu_sign .yazirushi").css({transform:"rotate(90deg)"});
    }
}