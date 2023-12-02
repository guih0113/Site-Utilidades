const display = document.querySelector('.display');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
const buttons = document.querySelectorAll('button');
let equation = '';
let newEquation = true;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'C') {
            clearDisplay();
        } else if (button.textContent === '=') {
            calculateEquation();
        } else {
            if (newEquation) {
                equation = button.textContent;
                newEquation = false;
            } else {
                equation += button.textContent;
            }
            display.value = equation;
        }
    });
});

function clearDisplay() {
    equation = '';
    newEquation = true;
    display.value = '';
}

function calculateEquation() {
    try {
        const result = eval(equation);
        display.value = result;
        equation = result.toString();
        newEquation = true;
    } catch (error) {
        alert('Error')}}