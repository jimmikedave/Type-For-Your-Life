class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
    //Displays the selected phrase
    addPhraseToDisplay() {
        const selectedPhrase = document.getElementById('selected');
        selectedPhrase.textContent = this.phrase;
    }
}