bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Diamond)
bluetooth.startLEDService()
bluetooth.startTemperatureService()
bluetooth.startAccelerometerService()
basic.forever(function () {
	
})
