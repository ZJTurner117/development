const readline = require('readline');
const readlineSync = require('readline-sync');
let operations = ['+', '-', '*', '/', 'q', 'add', 'subtract', 'multiply', 'divide', 'quit'];
let index = null;
let operator = null;
let num1 = 0;
let num2 = 0;

// //  function to expect answers and repeat the process recursively
// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });


// Console Dialogue
let username = readlineSync.question('Hello! What is your name?? \n');

console.log('Hi, ' + username + '!'
    + 'Welcome to the Regular Calculator Project.');

// run the program
console.log(operationQuestion(), exitProgram());


// function to Exit program
function exitProgram(){
  console.log('The program is complete. Exiting the program now...');
  process.exit(0);
}

// Function to navigate operations
function operationQuestion() {
    operator = readlineSync.question('Please type an operation to perform. Here are your options:\n'
        +'\nAddition ('+ operations[0]+')'
        +'\nSubtraction ('+ operations[1]+')'
        +'\nMultiplication ('+ operations[2]+')'
        +'\nDivision ('+ operations[3]+')\n'
        +'\nQuit the Program ('+ operations[4]+')\n\n'
    );
  
    // check if the user typed the right operator(s)
    if (!operations.includes(operator)) {
      console.log('That is not a valid operation. Please try again.\n');
      operationQuestion();
    }
  
    if( operator !== "q" ) {
    num1 = readlineSync.questionInt('Type the first number: ');
    num2 = readlineSync.questionInt('Type the second number: ');
    }
    calculations()
  
  
    // // check if input is to quit, then user will proceed to exit the program
    // if (readlineSync.question(quitProgram) == 'q') {
    //   return exitProgram()
    // }
  
    // inner function to navigate basic calculations
    function calculations() {
      switch(operator) {
        case '+':
        case 'add' :
        case operations[0]:
        case operations[5]:
          console.log('The result of ' + num1+operator+num2+ ' = ' + (num1+num2) + '\n');
          break;
  
        case '-':
        case 'subtract':
        case operations[1]:
        case operations[6]:
          console.log('The result of ' + num1+operator+num2+ ' = ' + (num1-num2) + '\n');
          break;
  
        case '*':
        case 'multiply':
        case operations[2]:
        case operations[7]:
          console.log('The result of ' + num1+operator+num2+ ' = ' + (num1*num2) + '\n');
          break;
  
        case '/':
        case 'divide':
        case operations[3]:
        case operations[8]:
          console.log('The result of ' + num1+operator+num2+ ' = ' + ((num1/num2).toFixed(2)) + '\n');
          break;
  
        case 'q':
        case 'quit':
           exitProgram();
          break;
  
        default:
          console.log('Something went wrong: ');
          break;
           // check if input is to quit, then user will proceed to exit the program
  
      }
    }
  
    return operationQuestion()
  }
  

  rl.on("close", function() {
      console.log("\nExiting program now...");
      process.exit(0);
  });
  