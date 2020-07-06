class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    //Create a function to show the selected phrase
    addPhraseToDisplay() {
        const selectedPhrase = document.getElementById('selected');
        selectedPhrase.textContent = this.phrase;
    }

    //Create a function that displays the keyboard input

    //Create a function to check if the input matches the phrase

}