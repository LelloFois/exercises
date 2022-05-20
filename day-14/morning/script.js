
const data = [["https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg","London"],["https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg","Paris"],["https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg","New York"],["https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg","Nova Scotia"],["https://classes.codingbootcamp.cz/assets/classes/1428/tokio.jpg","Tokio"],["https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg","Venice"]]

// const oneData = {
//     "url": "https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg",
//     "description": {
//         "short": "London",
//         "medium": "English capital",
//         "long": "That big city on Thames river"
//     }
// }

const myButton = document.getElementById('myBtn')

const handleClick = (e) => {
    console.log(e)
    // console.log('click')
    const intervalId = setInterval(() => { 
        console.log(Math.random())
    }, 1000)

    setTimeout(() => {
        clearInterval(intervalId)
    }, 5000)
    
}

myButton.addEventListener('click', handleClick)

const myInput = document.getElementById('myInp')

const handleKeyPress = (e) => {
    console.log(e)
    if (e.code === 'Space') {
        console.log('Space pressed')
    }
}

myInput.addEventListener('keyup', handleKeyPress)

myAnchor = document.querySelector('a')

const handleLinkClick = (e) => {
    e.preventDefault()
    console.log('link clicked')
}

myAnchor.addEventListener('click', handleLinkClick)

console.log(myButton)

// const age = 20

// let isAdult = false
// if (age >= 18) {
//     isAdult = true
//     // let message = 'yay'
//     // if (isAdult) {
//     //     let message = 'nay'
//     //     console.log(message)
//     // }
//     // console.log(message)
// } else {
//     isAdult = false
// }

// if (isAdult) {
//     console.log('can drink')
// } else {
//     console.log('cannot drink')
// }

// const myFunc = () => {
//     console.log('I still dont know')
// }

// const higherOrderAccept = (func) => {
//     console.log('running higher order')
//     func()
// }

// const myFunc2 = () => {
//     console.log('I still dont know')
// }

// // 200 lines of code

// higherOrderAccept = 1

// // 3 includes of 500 lines files

// higherOrderAccept(myFunc2)



// const higherOrderReturn = () => {
//     myFunc = () => {
//         console.log('whatever')
//     }
//     return myFunc 
// }

// const func = higherOrderReturn();

// // func()

// const gimmeFive = () => {
//     return 5
// }

// const five = gimmeFive()
// console.log(five)

// console.log(oneData)

// console.log(JSON.stringify(oneData))

// const myFunc1 = () => {
//     // console.log('doing something')
//     return 'result1'
// }

// const objectOfFunctions = {
//     first: () => {
//         console.log('first')
//     },
//     second: () => {
//         console.log('second')
//     }
// }

// objectOfFunctions.first()

// const writeFirst = () => {
//     console.log('first')
// }

// writeFirst()

// const myResult1 = myFunc1()

// console.log(typeof(myFunc1))

// const oneDataString = '{"url":"https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg","description":{"short":"London","medium":"English capital","long":"That big city on Thames river"}}'
// console.log(oneDataString)
// console.log(JSON.parse(oneDataString))


// for (let key in oneData.description) {
//     console.log(key)
// }

// for (let value of oneData.description) {
//     console.log(value)
// }

/*
console.log(Object.keys(oneData.description))

Object.keys(oneData.description).forEach((key) => {
    console.log(oneData.description[key])
})


// containter = document.querySelector('.gallery')

// let pictureData = data[0];

// for (let index = 0; index < data.length; index++) {
//     pictureData = data[index];
//     containter.innerHTML = containter.innerHTML + `
//     <div class="image">
//         <img src="`+pictureData[0]+`" alt="London">
//         <div class="image__description">`+pictureData[1]+`</div>
//     </div>
//     `
// }

*/