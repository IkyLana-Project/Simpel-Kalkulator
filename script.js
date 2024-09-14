const
displayBottom = document.querySelector('.calculator-display .bottom'),
displayTop = document.querySelector('.calculator-display .top'),
allBtn = document.querySelectorAll("button"),
divide_byZero = document.getElementById("divide_byZero");

var firstNumber = 0,
    secondNumber = 0,
    operator = "",
    operator_toTop = "";

var isDecimal = false,
    isReset = false,
    is_Divide_by_Zero = false,
    is_tombol_bagi = false;

displayBottom.before.textContent = 'a'

for (let i=0; i < allBtn.length; i++){
    allBtn[i].onclick = () => {
        // Tombol Angka
        if (allBtn[i].id === "number"){
            if (displayBottom.textContent === '0'){
                displayBottom.textContent = allBtn[i].textContent;
            } else {
                displayBottom.textContent += allBtn[i].textContent;
            }

            // Cek apakah dibagi 0
            if (is_tombol_bagi === true && allBtn[i].name === "zero"){
                is_Divide_by_Zero = true;
            }
        }
        secondNumber = parseInt(displayBottom.textContent);
        // console.log("First Number: " + firstNumber);
        // console.log("Second Number: " + secondNumber);
        // End - Tombol Angka

        // Tombol Operator
        if (allBtn[i].id === "operator") {
            if (firstNumber != NaN) {
                if (isDecimal === true){
                    firstNumber = parseFloat(displayBottom.textContent);
                } else {
                    firstNumber = parseInt(displayBottom.textContent);
                }
                operator = CheckOperator(allBtn, operator, i);

                // Operator untuk Display
                if (operator === "tambah") {
                    operator_toTop = "+"
                } else if (operator === "kurang") {
                    operator_toTop = "-"
                } else if (operator === "kali") {
                    operator_toTop = "&times;"
                } else if (operator === "bagi"){
                    operator_toTop = "÷"
                    is_tombol_bagi = true;
                }
                // End - Operator untuk Display

                if (displayTop.innerHTML === "") {
                    displayTop.innerHTML = firstNumber + " " + operator_toTop;
                } else {
                    displayTop.innerHTML += firstNumber + " " + operator_toTop;
                }
                displayBottom.textContent = "";
            }
        }
        // End - Tombol Operator

        // Tombol Sama Dengan
        if (allBtn[i].id === "sama-dengan") {
            displayTop.innerHTML = "";
            if (secondNumber != NaN) {
                // Operator Tambah
                if (operator == "tambah") {
                    if (isDecimal == true) {
                        console.log(parseFloat(firstNumber) + parseFloat(secondNumber));
                        displayBottom.textContent = parseFloat(firstNumber) + parseFloat(secondNumber);
                    } else {
                        console.log(parseInt(firstNumber) + parseInt(secondNumber));
                        displayBottom.textContent = parseInt(firstNumber) + parseInt(secondNumber);
                    }
                }

                // Operator Kurang
                if (operator == "kurang") {
                    if (isDecimal == true) {
                        console.log(parseFloat(firstNumber) - parseFloat(secondNumber));
                        displayBottom.textContent = parseFloat(firstNumber) - parseFloat(secondNumber);
                    } else {
                        console.log(parseInt(firstNumber) - parseInt(secondNumber));
                        displayBottom.textContent = parseInt(firstNumber) - parseInt(secondNumber);
                    }
                }

                // Operator Kali
                else if (operator == "kali") {
                    if (isDecimal == true) {
                        console.log(parseFloat(firstNumber) * parseFloat(secondNumber));
                        displayBottom.textContent = parseFloat(firstNumber) * parseFloat(secondNumber);
                    } else {
                        console.log(parseInt(firstNumber) * parseInt(secondNumber));
                        displayBottom.textContent = parseInt(firstNumber) * parseInt(secondNumber);
                    }
                }

                // Operator Bagi
                else if (operator == "bagi") {
                    if (isDecimal == true) {
                        console.log(parseFloat(firstNumber) / parseFloat(secondNumber));
                        displayBottom.textContent = parseFloat(firstNumber) / parseFloat(secondNumber);
                    } else {
                        console.log(parseInt(firstNumber) / parseInt(secondNumber));
                        displayBottom.textContent = parseInt(firstNumber) / parseInt(secondNumber);
                    }
                }
            }
            
            // Cek apakah dibagi 0
            if (is_Divide_by_Zero === true) {
                divide_byZero.textContent = "Sudah kubilang jangan bagi 0!!";
                divide_byZero.classList.add("active");
                console.log("aw");
            }
        }
        // End - Tombol Sama Dengan

        // Tombol AC
        if (allBtn[i].id === "all-clear") {
            secondNumber, firstNumber = 0;
            displayBottom.textContent = 0;
            displayTop.innerHTML = "";
            divide_byZero.textContent = "";
            is_Divide_by_Zero = false;
            divide_byZero.classList.remove("active");
        }
        // End - Tombol AC

        // Tombol .
        if (allBtn[i].id == "desimal") {
            isDecimal = true;
            displayBottom.textContent += '.';
        }
        // End - Tombol .
    }
}

function CheckOperator(allBtn, operator, i) {
    // Operator Tambah
    if(allBtn[i].className === "tambah"){
        operator = "tambah";
    } else if (allBtn[i].className == "kurang") {
        operator = "kurang";
    } else if (allBtn[i].className == "kali") {
        operator = "kali";
    } else if (allBtn[i].className == "bagi") {
        operator = "bagi";
    }
    return operator;
}
