//your code here
document.addEventListener('DOMContentLoaded', function(){
	const input = document.getElementById('input');

	let currentInput = '';
	let operator = '';
	let firstOperand = '';

	function updateDisplay(){
		input.value = currentInput;
	}
	function clear() {
		currentInput = '';
		operator = '';
		firstOperand = '';
		updateDisplay();
	}
	function calculate() {
		let result = '';
		let secondOperand = parseFloat(currentInput);
		switch (operator) {
			case '+':
				result = (parseFloat(firstOperand) + secondOperand).toString();
				break;
			case '-':
				result = (parseFloat(firstOperand) - secondOperand).toString();
				break;
			case '*':
				result = (parseFloat(firstOperand) * secondOperand).toString();
				break;
			case '/':
				if(secondOperand === 0){
					result = 'Infinity';
				}else {
					result = (parseFloat(firstOperand) / secondOperand).toString();
				}
				break;
			default:
				result = currentInput;
		}
		currentInput = result;
		operator = '';
		firstOperand = '';
		updateDisplay();
	}

	document.querySelectorAll('button').forEach(button => {
		button.addEventListener('click', function() {
			const buttonValue = button.textContent;

			switch (buttonValue) {
				case '+':
				case '-':
				case '*':
				case '/':
					if(operator === ''){
						operator = buttonValue;
						firstOperand = currentInput;
						currentInput = '';
					}else {
						calculate();
						operator = buttonValue;
					}
					break;
				case '=':
					calculate();
					break;
				case 'C':
					currentInput = '';
					break;
				case 'AC':
					clear();
					break;
				default:
					currentInput+=buttonValue;
			}
			updateDisplay();
		});
	});
});
