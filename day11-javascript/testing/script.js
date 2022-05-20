// console.log( typeof 123 );

// console.log( typeof 123.45 );

// console.log( typeof 'abc' );

// console.log( typeof {} );

// console.log( typeof undefined );

// console.log( typeof null );

// console.log( typeof false );


// let firstName = 'Jan';

// console.log( firstName );

// firstName = 'Honza';

// console.log( firstName );

// console.log( firstName );

// const greeting = 'Hello, ' + firstName;

// console.log( greeting );

// // greeting = 'Goodbye, ' + firstName;

// const age = 30;

// const thisYear = 2022;

// const yearOfBirth = thisYear - age;

// console.log(yearOfBirth);

// const sentence = 'I was born in the year ' + (thisYear - age);

// console.log( sentence );

// console.log( (2/3) );
// console.log( (2/3).toFixed(2) );


// let number = 0;

// console.log( number );

// console.log( number++ );

// console.log( number );

// number += 4;
// // is the same as:
// number = number + 4;

// number -= 3;
// // same as
// number = number - 3;

// console.log( 1 == true );

// console.log( 1 === true );

// console.log( 1 === 1 );

// console.log( 0 == false );

// console.log( 0 === false );

// let foo = '';

// console.log( !foo );

// const age = 27;

// const greeting = 'The greeting: ' + (age < 18 ? 'Restricted to minors!' : 'Welcome!');

// console.log( greeting );

// declaring the function
function sayWelcomeMessage(age, language) {

    const greeting = language == 'en'
        ? getWelcomeMessageInEnglish(age)
        : getWelcomeMessageInSpanish(age);

    console.log(greeting);

}

const getWelcomeMessageInEnglish = (age) => {

    return age < 18 ? 'Restricted to minors!' : 'Welcome!';

}

const getWelcomeMessageInSpanish = (age) => {

    return age < 18 ? 'Prohibidado!' : 'Bienvenido!';

}

// calling the function

const welcome3Times = () => {
    sayWelcomeMessage(17, 'en');

    sayWelcomeMessage(30, 'sp');

    sayWelcomeMessage(18, 'sp');
}

welcome3Times();

// any of the variables that we declared in the function
// don't exist outside of it
// console.log(age);
const age = 28;

const initializeHugeApp = () => {

    welcome3Times();

    askUserForPErsonalData();

    sendDataToCIA();

}

const myFunction = () => {
    console.log('Hello')
}

myFunction();

let someVariable = myFunction;


const mathematicalAddition = (a, b) => {

    const result = a + b;

    return result;

}

const twoPlusTwo = mathematicalAddition(2, 2);

console.log( mathematicalAddition(1, 3) );

console.log( 5 * mathematicalAddition(2, 3) ); // 25


const add = (a, b) => {
    return a + b;
}

const add2 = (a, b) => a + b;

const raiseByOne = (a) => a + 1;

const raiseByTwo = a => a + 2;

const name = prompt('What is your name?');

let element = document.querySelector('h1');

console.log(element);

element.innerHTML = 'Hello, ' + name;
