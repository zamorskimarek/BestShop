
const prodQuant = document.querySelector("#products-quantity");

const estimOrders = document.querySelector("#estimated-orders");

const packageType = document.querySelector("#pricing-option");
const packageTypeResultBox = document.querySelector("#pricing-option-result-box");
const packageTypeResultResult = document.querySelector("#pricing-option-result-result");
const packageTypeResultSpan = document.querySelector("#pricing-option-result-span");

const accounting = document.querySelector("#accounting-checkbox");
const accountingResultBox = document.querySelector("#accounting-checkbox-result-box");
const accountingResultResult = document.querySelector("#accounting-checkbox-result-span");

const rental = document.querySelector("#rental-checkbox");
const rentalResultBox = document.querySelector("#rental-checkbox-result-box");
const rentalResultResult = document.querySelector("#rental-checkbox-result-span");

const Error = document.querySelector("#calculator-results-box-error");

const totalGlobalArray = [];

const totalGlobalText = document.querySelector("#calculator-results-box-total-value");

const addArray = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            sum += arr[i];
        }
    }
    return sum;
}



const changeQuantity = function () {
    let resultBox = this.id + "-result-box"
    let resultSpan = this.id + "-result-span"
    let resultResult = this.id + "-result-result"

    if (this.value > 0 && this.value % 1 === 0) {
        console.log(this.id + "-result-box");
        document.querySelector(`#${resultBox}`).style.display = "flex";
        document.querySelector(`#${resultSpan}`).innerText = `${this.value} * $ ${this.dataset.price}.00`;
        document.querySelector(`#${resultResult}`).innerText = "  $" + this.dataset.price * this.value;
        Error.style.display = "none";
        totalGlobalArray[this.dataset.index] = this.dataset.price * this.value;
        console.log(this.dataset.index)
        console.log(this.dataset.price)
        console.log(totalGlobalArray);
        totalGlobalText.innerText = "$" + addArray(totalGlobalArray);

    } else if (this.value == 0) {
        Error.style.display = "none";
        document.querySelector(`#${resultBox}`).style.display = "none";
        totalGlobalArray[0] = 0;
        totalGlobalText.innerText = "$" + addArray(totalGlobalArray);
    }

    else {
        Error.style.display = "block";
        document.querySelector(`#${resultBox}`).style.display = "none";

    }
}


const changePackage = function () {
    if (packageType.value === "basic") {
        packageTypeResultBox.style.display = "flex";
        packageTypeResultSpan.innerText = "Basic";
        packageTypeResultResult.innerText = "  $" + 0;
        Error.style.display = "none";
        totalGlobalArray[2] = 0;
        console.log(totalGlobalArray);
        totalGlobalText.innerText = "$" + addArray(totalGlobalArray);
    } else if (packageType.value === "professional") {
        packageTypeResultBox.style.display = "flex";
        packageTypeResultSpan.innerText = "Professional";
        packageTypeResultResult.innerText = "  $" + 25;
        Error.style.display = "none";
        totalGlobalArray[2] = 25;
        console.log(totalGlobalArray);
        totalGlobalText.innerText = "$" + addArray(totalGlobalArray);
    } else if (packageType.value === "premium") {
        packageTypeResultBox.style.display = "flex";
        packageTypeResultSpan.innerText = "Premium";
        packageTypeResultResult.innerText = "  $" + 60;
        Error.style.display = "none";
        totalGlobalArray[2] = 60;
        console.log(totalGlobalArray);
        totalGlobalText.innerText = "$" + addArray(totalGlobalArray);
    }
}

const changeAccounting = function () {
        if (accounting.checked === true) {
            accountingResultBox.style.display = "flex";
            accountingResultResult.innerText = "  $" + 35;
            Error.style.display = "none";
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
        rentalResultResult.innerText = "  $" + 5;
        Error.style.display = "none";
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
    this.style.backgroundImage = 'url("./assets/Arrow Up.svg")';
}

const changeArrowDown = function () {
    this.style.backgroundImage = 'url("./assets/Arrow Down.svg")';
}


prodQuant.addEventListener("keyup", changeQuantity);
estimOrders.addEventListener("keyup", changeQuantity);
packageType.addEventListener("focus", changeArrowUp);
packageType.addEventListener("blur", changeArrowDown);
packageType.addEventListener('change', changePackage);
accounting.addEventListener("change", changeAccounting);
rental.addEventListener("change", changeRental);
