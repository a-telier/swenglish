var cardPlaceholders;
var cardPairs;
var cardUrls;

//selects all cards
const allCards = document.querySelectorAll(".cards")

//Screen 1 - start menu
$("#button-start").click(function() {
  $("#screen-1").fadeOut('slow');
  initializeCards();
});

//Screen 2 - cards game
$("#button-back").click(function() {
  $("#screen-1").fadeIn('fast');
  $(allCards).removeClass('cardSelected');
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
    cardPlaceholders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    cardPairs = ["blabar", "brod", "hallon", "kaffe", "kanelbulle", "appelpaj"];
    cardUrls = [];

    //this turns the cardPairs list into 8 elements
    cardPairs.forEach(cardPair => {
        //later on could add level that upgrades ex. "url('/assets/img/level- + (level + 1) + cardPair + ".jpg')"
        //after cardPlaceholders.lenght has runned once
        var cardImageUrl = "url('/assets/img/level-1/" + cardPair + ".jpg')";
        var cardTextUrl = "url('/assets/img/level-1/" + cardPair + "-text.jpg')";

        cardUrls.push(cardImageUrl, cardTextUrl);
    });

    //this calls the below function to create a list of unique generated numbers
    //the list will have as many positions as we have cards
    //the values in parenthesis are the parameter ex. integer number
    var uniqueCardToUseList = uniqueRandomList(cardUrls.length);

    //this fills in the placeholders
    //if index is bigger than 0 then keep looping as many times as cardPlaceholders.lenght
    for (let index = 0; index < cardPlaceholders.length; index++) {
        var cardPlaceholder = cardPlaceholders[index];
        var uniqueCardToUse = uniqueCardToUseList[index];

        var cardID = "#card-" + cardPlaceholder;
        var cardToUse = cardUrls[uniqueCardToUse];

        $(cardID).css('background-image', cardToUse);
        console.log("This is the cardID: " + cardID + "; and this is the background-image to use:" + cardToUse);

        //Find associated cardPair
        cardPairs.forEach(cardPair => {
            //This should only be twice once in the whole loop
            if (cardToUse.includes(cardPair)) {
                $(cardID).data("cardPair", cardPair);
            }
        });
    }
};

//displays styling over clicked elements of type card
for (const card of allCards) {
    card.addEventListener('click', function() {
        $(this).toggleClass("cardSelected");

        //selects all clicked cards
        const cardsClicked = document.querySelectorAll(".cardSelected")
        console.log("Cards currently selected: " + cardsClicked.length);
        
        if(cardsClicked.length == 2) {
            //You have selected 2 card - are they matching?
            let card1 = cardsClicked[0];
            let card2 = cardsClicked[1];

            if ($(card1).data("cardPair") == $(card2).data("cardPair")) {
                $(card1).removeClass("cardSelected").addClass("cardGreen");
                $(card2).removeClass("cardSelected").addClass("cardGreen");
                console.log("Good job!");
            } else {
                console.log("Bad job :(");
            }
            $(card1).removeClass("cardSelected");
            $(card2).removeClass("cardSelected");
        }
    })
}

