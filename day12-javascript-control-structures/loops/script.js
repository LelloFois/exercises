let funds = 10000;
let years = 0;

while (funds < 20000) {

    years++;

    if (years <= 4) {
        continue;
    }

    funds *= 1.028;

    console.log('Year ' + years + ': I have ' + funds.toFixed(2) + ' EUR');

    if (years >= 8) {
        break;
    }
}

console.log('Loop finally ended');


let i = 0;
while (i < 10) {
    i++;
}

let funds2 = 10000;

for (let i = 0; i < 6; i++) {
    // this will be run 6 times
    funds2 *= 1.028;

    console.log('Year ' + (i+1) + ': I have ' + funds2.toFixed(2) + ' EUR');
}


for (let years = 1; years <= 6; years++) {

    // this will be run 6 times
    funds2 *= 1.028;

    console.log('Year ' + years + ': I have ' + funds2.toFixed(2) + ' EUR');
}