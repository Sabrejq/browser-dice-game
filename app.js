// First Player reaching 20 points wins

let roundScore, activePlayer, scores, gamePlaying = true;
init();


//Anon Function with event listener to roll dice on click 
document.querySelector('.btn-roll').addEventListener('click', function() {

    if(gamePlaying) {
 // Random number
 let dice = Math.floor(Math.random() * 6) + 1;

 // Display number
let diceImage = document.querySelector('.dice');
diceImage.style.display = 'block';
diceImage.src = '/images/dice-' + dice + '.png';

// Update round score if rolled number was not 1
if (dice !== 1) {
     roundScore += dice;
     document.querySelector('#current-' + activePlayer).textContent = roundScore;
 //     document.querySelector('.player-1-panel').classList.remove('active');
 //    document.querySelector('.player-0-panel').classList.add('active');
} 
else {
    // Next player
    nextPlayer();
}
    }
    
});

//Anon Function with event listener to save scored once dice is rolled 
document.querySelector('.btn-hold').addEventListener('click', function() {
if (gamePlaying) {
    // Add Current score to Global score
    scores[activePlayer] += roundScore;

    // Update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check for winner

    if(scores[activePlayer] >= 20){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }
    else {
        nextPlayer();

    }
}

});

// Reload page/new game
document.querySelector('.btn-new').addEventListener('click', init);
   // you could also just reload the page location.reload();

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
       roundScore = 0;
    
       document.getElementById('current-0').textContent = '0';
       document.getElementById('current-1').textContent = '0';
    //    document.querySelector('.player-0-panel').classList.remove('active');
    //    document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

 };


 function init() {

roundScore = 0;
activePlayer = 0;
scores = [0,0];
gamePlaying = true;


document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.getElementById('name-0').textContent ='Player 1';
document.getElementById('name-1').textContent ='Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

};



