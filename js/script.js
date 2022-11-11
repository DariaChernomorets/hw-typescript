'use strict';
const user1 = {
    name: 'John',
    surname: 'Smith'
};
user1.name = 'Pete';
console.log(user1);
delete user1.name;
console.log(user1);
// Task #3
let arr = [1, 2, 3, -1, -2, -3];
const checkArr = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= 0)
            return console.log(false);
    }
    return console.log(true);
};
checkArr(arr);
