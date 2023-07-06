const array = [10, 6, 5, 22, 99, 103, 246];

function insertionSort() {
    let j, temp;
    for (let i = 1; i < array.length; i++) {
        temp = array[i];
        j = i - 1;
        while (array[j] > temp && j >= 0) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
}

insertionSort();

console.log("Sorted array: ");

array.forEach(item => console.log(item));