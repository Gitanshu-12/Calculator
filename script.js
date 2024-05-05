let inputString = "";
let prevResult = "";
const display = document.querySelector('.display');

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerText;

    if (buttonText === 'C') {
      inputString = "";
      display.value = inputString;
    } else if (buttonText === '=') {
      try {
        prevResult = eval(inputString);
        display.value = prevResult;
        inputString = prevResult.toString();
      } catch (error) {
        display.value = 'Error';
      }
    } else {
      inputString += buttonText;
      display.value = inputString;
    }
  });
});
