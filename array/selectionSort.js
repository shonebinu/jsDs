const array = [10, 6, 5, 22, 99, 103, 246];

function selectionSort() {
    let small, loc, temp;
    for (let i = 0; i < array.length - 1; i++) {
        small = array[i], loc = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < small) small = array[j], loc = j;
        }
        temp = array[i];
        array[i] = array[loc];
        array[loc] = temp;
    }
}

selectionSort(array);

console.log('Sorted array: ');

array.forEach(item => console.log(item));