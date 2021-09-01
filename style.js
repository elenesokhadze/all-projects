let body = document.querySelector("body");
let slider = document.getElementById("myRange");
let screen = document.querySelector(".calc-screen");
let calcBody = document.querySelector(".calc-body");
let calcButton = document.querySelectorAll(".calc-body__item");
let calcButtonRegular = document.querySelectorAll(".calc-body__item--regular");
let calcBlue = document.querySelectorAll(".calc-body__item--blue");
let calcRed = document.querySelector(".calc-body__item--red");

// styles

if (slider.value == 1) {
  body.style.backgroundColor = "#3b4664";
  body.style.color = "#fff";
  screen.style.backgroundColor = "#181f32";
  calcBody.style.backgroundColor = "#252d44";
  calcRed.style.backgroundColor = "#d13f30";
  calcRed.style.color = "#fff";
  slider.style.backgroundColor = "#252d44";
  calcBlue.forEach((element) => (element.style.backgroundColor = "#647299"));
  calcBlue.forEach((element) => (element.style.color = "#fff"));
  for (const item of calcButtonRegular) {
    item.style.backgroundColor = "#EAE3DB";
    item.style.color = "#4E5464";
  }
}

slider.oninput = function () {
  if (slider.value == 1) {
    body.style.backgroundColor = "#3b4664";
    body.style.color = "#fff";
    screen.style.backgroundColor = "#181f32";
    calcBody.style.backgroundColor = "#252d44";
    slider.style.backgroundColor = "#252d44";
    calcRed.style.backgroundColor = "#d13f30";
    calcRed.style.color = "#fff";
    calcBlue.forEach((element) => (element.style.backgroundColor = "#647299"));
    calcBlue.forEach((element) => (element.style.color = "#fff"));
    for (const item of calcButtonRegular) {
      item.style.backgroundColor = "#EAE3DB";
      item.style.color = "#4E5464";
    }
  } else if (slider.value == 2) {
    body.style.backgroundColor = "#E6E6E6";
    body.style.color = "#4B4D43";
    screen.style.backgroundColor = "#EEEEEE";
    calcBody.style.backgroundColor = "#D3CDCD";
    slider.style.backgroundColor = "#D3CDCD";
    calcBlue.forEach((element) => (element.style.backgroundColor = "#388186"));
    calcBlue.forEach((element) => (element.style.color = "#fff"));
    calcRed.style.backgroundColor = "#C85401";
    for (const item of calcButtonRegular) {
      item.style.backgroundColor = "#E5E4E0";
      item.style.color = "#4B4D43";
    }
  } else {
    body.style.backgroundColor = "#17062A";
    body.style.color = "#FFEA41";
    screen.style.backgroundColor = "#1E0836";
    calcBody.style.backgroundColor = "#1E0836";
    slider.backgroundColor = "#1E0837";
    calcBlue.forEach((element) => (element.style.backgroundColor = "#56077C"));
    calcBlue.forEach((element) => (element.style.color = "#fff"));
    calcRed.style.backgroundColor = "#00DECF";
    for (const item of calcButtonRegular) {
      item.style.backgroundColor = "#331B4D";
      item.style.color = "#FFEA41";
    }
  }
};
