/*** Visualize Quick Sort ***/


// Lomuto Partition Process 
async function partitionLomuto(column, l, r){
    console.log(`In partitionLomuto(column: ${column}, l: ${l}, r: ${r})`);
    let i = l - 1;
    
    // Color pivot element red
    column[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        console.log(`In partitionLomuto for ${j}`);
        // Color current element of processing as yello
        column[j].style.background = 'yellow';
        await wait(delay);

        if(parseInt(column[j].style.height) < parseInt(column[r].style.height)){
            console.log(`In partitionLomuto for ${j} if`);
            i++;
            swap(column[i], column[j]);
            // Colour the swapped element as orange
            column[i].style.background = 'orange';
            if(i != j) column[j].style.background = 'orange';
            await wait(delay);
        }
        else{
            // Color the nonswapped element as pink
            column[j].style.background = 'pink';
        }
    }
    i++; 

    await wait(delay);
    swap(column[i], column[r]); // pivot height one
    console.log(`i = ${i}`, typeof(i));

    column[r].style.background = 'pink';  // Color the unsorted element as pink
    column[i].style.background = 'white';  // Color the sorted element as white
    await wait(delay);
    
    // Color-Sorted element: white, notcomapred element: #FFF7BC
    for(let k = 0; k < column.length; k++){
        if(column[k].style.background != 'white')
            column[k].style.background = '#FFF7BC';
    }

    return i;
}

// Quick Sort
async function quickSortProcess(column, l, r){
    console.log('In quickSortProcess()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partitionLomuto(column, l, r);
        await quickSortProcess(column, l, pivot_index - 1);
        await quickSortProcess(column, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <column.length && r <column.length){
            column[r].style.background = 'white';
            column[l].style.background = 'white';
        }
    }
}

// Call the function
quickSort.addEventListener('click', async function(){
    let column = document.querySelectorAll('.column');
    let l = 0;
    let r = column.length - 1;
    disableSortingButton();
    disableSizeSlider();
    disableNewArrayButton();
    await quickSortProcess(column, l, r);
    enableSortingButton();
    enableSizeSlider();
    enableNewArrayButton();
});