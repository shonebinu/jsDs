const array = [10, 6, 5, 22, 99, 103, 246];

function selectionSort() {
    let min_index;
    for (let i = 0; i < array.length - 1; i++) {
        min_index = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min_index]) min_index = j;
        }
        swap(i, min_index);
    }
}

function swap(i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

selectionSort(array);

console.log('Sorted array: ');

array.forEach(item => console.log(item));