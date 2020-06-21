input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 10)
    basic.showString("S")
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P0, 160)
    basic.showString("R")
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 90)
    basic.showString("D")
})
pins.servoWritePin(AnalogPin.P0, 160)
basic.pause(500)
pins.servoWritePin(AnalogPin.P0, 90)
basic.pause(500)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
