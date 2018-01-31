var keyList = document.querySelectorAll("button");
var displayArr = [];
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





function keyPress(key, number) {
    keyList.item(key).addEventListener("click", function () {
        if (display.textContent === "Calculator") {
            display.textContent = number;
        } else {
            if (number === "=") {
                displayArr = display.textContent.split(" ");
                equals();
            } else if (number === "+-") {
                operations.negative();
            } else if (number === "C") {
                location.reload();
            } else if (number === "+-") {
                operations.negative();
            } else {
                display.textContent += number;
            }
        }
    })
};

// Finished
function equals() {
    var num1 = 0;
    var num2 = 0;
    var num3;
    num1 = parseFloat(displayArr[0]);
    num2 = parseFloat(displayArr[2]);
    displayArr.splice(0, 1, num1);
    displayArr.splice(2, 1, num2);
    if (displayArr[1] === "*") {
        operations.multiply(displayArr[0], displayArr[2]);
    } else if (displayArr[1] === "/") {
        operations.divide(displayArr[0], displayArr[2]);
    } else if (displayArr[1] === "+") {
        operations.plus(displayArr[0], displayArr[2]);
    } else if (displayArr[1] === "-") {
        operations.minus(displayArr[0], displayArr[2]);
    }
}

function isIntegar(number) {
    this.number = number;
    if (number % 1 == 0) {
        return this.number;
    } else {
        return this.number.toFixed(2);
    }
}

operations = {
    multiply: function (num1, num2) {
        var result = 0;
        this.num1 = num1;
        this.num2 = num2;
        result = parseFloat(this.num1 * this.num2);
        display.textContent = isIntegar(result);
    },

    divide: function (num1, num2) {
        var result = 0;
        this.num1 = num1;
        this.num2 = num2;
        result = parseFloat(this.num1 / this.num2);
        display.textContent = isIntegar(result);


    },

    plus: function (num1, num2) {
        var result = 0;
        this.num1 = num1;
        this.num2 = num2;
        result = parseFloat(this.num1 + this.num2);
        display.textContent = isIntegar(result);
        console.log(result);
    },

    minus: function (num1, num2) {
        var result = 0;
        this.num1 = num1;
        this.num2 = num2;
        result = parseFloat(this.num1 - this.num2);
        display.textContent = isIntegar(result);
    },

    //NOT DONE YET
    negative: function () {
        var replace = 0;
        displayArr = display.textContent.split(" ");
        if (displayArr.length <= 1) {
            replace = displayArr.pop();
            displayArr.push("");
            display.textContent = "-" + replace;
        } else {
            replace = (0 - parseFloat(displayArr[2]));
            displayArr.splice(2, 1, replace);
            display.textContent = displayArr[0] + " " + displayArr[1] + " " + replace;
        }
    }
};
