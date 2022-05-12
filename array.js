var myArray = [1, 2, 3, 4, 5];

//SHOW Function
async function show() {
  myArray = [1, 2, 3, 4, 5];
  document.getElementById("show-array").innerHTML = myArray;
}

//STOP Function
async function stop() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max - 1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // 2 random numbers
  var num1 = getRandomInt(0, myArray.length);
  var num2 = getRandomInt(0, myArray.length);

  alert("First Randomly selcted number is: " + myArray[num1]);
  alert("Second Randomly selected number is: "+ myArray[num2]);
  myArray[num1]
  // make sure that numbers are different
  while (num2 === num1) num2++;

  //Swapping the two Random numbers
  let temp;
  temp = myArray[num1];
  myArray[num1] = myArray[num2];
  myArray[num2] = temp;

  
  document.getElementById("stop-array").innerHTML = myArray;

  //Reset the values of Array to initial
  myArray = [1, 2, 3, 4, 5];
}

document.getElementById("btn-show").onclick = show;
document.getElementById("btn-stop").onclick = stop;
