/* JimMikeDave
Beat the Timer */

const game = new Game();
const resetButton = document.getElementById('btn__reset');
const keyboard = document.getElementsByClassName('key');
const startScreen = document.getElementById('overlay');
const spaceBar = document.getElementById('space');

spaceBar.style.display = 'none';

/*
Removes the overlay to start the game
*/
resetButton.addEventListener('click', e => game.startGame())


//Add a keyboard press down function
document.addEventListener('keydown', e => {
    for(i = 0; i< keyboard.length; i += 1)
       if (e.key === keyboard[i].textContent) {
           game.inputArray(keyboard[i].textContent)
           keyboard[i].style.backgroundColor = "darkred";
       } else if (e.key === " " && keyboard[i].textContent === " ") {
           game.inputArray(keyboard[i].textContent)
           keyboard[i].style.backgroundColor = "darkred";
       }
})    

document.addEventListener('keyup', e => {
   for(i = 0; i< keyboard.length; i += 1)
       if (e.key === keyboard[i].textContent) {
           keyboard[i].style.backgroundColor = "white";
       } else if (e.key === " " && keyboard[i].textContent === " ") {
           keyboard[i].style.backgroundColor = "white";
       }
})

