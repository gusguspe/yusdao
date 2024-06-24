// calculator.js

class Calculator {
    constructor() {
        this.display = '';
    }

    clear() {
        this.display = '';
    }

    appendNumber(number) {
        this.display += number.toString();
    }

    appendOperator(operator) {
        this.display += operator;
    }

    compute() {
        try {
            this.display = eval(this.display);
        } catch (e) {
            this.display = 'Error';
        }
    }

    updateDisplay() {
        const displayElement = document.querySelector('#calculator .display');
        displayElement.value = this.display;
    }
}

// Función de inicialización
function initializeCalculator() {
    const calculator = new Calculator();

    // Vincula los eventos de los botones
    document.querySelectorAll('#calculator .number').forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText);
            calculator.updateDisplay();
        });
    });

    document.querySelectorAll('#calculator .operator').forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendOperator(button.innerText);
            calculator.updateDisplay();
        });
    });

    document.querySelector('#calculator .equals').addEventListener('click', () => {
        calculator.compute();
        calculator.updateDisplay();
    });

    document.querySelector('#calculator .clear').addEventListener('click', () => {
        calculator.clear();
        calculator.updateDisplay();
    });
}

// Inicializar la calculadora cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initializeCalculator);


console.log(`Valor actual de display: ${this.display}`);