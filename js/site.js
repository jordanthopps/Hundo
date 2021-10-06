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

    //check to see if they are numbers
    //Use case: 33 and Davis = True and False = False
    //0 and 100 - TRUE AND TRUE = TRUE
    //Bobby and 100 - FALSE AND TRUE = False
    //We might want to limit the starting balue and ending value | Come back to this

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
    let tableBody = document.getElementById("results"); //unclear
    //clear out previous entries from the form:
    tableBody.innerHTML = "";
    for (let index = 0; index < endIndex; index++) {

        //get the actual number
        let number = numbers[index];

        if (number % 2 == 0) {
            //the number is even
            tableRow = `<tr><td class="evenDisplay">${number}</td></tr>`;
        } else {
            //the number is odd
            tableRow = `<tr><td>${number}</td></tr>`;
        }



        tableBody.innerHTML += tableRow;
    }
}