
$(document).ready(function() {  
    
$('h1').fadeIn(1000);

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-150
        }, 800);
        return false;
      }
    }
  });

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

$(window).scroll(function(){
	$('.skillbar').each( function(i){
		var bottom = $(this).offset().top + $(this).outerHeight();
		var bottom_window = $(window).scrollTop() + $(window).height();

		if(bottom_window > bottom){
			$(this).animate({'opacity':'1'},800, function() {
				$('.skillbar').each(function(){
					$(this).find('.skillbar-bar').animate({width:$(this).attr('data-percent')
					}, 1000);
				});
			});
		}
	});
});

});
