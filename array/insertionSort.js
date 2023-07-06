const array = [10, 6, 5, 22, 99, 103, 246];

function insertionSort() {
    let j, key;
    for (let i = 1; i < array.length; i++) {
        key = array[i];
        j = i - 1;
        while (array[j] > key && j >= 0) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
}

insertionSort();

console.log("Sorted array: ");

array.forEach(item => console.log(item));