const array = [1, 2, 3, 4, 5];

// num = the number to search for.
let num = 3;

const linearSearch = (num) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == num) {
            console.log(`Element found at index ${i}.`);
            return;
        }
    }    
    console.log("Element can't be found in this array.");
}

linearSearch(num);