// O(n^2)
function selection_sort(arr) {
    if(!arr || !arr[0]) return arr;
    
    for(let i = 0; i < arr.length; i++) {
        let minimum = arr[i]
        let minimumIndex = i
        for(let j = i; j < arr.length; j++) {
            if(arr[j] < minimum) {
                minimum = arr[j]
                minimumIndex = j
            }
        }
        // swap
        let temp = arr[i]
        arr[i] = minimum
        arr[minimumIndex] = temp
    }
}

module.exports = selection_sort