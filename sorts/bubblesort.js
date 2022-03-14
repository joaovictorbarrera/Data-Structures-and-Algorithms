// O(N^2)
 function bubble_sort(arr) {
    let swapped = true
    while(swapped) {
        swapped = false
        for(let i = 1; i < arr.length; i++) {
            if(arr[i] < arr[i - 1]) {
                let temp = arr[i]
                arr[i] = arr[i - 1]
                arr[i - 1] = temp
                swapped = true
            }
        }
    }
}

module.exports = bubble_sort