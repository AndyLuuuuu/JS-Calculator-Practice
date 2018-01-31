var keyList = document.querySelectorAll("button");
var displayArr = [];
var disp;
var display = document.getElementById("display");
var trigger = false;

// Number Keys
keyPress(0, 7);
keyPress(1, 8);
keyPress(2, 9);
keyPress(4, 4);
keyPress(5, 5);
keyPress(6, 6);
keyPress(8, 1);
keyPress(9, 2);
keyPress(10, 3);
keyPress(13, 0);

// Operator
keyPress(3, " * ");
keyPress(7, " / ");
keyPress(11, " + ");
keyPress(12, "+-");
keyPress(14, ".");
keyPress(15, " - ");
keyPress(19, "=");

keyPress(18, "C")


// Accepts clicks on buttons and does stuff accordingly.
// BUG****** When you double click C when you first start...
//           It will go from "Calculator" to "C"
function keyPress(key, number) {
    keyList.item(key).addEventListener("click", function () {
        if (display.textContent === "Calculator") {
            display.textContent = number;
        } else {
            if (number === "=") {
                displayArr = display.textContent.split(" ");
                equal();
                disp = displayArr[0];
                display.textContent = disp.toFixed(3);
            } else if (number === "+-") {
                operations.negative();
            } else if (number === "C") {
                location.reload();
            } else {
                display.textContent += number;
            }
        }
    })
};

// When = sign is pressed, use this function.
// This function goes through array of numbers entered
// Does math according to BEDMAS.
function equal() {
    var replace = 0;
    var remove;
    var num1 = 0;
    var num2 = 0;
    var multiply = "*";
    var divide = "/";
    var plus = "+";
    var minus = "-";
    for (multiply in displayArr) {
        for (var i = 0; i <= displayArr.length; i++) {
            if (displayArr[i] === "*") {
                num1 = displayArr[i - 1];
                num2 = displayArr[i + 1];
                replace = operations.multiply(num1, num2)
                displayArr.splice(i - 1, 3, replace);
                console.log(replace);
                console.log(displayArr);
            }
        }
    };

    for (divide in displayArr) {
        for (var i = 0; i <= displayArr.length; i++) {
            if (displayArr[i] === "/") {
                num1 = displayArr[i - 1];
                num2 = displayArr[i + 1];
                replace = operations.divide(num1, num2);
                displayArr.splice(i - 1, 3, replace);

                console.log(replace);
                console.log(displayArr);
            }
        }
    };

    for (plus in displayArr) {
        for (var i = 0; i <= displayArr.length; i++) {
            if (displayArr[i] === "+") {
                num1 = isIntegar(displayArr[i - 1]);
                num2 = isIntegar(displayArr[i + 1]);
                replace = operations.plus(num1, num2)
                displayArr.splice(i - 1, 3, replace);

                console.log(replace);
                console.log(displayArr);
            }
        }
    };

    for (minus in displayArr) {
        for (var i = 0; i <= displayArr.length; i++) {
            if (displayArr[i] === "-") {
                num1 = displayArr[i - 1];
                num2 = displayArr[i + 1];
                replace = operations.minus(num1, num2)
                displayArr.splice(i - 1, 3, replace);

                console.log(replace);
                console.log(displayArr);
            };
        }
    }
};

//function operation(symbol, replace) {
//    this.symbol = symbol;
//    var replace = 0;
//
//    for (var i = 0; i <= displayArr.length; i++) {
//        if (displayArr[i] === symbol) {
//            num1 = displayArr[i - 1];
//            num2 = displayArr[i + 1];
//            replace = operations.multiply(num1, num2)
//            displayArr.splice(i - 1, 3, replace);
//            console.log(replace);
//            console.log(displayArr);
//
//        }
//    }
//};
//
//// Finished
//function equals() {
//    var num1 = 0;
//    var num2 = 0;
//    var num3;
//    num1 = parseFloat(displayArr[0]);
//    num2 = parseFloat(displayArr[2]);
//    displayArr.splice(0, 1, num1);
//    displayArr.splice(2, 1, num2);
//    if (displayArr[1] === "*") {
//        operations.multiply(displayArr[0], displayArr[2]);
//    } else if (displayArr[1] === "/") {
//        operations.divide(displayArr[0], displayArr[2]);
//    } else if (displayArr[1] === "+") {
//        operations.plus(displayArr[0], displayArr[2]);
//    } else if (displayArr[1] === "-") {
//        operations.minus(displayArr[0], displayArr[2]);
//    }
//}

// Checks if number is integar, if not returns a float/decimal number

function isIntegar(number) {
    this.number = number;
    if (number % 1 == 0) {
        return this.number;
    } else {
        return parseFloat(this.number).toFixed(2);
    }
}

// Operations functions that grab 2 numbers and does math on them.

operations = {
    multiply: function (num1, num2) {
        var result = 0;
        this.num1 = num1;
        this.num2 = num2;
        result = parseFloat(this.num1 * this.num2);
        return (result);
    },

    divide: function (num1, num2) {
        var result = 0;
        this.num1 = num1;
        this.num2 = num2;
        result = parseFloat(this.num1 / this.num2);
        return (result);


    },

    plus: function (num1, num2) {
        var result = 0;
        this.num1 = parseFloat(num1);
        this.num2 = parseFloat(num2);
        result = parseFloat(this.num1 + this.num2);
        console.log(result);
        return (result);
    },

    minus: function (num1, num2) {
        var result = 0;
        this.num1 = num1;
        this.num2 = num2;
        result = parseFloat(this.num1 - this.num2);
        return (result);
    },

    //Turns the previously entered number into a negative number

    negative: function () {
        var replace = 0;
        displayArr = display.textContent.split(" ");
        if (displayArr.length <= 1) {
            replace = displayArr.pop();
            displayArr.push("");
            display.textContent = "-" + replace;
        } else {
            replace = (0 - parseFloat(displayArr[displayArr.length - 1]));
            displayArr.pop();
            displayArr.push(isIntegar(replace));
            display.textContent = displayArr.join(" ");
        }
    }
};
