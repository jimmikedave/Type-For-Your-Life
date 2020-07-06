class Game {
    constructor() {
        this.phrases = [
            {phrase: 'someone please revive me'},
            {phrase: 'i lost my gulag'},
            {phrase: 'do you want some soup'},
            {phrase: 'thats a good doge'},
            {phrase: 'console log'}
        ];
        this.input = [];
        this.activePhrase = null;
    }

    //create a function to return a random phrase
    getRandomPhrase() {
        const random = Math.floor(Math.random() * 5)
        return this.phrases[random]
    }

    //create a function to remove the overlay of the game and show the keyboard
    startGame() {
        const startScreen = document.getElementById('overlay');
        const randomPhrase = this.getRandomPhrase().phrase;

        
        startScreen.style.display = 'none';

        //call the phrase class to add it to the game
        this.activePhrase = new Phrase (randomPhrase);
        this.activePhrase.addPhraseToDisplay();
    }

    //create a function that collects the typed and place it in an array
    inputArray(input) {
        this.input.push(input)
        
        const typedInput = this.input.join("");
        const keyInput = document.getElementById('keyInput');
        
        keyInput.textContent = typedInput;
        console.log(typedInput)
    }
    //create a function to check if the phrase matches the input


    //end the game if the timer runs down to 0

    //reset the game


}