const names = ['Martin', 'Jane', 'Eve', 'Arthur'];

// to position 4 of names array
names[4] = 'Joe';

names[3] = 'Bruce';

names.push('Ricky');

names.unshift('Tom');

names.splice(2, 0, 'Lucas');

// names[10] = 'Rick';

// console.log(names[9]);

const removed = names.splice(4, 1);

console.log(removed);

console.log(names);

const last_name = names.pop();

console.log(last_name);

console.log( names );

const first_name = names.shift();

console.log(first_name);

console.log( names );

console.log( names.length );

console.log( names[ names.length - 1 ] );

// let one_element = null;
// do {

//     one_element = names.shift();
//     console.log(one_element);

// } while (one_element);

// console.log(names);

const fruits = ['apple', 'pear', 'banana', 'orange', 'mango'];

// for (let i = 0; i < fruits.length; i++) {

//     console.log( fruits[i] );

//     if (fruits[i] == 'pear' || fruits[i] == 'banana') {
//         fruits.splice(i, 1);
//     }

//     console.log(fruits);
// }

fruits.forEach(

    (fruit, key) => {

        if (fruit == 'pear') {
            return;
        }
        // console.log('Element ' + fruit + ' has the index of ' + key);

        console.log(fruit);

    }

)

const new_array = fruits.map((fruit, index) => {

    return '<li>' + fruit + '</li>';
    return index;

})

console.log(new_array);

console.log( fruits.concat(['potatoes', 'tomatoes', 'carrots']) );

console.log( fruits.filter((fruit) => {

    if (fruit == 'pear' || fruit == 'banana') {
        return false;
    } else {
        return true;
    }

}))

console.log( fruits.indexOf('mango') );

console.log( fruits.indexOf('apple') );

console.log( fruits.indexOf('plum') );

if (-1 === fruits.indexOf('plum')) {
    console.log('No plums in the array');
}

console.log( fruits.join(' and ') );

const vegetables = [
    'potatoes',
    ['radishes', 'carrots']
];

console.log(vegetables);

console.log( vegetables[1] );

console.log( vegetables[1][1] );

console.log( typeof vegetables );
