class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    //Create a function to show the selected phrase
    addPhraseToDisplay() {
        const selectedPhrase = document.getElementById('selected');
        selectedPhrase.textContent = this.phrase;
    }

    //Reset the phrase if round won

}