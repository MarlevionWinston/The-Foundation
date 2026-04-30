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
// Input Validation correction
// this function will validate the user input based on the requirement of the client (assignment requirements)
function validate(){
    // First Name variable
    let FirstName = document.getElementById("txtFirstName").value;
    // show the first name in console
    console.log("FirstName="+FirstName);
// Last Name Variable
let LastName = document.getElementById("txtLastName").value;
// Show the last name in the console
console.log("LastName="+LastName);
// Zip code variable
let zip = document.getElementById("txtZip").value;
// Show the zip in the console
console.log("zip="+zip);
// create a variable to hold the first name + " " + last name
let fullName = FirstName + " " + LastName;

console.log("fullName="+fullName);
// create a variable to hold the message we will show to the user
let message = ""
// Make sure the full name does not exceed 20 characters
if (fullName.length == 1 || fullName.length > 20){
    message = "Please enter a name that is less than 20 characters.";
}
else if (zip.length != 5){
    message = "Please enter a zip code that is exactly 5 characters.";
}
// otherswise, the user has entered everything correctly, so show them a message that says the secret word
else{
    message= "The secret word is Validation";
}

console.log("message=" + message);

// Display message
document.getElementById("divMessage").textContent = message;
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

     // this functio will add ana udio element to the page so we can listen to a sound clip
     function addAudio(){
        // this is the shortcut/nickname for the div that would hold the audio
        let divAudio = document.getElementById("divAudio");
        // creat an audio HTML element using JavaScript
        let audioElement = document.createElement("audio");
        // set the attributes of our new HTML element
        // add an ID so we can more easily work with this element
        audioElement.setAttribute("id", "myAudio");
    
        // add the file name as the source
        // if you are using the sound file provided in the assignment, your code will look like this
        audioElement.setAttribute("src", "us-lab-background.mp3")
        // Highly Suggested - add controls
        audioElement.setAttribute("controls", "controls");
        // set the volume to half by default
        audioElement.volume = 0;
        // add our new HTML audio element to the div that will host it
        divAudio.appendChild(audioElement);
        // disallow the user from clicking the add audio button now that it has been added to the webpage
        document.getElementById("btnAddAudio").hidden = true;
        // make the play and pause butoons appear
        document.getElementById("btnPlayAudio").hidden = false;
        document.getElementById("btnPauseAudio").hidden = false;
        }
    
        // create the function so that we can play the audio
        function playAudio(){
            // create a shortcut/nickname to the audio element that we created the addAudio function
            let myAudio = document.getElementById("myAudio");
            // let's play the sound!
            myAudio.play();
        }
    
        // create the function so that we can stop playing the audio
        function pauseAudio(){
            // create a shortcut/nickname to the audio element that we created the addAudio function
            let myAudio = document.getElementById("myAudio");
            // let's pause the sound!
            myAudio.pause();
        }

         // This is our array/list of plants - add as many as you like
         let arrPlants = ["Cactus", "Flower", "Aloe", "Rose", "Strawberry", "Tree", "Hydranga", "Tomato", "Basil", "Mint",];
         // Shortcut to the unorded list that will hold the plants
         let ulPlants = document.getElementById("ulPlants");
         // this function will loop through the plants in the array and add them to the ulPlants unorderd list as list items
         function showPlants(){
             
             // forEach is just another way of looping through the array
             arrPlants.forEach(function(plant, index){
                 // create a list item to held the current plant name as we loop through
                 let li = document.createElement("li");
                 // set the text of the list item to the current plant name
                 li.textContent = plant;
 
                 // Now add the plant to the list
                 ulPlants.appendChild(li);
             });
         }
 
         // the show plant function will be called 1 time when the page loads
         showPlants();
 
        /* let plant1 = "Cactus";
         let plant2 = "Flower";
         let plant3 = "Aloe";
         let plant4 = "Rose";
         let plant5 = "Strawberry";
         let plant6 = "Tree";
         let plant7 = "Hydranga";
 
         console.log("plant1 = " + plant1);
         console.log("plant2 = " + plant2);
         console.log("plant3 = " + plant3);
         console.log("plant4 = " + plant4);
         console.log("plant5 = " + plant5);
         console.log("plant6 = " + plant6);
         console.log("plant7 = " + plant7);
         */
 
         // instead of setting up 7 separate variables, we are setting up 1 array with 7 slots
         // watch out for the dreaded index out of bounds exception - most of the time when you see this error, it is because you are trying to access the item that matches the number of items in the array, so in this case, 7 - there is no 7th element in this array - the elements are in the 0 - 6 index
         /*let arrPlants = ["Cactus", "Flower", "Aloe", "Rose", "Strawberry", "Tree", "Hydranga"];
 
         // loop through the array
         for (let i=0; i < arrPlants.length; i++){
             console.log("plant" + (i+1) + " = " + arrPlants[i]);
         }
 
         console.log("random plant=" + arrPlants[4]);*/
         