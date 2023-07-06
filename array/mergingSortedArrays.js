// Merging two sorted arrays

const array1 = [0, 2, 4, 6, 8];
const array2 = [1, 3, 5, 7, 9];
const array3 = [];

const mergeAndSort = () => {
    let a = b = c = 0;
    while (a < array1.length && b < array2.length) {
        if (array1[a] < array2[b]) {
            array3[c] = array1[a];
            a++, c++;
        } else {
            array3[c] = array2[b];
            b++, c++;
        }
    }

    while (a < array1.length) {
        array3[c] = array1[a];
        a++, c++;
    }

    while (b < array2.length) {
        array3[c] = array2[b];
        b++, c++;
    }
}

mergeAndSort();

array3.forEach(item => console.log(item));