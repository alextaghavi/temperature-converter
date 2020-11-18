/*
    Formulas for temperature convertion
    C - F = (C * 1.8) + 32;
    C - K = C + 237.15;

    F- C = (F -32) / 1.8;
    F - K = ((F - 32) / 1.8) + 237.15;

    K - C = K - 273.15;
    K - F = ((K - 273.15) * 18) + 32;
*/

const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

const inputs = document.getElementsByClassName('input');

for(let i = 0; i < inputs.length; i++){
    let input = inputs[i];

    input.addEventListener('input', e => {
        let value = parseFloat(e.target.value);
        
        switch (e.target.name) {
            case 'celsius':
                fahrenheit.value = (value * 1.8) + 32;
                kelvin.value = value + 237.15;
                break;
            case 'fahrenheit':
                celsius.value = (value - 32) / 1.8;
                kelvin.value = ((value - 32) / 1.8) + 237.15;
                break;
            case 'kelvin':
                celsius.value = value - 273.15;
                fahrenheit.value = ((value - 273.15) * 18) + 32;
                break;
        }
    });
}

