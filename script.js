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
  let max = diceSize;
  let min = 1;
  let totalNum = 0;

  // console.log("Number of dice: " + diceNum);
  // console.log("Size of dice: " + diceSize);
  // console.log("Dice modifier: " + modifier);

  for (let i = 0; i < diceNum; i++) {
    totalNum += Math.floor(Math.random() * max + min);
  }
  totalNum += modifier;
  console.log("Total: " + totalNum);
  // console.log("Total: " + (diceNum * diceSize + modifier));
}