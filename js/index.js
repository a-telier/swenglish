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
    var cardPairs = ["bröd", "hallon", "kaffe", "kanelbulle"];
    var cards = [];

    //this turns the cardPairs list into 8 elements
    cardPairs.forEach(cardPair => {
        var cardImageUrl = "url('/assets/img/" + cardPair + ".jpg')";
        var cardTextUrl = "url('/assets/img/" + cardPair + "-text.jpg')";

        cards.push(cardImageUrl, cardTextUrl);
    });

    //this fills in the placeholders
    cardPlaceholders.forEach(cardPlaceholder => {
        var cardID = "#card-" + cardPlaceholder;
        
        var cardNumberToUse = Math.floor(Math.random() * 8);
        var cardToUse = cards[cardNumberToUse];


        $(cardID).css('background-image', cardToUse);
        console.log("image set on placeholder");
    });
}


