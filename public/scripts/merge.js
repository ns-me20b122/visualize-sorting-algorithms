/*** Visualize Merge Sort ***/


// Merge Process
async function mergeProcess(column, low, mid, high){
    console.log(`In mergeProcess(column: ${column}, low: ${low}, mid: ${mid}, high: ${high})`);

    const n1 = mid - low + 1;
    const n2 = high - mid;
    console.log(`n1=${n1}, n2=${n2}`);
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await wait(delay);
        console.log('In mergeProcess left loop');
        console.log(column[low + i].style.height + ' at ' + (low+i));
        
        // Color corrresponding to the left loop
        column[low + i].style.background = 'orange';
        left[i] = column[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await wait(delay);
        console.log('In mergeProcess right loop');
        console.log(column[mid + 1 + i].style.height + ' at ' + (mid+1+i));
        
        // Color corresponding to the right loop
        column[mid + 1 + i].style.background = 'yellow';
        right[i] = column[mid + 1 + i].style.height;
    }
    await wait(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await wait(delay);
        console.log('In mergeProcess while loop');
        console.log(parseInt(left[i]), parseInt(right[j]));
        
        // To add color for which two r being compared for merging
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            console.log('In mergeProcess while loop if');
            // Color in comparision
            if((n1 + n2) === column.length){
                column[k].style.background = 'white';  // white if we are at absolute sorted position
            }
            else{
                column[k].style.background = '#FF869E';  // Maroon if we are at relatively sorted position
            }
            
            column[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            console.log('In mergeProcess while loop else');
            // Color in comparision
            if((n1 + n2) === column.length){
                column[k].style.background = 'white';  // white if we are at absolute sorted position
            }
            else{
                column[k].style.background = '#FF869E';  // Maroon if we are at relatively sorted position
            } 
            column[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await wait(delay);
        console.log("In while if n1 is left");
        // Color in comparision
        if((n1 + n2) === column.length){
            column[k].style.background = 'white';  // white if we are at absolute sorted position
        }
        else{
            column[k].style.background = '#FF869E';  // Maroon if we are at relatively sorted position
        }
        column[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await wait(delay);
        console.log("In while if n2 is left");
        // Colour in comparision
        if((n1 + n2) === column.length){
            column[k].style.background = 'white';  // white if we are at absolute sorted position
        }
        else{
            column[k].style.background = '#FF869E';  // Maroon if we are at relatively sorted position
        }
        column[k].style.height = right[j];
        j++;
        k++;
    }
}

// Merge Sort
async function mergeSortProcess(column, l, r){
    console.log(`In mergeSortProcess(column: ${column},l: ${l}, r: ${r})`);
    if(l >= r){
        console.log(`return cause just 1 elemment l=${l}, r=${r}`);
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    console.log(`mid=${m}`, typeof(m));
    await mergeSortProcess(column, l, m);
    await mergeSortProcess(column, m + 1, r);
    await mergeProcess(column, l, m, r);
}

// Call the function
mergeSort.addEventListener('click', async function(){
    let column = document.querySelectorAll('.column');
    let l = 0;
    let r = parseInt(column.length) - 1;
    disableSortingButton();
    disableSizeSlider();
    disableNewArrayButton();
    await mergeSortProcess(column, l, r);
    enableSortingButton();
    enableSizeSlider();
    enableNewArrayButton();
});
