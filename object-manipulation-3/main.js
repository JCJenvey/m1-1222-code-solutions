console.log('Lodash is loaded:', typeof _ !== 'undefined');

// declare a variable named players and assign it an array of objects with 2
// properties; a string named name and an array named hand
// declare a variable named deck and assign it an empty array
// declare a variable named suit and assign it an empty string
// begin a loop iterating 4 times
//   for each iteration:
//     check the iteration number:
//       if 0:
//         assign 'clubs' to suit
//         call the function card with suit as the argument and concatenate the
//         return to deck
//       if 1:
//         assign 'diamonds' to suit
//         call the function card with suit as the argument and concatenate the
//         return to deck
//       if 2:
//         assign 'hearts' to suit
//         call the function card with suit as the argument and concatenate the
//         return to deck
//       if 3:
//         assign 'spades' to suit
//         call the function card with suit as the argument and concatenate the
//         return to deck
// shuffle the deck
// log "Begin the Card Game" to the console
// call runGame with players and the number 2 as arguments
//
//
// declare a funtion named card with 1 argument; suit
//   declare a variable named subDeck and assign it an empty array
//   begin a loop iterating 13 times, starting from 1
//     for each iteration:
//       check if it is the second through tenth iteration
//         if true:
//           append an object containing the number of the current iteration and
//           suit as properties to subDeck
//         otherwise:
//           check the iteration number:
//             if 1:
//               append an object containing 'Ace' and suit as properties to subDeck
//             if 11:
//               append an object containing 'Jack' and suit as properties to subDeck
//             if 12:
//               append an object containing 'Queen' and suit as properties to subDeck
//             if 13:
//               append an object containing 'King' and suit as properties to subDeck
//   return subdeck
//
// declare a function called runGame with 2 arguments: players and maxCardsInHand
//   log "Starting game..." to the console
//   declare a variable named highScore and assign it the number 0
//   declare a variable named winner and assign it an empty string
//   declare a variable named count and assign it the number 0
//   begin a loop iterating an amount of times equal to maxCardsInHand
//     for each iteration:
//       begin a loop iterating an amount of times equal to the length of players
//         for each index in players:
//           append an object from deck at location count to current player's hand
//           increment count
//   begin a loop iterating an amount of times equal to the length of players
//     for each index in players:
//       call the function setScore with the current player as the argument
//       and assign the return to a new property called score
//       check if the player's score is larger than the value of highScore
//         if true:
//           assign the player's score to highScore
//           assign the player's name to winner
//   log to the console; "The highest score is " followed by highScore
//   log to the console; "The winner is " followed by winner followed by "!"
//   shuffle the deck
//
// declare a function named setScore with 1 argument: player
//   declare a variable named score and assign 0 as the value
//   begin a loop iterating an amount o times equal to the length of hand
//     for each index in hand:
//       check if the value of hand at the current index is NOT a string
//         if true:
//           add that value to score
//         otherwise, if the value is NOT equal to 'Ace'
//           add 10 to score
//         otherwise:
//           add 11 to score
//   set the player's hand to an empty array

var players = [{ name: 'James', hand: [] }, { name: 'Jimothy', hand: [] },
  { name: 'John', hand: [] }, { name: 'Jack', hand: [] }];
var deck = [];
var suit = '';

for (var i = 0; i < 4; i++) {
  switch (i) {
    case 0:
      suit = 'clubs';
      deck = _.concat(deck, getCards(suit));
      break;
    case 1:
      suit = 'diamonds';
      deck = _.concat(deck, getCards(suit));
      break;
    case 2:
      suit = 'hearts';
      deck = _.concat(deck, getCards(suit));
      break;
    case 3:
      suit = 'spades';
      deck = _.concat(deck, getCards(suit));
      break;
  }
}

deck = _.shuffle(deck);
console.log('Begin the Card Game');
runGame(players, 2);

function getCards(cardSuit) {
  var subdeck = [];
  for (var i = 1; i <= 13; i++) {
    if (i >= 2 && i <= 10) {
      subdeck.push({ rank: i, suit: cardSuit });
    } else {
      switch (i) {
        case 1:
          subdeck.push({ rank: 'Ace', suit: cardSuit });
          break;
        case 11:
          subdeck.push({ rank: 'Jack', suit: cardSuit });
          break;
        case 12:
          subdeck.push({ rank: 'Queen', suit: cardSuit });
          break;
        case 13:
          subdeck.push({ rank: 'King', suit: cardSuit });
          break;
      }
    }
  }
  return subdeck;
}

function runGame(players, maxCardsInHand) {
  console.log('Starting Game...');
  var highScore = 0;
  var winner = '';
  var count = 0;
  for (var i = 0; i < maxCardsInHand; i++) {
    for (var j = 0; j < players.length; j++) {
      players[j].hand.push(deck[count]);
      count++;
    }
  }
  for (i = 0; i < players.length; i++) {
    players[i].score = setScore(players[i]);
    if (players[i].score > highScore) {
      highScore = players[i].score;
      winner = players[i].name;
    }
  }
  console.log('The highest score is ', highScore);
  console.log('The winner is ', winner + '!');
  deck = _.shuffle(deck);
}

function setScore(player) {
  var score = 0;
  for (var i = 0; i < player.hand.length; i++) {
    if (typeof player.hand[i].rank !== 'string') {
      score += player.hand[i].rank;
    } else if (player.hand[i].rank !== 'Ace') {
      score += 10;
    } else {
      score += 11;
    }
  }
  player.hand = [];
  return score;
}
