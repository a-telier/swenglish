## Swenglish
The name ‘swenglish’ is where ‘swedish’ and ‘english' meet! Unlike other memory games, Swenglish encourages you to learn a new language by matching images to their corresponding translation in Swedish.
Each level contains 12 cards and 6 different combinations each. To win the game you must pass all 3 levels!

*Hint (if you are new in Sweden): you can find the translation to English under each of the Swedish words ;)*


## UX
As an expat in Sweden I have found that many expats do not have time to learn the local language. Therefore, this site aims to turn learning a new language into a short game (1 minute!), and encourage the user to try again matching as many images to their corresponding translation as possible.
Ideally, this site’s primary users are expats with little time like myself or users curious about Sweden and the swedish language.

As a player:
1.   _*I can start the game*_
   *  I am able to start the game by clicking on the ‘START GAME’ button.
   *  I can then see ‘screen-1’ disappearing and ‘screen-2’ appearing.
   *  Once in screen-2, I can see a batch of 12 cards of the same type facing down. Ex. level 1 has a reindeer on the front of the card.
   *  I can see a countdown timer on the top right corner that starts as soon as ‘screen-2 is loaded. The counter starts at 60 and will count down to 0. If the counter reaches 0 the game is over.

2.   _*I can interact with the cards*_
   1. *Flipping cards*
    *   To display the content behind the cards, I can hover over the cards on the desktop or click once over the cards in mobile. This will trigger the card to flip face up and reveal either an image or text. After 3 seconds, the card will return to its initial state.
    *   I can repeat the action to get the cards to flip as many times as needed within the duration of the game.

   2. *Selecting cards*
    *   I can select a card by clicking over it once on desktop and twice on mobile. I can select up to 2 cards each time. The first card I have selected will remain selected - which I can see as it will have a black border around it - until I have selected a second card.

   3. *Matching cards*
    *   If the combination is correct both cards will display a green bird and the text ‘bra jobbat’ or ‘good job’.
    *   If the combination is not correct the cards will be unselected - which I can see as they no longer have a black border around them.
    *   Once two cards are matched, I am no longer able to select the cards and they stay face down displaying a green bird, until the remaining 5 combinations have been matched or the timer has gone out.

3. *I can move to the next level*
    *   By matching the first 6 images to their corresponding translations, I can move to the second level up to a total of 3 levels. Each time I start a new level, I can see different styling in the ‘face down’ cards and new card combinations being displayed as I advance in the game. Each level has a unique combination of cards.
    *   I can display, select or match cards with the same commands/actions regardless of the level.

4. *I can go back to the main menu*
    *   When in ‘screen-2’, I am able to go back to ‘screen-1’ by clicking on the button with the text ‘BACK’ in the top left corner.

5. *I can then start the game again*
    *   By clicking on the ‘START GAME’ button again, I will see level 1 initialize again. Any cards we have previously selected or matched will not be registered, and the countdown timer will restart to 60.
    *   I can see a new set of 12 cards ‘face up’ and by hovering over I can see that the images and text combinations corresponding to level 1 have taken a new placement/order.

6. *I can win the game*
    *   By completing all 3 levels and matching a total of 18 different combinations, I am able to win the game. At this point, ‘screen-3 is displayed’ presenting a message to the player saying ‘congratulations!’.

7. *I can run out of time*
    *   Regardless of the level I am in, if the counter is down to 0 and I have not matched all 18 combinations, ‘screen-3’ will appear and the text will display the number of cards I have matched.

8. *I can restart the game*
    *   Once in ‘screen-3’ and regardless of whether I have win or not, I am able to start the game again by clicking on the button ‘TRY AGAIN’ which will take me back to ‘screen-2’ and initialize level 1 cards.
 
Mockups of the design process can be found here: https://drive.google.com/open?id=1VwXebNk9Xl_hdpnm_YmLz9f9v8Ovr5VX

## Features
The project consists of 3 different screens which the player can interact with. Each of the screens serves a role for the user - introduction, play time and outcome.
The detailed user stories in the previous section describe how the features are used to enhance the player’s experience.

_*Existing Features*_
1. Navigation buttons - allows the player to navigate from the main menu to the game, and back by clicking on the buttons ‘START GAME’ and ‘BACK’. Once the 3 levels have been completed or the timer has run out, the player has the option of restarting the game by clicking on the button ‘TRY AGAIN’. 
2. Randomize card placements - allows the player to get the cards corresponding to the specific level in a different order each time the game is started.
3. Flipping cards - allows the player to interact with the cards facing down by either hovering over the ‘front side’ on desktop or clicking over the card on mobile to display the contents of the cards facing up. The cards will return to their original state after 3 seconds. The player is able to interact with the cards as many times as needed within the duration of the game.
4. Initialize up to 3 levels - allows the player to receive a new batch of 6 images and 6 translations each time the previous 6 combinations have been matched. Each level has a specific set of combinations which are placed at random each time the level is initialized. 
5. Countdown - allows the player to see a countdown being displayed at the top right of the game in ‘screen-2’. The countdown starts at 60 and counts down to 0. If the countdown has run out, the game ends and ‘screen-3’ fades in.
6. Score - allows the player to see how many cards have been matched during the duration of the gameplay whenever ‘screen-3’ is accessed. ‘Screen-3’ can be accessed either by completing all 18 combinations and passing all 3 levels or by letting the timer run out.
7. Analytics tracking - allows to collect information about how many people have visited the site or completed the game.

_*Features Left to Implement*_
1. Additional levels - allows the player to continue playing the game by accessing more levels with each different card combinations to match.
2. Pick-up where I left off and level selector - allows the player to go back to the last completed level by clicking on a button in ‘screen-3’.
3. Share your score - allows the player to share on their social network how many new words they have learned.
4. Upload your own combinations - allows the player to upload their own pictures and translations to a database. After approval by the administrator, the combinations are added to a new level.


## Technologies Used
*Languages*
*   HTML:
Used to create the backbone and structure of the site.
*   CSS:
Used to customize the visual outcome of the site.
As well as to ensure via @media queries that the content displays nicely in all devices.
*   Javascript:
Used to define the game mechanics, navigation as well as the interactions with the different html and DOM elements.


*Libraries*
*   JQuery:
Used to be able to select elements in the HTML code based on their styling, and then modify them in Javascript.
*   Bootstrap:
Used to provide key structural components such as Jumbotron, containers, navbar and carousel features, making the development process faster.
*   HammerJS (in progress):
The purpose of using this library was to enhance mobile experience of the game via a library of mobile-first animations and triggers. Today, the library is installed/linked, but not in use.

*Other tools*
*   Gitpod:
Used as the coding environment for this project.
*   Github:
Used to store all repositories for this project, as well as to deploy the site via GitPages.
*   W3schools:
Used to clarify and solidify knowledge acquired during the course.
*   Stack Overflow:
Used as support when troubleshooting and fixing bugs.
*   Canva Online Editor:
Used to edit all of the graphic material used on this site.
*   Google Analytics:
Used to track users behavior and traffic to the site.
*   Google tag manager (in progress):
Used to add custom triggers to track the players' specific behavior (ex. click of the start button). Today the code is installed in the header and body elements, but it is not currently in use.

 
## Testing
The code has been tested via the below online validators and no major errors have been raised.

- [W3C Markup Validation Service](https://validator.w3.org/) for HTML;
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) for CSS;
- [JSHint](https://jshint.com/) for JavaScript.

_*The content resizes properly*_
The code has been tested via Google Chrome Developer Tools in several mobile devices from iphone 5s to ipad Pro. In addition, the resizing and game-play has also been tested in real devices both iOs and Android (iPhone 7 and Samsung Galaxy).

_*Game play works properly*_
*As a player, on desktop:*
   1. I am able to access the game by clicking on the start button.
   2. As soon as I start the game, music starts playing. 12 cards are displayed facing down and the timer starts counting down.
   3. I am able to hover over the cards to see their contents.
   4. I am able to interact with the cards by clicking on them. If the answer is correct, the card styling turns to a green bird, while if the answer is wrong a shake animation is displayed.
   5. A message is displayed at the bottom of the screen each time that I interact with the cards.
   6. If any cards have been matched, the text at the bottom updates and displays the number of words matched.
   7. If I manage to move to the next levels, the cards styling adjusts according to the level, and the new batch of cards is placed randomly.
   7. After the timer has run out, I am redirected to the last screen where I am provided with my score and the option to TRY AGAIN.
   8. I can click on TRY AGAIN, which restarts the game from level 1 and see how far I can get. The counter is back to 0, the timer restarts and the new batch of cards is placed randomly again.
   
*As a player, on mobile:*
Most of the steps above are the same in mobile, however when using touch screens (most devices today) the trigger set is a tap event. The difference in UI:
   1. To interact with the cards, I can tap once to reveal the card's contents and then tap one more time while the card is facing up to select the card and its potential match.

_*Tracking code works properly*_
   * Once deployed, the site started tracking visitors reflected on Google Analytics traffic.
   * This was tested from both mobile and desktop devices.


## Deployment
1. To deploy this site, one must go into Github.
2. Select the Settings tab from the menu.
3. Scroll down to the section named Github Pages. 
4. Make sure to select ‘master’ as the main branch and click on save. 

This game is currently available at: https://a-telier.github.io/swenglish/
The live site reflects the latest committed version.

## Credits
_*Content*_
*   w3schools:
Used for support to solidify learnings, clarify syntax of different languages as well as to browse through different CSS styling options such as animations or media queries.
*  Fellow student bravoalpha79:
Project MindGym which I found via slack served as inspiration when it comes to organizing my documentation and readme file.

_*Media*_
*   Unsplash:
Used to download photographic elements to be used in the cards.
*   Canva:
Used to provide to style the card elements.
*   Bensound:
Provided the music in the game.


## Acknowledgements
I want to thank the Unsplash community for their beautiful graphic material, and especially I would like to thank my partner Jonatan S.J. his unconditional support.
