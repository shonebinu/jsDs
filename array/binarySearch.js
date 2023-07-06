const array = [1, 2, 3, 4, 5]; // in binary search, the array need's to be sorted.

//num = the element to find in the array.
num = 4;

function binarySearch(num) {
    let start = 0, end = array.length - 1;
    while (start <= end) {
        mid = Math.trunc((start + end)/2);
        if (num == array[mid]) {
            console.log(`The element ${num} is found at the index ${mid}.`);
            return;
        } else if (num <= array[mid]) end = mid-1;
        else start = mid + 1;
    }
    console.log("The element isn't in the array.");
}

binarySearch(num);