function convertToFahrenheit() {
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('answer').innerHTML = celsius + "^C is " + fahrenheit.toFixed(2) + "°F";
}