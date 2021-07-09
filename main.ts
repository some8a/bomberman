namespace SpriteKind {
    export const renga = SpriteKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f c f f f . 
        . f f f f f f c c f f f . 
        . f f f c f f f f f f f . 
        . c c c f f f e e f f c . 
        . f f f f f e e f f c c . 
        . f f f b f e e f b f f . 
        . f f 4 1 f 4 4 f 1 4 f . 
        . . f e 4 4 4 4 4 e e f . 
        . f e f b 7 7 7 e 4 4 4 . 
        . e 4 f 7 7 7 7 e 4 4 e . 
        . . . f 6 6 6 6 6 e e . . 
        . . . f f f f f f f . . . 
        . . . . . . . . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f c f f f . 
        . f f f f f f c c f f f . 
        . f f f c f f f f f f f . 
        . c c c f f f e e f f c . 
        . f f f f f e e f f c c . 
        . f f f b f e e f b f f . 
        . f f 4 1 f 4 4 f 1 4 f . 
        . . f e 4 4 4 4 4 e e f . 
        . f e f b 7 7 7 e 4 4 4 . 
        . e 4 f 7 7 7 7 e 4 4 e . 
        . . . f 6 6 6 6 6 e e . . 
        . . . f f f f f f f . . . 
        . . . . . . . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f . 
        . f c c f f f c c f f c . 
        . f f f f e f f f f c c . 
        . f f f e e f f f f f f . 
        . . f f e e f b f e e f . 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . . . . . . . . . . . 
        `)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . f f f c c c c c c f f . 
        . f c c c c c c c c c f . 
        . c c c c f c c c c c c . 
        . f f f f c c c c f c c . 
        . f f f f c c f c c c f . 
        . f f f f f f f f f f f . 
        . f f f f f f f f f f f . 
        . . f f f f f f f f f f . 
        . . e f f f f f f f f f . 
        . . e f f f f f f f f e . 
        . . 4 c 7 7 7 7 7 e 4 4 . 
        . . e f f f f f f f e e . 
        . . . . . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.renga, function (sprite, otherSprite) {
    cX = (mySprite.x - 8) % 16
    cY = (mySprite.y - 8) % 16
    if (cX < 8) {
        mySprite.x += 0 - cX
    } else {
        mySprite.x += 0 - cX
    }
    if (cY == 0) {
        mySprite.y += 0 - cY
    } else {
        mySprite.y += 0 - cY
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        . . . . . b b b b b b . . . . . 
        . . . b b 9 9 9 9 9 9 b b . . . 
        . . b b 9 9 9 9 9 9 9 9 b b . . 
        . b b 9 d 9 9 9 9 9 9 9 9 b b . 
        . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
        b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
        b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
        b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
        b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
        . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
        . b d 5 3 3 3 3 3 3 3 d 5 b b . 
        . . b d 5 d 3 3 3 3 5 5 b b . . 
        . . . b b 5 5 5 5 5 5 b b . . . 
        . . . . . b b b b b b . . . . . 
        `, SpriteKind.Projectile)
    mySprite2.setPosition(mySprite.x, mySprite.y)
    pause(5000)
    mySprite2.destroy(effects.fire, 500)
})
let mySprite2: Sprite = null
let cY = 0
let cX = 0
let mySprite: Sprite = null
let renga2: Sprite = null
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`レベル1`)
for (let cY = 0; cY <= 13; cY++) {
    for (let cX = 0; cX <= 13; cX++) {
        if (cX != 1) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(cY, cX), assets.tile`transparency16`) && Math.percentChance(50)) {
                renga2 = sprites.create(img`
                    e e e e e e e e e e f e e e e e 
                    e e e e e e e e e e f e e e e e 
                    e e e e e e e e e e f e e e e e 
                    f f f f f f f f f f f f f f f f 
                    e e e e f e e e e e e e e e e e 
                    e e e e f e e e e e e e e e e e 
                    e e e e f e e e e e e e e e e e 
                    f f f f f f f f f f f f f f f f 
                    e e e e e e e e e e f e e e e e 
                    e e e e e e e e e e f e e e e e 
                    e e e e e e e e e e f e e e e e 
                    f f f f f f f f f f f f f f f f 
                    e e e e f e e e e e e e e e e e 
                    e e e e f e e e e e e e e e e e 
                    e e e e f e e e e e e e e e e e 
                    f f f f f f f f f f f f f f f f 
                    `, SpriteKind.renga)
                tiles.placeOnTile(renga2, tiles.getTileLocation(cX, cY))
            }
        }
    }
}
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(24, 24)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
