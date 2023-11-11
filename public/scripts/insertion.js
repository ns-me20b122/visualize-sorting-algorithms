/*** Visualize Insertion Sort ***/


// Insertion Sort
async function insertionSortProcess(){
    console.log('In insertionSortProcess()');
    const column = document.querySelectorAll(".column");
    
    // color
    column[0].style.background = 'white';
    for(let i = 1; i < column.length; i++){
        console.log(`In ${i}th loop`);
        let j = i - 1;
        let key = column[i].style.height;
        // Color of element being compared before getting to sorted position
        column[i].style.background = 'blue';

        await wait(delay);

        while(j >= 0 && (parseInt(column[j].style.height) > parseInt(key))){
            console.log('In while loop');
            // Color of element being compared before getting to sorted position
            column[j].style.background = 'blue';
            column[j + 1].style.height = column[j].style.height;
            j--;

            await wait(delay);

            // change the sorted elements color to white
            for(let k = i; k >= 0; k--){
                column[k].style.background = 'white';
            }
        }
        column[j + 1].style.height = key;
        // change the sorted elements color to white
        column[i].style.background = 'white';
    }
}

// Call the Function
insertionSort.addEventListener('click', async function(){
    disableSortingButton();
    disableSizeSlider();
    disableNewArrayButton();
    await insertionSortProcess();
    enableSortingButton();
    enableSizeSlider();
    enableNewArrayButton();
});