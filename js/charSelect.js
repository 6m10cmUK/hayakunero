var nowchar = 0;

$(function() {
  var name = ["ami", "ane", "chiwa", "cta", "fran", "gale", "han", "imo", "kyomu", "mike", "retoro", "sayu", "shigure", "takei", "via", "yoro", "yupi", "zen"];


  $(`.${name[0]}_bt`).hover(
    function(e) {
      overHighLight(0);
    },
    function(e) {
      outHighLight(0);
    }
  );

  $(`.${name[1]}_bt`).hover(
      function(e) {
        overHighLight(1);
      },
      function(e) {
        outHighLight(1);
      }
    );

    $(`.${name[2]}_bt`).hover(
      function(e) {
        overHighLight(2);
      },
      function(e) {
        outHighLight(2);
      }
    );
    $(`.${name[3]}_bt`).hover(
      function(e) {
        overHighLight(3);
      },
      function(e) {
        outHighLight(3);
      }
    );
    $(`.${name[4]}_bt`).hover(
      function(e) {
        overHighLight(4);
      },
      function(e) {
        outHighLight(4);
      }
    );
    $(`.${name[5]}_bt`).hover(
      function(e) {
        overHighLight(5);
      },
      function(e) {
        outHighLight(5);
      }
    );
    $(`.${name[6]}_bt`).hover(
      function(e) {
        overHighLight(6);
      },
      function(e) {
        outHighLight(6);
      }
    );
    $(`.${name[7]}_bt`).hover(
      function(e) {
        overHighLight(7);
      },
      function(e) {
        outHighLight(7);
      }
    );
    $(`.${name[8]}_bt`).hover(
      function(e) {
        overHighLight(8);
      },
      function(e) {
        outHighLight(8);
      }
    );
    $(`.${name[9]}_bt`).hover(
      function(e) {
        overHighLight(9);
      },
      function(e) {
        outHighLight(9);
      }
    );
    $(`.${name[10]}_bt`).hover(
      function(e) {
        overHighLight(10);
      },
      function(e) {
        outHighLight(10);
      }
    );
    $(`.${name[11]}_bt`).hover(
      function(e) {
        overHighLight(11);
      },
      function(e) {
        outHighLight(11);
      }
    );
    $(`.${name[12]}_bt`).hover(
      function(e) {
        overHighLight(12);
      },
      function(e) {
        outHighLight(12);
      }
    );
    $(`.${name[13]}_bt`).hover(
      function(e) {
        overHighLight(13);
      },
      function(e) {
        outHighLight(13);
      }
    );
    $(`.${name[14]}_bt`).hover(
      function(e) {
        overHighLight(14);
      },
      function(e) {
        outHighLight(14);
      }
    );
    $(`.${name[15]}_bt`).hover(
      function(e) {
        overHighLight(15);
      },
      function(e) {
        outHighLight(15);
      }
    );
    $(`.${name[16]}_bt`).hover(
      function(e) {
        overHighLight(16);
      },
      function(e) {
        outHighLight(16);
      }
    );
    $(`.${name[17]}_bt`).hover(
      function(e) {
        overHighLight(17);
      },
      function(e) {
        outHighLight(17);
      }
    );
    $(`.${name[18]}_bt`).hover(
      function(e) {
        overHighLight(18);
      },
      function(e) {
        outHighLight(18);
      }
    );

    function overHighLight(no){
      $("."+name[no]).addClass("highlight");
      $(".all_img_cover").css({opacity:1});
    }
    function outHighLight(no){
      $("."+name[no]).removeClass("highlight");
      $(".all_img_cover").css({opacity:0});
    }

    
    $(`.${name[0]}_bt`).click(()=>{nowchar=0; profileView(name[0]);});
    $(`.${name[1]}_bt`).click(()=>{nowchar=1; profileView(name[1]);});
    $(`.${name[2]}_bt`).click(()=>{nowchar=2; profileView(name[2]);});
    $(`.${name[3]}_bt`).click(()=>{nowchar=3; profileView(name[3]);});
    $(`.${name[4]}_bt`).click(()=>{nowchar=4; profileView(name[4]);});
    $(`.${name[5]}_bt`).click(()=>{nowchar=5; profileView(name[5]);});
    $(`.${name[6]}_bt`).click(()=>{nowchar=6; profileView(name[6]);});
    $(`.${name[7]}_bt`).click(()=>{nowchar=7; profileView(name[7]);});
    $(`.${name[8]}_bt`).click(()=>{nowchar=8; profileView(name[8]);});
    $(`.${name[9]}_bt`).click(()=>{nowchar=9; profileView(name[9]);});
    $(`.${name[10]}_bt`).click(()=>{nowchar=10; profileView(name[10]);});
    $(`.${name[11]}_bt`).click(()=>{nowchar=11; profileView(name[11]);});
    $(`.${name[12]}_bt`).click(()=>{nowchar=12; profileView(name[12]);});
    $(`.${name[13]}_bt`).click(()=>{nowchar=13; profileView(name[13]);});
    $(`.${name[14]}_bt`).click(()=>{nowchar=14; profileView(name[14]);});
    $(`.${name[15]}_bt`).click(()=>{nowchar=15; profileView(name[15]);});
    $(`.${name[16]}_bt`).click(()=>{nowchar=16; profileView(name[16]);});
    $(`.${name[17]}_bt`).click(()=>{nowchar=17; profileView(name[17]);});
    $(`.${name[18]}_bt`).click(()=>{nowchar=18; profileView(name[18]);});

    $(".back").click(()=>{
      profileViewClose();
      // spMenuOpen("L");
    });
    
  $(".leftgo").click(()=>{
    leftgo();
  });

  $(".rightgo").click(()=>{
    rightgo();
  });

});

var name_ = ["ami", "ane", "chiwa", "cta", "fran", "gale", "han", "imo", "kyomu", "mike", "retoro", "sayu", "shigure", "takei", "via", "yoro", "yupi", "zen"];

  function leftgo(){
    var left = nowchar-1;
    if(left < 0){
        left = 17;
    }
    nowchar = left;
    profileViewClose();
    setTimeout(()=>{
      profileView(name_[left]);
    },50);
  }

  function rightgo(){
    var right = nowchar+1;

    if(right > 17){
        right = 0;
    }
    nowchar = right;
    profileViewClose();
    setTimeout(()=>{
      profileView(name_[right]);
    },50);
  }


function profileViewClose(){
  profile = false;
  $(".profile").css({display:"none"})
  $(".profile .tatie").css({display:"none"}).removeClass("tatie_on");
  $(".discription").removeClass("discription_on");
  $(".profile .profile_circle").css({
      width: "0",
      height: "0"
  });
  $(".profile .discription .name").html();
  $(".profile .discription .content").html();
  $(".backdrop").css({
      display:"none",
      opacity:0
  })
}

function profileView(name){
  console.log(name);
  profile = true;
  $(".profile").css({display:"block"})
  var color = member[name].color;
  if(!color.startsWith("#")){
    color = member[name].color2;
  }
  $(".profile .tatie").css({display:"block"}).attr({src:`img/member/${name}.png`}).css({filter: `drop-shadow(15px 10px 0 ${color})`});

  $(".discription").html(`
    <p class="name">${member[name].name}</p>
    <p class="title">"${member[name].title}"</p>
    <p class="content">${member[name].discription}</p>
    <p class="other">身長：${member[name].height}　誕生日：${member[name].birthday}</p>
  `);
  if(member[name].twitter != ""){
    $(".discription").append(`<a class="twitter" href="${member[name].twitter}" target="_blank"><img class="icon" src="img/icon_twitter.png"></a>`);
  }
  $(".discription").append(`<div class="profile_tag"></div>`);
  var tags = member[name].tag.split(",");
  for(var tag of tags){
    $(".profile_tag").append(`<span style="background-color:${color}; color:${member[name].tagcolor}">${tag}</span>`);
  }

  $(".backdrop").css({display:"block"})
  .animate({
      opacity: 1
  },400);
  $(".profile .profile_circle")
  .css({"background":member[name].color})
  .animate({
      width: "500px",
      height: "500px"
  },500);
  setTimeout(()=>{
      $(".profile .tatie").addClass("tatie_on");
  },200);
  setTimeout(()=>{
      $(".discription").addClass("discription_on");
  },300);
}


