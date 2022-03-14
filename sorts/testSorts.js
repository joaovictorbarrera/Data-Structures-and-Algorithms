const bubble_sort = require("./bubblesort")
const insertion_sort = require("./insertionsort")
const quick_sort = require("./quicksort")
const selection_sort = require("./selectionsort")
const merge_sort = require("./mergesort")

function printFullArr(arr) {
    let returning = '['
    if(arr[0]) returning += arr[0]
    for(let i = 1; i < arr.length; i++) {
        returning += `, ${arr[i]}`
    }
    returning += ']'
    console.log(returning)
}

function random(num) {
    let arr = []
    for(let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * num) + 1)
    }
    return arr
}

function getAvg(sorting_func, numTimes, numItems) {
    let time = 0;
    for(let i = 0; i < numTimes; i++) {
        let arr = random(numItems)
        console.log("Unsorted:")
        printFullArr(arr)
        
        let begin=Date.now();
        sorting_func(arr)
        let end= Date.now();

        console.log("Sorted:")
        printFullArr(arr)
        time += (end-begin)/1000;
    }
    return time/numTimes
}

function buildTable(arrayOfSorts, numTimes, numItems) {
    let arrayOfAvgs = []
    arrayOfSorts.forEach(sorting_func => {
        arrayOfAvgs.push([sorting_func.name, Math.floor(getAvg(sorting_func, numTimes, numItems) * 10000)/10000])
    })
    console.table(arrayOfAvgs.sort((a,b) => a[1] - b[1]))
}

// buildTable([bubble_sort, insertion_sort, quick_sort, selection_sort, merge_sort], 10, 50000)
// buildTable([merge_sort, quick_sort], 10, 10000000)
// buildTable([bubble_sort, insertion_sort, selection_sort], 10, 50000)
buildTable([merge_sort], 1, 1000000)