const raiseRightHand = () => {
    // do something
}

raiseLeftHand()

const raiseRightHandAfter = (time) => {
    wait(time)
    raiseRightHand()
}

const waitAndDo = (func, time) => {
    wait(time)
    func()
}

waitAndDo(raiseRightHand, '5s')