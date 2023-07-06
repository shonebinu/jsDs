const array = [1, 2, 3, 4, 4, 5];

// pos = the position where the element have to be deleted
let pos = 4;

const deletion = (pos) => {
    for (let i = pos - 1; i < array.length; i++) {
        array[i] = array[i + 1];
    }
    array.pop();
}

deletion(pos);

array.forEach(item => console.log(item));