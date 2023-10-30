// Função para adicionar valor ao visor
function appendToDisplay(value) {
    const display = document.getElementById('result'); 
    display.value += value; // Adiciona o valor ao campo de entrada do visor.
}

// Função para calcular e mostrar o resultado
function calculate() {
    const display = document.getElementById('result'); 
    try {
        display.value = eval(display.value); // Usa a função 'eval' para calcular o resultado da expressão no visor e o exibe.
    } catch (error) {
        display.value = 'Erro'; 
    }
}

// Função para limpar o visor
function clearDisplay() {
    const display = document.getElementById('result');
    display.value = ''; 
}


function calculateSquareRoot() {
    let display = document.getElementById("result"); 
    display.value = Math.sqrt(eval(display.value)); 
}
