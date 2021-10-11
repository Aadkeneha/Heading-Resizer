// Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.
// Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.
// Create a web app which takes name, unit test marks, pre final marks, final marks of 3 students. And then print who has the highest marks. What if I ask you to print the average as well?

var btnResize = document.querySelectorAll(".btn-resize");
var headingTextresize = document.querySelector(".heading-text-resize");

btnResize[0].addEventListener("click", function increasetoH1() {
  headingTextresize.style.fontSize = "32px";
});
btnResize[1].addEventListener("click", function increasetoH2() {
  headingTextresize.style.fontSize = "24px";
});
btnResize[2].addEventListener("click", function increasetoH3() {
  headingTextresize.style.fontSize = "18px";
});

var btnColorchanger = document.querySelectorAll(".btn-colorchanger");
var textColorchange = document.querySelector(".text-color-change");

btnColorchanger[0].addEventListener("click", function changetoRed() {
  textColorchange.style.color = "red";;
});
btnColorchanger[1].addEventListener("click", function changetoGreen() {
  textColorchange.style.color = "green";;
});
btnColorchanger[2].addEventListener("click", function changetoBlue() {
  textColorchange.style.color = "blue";
});

var inputName = document.querySelector("#input-name");
var inputMarks = document.querySelectorAll(".input-marks");
var btnNext = document.querySelector("#btn-next");
var btnSubmit = document.querySelector("#btn-submit");
var output = document.querySelectorAll(".output");


var index = 0;
var count = 0;
var highestmarks = '';
var avgofhighest = 0;
var namesAndmarks = {
  name: [],
  unitmarks: [],
  prefinalmarks: [],
  finalmarks: [],
  totalmarks: [],
  avg: []
};

btnSubmit.disabled = true;

btnNext.addEventListener("click", function submitValues() {

  if (inputName.value === '' || inputMarks[0].value === '' || inputMarks[1].value === '' || inputMarks[2].value === '') {
    output[1].textContent = "Please enter all fields.";
  } 
  else {
    output.textContent = "";
    namesAndmarks.name[index] = inputName.value;
    namesAndmarks.unitmarks[index] = Number(inputMarks[0].value);
    namesAndmarks.prefinalmarks[index] = Number(inputMarks[1].value);
    namesAndmarks.finalmarks[index] = Number(inputMarks[2].value);
    output[0].textContent=`
    Name: ${namesAndmarks.name[index]} 
    Unit marks: ${namesAndmarks.unitmarks[index]}
    Pre-Final marks: ${namesAndmarks.prefinalmarks[index]}
    Final marks: ${namesAndmarks.finalmarks[index]}`;
    index++;
    inputName.value = '';
    for (var i = 0; i < 3; i++) {
      inputMarks[i].value = '';
    }
    count++;

    if (count === 3) {
      btnNext.disabled = true;
      btnSubmit.disabled = false;
    }

  }

});

btnSubmit.addEventListener("click", function showResult() {

  output[0].textContent="";

  for (var i = 0; i < 3; i++) {
    namesAndmarks.totalmarks[i] = namesAndmarks.unitmarks[i] + namesAndmarks.prefinalmarks[i] + namesAndmarks.finalmarks[i];

    namesAndmarks.avg[i] = namesAndmarks.totalmarks[i] / 3;

      if (namesAndmarks.avg[i] > avgofhighest) {
        highestmarks = namesAndmarks.name[i];
        avgofhighest = namesAndmarks.avg[i];

      }
      else {
        highestmarks = highestmarks;
        avgofhighest = avgofhighest;
      }

  }
  output[1].textContent = `The highest marks are scored by ${highestmarks} and the avgerage marks are ${avgofhighest} .`;

});



