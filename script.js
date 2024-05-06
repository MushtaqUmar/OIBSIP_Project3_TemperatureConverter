
// convert() - called onClick
function convert() {
    // get elements 
    var fromUnit = document.getElementById('fromUnit').value;   // value of its selected option ('C': initially(string) )
    var toUnit = document.getElementById('toUnit').value;// value of its selected (if not selected any, then 1st option ('K': initially )
    // ^^ : var (bcz it must change as user selects any from and to fields of units)
    // get the tempereture 'input' element's value and pasrse it to float.( e.g:  "11.2' => 11.2 )
    var inputTemp = parseFloat(document.getElementById('inputTemp').value);  // parse a string argument(value entered by use- value fiedl iof <input> is string we know even if entered number) and returns a floating-point number. // If the value entered in the input field represents a valid number (e.g., '12.34' or '42' (value as string always-html element)), inputTemp will be a floating-point number. Otherwise, it will be NaN.
    
    // At last to show result
    var resultBox = document.getElementById('result');


    // if user not enterered anything as tempereture  and press convert btn
    if (isNaN(inputTemp)) {
        inputTemp = 0;
    }

    var convertedTemp;
    var resultUnit;

    // perform conversion logic
    switch (fromUnit) {
        // fromUnit is 'C' - celsius
        case 'C':
            if (toUnit === 'F') {
                convertedTemp = (inputTemp * (9 / 5)) + 32;
                resultUnit = 'F';
            }
            else if (toUnit === 'K') {
                convertedTemp = inputTemp + 273.15;
                resultUnit = 'K';
            }
            else {  // remaining is 'C' 
                convertedTemp = inputTemp;
                resultUnit = 'C';
            }
            console.log("Start");
            console.log(convertedTemp);
            break;
        // fromUnit is 'K' - Kelvin
        case 'K':
            if (toUnit === 'C') {
                convertedTemp = inputTemp - 273.15;
                resultUnit = 'C';
            }
            else if (toUnit === 'F') {
                // kelvin ->      celsius       ->     fahrenheit
                convertedTemp = (inputTemp - 273.15) * (9 / 5) + 32;
                resultUnit = 'F';
            }
            else {  // remaining is 'K' 
                convertedTemp = inputTemp;
                resultUnit = 'K';
            }
            break;

        // fromUnit is 'F' - Fahrenheit
        case 'F':
            if (toUnit === 'C') {
                convertedTemp = (inputTemp - 32) * 5 / 9;
                resultUnit = 'C';
            }
            else if (toUnit === 'K') {
                // first convert to 'C' then to Kelvin
                convertedTemp = ((inputTemp - 32) * (5 / 9)) + 273.15;
                resultUnit = 'K';
            }

            else {  // remaining is 'F' 
                convertedTemp = inputTemp;
                resultUnit = 'F';
            }

    } // switch() close

    // Show converted Temp along with unit.
    resultBox.value = convertedTemp.toFixed(2) + ' ' + resultUnit;
}

