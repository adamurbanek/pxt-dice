let sprite: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
basic.forever(function () {
	
})
