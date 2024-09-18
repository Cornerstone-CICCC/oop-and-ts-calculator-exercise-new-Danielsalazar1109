class Calculator {
    constructor() {
      this.result = 0;
    }
  
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) {
        alert("Cannot divide by zero");
        return 'undefined';
      }
      return a / b;
    }
  
    compute(operation, num1, num2) {
      switch (operation) {
        case 'add':
          return this.add(num1, num2);
        case 'subtract':
          return this.subtract(num1, num2);
        case 'multiply':
          return this.multiply(num1, num2);
        case 'divide':
          return this.divide(num1, num2);
        default:
          return 'Invalid operation';
      }
    }
  }
  
  window.onload = function() {
    const calculator = new Calculator();
    
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDisplay = document.getElementById('result');
  
    calculateBtn.addEventListener('click', function() {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      const operation = document.getElementById('operation').value;
  
      if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
      }
  
      const result = calculator.compute(operation, num1, num2);
      resultDisplay.textContent = result;
    });
  };