


//$('body').scrollspy({target: ".navbar"})



$('.nav-menu a[href*="#"]').not('.nav-menu [href="#"]').not('.nav-menu [href="#0"]').on('click', function() {    
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        // - 70 is the offset/top margin
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 70
        }, 200, function() {

            // Add hash (#) to URL when done scrolling (default click behavior), without jumping to hash
            if (history.pushState) {
                history.pushState(null, null, hash); 
            } else {
                window.location.hash = hash;
            } 
        });
        return false;    
    } // End if
});


if ($(window).width() > 991) {
	
$('.nav-menu a[href*="#"]').on('click',function(){
  $('.nav-menus-wrapper').removeClass('nav-menus-wrapper-open');
  //$(this).addClass('active');
});

} else{
$('.nav-menu a[href*="#"]').on('click',function(){
  $('.nav-menus-wrapper').removeClass('nav-menus-wrapper-open');
  $('.nav-overlay-panel').attr("style", "display:none")
  //$(this).addClass('active');
});
}








"use strict";







$(".parallax_image").each(function() {



    var attr = $(this).attr('data-image-src');



    if (typeof attr !== typeof undefined && attr !== false) {



        $(this).css('background-image', 'url(' + attr + ')');



        //$(this).css('background-size', 'cover');



        $(this).css('background-position', 'center');



        $(this).css('background-repeat', 'no-repeat');



    }



});







$(window).on('load', function() {



        if ($('.spinner-preloader-wrap').length) {



            $('.spinner-preloader-wrap').fadeOut(500);



        }



        if ($('.loader__svg').length) {



            setTimeout(stopPreloader, 900);



        }        



    });























$(document).ready(function() {



    if ($("#nav-transparent").length !== 0) {



        if ($(window).width() > 991) {



            $("#nav-transparent #main_logo").css("display", "none");



        } else {



            $("#nav-transparent #light_logo").css("display", "none");



        }



        $(window).scroll(function() {



            var scroll = $(window).scrollTop();



            if ($(window).width() > 991) {



                if (scroll > 30) {



                    $(".navigation-fixed-wrapper").addClass("nav-white-bg");



                    $("#nav-transparent #main_logo").css("display", "inline-block");



                    $("#nav-transparent #light_logo").css("display", "none");



                } else {



                    $(".navigation-fixed-wrapper").removeClass("nav-white-bg");



                    $("#nav-transparent #light_logo").css("display", "inline-block");



                    $("#nav-transparent #main_logo").css("display", "none");



                }



            }



        })



    }















    /*---------------------



    Overlay Nav



    -----------------------*/



    $("#navigation").navigation({



        offset: 20,



        overlayColor: "rgba(0,0,0,0.6)",



        effect: "slide"



    });







    /*---------------------



    Affix Nav



    -----------------------*/



    $("#navigation").fixed({



        offset: 20



    });







    /*---------------------



    Hidden Nav



    -----------------------*/







    if ($("#navigation-push").length !== 0) {



        if ($(window).width() > 991) {



            $("#navigation-push").find($(".nav-menus-wrapper").addClass("nav-menus-wrapper-open"));



            $("#navigation-push").find($(".nav-menus-wrapper-close-button").hide());



            $("#navigation-push").find($(".small-size-header").hide());



        } else {



            $("#main_logo").css("display", "none");



            $("#navigation-push").find($(".nav-menus-wrapper").removeClass("nav-menus-wrapper-open"));



        }



    }



















    /*------------------------------------



        8. Scroll To Top



    --------------------------------------*/







    $(window).scroll(function() {



        if ($(this).scrollTop() > 500) {



            $(".scroll-to-top").fadeIn(400);







        } else {



            $(".scroll-to-top").fadeOut(400);



        }



    });







    $(".scroll-to-top").on('click', function(event) {



        event.preventDefault();



        $("html, body").animate({



            scrollTop: 0



        }, 600);



    });















});



























$(window).scroll(function() {    



    var scroll = $(window).scrollTop();







    if (scroll >= 300) {



        $(".navigation-fixed-wrapper").addClass("PinkHeader");



    } else {



        $(".navigation-fixed-wrapper").removeClass("PinkHeader");



    }


	
	
	
	

});















