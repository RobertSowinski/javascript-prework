var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;
var buttonpaper, buttonrock, buttonscissors;
/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == '2') {
    return 'papier';
  } else if (argMoveId == '3') {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('remis');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

buttonscissors = document.getElementById('button-scissors');
buttonscissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
buttonpaper = document.getElementById('button-paper');
buttonpaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonrock = document.getElementById('button-rock');
buttonrock.addEventListener('click', function(){ buttonClicked('kamień'); });

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(buttonrock + ' został kliknięty');
    playerMove = argButtonName;
    console.log('wybór ruchu gracza to: ' + playerInput);
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);

  }

