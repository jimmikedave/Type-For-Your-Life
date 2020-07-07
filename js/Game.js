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
        this.rounds = 0;
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
        this.matchPhrase()
        
    }
    //create a function to check if the phrase matches the input
    matchPhrase() {
        const selectedPhrase = document.getElementById('selected').textContent.split("");
        const inputPhrase = document.getElementById('keyInput').textContent.split("");
        const check = inputPhrase.length - 1;



        //match the last index value of the inputPhrase to the same index number value of the selectedPhrase
        if (inputPhrase[check] === selectedPhrase[check] && selectedPhrase.length === inputPhrase.length) {
            
            const resetSelected = document.getElementById('selected');
            const resetInput = document.getElementById('keyInput');
            const randomPhrase = this.getRandomPhrase().phrase;
            
            //resets selectedPhrase
            resetSelected.textContent = '';
            this.activePhrase = new Phrase(randomPhrase);
            this.activePhrase.addPhraseToDisplay();


            //resets inputPhrase
            this.input = [];
            resetInput.textContent = '';



            this.rounds += 1;


            console.log(this.rounds)
            console.log('you win!')

        } else if (inputPhrase[check] !== selectedPhrase[check]) {
            console.log('you lose')
        } 
        
    }

    //resets the game based on timer running or typo
    gameOver(bool) {
        if (bool) {

        } else {

        }
    }

    //reset the game


}