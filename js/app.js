// Wait for the DOM to be ready before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Get the form elements by their IDs
    const rentInput = document.getElementById('rent');
    const groceriesInput = document.getElementById('groceries');
    const carInput = document.getElementById('car');
    const otherInput = document.getElementById('other');
    const calculateButton = document.getElementById('calculate-btn');
    const resetButton = document.getElementById('reset-btn');
    const totalBudgetDisplay = document.getElementById('total-budget');

    // Calculate the total budget when the 'Calculate' button is clicked
    calculateButton.addEventListener('click', function () {
        // Get the values from the input fields and convert them to numbers
        const rent = parseFloat(rentInput.value) || 0;
        const groceries = parseFloat(groceriesInput.value) || 0;
        const car = parseFloat(carInput.value) || 0;
        const other = parseFloat(otherInput.value) || 0;

        // Calculate the total budget
        const totalBudget = rent + groceries + car + other;

        // Display the total budget on the page
        totalBudgetDisplay.textContent = totalBudget.toFixed(2);
    });

    // Reset the form and the displayed total budget when the 'Reset' button is clicked
    resetButton.addEventListener('click', function () {
        // Reset the values of the input fields
        rentInput.value = '';
        groceriesInput.value = '';
        carInput.value = '';
        otherInput.value = '';

        // Reset the displayed total budget
        totalBudgetDisplay.textContent = '0';

        // Optionally, focus on the first input field
        rentInput.focus();
    });
});

