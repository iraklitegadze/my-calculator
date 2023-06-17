function calculate(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var first = parseFloat(document.getElementById('first').value);
    var second = parseFloat(document.getElementById('second').value);
    var operation = document.getElementById('operation').value;

    var result;

    // Perform calculation based on selected operation
    switch (operation) {
      case 'add':
        result = first + second;
        break;
      case 'subtract':
        result = first - second;
        break;
      case 'multiply':
        result = first * second;
        break;
      case 'divide':
        result = first / second;
        break;
    }

    // Display the result in the result input field
    document.getElementById('result').value = result;
  }