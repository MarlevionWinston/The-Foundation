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
        document.getElementById("divMessage").textContent = "GGs, you win!";
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
// Code to move the meme around

// Create a variable to track the current interval id(returned from the setInterval function)
let intervalId = 0;
   // create the function to move the page
   function startImageMove(){
      let memeImage = document.getElementById("memeImage");
      // setInterval allows us to repeatedly run code
    intervalId = setInterval(function(){
         // get a random number for top and left coordinates
         let topCord = getRandomPixels();
         let leftCord = getRandomPixels();
      
         memeImage.style.left = leftCord + "px";
         memeImage.style.top = topCord + "px";
    
      }, 1000);  // 1000 miliseconds = 1 second

      // enable the stop button
      document.getElementById("btnStop").disabled = false;

      // disable the start button
      document.getElementById("btnStart").disabled = true
   }
   // Create the function that stops the image from moving
   function stopImageMove(){
      // call a built in JavaScript function that stops the setInterval from clearInterval
      clearInterval(intervalId);

       // enable the stop button
       document.getElementById("btnStop").disabled = true;
       // disable the start button
       document.getElementById("btnStart").disabled = false
   }

   // build a function to get a random number
   function getRandomPixels(){
      // 800 is the max number, adjust later to fit screen size
      return Math.floor(Math.random() * 800);
   }

//    Palindrome Checking Code
    // create the checkPalin function
    function checkPalin(event){
        // prevent the form from submitting
        event.preventDefault();

        let wordToTest = document.getElementById("txtWord").value;

        console.log("wordToTest=" + wordToTest);

        let bPalin = isPalin(wordToTest);

        // Create a shortcut to message div
        let divMessage = document.getElementById("divMessage");

        // Create a message for the user based on the value of bPalin
        if (bPalin){ 
            // show the user a message
            divMessage.textContent = "This is actually a Palindrome"
        }
        else{
            divMessage.textContent = "This is ain't a Palindrome my boy/girl"
        }
    }

    function isPalin(strToTest){
     
        strToTest = strToTest.toLowerCase();
        // Replace all spaces /g of spaces /\s with an empty string
        strToTest = strToTest.replace(/\s/g, "")

        console.log("strToTest=" + strToTest);
        // 

// Create new variable so can keep the original string from testing
        let strReverse = strToTest

    //    convert the reverse to an array, we will reverse the contents
    // so test would become tset and then convert the array back to a string
    strReverse = strReverse.split("").reverse().join("");

    console.log("strReverse=" + strReverse);

    // compare the original string with the reverse string
    // if they match, this function will return true, otherwise it will return false
    if (strReverse == strToTest){
        return true;    
    }

    // If we get to this line, it must not have been a palindrome, so return false; this is equal to the else above - include only 1 or the other
    return false;
    }