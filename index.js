$(document).ready(function() {
    //your code here
    $('.direct_show').each(function () {
        $(this).addClass("fade_in");
    });
    /*
    $('.later_show').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();
        var botOfWindow = $(document).height() - $(window).height() - $(window).scrollTop();

        if(topOfWindow >= imagePos-400){
            $(this).addClass("fade_in");
            $(this).removeClass("element-to-hide");
        }
    });*/
});

function ShowAbstract(id) {
  var x = document.getElementById(id);
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



$(window).scroll(function () {
    $('.later_show').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();
        var botOfWindow = $(document).height() - $(window).height() - $(window).scrollTop();
        var fixOffset = 600;
        /*if (imagePos + imageHeight*0.75 < botOfWindow) {        
            $(this).addClass("fade_in");
            $(this).removeClass("element-to-hide");
            $(this).removeClass("later_show");
        }*/
        if(topOfWindow >= imagePos - fixOffset){
            $(this).addClass("fade_in");
            $(this).removeClass("element-to-hide");
        }
    });
});

/*
$(window).scroll(function () {
    
    $('.later_show').each(function () {
        var scrollTop = _scrollTop();
        var elementTop = $(this).offsetTop;
        if (scrollTop > elementTop) {        
            $(this).addClass("fade_in");
            $(this).removeClass("element-to-hide");
        }
    });
});
*/
