$(document).scroll(function(){
    var targetOffset = 10;

    var $w = $(window).scroll(function(){
        if ( $w.scrollTop() >= targetOffset ) {   
            $('.navbar-change').addClass("white-navbar");
            $(".change-search-icon").attr("src","https://res.cloudinary.com/rgcorporate/image/upload/v1584717758/search-grey.svg");
            $(".change-logo").attr("src","https://res.cloudinary.com/rgcorporate/image/upload/v1584718357/logo-blacck.png");
        } 
        
        else {
            $('.navbar-change').removeClass("white-navbar");
            $(".change-search-icon").attr("src","https://res.cloudinary.com/rgcorporate/image/upload/v1584890108/search-icon-white.svg");
            $(".change-logo").attr("src","https://res.cloudinary.com/rgcorporate/image/upload/v1584890108/logo-group-white.svg");
        }
    });
});