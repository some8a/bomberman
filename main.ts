namespace SpriteKind {
    export const renga = SpriteKind.create()
    export const fire = SpriteKind.create()
    export const goal = SpriteKind.create()
    export const spriteItem1 = SpriteKind.create()
    export const spriteItem = SpriteKind.create()
    export const kindItem1 = SpriteKind.create()
    export const fire1 = SpriteKind.create()
    export const check = SpriteKind.create()
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
    if (numOfEnemy <= 0) {
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
            f e 4 4 4 4 4 4 4 4 4 4 e e 4 f 
            f e 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f e 4 e e e e e e e e e e e 4 f 
            b e 4 e 4 4 4 4 4 4 4 4 4 5 4 f 
            b e 4 e 4 4 4 4 4 4 4 4 4 5 4 f 
            f e 4 5 5 5 5 5 5 5 5 5 5 5 4 f 
            f e 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            `)
    } else {
        otherSprite.setImage(img`
            f f f f f f f f f f f f f f f f 
            f e e e e e e e e e e e e e e f 
            f e 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f e 4 e e e 8 8 8 8 8 8 e e 4 f 
            b e 4 e 4 8 8 8 8 8 8 8 8 5 4 f 
            b e 4 e 4 8 c c c c c 8 c 5 4 f 
            f e 4 5 5 8 c 5 5 5 5 8 c 5 4 f 
            f e 4 4 4 8 c 4 4 4 4 8 c 4 4 f 
            f e 4 8 8 8 8 8 8 8 8 8 8 8 c f 
            f e 4 8 8 8 8 8 8 8 8 8 8 8 c f 
            f e 4 8 8 8 8 8 8 8 8 8 8 8 c f 
            f e 4 8 8 8 8 8 f f 8 8 8 8 c f 
            b e 4 8 8 8 8 8 f f 8 8 8 8 c f 
            b e 4 8 8 8 8 f f f f 8 8 8 c f 
            f e 4 c 8 8 8 f f f f 8 8 c c f 
            f e 4 4 c c c c f f c c c c 4 f 
            `)
    }
    tiles.setWallAt(tiles.getTileLocation(otherSprite.x / 16, otherSprite.y / 16), false)
})
sprites.onCreated(SpriteKind.fire, function (sprite) {
    timer.after(100, function () {
        sprite.destroy(effects.fire, 500)
    })
})
sprites.onOverlap(SpriteKind.fire, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.renga, function (sprite, otherSprite) {
    if (onlyStart == 1) {
        tiles.placeOnRandomTile(sprite, assets.tile`transparency16`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    if (numOfEnemy <= 0) {
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
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    timer.after(5000, function () {
        numOfBomb += -1
        music.bigCrash.play()
        for (let bombcount = 0; bombcount <= bombpower; bombcount++) {
            if ((sprite.y + 8) % 32 != 16) {
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
                fireR.setPosition(sprite.x + 16 * bombcount, sprite.y)
                if (fireR.x < 224) {
                    tiles.setWallAt(tiles.getTileLocation(fireR.x / 16, fireR.y / 16), false)
                }
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
                fireL.setPosition(sprite.x - 16 * bombcount, sprite.y)
                if (fireL.x > 16) {
                    tiles.setWallAt(tiles.getTileLocation(fireL.x / 16, fireL.y / 16), false)
                }
            }
            if ((sprite.x + 8) % 32 != 16) {
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
                fireD.setPosition(sprite.x, sprite.y + 16 * bombcount)
                if (fireD.y < 224) {
                    tiles.setWallAt(tiles.getTileLocation(fireD.x / 16, fireD.y / 16), false)
                }
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
                fireU.setPosition(sprite.x, sprite.y - 16 * bombcount)
                if (fireU.y > 16) {
                    tiles.setWallAt(tiles.getTileLocation(fireU.x / 16, fireU.y / 16), false)
                }
            }
        }
        sprite.setKind(SpriteKind.fire)
        sprite.destroy(effects.fire, 500)
    })
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    numOfEnemy += -1
    if (numOfEnemy <= 0) {
        spriteGoal.setImage(img`
            f f f f f f f f f f f f f f f f 
            f e e e e e e e e e e e e e e f 
            f e 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f e 4 e e e e e e e e e e e 4 f 
            b e 4 e 4 4 4 4 4 4 4 4 4 5 4 f 
            b e 4 e 4 4 4 4 4 4 4 4 4 5 4 f 
            f e 4 5 5 5 5 5 5 5 5 5 5 5 4 f 
            f e 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f e 4 4 4 4 4 4 4 4 4 4 5 5 4 f 
            f e 4 4 4 4 4 4 4 4 4 4 e e 4 f 
            f e 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            f e 4 e e e e e e e e e e e 4 f 
            b e 4 e 4 4 4 4 4 4 4 4 4 5 4 f 
            b e 4 e 4 4 4 4 4 4 4 4 4 5 4 f 
            f e 4 5 5 5 5 5 5 5 5 5 5 5 4 f 
            f e 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
            `)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    onlyStart = 0
    if (numOfBomb < maxbomb) {
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
        numOfBomb += 1
    }
})
let mySprite2: Sprite = null
let fireU: Sprite = null
let fireD: Sprite = null
let fireL: Sprite = null
let fireR: Sprite = null
let enemy1: Sprite = null
let mySprite: Sprite = null
let renga2: Sprite = null
let Item1: Sprite = null
let spriteGoal: Sprite = null
let numOfEnemy = 0
let numOfBomb = 0
let maxbomb = 0
let bombpower = 0
let onlyStart = 0
onlyStart = 1
bombpower = 10
maxbomb = 1
numOfBomb = 0
numOfEnemy = 4
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`レベル1`)
spriteGoal = sprites.create(img`
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
for (let index = 0; index < numOfEnemy; index++) {
    enemy1 = sprites.create(img`
        . . . c c c c c c . . . . . . . 
        . . c 6 7 7 7 7 6 c . . . . . . 
        . c 7 7 7 7 7 7 7 7 c . . . . . 
        c 6 7 7 7 7 7 7 7 7 6 c . . . . 
        c 7 c 6 6 6 6 c 7 7 7 c . . . . 
        f 7 6 f 6 6 f 6 7 7 7 f . . . . 
        f 7 7 7 7 7 7 7 7 7 7 f . . . . 
        . f 7 7 7 7 6 c 7 7 6 f . . . . 
        . . f c c c c 7 7 6 f c c c . . 
        . . c 6 2 7 7 7 f c c 7 7 7 c . 
        . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
        . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
        . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
        . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
        . . c 6 1 1 1 1 1 7 6 6 c c . . 
        . . . c c c c c c c c c c . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(enemy1, assets.tile`transparency16`)
    enemy1.follow(mySprite, 20)
}
