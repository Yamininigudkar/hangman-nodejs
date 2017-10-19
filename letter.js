 function Letter(alphabet)
{
	this.character = alphabet;
	this.appear = false;
	this.letterRender = function()
	{
		// return not log
		if(this.appear)
		{
			return this.character
		}
		else
		{
			//console.log("_")
			return ('\xa0'+"_"+ '\xa0')
		}

				
	}

	this.letterCompare = function(x)
	{
			if(x==this.character)
			{
				this.appear=true;
				return 1;

			}
			else
			{
				return 0;
			}
	}

	this.getLetter = function()
	{
		return this.character;
	}

	
};


 var a = new Letter("a")

 var b= new Letter("b");

a.letterCompare(b.getLetter());
 a.letterRender();


  module.exports = Letter;
