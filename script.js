let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let expression = display.value;

    try {
        // Find the operator
        let operator = "";

        if (expression.includes("+")) {
            operator = "+";
        } else if (expression.includes("-")) {
            operator = "-";
        } else if (expression.includes("*")) {
            operator = "*";
        } else if (expression.includes("/")) {
            operator = "/";
        } else if (expression.includes("%")) {
            operator = "%";
        }

        if (operator === "") {
            return;
        }

        // Split the two numbers
        let numbers = expression.split(operator);

        let firstNumber = parseFloat(numbers[0]);
        let secondNumber = parseFloat(numbers[1]);

        let result;

        if (operator === "+") {
            result = firstNumber + secondNumber;
        }

        else if (operator === "-") {
            result = firstNumber - secondNumber;
        }

        else if (operator === "*") {
            result = firstNumber * secondNumber;
        }

        else if (operator === "/") {
            if (secondNumber === 0) {
                display.value = "Error";
                return;
            }

            result = firstNumber / secondNumber;
        }

        else if (operator === "%") {
            result = firstNumber % secondNumber;
        }

        display.value = result;

    } catch (error) {
        display.value = "Error";
    }
}


// Keyboard support

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

    else if (event.key === "Enter") {
        calculate();
    }

    else if (event.key === "Backspace") {
        deleteLast();
    }

    else if (event.key === "Escape") {
        clearDisplay();
    }

});