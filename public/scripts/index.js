/*** Preprocessing, Processing & Postprocessing during a Sorting ***/


/* DOM elements */
const bubbleSort = document.querySelector("#bubbleSort");
const bucketSort = document.querySelector("#bucketSort");
const selectionSort = document.querySelector("#selectionSort");
const insertionSort = document.querySelector("#insertionSort");
const quickSort = document.querySelector("#quickSort");
const mergeSort = document.querySelector("#mergeSort");
const arraySize = document.querySelector("#arraySize");
const newArray = document.querySelector("#newArray");
const columns = document.querySelector("#columns");
const speedInput = document.querySelector('#speedInput');


/* Global Variables */
var delay = 260; // Default input for wait function (260ms)
var arrayRandom = []; // Initialization of new Random array


/* Preprocessing */
// Generate new Random array
function createNewArray(noOfcolumns = 80) {
    columns.innerHTML = ''; // Delete all previous columns

    // Create an array of random numbers
    arrayRandom = [];
    for (let i = 0; i < noOfcolumns; i++) {
        arrayRandom.push(Math.floor(Math.random() * 300) + 10);
    }

    // Create columns corresponding to array elements
    for (let i = 0; i < noOfcolumns; i++) {
        const division = document.createElement("div");
        division.style.height = `${arrayRandom[i]*2}px`;
        division.style.width = `15px`;
        division.classList.add('column');
        division.classList.add('flex-item');
        division.classList.add(`columnNo${i}`);
        columns.appendChild(division);
    }
}

// Call required function
createNewArray();

// Event listener to update the columns on the UI
arraySize.addEventListener('input', function() {
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});


/* Processing */
// Disables functionality of all Sorting Buttons
function disableSortingButton() {

    // Disable functionality
    bubbleSort.disabled = true;
    bucketSort.disabled = true;
    selectionSort.disabled = true;
    insertionSort.disabled = true;
    quickSort.disabled = true;
    mergeSort.disabled = true;

    // Remove general CSS
    bubbleSort.classList.remove('sortingButton');
    bucketSort.classList.remove('sortingButton');
    selectionSort.classList.remove('sortingButton');
    insertionSort.classList.remove('sortingButton');
    quickSort.classList.remove('sortingButton');
    mergeSort.classList.remove('sortingButton');

    bubbleSort.classList.remove('sortingButtonHover');
    bucketSort.classList.remove('sortingButtonHover');
    selectionSort.classList.remove('sortingButtonHover');
    insertionSort.classList.remove('sortingButtonHover');
    quickSort.classList.remove('sortingButtonHover');
    mergeSort.classList.remove('sortingButtonHover');

    // Add Pause Button CSS
    bubbleSort.classList.add('sortingButtonPause');
    bucketSort.classList.add('sortingButtonPause');
    selectionSort.classList.add('sortingButtonPause');
    insertionSort.classList.add('sortingButtonPause');
    quickSort.classList.add('sortingButtonPause');
    mergeSort.classList.add('sortingButtonPause');
}

// Disables Size Slider Functionality
function disableSizeSlider() {
    arraySize.disabled = true;
}

// Disables newArray button
function disableNewArrayButton() {
    newArray.disabled = true; // Disable Functionality
    newArray.classList.remove('button'); // Remove general CSS
    newArray.classList.remove('buttonHover'); // Remove hovering CSS
    newArray.classList.add('buttonPause'); // Add Pause Button CSS
}

// function swap to switch 2 columns
function swap(column1, column2) {
    console.log(`In swap(${column1}, ${column2})`);

    let column1Height = column1.style.height;
    column1.style.height = column2.style.height;
    column2.style.height = column1Height;

}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function wait(milisec) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('')
        }, milisec);
    })
}

// Event listener to update delay time
speedInput.addEventListener('input', function() {
    console.log(speedInput.value, typeof(speedInput.value));
    delay = 200 - parseInt(speedInput.value);
});


/* Postprocessing */
// Enables Sorting Buttons
function enableSortingButton() {

    // Enable Functionality
    bubbleSort.disabled = false;
    bucketSort.disabled = false;
    insertionSort.disabled = false;
    mergeSort.disabled = false;
    quickSort.disabled = false;
    selectionSort.disabled = false;

    // Restore general CSS
    bubbleSort.classList.add('sortingButton');
    bucketSort.classList.add('sortingButton');
    selectionSort.classList.add('sortingButton');
    insertionSort.classList.add('sortingButton');
    quickSort.classList.add('sortingButton');
    mergeSort.classList.add('sortingButton');

    bubbleSort.classList.add('sortingButtonHover');
    bucketSort.classList.add('sortingButtonHover');
    selectionSort.classList.add('sortingButtonHover');
    insertionSort.classList.add('sortingButtonHover');
    quickSort.classList.add('sortingButtonHover');
    mergeSort.classList.add('sortingButtonHover');

    // Remove Pause Button CSS
    bubbleSort.classList.remove('sortingButtonPause');
    bucketSort.classList.remove('sortingButtonPause');
    selectionSort.classList.remove('sortingButtonPause');
    insertionSort.classList.remove('sortingButtonPause');
    quickSort.classList.remove('sortingButtonPause');
    mergeSort.classList.remove('sortingButtonPause');
}

// Enables Size Slider Functionality
function enableSizeSlider() {
    arraySize.disabled = false;
}

// Enables newArray button
function enableNewArrayButton() {
    newArray.disabled = false; // Enable Functionality
    newArray.classList.add('button'); // Add general CSS
    newArray.classList.add('buttonHover'); // Add hovering CSS
    newArray.classList.remove('buttonPause'); // Remove Pause Button CSS
}

// Event listener to enable required buttons & sliders
newArray.addEventListener("click", function() {
    console.log("arraySize: " + arraySize.value);
    console.log("Delay: " + delay);
    enableSortingButton();
    enableSizeSlider();
    createNewArray(arraySize.value);
});
