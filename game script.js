function funcAlert() /*Calling to the function I created in my HTML page */
{
    alert("You've started the game"); /* starting with an alert once a play clicks the button*/ 
    var randNum1 = Math.ceil(Math.random()*6); /* Creating a random integer that has a max of 6*/
    var randNum2 = Math.ceil(Math.random()*6); /* Creating a random integer that has a max of 6*/
    var sum = randNum1 + randNum2; /* Calculating the sum of my random numbers*/
    document.getElementById("diceRoll").innerHTML = "The first die is " + randNum1 + " and the second die is " + randNum2; /* Setting my HTML placeholders to be replaced with results from my function*/
    document.getElementById("diceSum").innerHTML = "The total of the roll is " + sum; /* Setting my HTML placeholders to be replaced with results from my function*/
    

    if (sum == 7) /* The next set of lines are a set of conditions that write a result into a variable gameResult which ultimately replaces the last placeholder in my HTML file*/
    {
      gameResult = "CRAPS - you lose!";
    }
    else if (sum == 11)
    {
      gameResult = "CRAPS - you lose!";
    }
    else if (randNum1 == randNum2 && randNum1 % 2 == 0)
    {
      gameResult = "You won!";
    }
    else
    {
      gameResult = "You pushed";
    }
    document.getElementById("gameResult").innerHTML = "The outcome of the game is " + gameResult; /* Replacing my last placeholder with the results of the game*/
}