// Console.log("Hello World!") on button click
// console.log each of the 3 inputs on button click.
// console.log random number based on diceSize
    // math.floor(math.random()*diceSize)
// console.log random number based on diceSize and diceNum
    // for loop?    (let i=0; i<_____; i++)
// console.log random number based on all 3 inputs

document.getElementById("rollButton").addEventListener("click", rollFunction);

function rollFunction() {
  let diceNum = parseInt(document.getElementById("diceNum").value);
  let diceSize = parseInt(document.getElementById("diceSize").value);
  let modifier = parseInt(document.getElementById("modifier").value);

  console.log("Number of dice: " + diceNum);
  console.log("Size of dice: " + diceSize);
  console.log("Dice modifier: " + modifier);

  console.log("Total: " + (diceNum * diceSize + modifier));
}