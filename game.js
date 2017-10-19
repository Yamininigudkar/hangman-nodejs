

var word = require("./wordbank.js")
var Word = require("./word.js")
var Letter = require("./letter.js")
var prompt = require("prompt")
var inquirer = require("inquirer")

console.log("****************************************");
console.log("")
console.log("Welcome to Pokemon Hangman!");
console.log("")
console.log("Guess a letter of the name of a Pokemon");
console.log("")
console.log("GOOD LUCK!");
console.log("****************************************");


// Function to run hangman game
var runGame = function()
{
	if(count< 20)
	{
	//making sure that the letterguessed is an alphabet
		var guess = 
		{
			properties:
			  {
				guessLetter:
				{
					pattern: /^[a-zA-Z]+$/,
					message: 'Guess letter  must be only letters',
					required: true
				}
			  }
		 };

		prompt.get(guess, function (err, result)//Prompting user to guess a letter
		{
		
			console.log("")
			console.log('  Your guess: ' + result.guessLetter);
			console.log("")

			var enteredLetter = new Letter(result.guessLetter);
			word.compareInputAndUpdateGuessedWord(enteredLetter);
			console.log(word.wordRender())
			if(word.hasWordMatched())
			{
				console.log("")
				console.log(" ########## You WON ############")
				return;
			}

			if(word.areGuessesExhausted())
			{
				console.log("")
				console.log("You lost !!!!!!!!!!!!")
				return;
			}

			count++;
			runGame()

		});//.get closing
	}//if closing
	else
	{
		console.log("")
		console.log("You lost !!!!!!!!!!!!")
		return;
	}//else closing
}//Rungame function closing


var count = 0;

var arrayLength = word.wordbank.wordBank.length 
var chosenwordNum = Math.floor(Math.random()*arrayLength)//choosing a random number from 0 to array length
var chosenWord = word.wordbank.wordBank[chosenwordNum];//Choosing a random word from the word array

var word = new Word(chosenWord) 
word.populateWord();
console.log("")
console.log(word.wordRender())
runGame();

 
