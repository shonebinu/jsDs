const array = [1, 2, 3, 4, 5];

num = 4;

function binarySearch(start, end) {
    if (start<=end) {
        let mid = Math.trunc((start + end) / 2);
        if (num == array[mid]) {
            console.log(`The element ${num} is found at the index ${mid}.`);
            return;
        } else if (num < array[mid]) binarySearch(start, mid - 1);
        else binarySearch(mid + 1, end);
    }
}

binarySearch(0, array.length-1);