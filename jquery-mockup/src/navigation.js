$(function(){
    
    $("#header-placeholder").load("_header.html", function () {
        $(".nav-link").removeClass("active");
        $("#signup-link").addClass("active");
    } );

});