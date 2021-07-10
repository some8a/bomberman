namespace SpriteKind {
    export const renga = SpriteKind.create()
    export const fire = SpriteKind.create()
    export const goal = SpriteKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        . f f f c f f f c f f f . 
        . c f f c c f f f c c f . 
        . c c f f f f e f f f f . 
        . f f f f f f e e f f f . 
        . f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . . . . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.fire, SpriteKind.renga, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fire, function (sprite, otherSprite) {
    game.over(false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
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
        . . . . . . . . . . . . . 
        . . . f f f f f f f f . . 
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    bombpower += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    game.over(true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . 2 2 2 2 . . 
        . . . . . c c c c 1 1 2 2 . . . 
        . . . c c c c c 1 1 1 f b b . . 
        . . c c c c f f 1 1 b f f f b . 
        . c c c c f f f 1 1 f f f f b . 
        . c c c f f f f 1 1 f f f f f b 
        c c c f f f f f f f f f f f f b 
        c c c f f f f f f f f f f f f b 
        c c c f f f f f f f f f f f f b 
        c c c f f f f f f f f f f f f b 
        c c c f f f f f f f f f f f f b 
        . c c c f f f f f f f f f f b . 
        . f c c f f f f f f f f f f b . 
        . . f c c f f f f f f f f b . . 
        . . . f f b f f f f f f b . . . 
        . . . . . f f b b b b . . . . . 
        `, SpriteKind.Projectile)
    mySprite2.setPosition(Math.round((mySprite.x + 8) / 16) * 16 - 8, Math.round((mySprite.y + 8) / 16) * 16 - 8)
    pause(5000)
    for (let bombcount = 0; bombcount <= bombpower; bombcount++) {
        fireR = sprites.create(img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `, SpriteKind.fire)
        fireR.setPosition(mySprite2.x + 16 * bombcount, mySprite2.y)
        tiles.setWallAt(tiles.getTileLocation(fireR.x / 16, fireR.y / 16), false)
        fireL = sprites.create(img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `, SpriteKind.fire)
        fireL.setPosition(mySprite2.x - 16 * bombcount, mySprite2.y)
        tiles.setWallAt(tiles.getTileLocation(fireL.x / 16, fireL.y / 16), false)
        fireD = sprites.create(img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `, SpriteKind.fire)
        fireD.setPosition(mySprite2.x, mySprite2.y + 16 * bombcount)
        tiles.setWallAt(tiles.getTileLocation(fireD.x / 16, fireD.y / 16), false)
        fireU = sprites.create(img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `, SpriteKind.fire)
        fireU.setPosition(mySprite2.x, mySprite2.y - 16 * bombcount)
        tiles.setWallAt(tiles.getTileLocation(fireU.x / 16, fireU.y / 16), false)
        pause(100)
        mySprite2.destroy(effects.fire, 500)
        fireR.destroy(effects.fire, 500)
        fireL.destroy(effects.fire, 500)
        fireD.destroy(effects.fire, 500)
        fireU.destroy(effects.fire, 500)
    }
})
let fireU: Sprite = null
let fireD: Sprite = null
let fireL: Sprite = null
let fireR: Sprite = null
let mySprite2: Sprite = null
let bombpower = 0
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
                tiles.setWallAt(tiles.getTileLocation(cX, cY), true)
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
bombpower = 1
