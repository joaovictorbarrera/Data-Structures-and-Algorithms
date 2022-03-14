// O(n*log n)
// 
function merge_sort(arr) {
    // base case: if only one element, return it
    if(arr.length < 2) return arr

    // get middle of the array
    let middleIndex = arr.length / 2

    // divide array in the middle, then merge_sort left and right side
    let left = arr.slice(0, middleIndex) 
    let right = arr.slice(middleIndex, arr.length)
    merge_sort(left)
    merge_sort(right)

    // merge both sides
    let j = 0
    let k = 0
    for(let i = 0; i < arr.length; i++) {
        if(k >= right.length || left[j] <= right[k]) {
            arr[i] = left[j]
            j++
        } else {
            arr[i] = right[k]
            k++
        }
    }
}

module.exports = merge_sort