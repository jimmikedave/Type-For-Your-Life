class Game {
    constructor() {
        this.phrases = [
            {phrase: 'someone please revive me'},
            {phrase: 'i lost my gulag'},
            {phrase: 'do you want some soup'},
            {phrase: 'thats a good doge'},
            {phrase: 'console log'}
        ];
    }

    //create a function to return a random phrase
    getRandomPhrase() {
        return console.log(this.phrases)
    }

    //create a function to remove the overlay of the game and show the keyboard
    startGame() {
        const startScreen = document.getElementById('overlay');

        startScreen.style.display = 'none';

    //call the phrase class to add it to the game
    }

    
    //create a function to check if the phrase matches the input


    //end the game if the timer runs down to 0

    //reset the game


}