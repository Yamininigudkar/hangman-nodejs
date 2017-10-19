var Letter = require("./letter.js")

function Word(targetWord)
{
	//this.targetWord = targetWord;
	this.guessedWord = "";
	this.letterArray = [];
	this.wordLen = 0;
	this.numofGuesses = 10;
	this.guessedRight = false;
	this.isWordGuessed = true;
	
///Function to fill the letterArray with the targetWord letter objects
	this.populateWord = function()
	{
		this.wordLen = targetWord.length;
		for (var i = 0; i < targetWord.length; i++)
		{
			var a = new Letter(targetWord[i])
			this.letterArray.push(a)
			 
		}
		 				
	}

	// Function to return a string of "_" equal to letterArraylength
	this.wordRender = function() 
	{
		
		this.guessedWord = "";
		for (var i=0; i < this.letterArray.length; i++)
		{
			this.guessedWord += this.letterArray[i].letterRender();
						
		}
		return this.guessedWord
		
	};

	//Function to compare the input letter with the letters in the target word
	this.compareInputAndUpdateGuessedWord = function(inputLetterObj)
	{
		//Write logic to run a for loop for len of word
		for(i=0;i<this.wordLen;i++)
		{

			
			if ((inputLetterObj.letterCompare(this.letterArray[i].getLetter())))
			{
				this.letterArray[i].appear = true;
				this.guessedRight = true;
				console.log("")
				console.log("*** Correct Guess ***")
				
			}
			// No need to do anything if letter does not match the guess
		}
		//If guess is wrong decrement the value of number of guesses
		if(!this.guessedRight)
		{
			this.numofGuesses--;
			console.log("")
			console.log("Wrong guess!! number of guesses remaining : " + this.numofGuesses)
		}
		this.guessedRight = false;//Reset flag for next function call


	}
	// Function to check if the guesses are exhausted
	this.areGuessesExhausted = function()
	{
		if(this.numofGuesses == 0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	// Checking if the word has been guessed correctly
	this.hasWordMatched = function()
	{
		this.isWordGuessed = true;
		for(var i=0;i<this.letterArray.length;i++)
		{
			if (!this.letterArray[i].appear) 
			{
				this.isWordGuessed = false;
			}
			
		}

		if(this.isWordGuessed)
		{
			return true;
		}
		else
		{
			return false;
		}
	}//hasWordMatched closing
}//Word closing


 module.exports = Word;