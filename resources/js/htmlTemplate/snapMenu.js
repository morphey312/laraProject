$("span.menu").click(function () {
    $(".top-menu ul").slideToggle("slow", function () {});
});

$(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},900);
    });
});
