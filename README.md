<h2>Swenglish</h2>
The name ‘swenglish’ comes from the mix of ‘swedish’ and ‘english! Unlike other memory games, Swenglish encourages you to learn a new language by matching images to their corresponding translation in Swedish.
The game consists of 3 levels - what to expect for ‘fika’, common swedish animals, and words related to foraging. Each level contains 12 cards and 6 different combinations each. To win the game you must pass all 3 levels!

<i>Hint (if you are new in Sweden): you can find the translation to English under each of the Swedish words ;) !</i>

<h2>UX</h2>
As an expat in Sweden I have found that many expats do not have time to learn the local language. Therefore, this site aims to turn learning a new language into a short game (1 minute!), and encourage the user to try again matching as many images to their corresponding translation as possible.
Ideally, this site’s primary users are expats with little time like myself or users curious about Sweden and the swedish language.
As a player:
I can start the game
I am able to start the game by clicking on the ‘START GAME’ button. I can then see ‘screen-1’ disappearing and ‘screen-2’ appearing.
Once in screen-2, I can see a batch of 12 cards of the same type facing down. Ex. level 1 has a reindeer on the front of the card.
I can see a countdown timer on the top right corner that starts as soon as ‘screen-2 is loaded. The counter starts at 60 and will count down to 0. If the counter reaches 0 the game is over.
I can interact with the cards
Flipping cards
To display the content behind the cards, I can hover over the cards on the desktop or click once over the cards in mobile. This will trigger the card to flip face up and reveal either an image or text. After 3 seconds, the card will return to its initial state.
I can repeat the action to get the cards to flip as many times as needed within the duration of the game.
Selecting cards
I can select a card by clicking over it once on desktop and twice on mobile. I can select up to 2 cards each time. 
The first card I have selected will remain selected - which I can see as it will have a black border around it - until I have selected a second card.
Matching cards
If the combination is correct both cards will display a green bird and the text ‘bra jobbat’ or ‘good job’.
If the combination is not correct the cards will be unselected - which I can see as they no longer have a black border around them.
Once two cards are matched, I am no longer able to select the cards and they stay face down displaying a green bird, until the remaining 5 combinations have been matched or the timer has gone out.
I can move to the next level
By matching the first 6 images to their corresponding translations, I can move to the second level up to a total of 3 levels.
Each time I start a new level, I can see different styling in the ‘face down’ cards and new card combinations being displayed as I advance in the game. Each level has a unique combination of cards.
I can display, select or match cards with the same commands/actions regardless of the level.
I can go back to the main menu
When in ‘screen-2’, I am able to go back to ‘screen-1’ by clicking on the button with the text ‘BACK’ in the top left corner.
I can then start the game again
By clicking on the ‘START GAME’ button again, I will see level 1 initialize again. Any cards we have previously selected or matched will not be registered, and the countdown timer will restart to 60.
I can see a new set of 12 cards ‘face up’ and by hovering over I can see that the images and text combinations corresponding to level 1 have taken a new placement/order.
I can win the game
By completing all 3 levels and matching a total of 18 different combinations, I am able to win the game. At this point, ‘screen-3 is displayed’ presenting a message to the player saying ‘congratulations!’.
I can run out of time
Regardless of the level I am in, if the counter is down to 0 and I have not matched all 18 combinations, ‘screen-3’ will appear and the text will display the number of cards I have matched.
I can try again
Once in ‘screen-3’ and regardless of whether I have win or not, I am able to start the game again by clicking on the button ‘TRY AGAIN’ which will take me back to ‘screen-2’ and initialize level 1 cards.
 
Features
The project consists of 3 different screens which the player can interact with. Each of the screens serves a role for the user - introduction, play time and outcome.
The detailed user stories in the previous section describe how the features are used to enhance the player’s experience.
Existing Features
Feature 1 - allows users X to achieve Y, by having them fill out Z
Navigation buttons - allows the player to navigate from the main menu to the game, and back by clicking on the buttons ‘START GAME’ and ‘BACK’. Once the 3 levels have been completed or the timer has run out, the player has the option of restarting the game by clicking on the button ‘TRY AGAIN’. 
Randomize card placements - allows the player to get the cards corresponding to the specific level in a different order each time the game is started.
Flipping cards - allows the player to interact with the cards facing down by either hovering over the ‘front side’ on desktop or clicking over the card on mobile to display the contents of the cards facing up. The cards will return to their original state after 3 seconds. The player is able to interact with the cards as many times as needed within the duration of the game.
Initialize up to 3 levels - allows the player to receive a new batch of 6 images and 6 translations each time the previous 6 combinations have been matched. Each level has a specific set of combinations which are placed at random each time the level is initialized. 
Countdown - allows the player to see a countdown being displayed at the top right of the game in ‘screen-2’. The countdown starts at 60 and counts down to 0. If the countdown has run out, the game ends and ‘screen-3’ fades in.
Score - allows the player to see how many cards have been matched during the duration of the gameplay whenever ‘screen-3’ is accessed. ‘Screen-3’ can be accessed either by completing all 18 combinations and passing all 3 levels or by letting the timer run out.
Features Left to Implement
Additional levels - allows the player to continue playing the game by accessing more levels with each different card combinations to match.
Pick-up where I left off - allows the player to go back to the last completed level by clicking on a button in ‘screen-3’.
Share your score - allows the player to share on their social network how many new words they have learned.
Recommend to a friend - allows the player to share the game with a friend by clicking on a button ‘Recommend to a friend’.
Upload your own combinations - allows the player to upload their own pictures and translations to a database. After approval by the administrator, the combinations are added to a new level.
Technologies Used
Languages
HTML:
Used to create the backbone and structure of the site.
CSS:
Used to customize the visual outcome of the site.
As well as to ensure via @media queries that the content displays nicely in all devices.
Javascript:
Used to define the game mechanics, navigation as well as the interactions with the different html and DOM elements.
Libraries
JQuery:
Used to be able to select elements in the HTML code based on their styling, and then modify them in Javascript.
Hammer:
Used to enable the double tap effect on mobile.
Bootstrap:
Used to provide key structural components such as Jumbotron, containers, navbar and carousel features, making the development process faster.
Graphical tools
Canva:
Used to edit all of the graphic material used on this site.
Other resources
Google Analytics:
Used to track users behavior and traffic to the site.
W3schools:
Used to clarify and solidify knowledge acquired during the course.
Stack Overflow:
Used as support when troubleshooting and fixing bugs.
 
Testing
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.
Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.
For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:
Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.
You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.
If this section grows too long, you may want to split it off into a separate file and link to it from here.
Deployment
To deploy this site, you must go into Github and select the Settings tab, then scroll down to the section named Github Pages. Then select ‘master’ as the main branch and click on save. 
My site is currently hosted under the following url: https://alex-rabi.github.io/swenglish/
Credits
Content
The function in javascript called ‘sleep’ which delays the flip effect was copied from Dan Dascalescu’s comment in Stack Overflow.
Media
Unsplash:
Used to download photographic elements to be used in the cards.
Canva:
Used to edit all of the graphic material used on this site.
Bensound:
Provided the music in the game.
Acknowledgements
I want to thank my partner Jonatan S. for his unconditional support.

