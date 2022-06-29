let total = ""; // final and total value, default is 0
const subChar = "\u2212"; // the subtraction character (to differentiate between negative and minus sign) 

let num_button_count = 0; // when '0', user can start with 0. Clear function resets back to '0'
function num_button(number) {

    if (num_button_count === 0 && !total.includes(".")) {
        total = "";
        document.getElementById("calc-scrn-txt").textContent = "";
        num_button_count ++;
    }

    const num_button_clicked = document.getElementById(`${number}`).textContent;

    // Length of number in total cannot exceed 11 (otherwise it will overflow calc-scrn-txt)
    if (total.length !== 11 && !total.endsWith([subChar,"+","/","x"])) {
        total += num_button_clicked;
        document.getElementById("calc-scrn-txt").textContent = total;
    }
}

function clear_button() {
    total = "";
    document.getElementById("calc-scrn-txt").textContent = "0";
    num_button_count = 0;
}

function add_button() {
    const calcScrn = document.getElementById("calc-scrn-txt").textContent;
    
    // Checks if a "+" already exists, if it does, perform operation
    if (/[0-9]/.test(calcScrn)) {
        if (!calcScrn.includes("+") && !calcScrn.includes(subChar) && !calcScrn.includes("x") && !calcScrn.includes("/")) {
            total += "+";
            document.getElementById("calc-scrn-txt").textContent = total;
        } else {
            equal_button();
        }
    }
}

function sub_button() {
    const calcScrn = document.getElementById("calc-scrn-txt").textContent;
    
    // Checks if a "-" already exists, if it does, perform operation
    if (/[0-9]/.test(calcScrn)) {
        
        if (!calcScrn.includes("+") && !calcScrn.includes(subChar) && !calcScrn.includes("x") && !calcScrn.includes("/")) {
            total += subChar;
            document.getElementById("calc-scrn-txt").textContent = total;
        } else if (calcScrn.startsWith("-") && !calcScrn.includes(subChar)) {
            total += subChar;
            document.getElementById("calc-scrn-txt").textContent = total;
        } else {
            equal_button();
        }
    }
}
    
function mult_button() {
    const calcScrn = document.getElementById("calc-scrn-txt").textContent;
    
    // Checks if a "x" already exists, if it does, perform operation
    if (/[0-9]/.test(calcScrn)) {
        if (!calcScrn.includes("+") && !calcScrn.includes(subChar) && !calcScrn.includes("x") && !calcScrn.includes("/")) {
            total += "x";
            document.getElementById("calc-scrn-txt").textContent = total;
        } else {
            equal_button();
        }
    } 
}

function div_button() {
    const calcScrn = document.getElementById("calc-scrn-txt").textContent;

    // Checks if a "/" already exists, if it does, perform operation
    if (/[0-9]/.test(calcScrn)) {
        if (!calcScrn.includes("+") && !calcScrn.includes(subChar) && !calcScrn.includes("x") && !calcScrn.includes("/")) {
            total += "/";
            document.getElementById("calc-scrn-txt").textContent = total;
        } else {
            equal_button();
        }
    }  
}

function equal_button() {
    let currentOperation = document.getElementById("calc-scrn-txt").textContent;

    // Below 4 statements perform operations + update screen

    if (currentOperation.includes("+")) {
        const split = currentOperation.split("+");
        total = parseFloat(split[0]) + parseFloat(split[1]);

        // Length of number in total cannot exceed 11 (otherwise it will overflow calc-scrn-txt)
        if (total.length !== 11 && split[1] !== "") {
            document.getElementById("calc-scrn-txt").textContent = total;
        } else {
            document.getElementById("calc-scrn-txt").textContent = "Error";
            total = "";
        } 

    } else if (currentOperation.includes("x")) {
        const split = currentOperation.split("x");
        total = parseFloat(split[0]) * parseFloat(split[1]);

        // Checks if int is a decimal
        if (total % 1 !== 0) {
            total = total.toFixed(2);
        }

        // Length of number in total cannot exceed 11 (otherwise it will overflow calc-scrn-txt)
        if (total.length !== 11  && split[1] !== "") {
            document.getElementById("calc-scrn-txt").textContent = total;
        } else {
            document.getElementById("calc-scrn-txt").textContent = "Error";
            total = "";
        }
        
    } else if (currentOperation.includes("/")) {
        const split = currentOperation.split("/");
        total = parseFloat(split[0]) / parseFloat(split[1]);
        
        // Checks if int is a decimal
        if (total % 1 !== 0) {
            total = total.toFixed(2);
        }

        if (total.length !== 11 && split[1] !== "") {
            document.getElementById("calc-scrn-txt").textContent = total;
        } else {
            document.getElementById("calc-scrn-txt").textContent = "Error";
            total = "";
        }
        
    } else if (currentOperation.includes(subChar)) {

        const split = currentOperation.split(subChar);
        total = parseFloat(split[0]) - parseFloat(split[1]);

        if (total.length != 11 && split[1] != "") {
            document.getElementById("calc-scrn-txt").textContent = total;

        } else if ((split[1] === "")) {

            document.getElementById("calc-scrn-txt").textContent = "Error";
            total = "";

        } else {

            total = -Math.abs(parseFloat(split[1])) - parseFloat(split[2]);
            document.getElementById("calc-scrn-txt").textContent = total;  
        }
    }
}



