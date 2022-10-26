input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(xvalue, yvalue)
            basic.pause(200)
            xvalue += 1
            led.plot(xvalue, 0)
        }
        yvalue += 1
        xvalue = 4
        for (let index = 0; index < 5; index++) {
            led.plot(xvalue, yvalue)
            basic.pause(200)
            xvalue += -1
            led.plot(xvalue, 0)
        }
        yvalue += 1
        xvalue = 0
    }
})
let yvalue = 0
let xvalue = 0
xvalue = 0
yvalue = 0
basic.forever(function () {
	
})
