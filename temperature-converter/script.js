function convertCelsius(inputTemp, outUnit) {
    if (outUnit == 'Celsius') return inputTemp;
    if (outUnit == 'Fahrenheit') return (inputTemp * 9/5) + 32;
    if (outUnit == 'Kelvin') return inputTemp + 273.15;
    return null;
}

function convertFahrenheit(inputTemp, outUnit) {
    if (outUnit == 'Celsius') return (inputTemp - 32) * 5/9;
    if (outUnit == 'Fahrenheit') return inputTemp;
    if (outUnit == 'Kelvin') return (inputTemp - 32) * 5/9 + 273.15;
    return null;
}

function convertKelvin(inputTemp, outUnit) {
    if (outUnit == 'Celsius') return inputTemp - 273.15;
    if (outUnit == 'Fahrenheit') return (inputTemp - 273.15) * 9/5 + 32;
    if (outUnit == 'Kelvin') return inputTemp;
    return null;
}

function convertTemp() {
    const inputTemp = parseFloat(document.getElementById("num").value);
    const inUnit = document.getElementById("inUnit").value;
    const outUnit = document.getElementById("outUnit").value;

    if (isNaN(inputTemp)) {
        document.getElementById("result").textContent = `Invalid input, Please enter a number`;
        return;
    }

    let convertedTemp;

    switch (inUnit) {
        case 'Celsius':
            convertedTemp = convertCelsius(inputTemp, outUnit);
            break;
        case 'Fahrenheit':
            convertedTemp = convertFahrenheit(inputTemp, outUnit);
            break;
        case 'Kelvin':
            convertedTemp = convertKelvin(inputTemp, outUnit);
            break;
        default:
            document.getElementById("result").textContent = `Enter a valid input unit`;
            return;
    }

    if (convertedTemp === null) {
        document.getElementById("result").textContent = `Enter a valid output unit`;
        return;
    }

    document.getElementById("outWindow").value = convertedTemp;
    document.getElementById("result").textContent = `${inputTemp}° ${inUnit} = ${convertedTemp}° ${outUnit}`;
}
