// AVG O(n * log n)
// Worst O(N^2)
function quick_sort(arr, lowIndex=0, highIndex=arr.length - 1) {
    // base case -> 1 item in the array
    if(highIndex <= lowIndex) return
    
    // get random pivot
    let pivotIndex = Math.floor(Math.random() * (highIndex - lowIndex + 1)) + lowIndex // 5 10
    // swap random pivot with the end of this partition
    let pivot = arr[pivotIndex]
    arr[pivotIndex] = arr[highIndex]
    arr[highIndex] = pivot 

    // separate variables for the pointers because
    // they will change, and the indexes have to preserved
    let leftPointer = lowIndex
    let rightPointer = highIndex
    

    // iterates until all values smaller than the pivot are on the left side 
    // of where the final position of the pivot will be,
    // and all values greater than the pivot are on the right side
    while(leftPointer < rightPointer) {
        // walks left pointer until a number greater than the pivot is found
        while(arr[leftPointer] < pivot && leftPointer < rightPointer) {
            leftPointer++
        }
        // walks right pointer until a number less than the pivot is found
        while(arr[rightPointer] >= pivot && leftPointer < rightPointer) {
            rightPointer--
        }

        // swaps them both
        let temp = arr[leftPointer]
        arr[leftPointer] = arr[rightPointer]
        arr[rightPointer] = temp
    }

    // swap element at where the pointers ended with the pivot
    // because the pointers always end at the final position of the pivot in the array
    // AND the element at the end of the pointers is always greater or equal to the pivot
    let temp = arr[leftPointer]
    // could be left or right, doesnt matter
    arr[leftPointer] = pivot
    arr[highIndex] = temp

    // console.table([arr, "pivot: "+pivot, "lowIndex: "+lowIndex, "highIndex: "+highIndex,
    //  "leftPointer: "+leftPointer, "rightPointer: "+rightPointer, arr.slice(lowIndex, highIndex + 1)])
    quick_sort(arr, lowIndex, leftPointer - 1)
    quick_sort(arr, leftPointer + 1, highIndex)
}
module.exports = quick_sort
