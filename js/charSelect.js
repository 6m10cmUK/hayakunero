$(function() {
  var name = ["ami", "ane", "chiwa", "cta", "fran", "gale", "han", "imo", "kyomu", "mike", "retoro", "sayu", "shigure", "takei", "via", "yoro", "yupi", "zen"];
  var nowchar = 0;

  $(`.${name[0]}_bt`).hover(
    function(e) {
      $("."+name[0]).addClass("highlight");
    },
    function(e) {
      $("."+name[0]).removeClass("highlight");
    }
  );

  $(`.${name[1]}_bt`).hover(
      function(e) {
        $("."+name[1]).addClass("highlight");
      },
      function(e) {
        $("."+name[1]).removeClass("highlight");
      }
    );

    $(`.${name[2]}_bt`).hover(
      function(e) {
        $("."+name[2]).addClass("highlight");
      },
      function(e) {
        $("."+name[2]).removeClass("highlight");
      }
    );
    $(`.${name[3]}_bt`).hover(
      function(e) {
        $("."+name[3]).addClass("highlight");
      },
      function(e) {
        $("."+name[3]).removeClass("highlight");
      }
    );
    $(`.${name[4]}_bt`).hover(
      function(e) {
        $("."+name[4]).addClass("highlight");
      },
      function(e) {
        $("."+name[4]).removeClass("highlight");
      }
    );
    $(`.${name[5]}_bt`).hover(
      function(e) {
        $("."+name[5]).addClass("highlight");
      },
      function(e) {
        $("."+name[5]).removeClass("highlight");
      }
    );
    $(`.${name[6]}_bt`).hover(
      function(e) {
        $("."+name[6]).addClass("highlight");
      },
      function(e) {
        $("."+name[6]).removeClass("highlight");
      }
    );
    $(`.${name[7]}_bt`).hover(
      function(e) {
        $("."+name[7]).addClass("highlight");
      },
      function(e) {
        $("."+name[7]).removeClass("highlight");
      }
    );
    $(`.${name[8]}_bt`).hover(
      function(e) {
        $("."+name[8]).addClass("highlight");
      },
      function(e) {
        $("."+name[8]).removeClass("highlight");
      }
    );
    $(`.${name[9]}_bt`).hover(
      function(e) {
        $("."+name[9]).addClass("highlight");
      },
      function(e) {
        $("."+name[9]).removeClass("highlight");
      }
    );
    $(`.${name[10]}_bt`).hover(
      function(e) {
        $("."+name[10]).addClass("highlight");
      },
      function(e) {
        $("."+name[10]).removeClass("highlight");
      }
    );
    $(`.${name[11]}_bt`).hover(
      function(e) {
        $("."+name[11]).addClass("highlight");
      },
      function(e) {
        $("."+name[11]).removeClass("highlight");
      }
    );
    $(`.${name[12]}_bt`).hover(
      function(e) {
        $("."+name[12]).addClass("highlight");
      },
      function(e) {
        $("."+name[12]).removeClass("highlight");
      }
    );
    $(`.${name[13]}_bt`).hover(
      function(e) {
        $("."+name[13]).addClass("highlight");
      },
      function(e) {
        $("."+name[13]).removeClass("highlight");
      }
    );
    $(`.${name[14]}_bt`).hover(
      function(e) {
        $("."+name[14]).addClass("highlight");
      },
      function(e) {
        $("."+name[14]).removeClass("highlight");
      }
    );
    $(`.${name[15]}_bt`).hover(
      function(e) {
        $("."+name[15]).addClass("highlight");
      },
      function(e) {
        $("."+name[15]).removeClass("highlight");
      }
    );
    $(`.${name[16]}_bt`).hover(
      function(e) {
        $("."+name[16]).addClass("highlight");
      },
      function(e) {
        $("."+name[16]).removeClass("highlight");
      }
    );
    $(`.${name[17]}_bt`).hover(
      function(e) {
        $("."+name[17]).addClass("highlight");
      },
      function(e) {
        $("."+name[17]).removeClass("highlight");
      }
    );
    $(`.${name[18]}_bt`).hover(
      function(e) {
        $("."+name[18]).addClass("highlight");
      },
      function(e) {
        $("."+name[18]).removeClass("highlight");
      }
    );  
    
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
    });
    
  $(".leftgo").click(()=>{
      var left = nowchar-1;
      if(left < 0){
          left = 17;
      }
      nowchar = left;
      profileViewClose();
      profileView(name[left]);
  });

  $(".rightgo").click(()=>{
      var right = nowchar+1;

      if(right > 17){
          right = 0;
      }
      nowchar = right;
      profileViewClose();
      profileView(name[right]);
  });
});

function profileViewClose(){
  $(".profile").css({display:"none"})
  $(".profile img").attr({src:``}).css({
      opacity:0,
      left: "0"
  });
  $(".profile .discription").css({
      opacity:0,
      left: "670px"
  });
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
  $(".profile").css({display:"block"})
  var color = member[name].color;
  if(!color.startsWith("#")){
    color = member[name].color2;
  }
  $(".profile .tatie").attr({src:`img/member/${name}.png`}).css({filter: `drop-shadow(15px 10px 0 ${color})`});

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
      $(".profile .tatie").animate({
          opacity:1,
          left: "-150px"
      },500);
  },200);
  setTimeout(()=>{
      $(".discription").animate({
          opacity:1,
          left: "530px"
      }, 500);
  },300);
}