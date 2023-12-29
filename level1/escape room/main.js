const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log('Hi, ' + name + '!'
    + 'Welcome to the Escape Room.');
// run the program
console.log(operationQuestion())
// Function to navigate operations
function operationQuestion() {
    operator = readline.question('Please type an operation to perform. Here are your options:\n'
        +'\nFind the key'
        +'\nPut hand in hole  '
    );
  
    if (operator == "Find the key") {
      console.log('Open the door.  Congrats, you have escaped!\n');
    }
  
    if( operator == "Put hand in hole" ) {
        console.log('You died! Try again.\n');
        operationQuestion();
    }}