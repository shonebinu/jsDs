const array = [10, 6, 5, 22, 99, 103, 246];

function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

function quickSort(beg, end) {
    let left, right, pivot;
    if (beg < end) {
        pivot = left = beg;
        right = end;
        while (left < right) {
            while (array[left] <= array[pivot])
                left++;
            while (array[right] > array[pivot])
                right--;
            if (left < right) 
                swap(array, left, right); //swap a[left] & a[right]
        }
        swap(array, pivot, right);
        quickSort(beg, right-1);
        quickSort(right+1, end);
    }
}

quickSort(0, array.length-1);

console.log("Sorted array: ");

array.forEach(item => console.log(item));
