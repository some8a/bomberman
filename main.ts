namespace SpriteKind {
    export const renga = SpriteKind.create()
    export const fire = SpriteKind.create()
    export const goal = SpriteKind.create()
    export const spriteItem1 = SpriteKind.create()
    export const spriteItem = SpriteKind.create()
    export const kindItem1 = SpriteKind.create()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.kindItem1, function (sprite, otherSprite) {
    bombpower += 1
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.fire, SpriteKind.goal, function (sprite, otherSprite) {
    otherSprite.setImage(img`
        f f f f f f f f f f f f f f f f 
        f e e e e e e e e e e e e e e f 
        f e 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        f e 4 e e e e e e e e e e e 4 f 
        b e 4 e 4 4 4 4 4 4 4 4 4 5 4 f 
        b e 4 e 4 4 4 4 4 4 4 4 4 5 4 f 
        f e 4 5 5 5 5 5 5 5 5 5 5 5 4 f 
        f e 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        f e 4 4 4 4 4 4 4 4 4 4 5 5 4 f 
        f e 4 4 4 4 4 4 4 4 4 4 5 e 4 f 
        f e 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        f e 4 e e e e e e e e e e e 4 f 
        b e 4 e 4 4 4 4 4 4 4 4 4 5 4 f 
        b e 4 e 4 4 4 4 4 4 4 4 4 5 4 f 
        f e 4 5 5 5 5 5 5 5 5 5 5 5 4 f 
        f e 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
        `)
    tiles.setWallAt(tiles.getTileLocation(otherSprite.x / 16, otherSprite.y / 16), false)
})
sprites.onOverlap(SpriteKind.fire, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    numOfEnemy += -1
    mySprite.say(numOfEnemy)
    if (numOfEnemy == 0) {
        music.baDing.play()
    }
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
sprites.onOverlap(SpriteKind.fire, SpriteKind.kindItem1, function (sprite, otherSprite) {
    otherSprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    tiles.setWallAt(tiles.getTileLocation(otherSprite.x / 16, otherSprite.y / 16), false)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    if (numOfEnemy == 0) {
        game.over(true)
    }
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
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
    music.bigCrash.play()
    for (let bombcount = 0; bombcount <= bombpower; bombcount++) {
        if ((mySprite2.y + 8) % 32 != 16) {
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
            if (fireR.x < 224) {
                tiles.setWallAt(tiles.getTileLocation(fireR.x / 16, fireR.y / 16), false)
            }
            pause(100)
            fireR.destroy(effects.fire, 500)
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
            if (fireL.x > 16) {
                tiles.setWallAt(tiles.getTileLocation(fireL.x / 16, fireL.y / 16), false)
            }
            pause(100)
            fireL.destroy(effects.fire, 500)
        }
        if ((mySprite2.x + 8) % 32 != 16) {
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
            if (fireD.y < 224) {
                tiles.setWallAt(tiles.getTileLocation(fireD.x / 16, fireD.y / 16), false)
            }
            pause(100)
            fireD.destroy(effects.fire, 500)
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
            if (fireU.y > 16) {
                tiles.setWallAt(tiles.getTileLocation(fireU.x / 16, fireU.y / 16), false)
            }
            pause(100)
            fireU.destroy(effects.fire, 500)
        }
    }
    mySprite2.destroy()
})
let fireU: Sprite = null
let fireD: Sprite = null
let fireL: Sprite = null
let fireR: Sprite = null
let mySprite2: Sprite = null
let enemy1: Sprite = null
let numOfEnemy = 0
let bombpower = 0
let mySprite: Sprite = null
let renga2: Sprite = null
let Item1: Sprite = null
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`レベル1`)
let spriteGoal = sprites.create(img`
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
    `, SpriteKind.goal)
tiles.placeOnRandomTile(spriteGoal, assets.tile`transparency16`)
tiles.setWallAt(tiles.getTileLocation(spriteGoal.x / 16, spriteGoal.y / 16), true)
for (let index = 0; index < 2; index++) {
    Item1 = sprites.create(img`
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
        `, SpriteKind.kindItem1)
    tiles.placeOnRandomTile(Item1, assets.tile`transparency16`)
    tiles.setWallAt(tiles.getTileLocation(Item1.x / 16, Item1.y / 16), true)
}
for (let cY = 0; cY <= 13; cY++) {
    for (let cX = 0; cX <= 13; cX++) {
        if (cX != 1) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(cY, cX), assets.tile`transparency16`) && Math.percentChance(40)) {
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
numOfEnemy = 4
for (let index = 0; index < numOfEnemy; index++) {
    enemy1 = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Enemy)
    while (true) {
        tiles.placeOnRandomTile(enemy1, assets.tile`transparency16`)
        if (enemy1.x < 80) {
            enemy1.destroy()
        } else {
            break;
        }
    }
    enemy1.follow(mySprite, 20)
}
