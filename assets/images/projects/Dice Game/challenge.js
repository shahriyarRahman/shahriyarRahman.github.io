/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// a function that is called by another function is called callback function
// a function that does not have a name is called annonymous function


var scores, roundScore, activePlayer, gamePlaying, lastDice;


init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {

        //1. random number 
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result 
        diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3. Update the round score only IF the rolled number was not ONE  or erase global score if SIX in a row
        if (dice == 6 && lastDice == 6) {
            scores[activePlayer] = 0;
            roundScore = 0;
            // update the front end
            document.getElementById('current-' + activePlayer).textContent = roundScore;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }
        else if (dice !== 1) {
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;

        } else {
            //next player
            nextPlayer();
        }
        lastDice = dice;
    }

});
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        var winScore
        // adding score to MAIn score
        scores[activePlayer] += roundScore;

        // update the front end
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        var input = document.querySelector('.final-score').value;
        if (input) {
            winScore = input;
        } else {
            winScore = 100;
        }
        //check if player won the game 
        if (scores[activePlayer] >= winScore) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = roundScore;
    document.getElementById('current-1').textContent = roundScore;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDOM.style.display = 'none';
}

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'player 1'
    document.getElementById('name-1').textContent = 'player 2'
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}