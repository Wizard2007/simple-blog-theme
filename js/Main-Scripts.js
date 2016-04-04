$(document).ready(function(){    
    $(".fa-chevron-circle-up").on("click", 
    function(){ 
	    
	    $('html, body').animate({ scrollTop: 0}, 500); 
        
	    return false; 
    });    
    $(window).on("scroll", function (){
        if ($(window).scrollTop() > 0)
        {
            var lClassName = $(".fa-chevron-circle-up").attr("class");
            if (lClassName.indexOf("show-button-up")==-1){
                $(".fa-chevron-circle-up").addClass("show-button-up");   
            }
        }
        else 
        {
            $(".fa-chevron-circle-up").removeClass("show-button-up");   
        }
        
        return false;
    })
})
