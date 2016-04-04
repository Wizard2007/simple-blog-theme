function CheckComment(comment){
    if (comment.trim() != '')
    {
         return true;
    }
    else 
    {
        return false;
    }
    
}

function CheckEmail(aemail){    
    var lmail = aemail.trim();            
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(lmail);
}

function CheckName(aname){
    if (aname.trim() != '')
    {
         return true;
    }
    else 
    {
        return false;
    }
    
}

function CheckWebSite(awebsite){
    if(awebsite.trim() == '') {return true};
    
    var re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    if (re.test(awebsite)){
        return true;    
    }
    else
    {
        re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
        if (re.test(awebsite)){
            return true;    
        }
        else
        {
            return false;
        }
    }
}

function onChangeComment(){
    var el = "#input-comment";
    lResult = CheckComment($(el).val());
    if (lResult)
    {
        $(el).css("border-color", "#fff");
    }
    else 
    {
        $(el).css("border-color", "red");
    } 
    return lResult;
}

function onChangeName(){
    var el = "#input-name";
    lResult = CheckName($(el).val());
    if (lResult)
    {
        $(el).css("border-color", "#fff");
    }
    else 
    {
        $(el).css("border-color", "red");
    } 
    return lResult;
}

function onChangeEmail(){
    var el = "#input-email";
    var lResult = CheckEmail($(el).val());
    if (lResult)
    {
        $(el).css("border-color", "#fff");
    }
    else 
    {
        $(el).css("border-color", "red");
    } 
    return lResult;
}

function onChangeWebSite(){
    var el = "#input-web-site";
    var lResult = CheckWebSite($(el).val());
    if (lResult)
    {
        $(el).css("border-color", "#fff");
    }
    else 
    {
        $(el).css("border-color", "red");
    }   
    return lResult;
}

function onSubmit(){
    var lResult = onChangeName();
    if (lResult){lResult = onChangeEmail();}
    else {onChangeEmail();}
    if (lResult){lResult = onChangeWebSite();}
    else {onChangeWebSite();}
    if (lResult){lResult = onChangeComment();}
    else {onChangeComment();}    

    if (!lResult){
        event.preventDefault();        
    }
    else 
    {
        return true;
    }    
}
$(document).ready(function(){    
    $("#input-name").on("change", onChangeName);
    $("#input-email").on("change", onChangeEmail);    
    $("#input-web-site").on("change", onChangeWebSite);
    $("#input-comment").on("change", onChangeComment);
    
        
    $("#post-comment").on("click", function(event){
        if(onSubmit())
        {
            event.preventDefault(); // выключaем стaндaртную рoль элементa
            $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
                function(){ // пoсле выпoлнения предъидущей aнимaции
                    $('#modal_form') 
                        .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                        .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
            });
        }
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('#overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	});        
})
