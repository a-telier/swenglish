//  VARIABLES
// cards randomizing
var cardPlaceholders;
var cardPairs;
var cardUrls;

//countdown timer
var time = 60;
var timer;

//counter of matched words
var wordsPaired;
var totalWordsToPair = 18;
var currentLevel;

//  SELECTORS
//selects all cards
const allCards = document.querySelectorAll(".cards")

//selects all cards-front
const allCardsFront = document.querySelectorAll(".card-front")
//selects all cards-back
const allCardsBack = document.querySelectorAll(".card-back")
//selects all cards selected
const cardsSelected = document.querySelectorAll(".cardSelected")
//selects all cards that have a correct match
const allCardsGreen = document.querySelectorAll('.cardGreen')

//selects the countdown element
const countdown = document.getElementById('countdown')
//selects the text element in screen 3
const wordsPairedText = document.getElementById('wordsPaired-text')


//  BUTTONS
//Screen 1 - start menu to game
$("#button-start").click(function() {
    $("#screen-1").fadeOut('slow');
    $(allCardsFront).removeClass('flip');
    var x = document.getElementById("audioHej");
    x.play();
    initializeGame(1);
});

//Screen 2 - from game back to start menu
$("#button-back").click(function() {
    $("#screen-1").fadeIn('fast');
    $(allCardsFront).removeClass('flip');
    // initializeGame(1);
    clearInterval(timer);
});

//Screen 3 - from last screen back to game
$("#button-try-again").click(function(){
    $("#screen-2").fadeIn('fast');
    $(allCardsFront).removeClass('flip');
    initializeGame(1);
})

//  COUNTDOWN TIMER
function updateCountDown() {
    time--;
    countdown.innerHTML = `${time}`;

    // console.log("Time left: " + time);

    if (time == 0 && currentLevel >= 1 ) {
        clearInterval(timer);
        $('#screen-2').fadeOut('fast');
        $('#screen-3').fadeIn('fast');

        $('#wordsPaired-text').text("You have matched " + `${wordsPaired}` + " out of " +`${totalWordsToPair}`+ " words, do you want to try again?");
        // console.log("I have cleared the interval");
    }
}


//  FUNCTIONS TO INITALIZE GAME
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

function initializeGame (){

    //update countdown
    time = 61;
    updateCountDown();

    //removing current countdown to not make a second one
    clearInterval(timer);
    timer = setInterval(updateCountDown, 1000);

    wordsPaired = 0;
    //we are calling for parameter: level 1 to start
    initializeCards(1);
}

function initializeCards(levelNumber){
    cardPlaceholders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    cardUrls = [];
    currentLevel = levelNumber;

    //clears all the styling
    $(allCards).removeClass('cardSelected cardGreen');

    //logic depending on which level we are at
    if (levelNumber == 1){
        cardPairs = ["vaffla", "brod", "kladkakka", "kaffe", "kanelbulle", "appelpaj"];
        $(".card-front").css("background-image", "url('assets/img/card-reindeer.jpg')");
    } else if (levelNumber == 2){
        cardPairs = ["alg", "anka", "bjorn", "hare", "radjur", "rav"];
        $(".card-front").css("background-image", "url('assets/img/card-fox.jpg')");
    } else if(levelNumber == 3){
        cardPairs = ["hallon", "blabar", "blommor", "fagel", "skog", "svampar"];
        $(".card-front").css("background-image", "url('assets/img/card-hare.jpg')");
    }

    //this turns the cardPairs list into 8 elements
    cardPairs.forEach(cardPair => {
        //later on could add level that upgrades ex. "url('/assets/img/level- + (level + 1) + cardPair + ".jpg')"
        //after cardPlaceholders.lenght has runned once
        var cardImageUrl = "url('assets/img/level-" + levelNumber + "/" + cardPair + ".jpg')";
        var cardTextUrl = "url('assets/img/level-" + levelNumber + "/"  + cardPair + "-text.jpg')";

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
        // console.log("This is the cardID: " + cardID + "; and this is the background-image to use:" + cardToUse);

        //Find associated cardPair
        cardPairs.forEach(cardPair => {
            //This should only be twice once in the whole loop
            if (cardToUse.includes(cardPair)) {
                $(cardID).data("cardPair", cardPair);
            }
        });
    }
};


//  CARDS GAMEPLAY INTERACTIONS
//displays styling over clicked elements of type card
for (const card of allCards) {
    card.addEventListener('click', function() {
        $(this).addClass('cardSelected');

        const cardsSelected = document.querySelectorAll(".cardSelected")

        console.log("Number of cards selected: " + cardsSelected.length);
        
        if(cardsSelected.length == 2) {
            //You have selected 2 card - are they matching?
            let card1 = cardsSelected[0];
            let card2 = cardsSelected[1];

            if ($(card1).data("cardPair") == $(card2).data("cardPair")) {
                $(card1).removeClass("cardSelected").addClass("cardGreen");
                $(card2).removeClass("cardSelected").addClass("cardGreen");
                wordsPaired++;
                $("#feedback").text("You have matched: " + `${wordsPaired}` + " words(s)!").css("animation", "showAndHide 5s");
                // console.log("Good job - you have paired " + wordsPaired + " words!");
            } else {
                $(card1).removeClass("cardSelected animationShake");
                $(card2).removeClass("cardSelected animationShake");

                requestAnimationFrame(function() {
                    $(card1).addClass("animationShake");
                    $(card2).addClass("animationShake");
                });

                $("#feedback").text("Not a match - try again!").css("animation", "showAndHide 5s");
                // console.log("Try again - this is not the right match for this card!");
            }

        }
        //this is how you win
        if(wordsPaired == 6 && currentLevel == 1) {
            initializeCards(2)
            $(allCardsFront).removeClass('flip');
            $('#wordsPaired-text').text("You have matched " + `${wordsPaired}` + " words out of " + `${totalWordsToPair}` + ", do you want to try again?");
        } else if (wordsPaired == 12 && currentLevel == 2) {
            initializeCards(3)
            $(allCardsFront).removeClass('flip');
            $('#wordsPaired-text').text("Good job! You have matched " + `${wordsPaired}` + " words out of " + `${totalWordsToPair}` + ", do you want to try again?");
        } else if (wordsPaired == 18 && currentLevel == 3) {
            $("#screen-2").fadeOut('slow');
            $("#screen-3").fadeIn('fast');
            $('#wordsPaired-text').text("Congratulations! You have matched all " + `${wordsPaired}` + " words, do you want to try again?");
            wordsPaired = 0;
        }
    })
}

// STYLING EFFECTS

// flip effect desktop
for (const cardFront of allCardsFront) {
    cardFront.addEventListener('mouseover', function() {
        console.log("a mouseover event has been triggered, resulting in a flip");
        $(this).addClass('flip', 2000);
    });
    
    cardFront.addEventListener('mouseout', function() {
        console.log("a mouseout event has been triggered, resulting in a flip back after 3 sec");

        setTimeout(function(){
            console.log("3 seconds have passed, executing flip back");
            if (!(
                $(cardFront).prev().hasClass('cardSelected')
                ||
                $(cardFront).prev().hasClass('cardGreen')
            )) {
                $(cardFront).removeClass('flip');
                console.log('removeclass flip');
            }
        }, 3000);
    });
}
