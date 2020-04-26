//Screen 1 - start menu
$("#button-start").click(function() {
  $("#screen-1").fadeOut('slow');
});

//Screen 2 - cards game
$("#button-back").click(function() {
  $("#screen-1").fadeIn('slow');
});

$(".cards").mouseenter(function(){
  $(this).fadeOut();
});

$(".cards").mouseleave(function(){
  $(this).fadeIn();
});
