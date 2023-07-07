const array = [10, 6, 5, 22, 99, 103, 246];

function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

function quickSort(beg, end) {
    let low, high, pivot;
    if (beg < end) {
        pivot = beg;
        low = beg;
        high = end;
        while (low < high) {
            while (array[low] <= array[pivot])
                low++;
            while (array[high] > array[pivot])
                high--;
            if (low < high) 
                swap(array, low, high); //swap a[low] & a[high]
        }
        swap(array, pivot, high);
        quickSort(beg, high-1);
        quickSort(high+1, end);
    }
}

quickSort(0, array.length-1);

console.log("Sorted array: ");

array.forEach(item => console.log(item));