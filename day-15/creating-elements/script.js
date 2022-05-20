const clickButton = document.querySelector("#click-me")

let paragraphCount = 0

let theLastAddedParagraphs = []


clickButton.addEventListener('click', () => {
    const myNewElement = document.createElement('p')
    paragraphCount++
    myNewElement.innerHTML = "<strong>Hi</strong>, I'm no."+paragraphCount+" here"
    myNewElement.classList.add('new')
    myNewElement.addEventListener('click', () => {
        console.log('paragraph clicked')
    })
    console.log(clickButton.parentElement)
    clickButton.parentElement.insertBefore(myNewElement, clickButton.parentElement.firstChild)
    myNewElement.textContent += "!"
    theLastAddedParagraphs.push(myNewElement)
})

const clickButtonToo = document.querySelector("#click-me-too")

clickButtonToo.addEventListener('click', () => {
    theLastAddedParagraphs.forEach((paragraph) => {
        paragraph.textContent += "!"
    })
})

const wanderer = document.querySelector('#wanderer')
const receiver = document.querySelector('.container-receiver')

wanderer.addEventListener('click', () => {
    const originalParent = wanderer.parentElement
    originalParent.removeChild(wanderer)
    wanderer.textContent = "Finaly home"
    setTimeout(() => {
        originalParent.insertBefore(wanderer, originalParent.firstChild)
    }, 1000)
})