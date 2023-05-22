$(function(){
	$('html').keyup(function(e){
		switch(e.which){
			case 39: // Key[→]
            case 68: // D
            if(profileCheck()){
                rightgo();
            }
            break;

			case 37: // Key[←]
            case 65: // A
            if(profileCheck()){
                leftgo();
            }
			break;
            
            case 8: // backspace
            case 27:// esc
            if(profileCheck()){
                profileViewClose();
            }
            break;
		}
	});

    function profileCheck(){
        if($(".profile").css("display") == "none"){
          return false;
        } else 
        if($(".profile").css("display") == "block"){
          return true;
        }
    }
});