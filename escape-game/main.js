const readline = require("readline-sync");
const name = readline.question("What is your name? ");

console.log("Hello, " + name + "!");

for (let i = 0; i < 5; i++) {
    var answer = readline.question("Your options are to 1. Put hand in hole, 2. Find the key, 3. Open the door.  You have 5 tries.  Please choose a number... ");
    if (answer === "1") {
        console.log("You have died!");
        break;
    } else if (answer === "2") {
        console.log("You have found the key and unlock the door.  You win!")
        break;
    } else if (answer === "3") {
        console.log("You try to open the door.  It is locked.")
    }
}