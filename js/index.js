//Screen 1 - start menu
$("#button-start").click(function() {
  $("#screen-1").fadeOut('slow');
  initializeCards();
});

//Screen 2 - cards game
$("#button-back").click(function() {
  $("#screen-1").fadeIn('fast');
});

function initializeCards(){
    var cardPlaceholders = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var cardPairs = ["brod", "appelpaj", "kaffe", "kanelbulle", "hallon"];
    var cards = [];

    //this turns the cardPairs list into 8 elements
    cardPairs.forEach(cardPair => {
        var cardImageUrl = "url('/assets/img/" + cardPair + ".jpg')";
        var cardTextUrl = "url('/assets/img/" + cardPair + "-text.jpg')";

        cards.push(cardImageUrl, cardTextUrl);
    });
    
    //this calls the below function to create a list of unique generated numbers
    //the list will have as many positions as we have cards
    //the values in parenthesis are the parameter ex. integer number
    var uniqueCardToUseList = uniqueRandomList(cards.lenght);


    //this fills in the placeholders
    //if index is bigger than 0 then keep looping as many times as cardPlaceholders.lenght
    for (let index = 0; index < cardPlaceholders.length; index++) {
        let cardPlaceholder = cardPlaceholders[index];
        let uniqueCardToUse = uniqueCardToUseList[index];

<<<<<<< HEAD
        let cardID = "#card-" + cardPlaceholder;
        let cardToUse = cards[uniqueCardToUse];

        $(cardID).css('background-image', cardToUse);
    }
};

    //this fills in the placeholders
//     cardPlaceholders.forEach(cardPlaceholder => {
//         var cardID = "#card-" + cardPlaceholder;
        
//         var cardNumberToUse = Math.floor(Math.random() * 8);
//         var cardToUse = cards[cardNumberToUse];

//         $(cardID).css('background-image', cardToUse);
        
//         console.log("image set on placeholder");
//     });
// }

function uniqueRandomList (listLenght){
    var uniqueList = [];
    var listAvailablePlaceholders = [];
    

    //this fills in the listAvailablePlaceholders with a unique value
    //we could have written a list, however if lenght of list changed = then code would not work anymore

    //the loop runs the times of listLenght ex. 14
    for (let index = 1; index <= listLenght; index++) {
        listAvailablePlaceholders.push(index);
    }

    //the loop runs the times of listLenght ex. 14
    for (let index = 1; index <= listLenght; index++) {
        //Creates a random number ex. between 0 and 13 as 14 positions startin with 0
        //Every time it runs the list removes 1 element from available values
        let randomNumber = Math.floor(Math.random() * (listAvailablePlaceholders.lenght - 1));

        //Removes the random number generated from the list of available placeholders
        let availablePlaceholder = listAvailablePlaceholders.pop(randomNumber);
=======
        /*if(placeHolderSet = false){*/
            $(cardID).css('background-image', cardToUse);
            /*placeHolderSet = true;
        }*/
        
        console.log("image set on placeholder");
    });
}
>>>>>>> 5d7455e581f0614b7fc0d13a7b8594f532e0bebd

        //Adds that random number within the available placeholders to the unique results list
        uniqueList.push(availablePlaceholder);

        console.log("This" + availablePlaceholder + "placeholder has been used");
    }
}