//Screen 1 - start menu
$("#button-start").click(function() {
  $("#screen-1").fadeOut('slow');
  initializeCards();
});

//Screen 2 - cards game
$("#button-back").click(function() {
  $("#screen-1").fadeIn('fast');
});

function uniqueRandomList(listLenght){
    var uniqueList = [];
    var listAvailablePlaceholders = [];
    

    //this fills in the listAvailablePlaceholders with a unique value
    //we could have written a list, however if lenght of list changed = then code would not work anymore

    //the loop runs the times of listLenght ex. 14
    for (let index = 0; index <= listLenght; index++) {
        listAvailablePlaceholders.push(index);
    }

    //the loop runs the times of listLenght ex. 14
    for (let index = 0; index <= listLenght; index++) {
        //Creates a random number ex. between 0 and 13 as 14 positions startin with 0
        //Every time it runs the list removes 1 element from available values
        let randomNumber = Math.floor(Math.random() * (listAvailablePlaceholders.length - 1));
        console.log(randomNumber);

        //Removes the random number generated from the list of available placeholders
        let availablePlaceholder = listAvailablePlaceholders.splice(randomNumber, 1);

        //Adds that random number within the available placeholders to the unique results list
        uniqueList.push(availablePlaceholder);
    }

    return uniqueList;
}


function initializeCards(){
    var cardPlaceholders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var cardPairs = ["blabar", "brod", "hallon", "kaffe", "kanelbulle", "appelpaj"];
    var cards = [];

    //this turns the cardPairs list into 8 elements
    cardPairs.forEach(cardPair => {
        //later on could add level that upgrades ex. "url('/assets/img/level- + (level + 1) + cardPair + ".jpg')"
        //after cardPlaceholders.lenght has runned once
        var cardImageUrl = "url('/assets/img/level-1/" + cardPair + ".jpg')";
        var cardTextUrl = "url('/assets/img/level-1/" + cardPair + "-text.jpg')";

        cards.push(cardImageUrl, cardTextUrl);
    });

    //this calls the below function to create a list of unique generated numbers
    //the list will have as many positions as we have cards
    //the values in parenthesis are the parameter ex. integer number
    var uniqueCardToUseList = uniqueRandomList(cards.length);

    //this fills in the placeholders
    //if index is bigger than 0 then keep looping as many times as cardPlaceholders.lenght
    for (let index = 0; index < cardPlaceholders.length; index++) {
        var cardPlaceholder = cardPlaceholders[index];
        var uniqueCardToUse = uniqueCardToUseList[index];

        var cardID = "#card-" + cardPlaceholder;
        var cardToUse = cards[uniqueCardToUse];

        $(cardID).css('background-image', cardToUse);

        console.log("This is the cardID: " + cardID + "; and this is the background-image to use:" + cardToUse);
    }
};

console.log("cards")

// $("#card-1").hover(function(){
// 	$(this).addClass(redBorder).removeClass(noBorder);
// });