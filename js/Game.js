class Game {
    constructor() {
        this.phrases = [
            {
            phrase: 'someone please revive me',
            time: 5000
            },
            {
            phrase: 'i lost my gulag',
            time: 4000
            },
            {
            phrase: 'do you want some soup',
            time: 4000
            },
            {
            phrase: 'thats a good doge',
            time: 4000
            },
            {
            phrase: 'console log',
            time: 3000
            },
            {
            phrase: 'my potions are too strong for you traveler',
            time: 8000
            },
            {
            phrase: 'i am going into battle',
            time: 5000
            },
            {
            phrase: 'ill take a potato chip and eat it',
            time: 5000
            },
            {
            phrase: 'bourgeois why would you care for more',
            time: 6000
            },
            {
            phrase: 'sun or shine by tydon',
            time: 4000
            }
        ];
        this.input = [];
        this.rounds = 0;
        this.timer 
        this.seconds
        this.gameActive = false;
        this.activePhrase = null;
    }

    //create a function to return a random phrase
    getRandomPhrase() {
        const random = Math.floor(Math.random() * this.phrases.length)
        this.seconds = this.phrases[random].time;
        return this.phrases[random]
    }

    //create a function to remove the overlay of the game and show the keyboard
    startGame() {
        const startScreen = document.getElementById('overlay');
        const randomPhrase = this.getRandomPhrase().phrase;
        const subTitle = document.getElementById('sub-title');
        const backgroundColor = document.getElementById('main-container');

        backgroundColor.style.backgroundColor = 'skyblue';

        subTitle.textContent = '';
        startScreen.style.display = 'none';

        //call the phrase class to add it to the game
        this.activePhrase = new Phrase (randomPhrase);
        this.activePhrase.addPhraseToDisplay();

        //start timer
        var that = this;
        this.timer = setTimeout(function(){ that.gameOver(false) }, this.seconds);

        //activate game
        this.gameActive = true;
    }

    //create a function that collects the typed and place it in an array
    inputArray(input) {

        if (this.gameActive) {
            this.input.push(input)
        
            const typedInput = this.input.join("");
            const keyInput = document.getElementById('keyInput');
            
            keyInput.textContent = typedInput;
            this.matchPhrase()
            console.log(this.input)
        }
        
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

            //reset timer
            clearTimeout(this.timer)
            var that = this;
            this.timer = setTimeout(function(){ that.gameOver(false) }, this.seconds);

            this.rounds += 1;

            console.log('round(s) won:' + this.rounds)

        } else if (inputPhrase[check] !== selectedPhrase[check]) {
            this.gameOver(true)
        }         
    }
   
    gameOver(bool) {
        if (bool) {
           const typoScreen = document.getElementById('overlay');
           const loseMessage = document.getElementsByClassName('title')[0];
           const surviveMessage = document.getElementById('game-over-message');
           const rstButton = document.getElementById('btn__reset');
           const resetInput = document.getElementById('keyInput');
           const subTitle = document.getElementById('sub-title');
           const survived = this.rounds;
           const backgroundColor = document.getElementById('main-container');

           backgroundColor.style.backgroundColor = 'darkred';

           //disable game
           this.gameActive = false;

           //stop timer
           clearTimeout(this.timer)
           
           const youLose = () => {
               typoScreen.style.display = '';
               loseMessage.textContent = 'GAME OVER';
               subTitle.textContent = 'Oops you made a typo!'
               surviveMessage.textContent = `You survived ${survived} round(s).`
               rstButton.textContent = 'Try Again?';
               this.input = [];
               resetInput.textContent = '';
               this.rounds = 0;
           }

           setTimeout(youLose, 2000)
            
        } else {
            const timeoutScreen = document.getElementById('overlay');
           const loseMessage = document.getElementsByClassName('title')[0];
           const surviveMessage = document.getElementById('game-over-message');
           const rstButton = document.getElementById('btn__reset');
           const resetInput = document.getElementById('keyInput');
           const subTitle = document.getElementById('sub-title');
           const survived = this.rounds;
           const backgroundColor = document.getElementById('main-container');

           backgroundColor.style.backgroundColor = 'darkred';

           //disable game
           this.gameActive = false;

           //stop timer
           clearTimeout(this.timer)
           

           const youLose = () => {
               timeoutScreen.style.display = '';
               loseMessage.textContent = 'GAME OVER';
               subTitle.textContent = 'YOU RAN OF TIME'
               surviveMessage.textContent = `You survived ${survived} round(s).`
               rstButton.textContent = 'Try Again?';
               this.input = [];
               resetInput.textContent = '';
               this.rounds = 0;
           }

           setTimeout(youLose, 2000)
        }
    }
}