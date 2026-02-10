function playDiceGame(){
    // variable to hold our first roll goes here
    let roll1 = getRandomNumber();
    console.log("roll1 =", roll1)
    // variable of the second roll goes here
    let roll2 = getRandomNumber();
    console.log("roll2 =", roll2)
    // variable to hold the sum of the rolls
    let rollSum = roll1 + roll2;
    console.log("rollSum=" + rollSum)

    // Test for a win - duplicate even numbers = 2, 2 or 4, 6, 6
    // % is modulus - the result when using modulus is the remainder
    // if you divide a number by 2 and there is no remainder, the number is even
    if (roll1 == roll2 && roll1 % 2 == 0){
        // update the message div with the good news that the round was a win
        document.getElementById("divMessage").textContent = "GGs, You Win!";
    }
    // if the user rolls a 7 or 11, they lose
    else if(rollSum == 7 || rollSum == 11){
        // update the message div with the bad news that the round was a lose
        document.getElementById("divMessage").textContent = "Sorry bud, you lose";
    }
    // else is the catch all - if any other combination of the dice roll happened if it was a tie
    else{
        // update the message div with the ok news that the round was a tie
        document.getElementById("divMessage").textContent = "You tied (pushed apparently)";
    }
    document.getElementById("divRoll1").textContent = "Dice roll 1: " + roll1;
    document.getElementById("divRoll2").textContent = "Dice roll 2: " + roll2;
    document.getElementById("divSum").textContent = "Sum: " + rollSum
}
// function will generate a random number between 1 and 6
function getRandomNumber(){
    // get a random number between 0 and 1 and multiply by 6
    let number = Math.random() * 6;
    // this will round our number up, so we get a number between 1 and 6
    number = Math.ceil(number);
    // returning/passing back the random number
    return number;
}