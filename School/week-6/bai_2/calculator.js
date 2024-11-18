document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const equalSign = document.getElementById('equal_sign');
    const functionButtons = document.querySelectorAll('.function_button');
    const numberButtons = document.querySelectorAll('.number_button');
    const prevAns = document.getElementById('ans');
    // Add event listeners for number buttons
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            result.value += button.innerText;
        });
    });
    // Add event listeners for function buttons
    functionButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.id === 'delete_all') {
                result.value = ''; // Clear the input
            } else if (button.id === 'multiply') {
                result.value += '*'; // Use * for multiplication
            } else if (button.id === 'divide') {
                result.value += '/'; // Use / for division
            } else if (button.id === 'modulo') {
                result.value += '%';
            } else {
                result.value += button.innerText; // Add other operators
            }
        });
    });
    // Evaluate the expression on equal button click
    equalSign.addEventListener('click', () => {
        let expression = result.value
        try {
            expression = expression.replace('x', '*'); // Handle multiplication symbol
            const answer = eval(expression);
            result.value = answer; // Update the result input
            prevAns.innerText = "Previous: " + expression
        } catch (error) {
            alert("Expression Error")
            result.value = ""; // Display error if any
        }
    });
})

