const array = [65, 70, 75, 80, 85, 60, 55, 50, 45, 12];

function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

function quickSort(beg, end) {
    let left, right, pivot;
    if (beg < end) {
        pivot = left = beg;
        right = end;
        while (left < right) {
            while (array[left] <= array[pivot] && left < end)
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
