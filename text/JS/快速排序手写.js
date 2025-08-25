function quickSort(arr, left, right) {
    if(left >= right) return;

    let i = left - 1, j = right + 1;
    let mid = arr[(left + right) >> 1];

    while(i < j) {
        do { i++ } while(arr[i] < mid);
        do { j-- } while(arr[j] > mid);
        if(i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    quickSort(arr, left, j);
    quickSort(arr, j + 1, right);
}

const arr = [1, 3, 5, 2, 4, 6];
quickSort(arr, 0, arr.length - 1);
console.log(arr);