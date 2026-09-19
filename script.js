let display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

function calculate() {

    let expression = display.value;

    try {

        let operator = "";

        if (expression.includes("+")) {
            operator = "+";
        } 
        else if (expression.includes("-")) {
            operator = "-";
        } 
        else if (expression.includes("*")) {
            operator = "*";
        } 
        else if (expression.includes("/")) {
            operator = "/";
        } 
        else if (expression.includes("%")) {
            operator = "%";
        }

        if (operator === "") {
            return;
        }

        let numbers = expression.split(operator);

        let firstNumber = parseFloat(numbers[0]);
        let secondNumber = parseFloat(numbers[1]);

        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            display.value = "Error";
            return;
        }

        let result;

        switch (operator) {

            case "+":
                result = firstNumber + secondNumber;
                break;

            case "-":
                result = firstNumber - secondNumber;
                break;

            case "*":
                result = firstNumber * secondNumber;
                break;

            case "/":

                if (secondNumber === 0) {
                    display.value = "Error";
                    return;
                }

                result = firstNumber / secondNumber;
                break;

            case "%":
                result = firstNumber % secondNumber;
                break;
        }

        display.value = result;

    } catch (error) {
        display.value = "Error";
    }
}

/* Keyboard support */

document.addEventListener("keydown", function(event) {

    if (event.key >= "0" && event.key <= "9") {
        appendValue(event.key);
    }

    else if (
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/" ||
        event.key === "%"
    ) {
        appendValue(event.key);
    }

    else if (event.key === ".") {
        appendValue(".");
    }

    else if (event.key === "Enter" || event.key === "=") {
        calculate();
    }

    else if (event.key === "Backspace") {
        deleteLast();
    }

    else if (event.key === "Escape") {
        clearDisplay();
    }

});
