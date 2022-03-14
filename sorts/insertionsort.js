function insertion_sort(arr) {
    if(!arr || arr.length < 2) return arr
    for(let i = 1; i < arr.length; i++) {
        let j = i
        while(j > 0 && arr[j] < arr[j - 1]) {
            let temp = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = temp
            j--
        }
        // for(let j = i; j > 0; j--) {
        //     if(arr[j] >= arr[j - 1]) 
        //         break;
        //     // swap
        //     let temp = arr[j]
        //     arr[j] = arr[j - 1]
        //     arr[j - 1] = temp
        // }
    }
}

module.exports = insertion_sort