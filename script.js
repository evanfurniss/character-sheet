document.getElementById("rollButton").addEventListener("click", rollFunction);

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