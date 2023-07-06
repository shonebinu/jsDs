const array = [1, 2, 4, 5];

// num = the number to be inserted and pos = the position where the number to be inserted
let num = 3, pos = 3;

const insertion = (num, pos) => {
    for (let i = array.length - 1; i >= pos - 1; i--) 
        array[i + 1] = array[i];
    array[pos - 1] = num;
}

insertion(num, pos);

array.forEach(item => console.log(item));