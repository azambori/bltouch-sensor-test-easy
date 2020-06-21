input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 10)
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P0, 160)
    basic.showString("Reset")
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 90)
    basic.showArrow(ArrowNames.West)
})
pins.servoWritePin(AnalogPin.P0, 160)
basic.pause(500)
pins.servoWritePin(AnalogPin.P0, 10)
basic.pause(500)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
