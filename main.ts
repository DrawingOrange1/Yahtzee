let StoreDice4 = 0
let Dice4 = 0
let StoreDice1 = 0
let Dice1 = 0
let StoreDice5 = 0
let Dice5 = 0
let StoreDice2 = 0
let Dice2 = 0
let StoreDice3 = 0
let Dice3 = 0
let ShakeCount = 0
input.onPinPressed(TouchPin.P0, function () {
    if (StoreDice4 > 0) {
        StoreDice4 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoreDice4 = Dice4
    }
})
input.onButtonPressed(Button.A, function () {
    if (StoreDice1 > 0) {
        StoreDice1 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoreDice1 = Dice1
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (StoreDice5 > 0) {
        StoreDice5 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoreDice5 = Dice5
    }
})
input.onButtonPressed(Button.B, function () {
    if (StoreDice2 > 0) {
        StoreDice2 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoreDice2 = Dice2
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (StoreDice3 > 0) {
        StoreDice3 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        StoreDice3 = Dice3
    }
})
input.onGesture(Gesture.Shake, function () {
    ShakeCount = ShakeCount + 1
    Dice1 = randint(1, 6)
    Dice2 = randint(1, 6)
    Dice3 = randint(1, 6)
    Dice4 = randint(1, 6)
    Dice5 = randint(1, 6)
})
basic.forever(function () {
	
})
