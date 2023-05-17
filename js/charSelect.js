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
      $(".discription").append(`<a class="twitter" href="${member[name].twitter}"><img class="icon" src="img/icon_twitter.png"></a>`);
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
        color2:"#4bbe95",
        name:"あみ",
        title:"",
        discription:"hogehogehoge",
        height: "",
        birthday: "",
        twitter:""
    },
    "ane":{
        color:"#b28194",
        name:"姉ちゃん",
        title:"Hakumai is my life.",
        discription:'可愛い女の子とアイドルが好きなゲラおじさん。<br>メンマは割り箸だと教えられてガチで信じたことがある。<br>ちなみにいもうとのガチ姉。',
        height: "153cm",
        birthday: "",
        twitter:""
    },
    "chiwa":{
        color:"#cc4474",
        name:"ちわ小太郎",
        title:"",
        discription:"hogehogehoge",
        height: "",
        birthday: "",
        twitter:""
    }, 
    "cta":{
        color:"#29f6fb",
        name:"C太",
        title:"",
        discription:"hogehogehoge",
        height: "",
        birthday: "",
        twitter:""
    }, 
    "fran":{
        color:"#a9fc18",
        name:"Frandle256",
        title:"",
        discription:"hogehogehoge",
        height: "",
        birthday: "",
        twitter:""
    }, 
    "gale":{
        color:"#82c6b7",
        name:"gale",
        title:"",
        discription:"hogehogehoge",
        height: "",
        birthday: "",
        twitter:""
    }, 
    "han":{
        color:"linear-gradient(90deg,#a599a5 ,#d1ccb6)",
        color2:"#d1ccb6",
        name:"3010",
        title:"",
        discription:"hogehogehoge",
        height: "",
        birthday: "",
        twitter:""
    }, 
    "imo":{
        color:"#7a5f72",
        name:"いもうと",
        title:"真ハン足元",
        discription:"元人間の悪魔でBOSG愛好家。<br>TRPGとFPSを反復横跳びしている。<br>ちなみに姉ちゃんのガチ妹。",
        height: "146cm",
        birthday: "2/10",
        twitter:""
    }, 
    "kyomu":{
        color:"#890000",
        name:"虚無虚無ぷりん",
        title:"",
        discription:"hogehogehoge",
        height: "",
        birthday: "",
        twitter:""
    }, 
    "mike":{
        color:"#e58d1f",
        name:"若草みけ",
        title:"和を以て貴しとなす",
        discription:"大企業グループ傘下の警備会社に勤める一般人。<br>めっちゃ運が悪い。直近では人工肉培養プラントの警備に従事している。<br>好きなものは飯と睡眠、そしてゲーム。",
        height: "180cm",
        birthday: "10/24",
        twitter:""
    }, 
    "retoro":{
        color:"#555555",
        name:"れとろ",
        title:"ちいこきｲﾉﾁは健康にいい",
        discription:'貝殻と生き物全般が好きな性別不詳ﾂｰﾄﾝ伏し目。<br>抱えてる黒いおはぎの方が本来の姿。<br>定期的にちいこきｲﾉﾁを爆誕させる。',
        height: "10～192cm",
        birthday: "2/4",
        twitter:""
    }, 
    "sayu":{
        color:"#aaeddb",
        name:"白湯丸太",
        title:"",
        discription:"hogehogehoge",
        height: "",
        birthday: "",
        twitter:""
    }, 
    "shigure":{
        color:"#fb0304",
        name:"ふみしぐれ",
        title:"犯人はお前だーーーッ！！(誤)",
        discription:"運とパッションで強引に事件を解決させるエンターテイナー名探偵。<br>自称名探テイナー。<br>斧を持ち歩いてる不審者。",
        height: "166cm",
        birthday: "2/27",
        twitter:""
    }, 
    "takei":{
        color:"#89ead7",
        name:"夕ケイ",
        title:"ｳﾞｰｰｰｰｰｰｰｰｰｰｰｰｰｯ!!!!!!!!!!!!(威嚇)",
        discription:'猫耳ヘアとスプタンがアイデンティティのMtF。<br>3日でヤニに落ちたヤニカス。<br>舌の魔改造とタバコと激辛好きのせいで舌がんのリスクがピカイチ。',
        height: "180cm",
        birthday: "11/21",
        twitter:""
    }, 
    "via":{
        color:"#728474",
        name:"VIA",
        title:"",
        discription:"hogehogehoge",
        height: "",
        birthday: "",
        twitter:""
    }, 
    "yoro":{
        color:"#3a685e",
        name:"吉岡よろ",
        title:"郷に入っては郷に従え",
        discription:"糸目エセ関西弁の妖怪。<br>アユの塩焼きが好き。",
        height: "155cm",
        birthday: "5/8",
        twitter:""
    }, 
    "yupi":{
        color:"#0060ff",
        name:"木林ユピテル",
        title:"　一　撃　必　殺　",
        discription:'日々「究極の一撃」を求めて様々な兵器の開発に勤しむ研究者。<br>実戦運用とかコストとかそんなのは気にしない。<br>好きな物は酒とエナドリとタバコ',
        height: "150cm",
        birthday: "3/17",
        twitter:"https://twitter.com/6m10cm"
    },
    "zen":{
        color:"#c11dff",
        name:"漸化式",
        title:"cute aggression",
        discription:"社畜の化身。残業？いやいや自己研鑽。<br>単純な顔した小さいものがだぁいすき。<br>でも近寄るな、殴るぞ。",
        height: "175cm",
        birthday: "3/20",
        twitter:""
    }
}
