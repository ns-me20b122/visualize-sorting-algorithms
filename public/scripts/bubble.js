/*** Visualize Bubble Sort ***/

// Bubble Sort
async function bubbleSortProcess() {
    console.log('In bubbleSortProcess()');
    const column = document.querySelectorAll(".column");

    for(let i = 0; i < column.length-1; i++){
        console.log(`In ${i}th loop`);
        for(let j = 0; j < column.length-i-1; j++){
            console.log('In jth loop');
            // Change the color of columns which are being compared to blue
            column[j].style.background = 'blue';
            column[j+1].style.background = 'blue';

            if(parseInt(column[j].style.height) > parseInt(column[j+1].style.height)){
                console.log('In if condition');
                await wait(delay);
                swap(column[j], column[j+1]);
            }
            // Restore the colour after comparision
            column[j].style.background = '#FFF7BC';
            column[j+1].style.background = '#FFF7BC';
        }
        // Color white those columns which are in absolute sorted positon
        column[column.length-1-i].style.background = 'white';
    }
    // Color white the 0th column which is in absolute sorted positon
    column[0].style.background = 'white';
}

// Call the function
bubbleSort.addEventListener('click', async function(){
    disableSortingButton();
    disableSizeSlider();
    disableNewArrayButton();
    await bubbleSortProcess();
    enableSortingButton();
    enableSizeSlider();
    enableNewArrayButton();
});