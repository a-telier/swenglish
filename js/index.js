//Screen 1 - start menu
$("#button-start").click(function() {
  $("#screen-1").fadeOut('slow');
  initializeCards();
});

//Screen 2 - cards game
$("#button-back").click(function() {
  $("#screen-1").fadeIn('slow');
});

function initializeCards(){
    var cardPlaceholders = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    cardPlaceholders.forEach(cardPlaceholder => {
        var cardID = "#card-" + cardPlaceholder;
        
        $(cardID).css('background-image', 'url("/assets/img/kanelbulle-text.jpg")');
        console.log("image set on placeholder");
    });
}


