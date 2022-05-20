// const input = prompt('Write something');

// if (input && input != '0') {
//     alert('Condition 1 was truthy');
// } else if (input == '0') {
//     alert('Don\'t input zero please');
// } else {
//     alert('Condition 1 was falsy');
// }


// const value = confirm('Really?');

// console.log(value);

const weather = 'stormy';

if (weather === 'sunny') {

    console.log('Use sunscreen');

} else if (weather === 'windy') {

    console.log('Wear a coat');

} else if (weather === 'rainy') {
    // an umbrella is the correct solution for rain
    console.log('Bring an umbrella');

} else {

    console.log('Dress accordingly');

}

switch (weather) {
    case 'sunny':
        console.log('Use sunscreen');
        break;

    case 'windy':
        console.log('Wear a coat');
        break;

    case 'rainy':
        console.log('Bring an umbrella');
        break;

    default:
        console.log('Dress accordingly');
        break;
}





// today === 'sunday' || openShop();

// false || openShop()

// 1 + 1 == 2;

// !1 == false;


// if (false) {

// }


const gender_input = prompt('What is your gender?');

const gender = gender_input || 'female';

console.log(gender);