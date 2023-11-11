/*** Visualize Selection Sort ***/


// Selection Sort
async function selectionSortProcess(){
    console.log('In selectionSortProcess()');
    const column = document.querySelectorAll(".column");
    
    for(let i = 0; i < column.length; i++){
        console.log(`In ${i}th loop`);
        let min_index = i;
        // Change color of the position to swap with the next min
        column[i].style.background = 'blue';
        for(let j = i+1; j < column.length; j++){
            console.log(`In ${j}th loop`);
            // Change color for the current comparision (in consideration for min_index
            column[j].style.background = 'red';

            await wait(delay);
            if(parseInt(column[j].style.height) < parseInt(column[min_index].style.height)){
                console.log('In if condition height comparision');
                if(min_index !== i){
                    // new min_index is found so change prev min_index color back to normal
                    column[min_index].style.background = '#FFF7BC';
                }
                min_index = j;
            } 
            else{
                // if the currnent comparision is more than min_index change is back to normal
                column[j].style.background = '#FFF7BC';
            }   
        }
        await wait(delay);
        swap(column[min_index], column[i]);
        // change the min element index back to normal as it is swapped 
        column[min_index].style.background = '#FFF7BC';
        // change the sorted elements color to white
        column[i].style.background = 'white';
    }
}

// Call the Function
selectionSort.addEventListener('click', async function(){
    disableSortingButton();
    disableSizeSlider();
    disableNewArrayButton();
    await selectionSortProcess();
    enableSortingButton();
    enableSizeSlider();
    enableNewArrayButton();
});