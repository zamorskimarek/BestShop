
const prodQuant = document.querySelector("#products-quantity");
const prodQuantResultBox = document.querySelector("body > section.pricing-calculator > div > div.calculator-results > div:nth-child(1)");
const prodQuantResultResult = document.querySelector("body > section.pricing-calculator > div > div.calculator-results .calculator-results-box-result");
const prodQuantResultSpan = document.querySelector("body > section.pricing-calculator > div > div.calculator-results .calculator-results-box-text");
const prodQuantError = document.querySelector(".calculator-results-box-error");

const estimOrders = document.querySelector("#estimated-orders");
const estimOrdersResultBox = document.querySelector("body > section.pricing-calculator > div > div.calculator-results > div:nth-child(2)");
const estimOrdersResultResult = document.querySelector("body > section.pricing-calculator > div > div.calculator-results > div:nth-child(2) .calculator-results-box-result");
const estimOrdersResultSpan = document.querySelector("body > section.pricing-calculator > div > div.calculator-results > div:nth-child(2) .calculator-results-box-text");

const packageType = document.querySelector("#pricing-option");
const packageTypeResultBox = document.querySelector("body > section.pricing-calculator > div > div.calculator-results > div:nth-child(3)");
const packageTypeResultResult = document.querySelector("body > section.pricing-calculator > div > div.calculator-results > div:nth-child(3) .calculator-results-box-result");
const packageTypeResultSpan = document.querySelector("body > section.pricing-calculator > div > div.calculator-results > div:nth-child(3) .calculator-results-box-text");

const accounting = document.querySelector("#accounting-checkbox");
const accountingResultBox = document.querySelector("body > section.pricing-calculator > div > div.calculator-results > div:nth-child(4)");
const accountingResultResult = document.querySelector("body > section.pricing-calculator > div > div.calculator-results > div:nth-child(4) .calculator-results-box-result");

const rental = document.querySelector("#rental-checkbox");
const rentalResultBox = document.querySelector("body > section.pricing-calculator > div > div.calculator-results > div:nth-child(5)");
const rentalResultResult = document.querySelector("body > section.pricing-calculator > div > div.calculator-results > div:nth-child(5) .calculator-results-box-result");

const divForSelect = document.querySelector(".testttttt");

console.log(prodQuantResultSpan);
console.log(prodQuantResultResult);

const totalGlobalArray = [];

const totalGlobalText = document.querySelector(".calculator-results-box-total-value");

const addArray = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            sum += arr[i];
        } else {
        }
        sum += 0;
    }
    return sum;
}

const changeQuantity = function () {
    if (prodQuant.value > 0 && prodQuant.value % 1 === 0) {
        prodQuantResultBox.style.display = "flex";
        prodQuantResultBox.style.justifyContent = "space-between";
        prodQuantResultBox.style.alignItems = "center";
        prodQuantResultBox.style.padding = "0 10px";
        prodQuantResultSpan.innerText = prodQuant.value + " * $5.00";
        prodQuantResultResult.innerText = "  $" + 5 * prodQuant.value;
        prodQuantError.style.display = "none";
        totalGlobalArray[0] = 5 * prodQuant.value;
        console.log(totalGlobalArray);
        totalGlobalText.innerText = "$" + addArray(totalGlobalArray);

    } else if (prodQuant.value === 0) {
        prodQuantError.style.display = "none";
        prodQuantResultBox.style.display = "none";
        totalGlobalArray[0] = 0;
        totalGlobalText.innerText = "$" + addArray(totalGlobalArray);
    }

    else {
        prodQuantError.style.display = "block";
        prodQuantResultBox.style.display = "none";

    }
}

const changeOrders = function () {
    if (estimOrders.value > 0 && estimOrders.value % 1 === 0) {
        estimOrdersResultBox.style.display = "flex";
        estimOrdersResultBox.style.justifyContent = "space-between";
        estimOrdersResultBox.style.alignItems = "center";
        estimOrdersResultBox.style.padding = "0 10px";
        estimOrdersResultSpan.innerText = estimOrders.value + " * $2.00";
        estimOrdersResultResult.innerText = "  $" + 2 * estimOrders.value;
        prodQuantError.style.display = "none";
        totalGlobalArray[1] = 2 * estimOrders.value;
        console.log(totalGlobalArray);
        totalGlobalText.innerText = "$" + addArray(totalGlobalArray);

    } else if (estimOrders.value == 0) {
        prodQuantError.style.display = "none";
        estimOrdersResultBox.style.display = "none";
        totalGlobalArray[1] = 0;
        totalGlobalText.innerText = "$" + addArray(totalGlobalArray);
    }

    else {
        prodQuantError.style.display = "block";
        estimOrdersResultBox.style.display = "none";

    }
}

const changePackage = function () {
    if (packageType.value === "basic") {
        packageTypeResultBox.style.display = "flex";
        packageTypeResultBox.style.justifyContent = "space-between";
        packageTypeResultBox.style.alignItems = "center";
        packageTypeResultBox.style.padding = "0 10px";
        packageTypeResultSpan.innerText = "Basic";
        packageTypeResultResult.innerText = "  $" + 0;
        prodQuantError.style.display = "none";
        totalGlobalArray[2] = 0;
        console.log(totalGlobalArray);
        totalGlobalText.innerText = "$" + addArray(totalGlobalArray);
    } else if (packageType.value === "professional") {
        packageTypeResultBox.style.display = "flex";
        packageTypeResultBox.style.justifyContent = "space-between";
        packageTypeResultBox.style.alignItems = "center";
        packageTypeResultBox.style.padding = "0 10px";
        packageTypeResultSpan.innerText = "Professional";
        packageTypeResultResult.innerText = "  $" + 25;
        prodQuantError.style.display = "none";
        totalGlobalArray[2] = 25;
        console.log(totalGlobalArray);
        totalGlobalText.innerText = "$" + addArray(totalGlobalArray);
    } else if (packageType.value === "premium") {
        packageTypeResultBox.style.display = "flex";
        packageTypeResultBox.style.justifyContent = "space-between";
        packageTypeResultBox.style.alignItems = "center";
        packageTypeResultBox.style.padding = "0 10px";
        packageTypeResultSpan.innerText = "Premium";
        packageTypeResultResult.innerText = "  $" + 60;
        prodQuantError.style.display = "none";
        totalGlobalArray[2] = 60;
        console.log(totalGlobalArray);
        totalGlobalText.innerText = "$" + addArray(totalGlobalArray);
    }
}

const changeAccounting = function () {
        if (accounting.checked === true) {
            accountingResultBox.style.display = "flex";
            accountingResultBox.style.justifyContent = "space-between";
            accountingResultBox.style.alignItems = "center";
            accountingResultBox.style.padding = "0 10px";
            accountingResultResult.innerText = "  $" + 35;
            prodQuantError.style.display = "none";
            totalGlobalArray[3] = 35;
            console.log(totalGlobalArray);
            totalGlobalText.innerText = "$" + addArray(totalGlobalArray);
    } else {
            accountingResultBox.style.display = "none";
            totalGlobalArray[3] = 0;
            console.log(totalGlobalArray);
            totalGlobalText.innerText = "$" + addArray(totalGlobalArray);
        }
}

const changeRental = function () {
    if (rental.checked === true) {
        rentalResultBox.style.display = "flex";
        rentalResultBox.style.justifyContent = "space-between";
        rentalResultBox.style.alignItems = "center";
        rentalResultBox.style.padding = "0 10px";
        rentalResultResult.innerText = "  $" + 5;
        prodQuantError.style.display = "none";
        totalGlobalArray[4] = 5;
        console.log(totalGlobalArray);
        totalGlobalText.innerText = "$" + addArray(totalGlobalArray);
    } else {
        rentalResultBox.style.display = "none";
        totalGlobalArray[4] = 0;
        console.log(totalGlobalArray);
        totalGlobalText.innerText = "$" + addArray(totalGlobalArray);
    }
}

const changeArrowUp = function () {
    packageType.style.backgroundImage = 'url("../assets/Arrow Up.svg")';
}

const changeArrowDown = function () {
    packageType.style.backgroundImage = 'url("../assets/Arrow Down.svg")';
}


prodQuant.addEventListener("keyup", changeQuantity);
estimOrders.addEventListener("keyup", changeOrders);
packageType.addEventListener("focus", changeArrowUp);
packageType.addEventListener("blur", changeArrowDown);
packageType.addEventListener('change', changePackage);
accounting.addEventListener("change", changeAccounting);
rental.addEventListener("change", changeRental);
