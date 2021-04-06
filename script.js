document.getElementById("rollButton").addEventListener("click", rollFunction);

// Dice Roller
function rollFunction() {
  let diceNum = parseInt(document.getElementById("diceNum").value);
  let diceSize = parseInt(document.getElementById("diceSize").value);
  let modifier = parseInt(document.getElementById("modifier").value);
  let max = diceSize;
  let min = 1;
  let totalNum = 0;
  let rollNoMod = 0;

  for (let i = 0; i < diceNum; i++) {
    totalNum += Math.floor(Math.random() * max + min);
    rollNoMod = totalNum;
  }
  totalNum += modifier;
  console.log("Total: " + totalNum);
  document.getElementById("noMod").innerHTML = "Result before modifier: " + rollNoMod;
  document.getElementById("result").innerHTML = "Total: " + totalNum;
}

//Character sheet

/* Function explaination:
upon completing all fields of the form user will hit submit button, which will send all information bound for this function

the information from the form will be consoled out, to ensure the values stick.

the data will be stored in users cookies

when webpage is loaded up again, users information will already be available in the available and correct forms.
*/