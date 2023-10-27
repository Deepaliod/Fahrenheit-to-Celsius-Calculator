// Convert Fahrenheit to celsuis
// Convert celsius to fahrenheit

//btn event listener
document.getElementById("btn1").addEventListener("click", btnClicked);
//btn event listener
document.getElementById("btn2").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let C1 = document.getElementById("C1").value;
  let F1 = document.getElementById("F1").value;
  //PROCESS
  let total1 = (C1 * 9) / 5 + 32;
  let total2 = ((F1 - 32) * 5) / 9;
  //OUTPUT
  document.getElementById("output1").innerHTML = total1;
  document.getElementById("output2").innerHTML = total2;
}
