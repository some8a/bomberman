controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 8; index++) {
        mySprite.x += 2
        pause(10)
    }
    scene.centerCameraAt(mySprite.x, mySprite.y)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 8; index++) {
        mySprite.y += 2
        pause(10)
    }
    scene.centerCameraAt(mySprite.x, mySprite.y)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 8; index++) {
        mySprite.x += -2
        pause(10)
    }
    scene.centerCameraAt(mySprite.x, mySprite.y)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 8; index++) {
        mySprite.y += -2
        pause(10)
    }
    scene.centerCameraAt(mySprite.x, mySprite.y)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f f . . . 
        . . . . . f f . . . . . f . . . 
        . . . . f f . . . . . . . f f . 
        . . . f . . . . . . . . . . f . 
        . . . f . . . . . . . . . . f . 
        . . . f . . . . . . . . . . f . 
        . . . f . . . . . . . . . . f . 
        . . . f f . . . . . . . . f f . 
        . . . . f . . . . . . . . f . . 
        . . . . f f . . . . . . f f . . 
        . . . . . f f . . . . f f . . . 
        . . . . . . f f . . f f . . . . 
        . . . . . . . . f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    mySprite2.setPosition(mySprite.x, mySprite.y)
    pause(5000)
    mySprite2.destroy(effects.fire, 500)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
let mySprite3: Sprite = null
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`レベル1`)
for (let counterX = 0; counterX <= 12; counterX++) {
    for (let counterY = 0; counterY <= 12; counterY++) {
        while (Math.percentChance(60)) {
            mySprite3 = sprites.create(img`
                e e e e f e e e e e e e e e e e 
                e e e e f e e e e e e e e e e e 
                e e e e f e e e e e e e e e e e 
                f f f f f f f f f f f f f f f f 
                e e e e e e e e e e e f e e e e 
                e e e e e e e e e e e f e e e e 
                e e e e e e e e e e e f e e e e 
                e e e e e e e e e e e f e e e e 
                f f f f f f f f f f f f f f f f 
                e e e e f e e e e e e e e e e e 
                e e e e f e e e e e e e e e e e 
                e e e e f e e e e e e e e e e e 
                f f f f f f f f f f f f f f f f 
                e e e e e e e e e e e f e e e e 
                e e e e e e e e e e e f e e e e 
                e e e e e e e e e e e f e e e e 
                `, SpriteKind.Projectile)
            mySprite3.setPosition(counterX * 16 + 24, counterY * 16 + 24)
        }
    }
}
let カウンター = 0
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . 2 2 2 . . . 2 2 . . . . 
    . . 2 2 . . . . . . . 2 2 . . . 
    . . 2 . . . . . . . 2 2 2 . . . 
    . . 2 . . . . 2 2 2 2 . 2 . . . 
    . . 2 2 . . . . f f f . 2 . . . 
    . . . 2 . . . . . . . 2 2 . . . 
    . . . 2 2 . . . . f f 2 . . . . 
    . . . 2 2 . . . . . 2 . 2 2 . . 
    . . 2 2 . . . . . . . . . 2 2 . 
    . . 2 . . . . . . . . . . . 2 . 
    . . 2 . . . . . . . . . . . 2 . 
    . . 2 . . . . . . . . . . . 2 . 
    . . 2 . . . . . . . . . . . 2 2 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(24, 24)
