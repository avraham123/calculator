let display = document.getElementById('result');

function addToDisplay(value) {
  display.innerHTML += value;
}

function clearDisplay() {
  display.innerHTML = '';
}

function backspace() {
  display.innerHTML = display.innerHTML.slice(0, -1);
}

function calculate() {
  let result = eval(display.innerHTML);
  display.innerHTML = result;
  
}



let previousCalculation = '';

// Store the previous calculation and display it in a small font above the result
previousCalculation = input;
const previousCalculationDisplay = document.getElementById('previous-calculation');
previousCalculationDisplay.style.display = 'block';
previousCalculationDisplay.innerHTML = previousCalculation;

document.getElementById('result').innerHTML = result;


