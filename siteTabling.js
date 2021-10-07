function getNumbers() {

    let startValue = 0;
    let endValue = 100;

    //get the numbers from the UI
    startValue = document.getElementById("startValue").value;
    endValue = document.getElementById("endValue").value;

    //convert the numbers to integers or whole numbers
    // 33.5 and 100.7
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);


    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //when true because both numbers are integers
        //get the numbers from the start value to the endvalue
        let numbers = generateNumbers(startValue, endValue);

        //get the numbers on the page
        displayNumbers(numbers)
    } else {
        //When false
    }
}

//generate numbers from startvalue to endvalue
function generateNumbers(startValue, endValue) {
    let numbers = [];

    //Loop over the numbers until we hit the end value
    for (let index = startValue; index <= endValue; index++) {

        /*get the actual number
        let number = numbers[index];*/

        if (index % 2 == 0) {
            numbers.getElementById("evenDisplay").push(index).value;
            /*`<tr><td class="evenDisplay">${index}</td></tr>`;*/
        } else {
            `<tr><td>${index}</td></tr>`;
        }

        //Add each number to the array
        numbers.push(index);

    }
    //return the array of numbers
    return numbers;
}

//display the numbers to the page
function displayNumbers(numbers) {

    //0 first index value
    //99 last index value
    //length = 100
    // 0, 1, 2, 3, 4, 5, ....
    let startValue = numbers[0];
    let endIndex = numbers.length;

    let tableBody = document.getElementById("results");
    let rowTemplate = document.getElementById("fbTemplate");

    //clear out previous entries from the form:
    tableBody.innerHTML = "";

    for (let index = 0; index < numbers.length; index += 5) {

        const tableRow = document.importNode(rowTemplate.content, true)

        let rowCols = tableRow.querySelectorAll("td");


        rowCols[0].classList.add(numbers[index]);
        rowCols[0].textContent = numbers[index];

        rowCols[1].classList.add(numbers[index + 1]);
        rowCols[1].textContent = numbers[index + 1];

        rowCols[2].classList.add(numbers[index + 2]);
        rowCols[2].textContent = numbers[index + 2];

        rowCols[3].classList.add(numbers[index + 3]);
        rowCols[3].textContent = numbers[index + 3];

        rowCols[4].classList.add(numbers[index + 4]);
        rowCols[4].textContent = numbers[index + 4];

        tableBody.appendChild(tableRow);

    }
}