document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let r = document.getElementById("r-in").value;
  let g = document.getElementById("g-in").value;
  let b = document.getElementById("b-in").value;

  let brightness = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2);
  let msg = `Luminance = ${brightness}`;
  document.getElementById("output").innerHTML = Math.round(brightness);
}
