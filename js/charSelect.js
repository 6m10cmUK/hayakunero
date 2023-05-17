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
    $(".profile img").attr({src:`img/member/${name}.png`});
    $(".profile .discription .name").html(member[name].name);
    $(".profile .discription .content").html(member[name].discription);
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
        $(".profile img").animate({
            opacity:1,
            left: "-120px"
        },500);
    },200);
    setTimeout(()=>{
        $(".discription").animate({
            opacity:1,
            left: "570px"
        }, 500);
    },300);

}


let member = {
    "ami":{
        color:"linear-gradient(90deg, #13bee9, #4bbe95)",
        name:"あみ",
        discription:"hogehogehoge"
    },
    "ane":{
        color:"#b28194",
        name:"姉ちゃん",
        discription:"hogehogehoge"
    },
    "chiwa":{
        color:"#cc4474",
        name:"ちわ小太郎",
        discription:"hogehogehoge"
    }, 
    "cta":{
        color:"#29f6fb",
        name:"C太",
        discription:"hogehogehoge"
    }, 
    "fran":{
        color:"#a9fc18",
        name:"Frandle256",
        discription:"hogehogehoge"
    }, 
    "gale":{
        color:"#82c6b7",
        name:"gale",
        discription:"hogehogehoge"
    }, 
    "han":{
        color:"linear-gradient(90deg,#a599a5 ,#d1ccb6)",
        name:"3010",
        discription:"hogehogehoge"
    }, 
    "imo":{
        color:"#7a5f72",
        name:"いもうと",
        discription:"hogehogehoge"
    }, 
    "kyomu":{
        color:"#890000",
        name:"虚無虚無ぷりん",
        discription:"hogehogehoge"
    }, 
    "mike":{
        color:"#e58d1f",
        name:"若草みけ",
        discription:"hogehogehoge"
    }, 
    "retoro":{
        color:"#555555",
        name:"れとろ",
        discription:"hogehogehoge"
    }, 
    "sayu":{
        color:"#aaeddb",
        name:"白湯丸太",
        discription:"hogehogehoge"
    }, 
    "shigure":{
        color:"#fb0304",
        name:"ふみしぐれ",
        discription:"hogehogehoge"
    }, 
    "takei":{
        color:"#89ead7",
        name:"夕ケイ",
        discription:"hogehogehoge"
    }, 
    "via":{
        color:"#728474",
        name:"VIA",
        discription:"hogehogehoge"
    }, 
    "yoro":{
        color:"#3a685e",
        name:"吉岡よろ",
        discription:"hogehogehoge"
    }, 
    "yupi":{
        color:"#0060ff",
        name:"木林ユピテル",
        discription:"hogehogehoge"
    }, 
    "zen":{
        color:"#c11dff",
        name:"漸化式",
        discription:"hogehogehoge"
    }
}