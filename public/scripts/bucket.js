/*** Visualize Bucket Sort ***/

// Bucket Sort
async function bucketSortProcess() {
    console.log('In bucketSortProcess()');
    const column = document.querySelectorAll(".column");

    let bucket = [];
    let bucketSize = 10;
    let minValue = parseInt(column[0].style.height);
    let maxValue = parseInt(column[0].style.height);

    // Find the minimum and maximum value in the array
    for(let i = 1; i < column.length; i++){
        if(parseInt(column[i].style.height) < minValue){
            minValue = parseInt(column[i].style.height);
        }
        else if(parseInt(column[i].style.height) > maxValue){
            maxValue = parseInt(column[i].style.height);
        }
    }

    // Initialize bucket
    let numberOfBucket = Math.floor((maxValue - minValue) / bucketSize) + 1;
    for(let i = 0; i < numberOfBucket; i++){
        bucket[i] = [];
    }

    // Pushing values into buckets
    for(let i = 0; i < column.length; i++){
        await wait(delay);
        bucket[Math.floor((parseInt(column[i].style.height) - minValue) / bucketSize)].push(parseInt(column[i].style.height));
        column[i].style.background = 'blue';
    }

    // Sorting buckets
    for(let i = 0; i < numberOfBucket; i++){
        await wait(delay);
        bucket[i].sort(function(a, b){return a-b});
    }

    // Pushing sorted values into original array
    let index = 0;
    for(let i = 0; i < numberOfBucket; i++){
        for(let j = 0; j < bucket[i].length; j++){
            await wait(delay);
            column[index].style.height = `${bucket[i][j]}px`;
            index++;
        }
    }

    // Color white the 0th column which is in absolute sorted positon
    column[0].style.background = 'white';

    // Color white those columns which are in absolute sorted positon
    for(let i = 0; i < column.length; i++){
        await wait(delay);
        column[i].style.background = 'white';
    }
}

// Call the function
bucketSort.addEventListener('click', async function(){
    disableSortingButton();
    disableSizeSlider();
    disableNewArrayButton();
    await bucketSortProcess();
    enableSortingButton();
    enableSizeSlider();
    enableNewArrayButton();
});
