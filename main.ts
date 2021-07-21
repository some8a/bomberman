namespace SpriteKind {
    export const renga = SpriteKind.create()
    export const fire = SpriteKind.create()
    export const goal = SpriteKind.create()
    export const spriteItem1 = SpriteKind.create()
    export const spriteItem = SpriteKind.create()
    export const kindItem1 = SpriteKind.create()
    export const fire1 = SpriteKind.create()
    export const check = SpriteKind.create()
    export const itemNoFiteDamage = SpriteKind.create()
    export const Eraser = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.fire, SpriteKind.itemNoFiteDamage, function (sprite, otherSprite) {
    otherSprite.setImage(img`
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
        `)
    tiles.setWallAt(tiles.getTileLocation(otherSprite.x / 16, otherSprite.y / 16), false)
})
function clearStage () {
    for (let 値 of sprites.allOfKind(SpriteKind.renga)) {
        値.destroy()
    }
    for (let 値 of sprites.allOfKind(SpriteKind.spriteItem1)) {
        値.destroy()
    }
    for (let 値 of sprites.allOfKind(SpriteKind.kindItem1)) {
        値.destroy()
    }
    for (let 値 of sprites.allOfKind(SpriteKind.itemNoFiteDamage)) {
        値.destroy()
    }
    for (let 値 of sprites.allOfKind(SpriteKind.Projectile)) {
        値.destroy()
    }
    for (let 値 of sprites.allOfKind(SpriteKind.fire)) {
        値.destroy()
    }
    for (let 値 of sprites.allOfKind(SpriteKind.Enemy)) {
        値.destroy()
    }
    for (let 値 of sprites.allOfKind(SpriteKind.goal)) {
        値.destroy()
    }
    for (let 値 of sprites.allOfKind(SpriteKind.Player)) {
        値.destroy()
    }
    for (let 値 of sprites.allOfKind(SpriteKind.Enemy)) {
        値.destroy()
    }
    tiles.setTilemap(tilemap`レベル1`)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `)
    if ((mySprite.y - 24) % 32 < 8) {
        mySprite.y += 0 - (mySprite.y - 24) % 32
    }
    if ((mySprite.y - 24) % 32 > 24) {
        mySprite.y += 32 - (mySprite.y - 24) % 32
    }
})
function setSprite () {
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
    numOfEnemy = stageLevel
    onlyStart = true
    if (stageLevel > 4) {
        enemy1 = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy2)
        tiles.placeOnRandomTile(enemy1, assets.tile`transparency16`)
        enemy1.follow(mySprite, 20)
    }
    if (stageLevel > 3) {
        numOfEnemy += 1
        enemy1 = sprites.create(img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c b b b b b b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b c b b b c b b b b f . . . . 
            f b 1 f f f 1 b b b b f c . . . 
            f b b b b b b b b b b f c c . . 
            . f b b b b b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(enemy1, assets.tile`transparency16`)
        enemy1.follow(mySprite, 80)
    }
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
    pause(100)
    game.splash("Stage " + convertToText(stageLevel))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.kindItem1, function (sprite, otherSprite) {
    if (otherSprite.image.equals(img`
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
        `)) {
        bombpower += 1
        mySprite.say("POWER UP!", 1000)
        otherSprite.destroy()
        music.powerUp.play()
    }
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
            f e 4 e e e b b b b b b e e 4 f 
            b e 4 e 4 b d d d d d d b 5 4 f 
            b e 4 e 4 d b b b b b d b 5 4 f 
            f e 4 5 5 d b 5 5 5 5 d b 5 4 f 
            f e 4 4 4 d b 4 4 4 4 d b 4 4 f 
            f e 4 b d d d d d d d d d d b f 
            f e 4 d d d d d d d d d d d b f 
            f e 4 d d d d d d d d d d d b f 
            f e 4 d d d d b f f d d d d b f 
            b e 4 d d d d b f f d d d d b f 
            b e 4 d d d b f f f f d d d b f 
            f e 4 b d d b f f f f d d b b f 
            f e 4 4 b b b b f f b b b b 4 f 
            `)
    }
    tiles.setWallAt(tiles.getTileLocation(otherSprite.x / 16, otherSprite.y / 16), false)
    goalVisible = true
})
sprites.onCreated(SpriteKind.fire, function (sprite) {
    timer.after(100, function () {
        sprite.destroy(effects.fire, 500)
    })
})
sprites.onOverlap(SpriteKind.fire, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (numOfEnemy <= 0) {
        music.baDing.play()
    }
})
sprites.onOverlap(SpriteKind.fire, SpriteKind.renga, function (sprite, otherSprite) {
    otherSprite.destroy()
})
function setRenga () {
    for (let cY = 0; cY <= 13; cY++) {
        for (let cX = 0; cX <= 13; cX++) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(cY, cX), assets.tile`transparency16`)) {
                if (Math.percentChance(10 + stageLevel * 7)) {
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
    goalVisible = false
    tiles.placeOnRandomTile(spriteGoal, assets.tile`transparency16`)
    tiles.setWallAt(tiles.getTileLocation(spriteGoal.x / 16, spriteGoal.y / 16), true)
    if (stageLevel >= 4) {
        ItemDamage = sprites.create(img`
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
            `, SpriteKind.itemNoFiteDamage)
        tiles.placeOnRandomTile(ItemDamage, assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(ItemDamage.x / 16, ItemDamage.y / 16), true)
    }
    for (let index = 0; index < 1; index++) {
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
    for (let index = 0; index < 1; index++) {
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
            `, SpriteKind.spriteItem1)
        tiles.placeOnRandomTile(Item1, assets.tile`transparency16`)
        tiles.setWallAt(tiles.getTileLocation(Item1.x / 16, Item1.y / 16), true)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.fire, function (sprite, otherSprite) {
    if (fireDamage) {
        game.over(false)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f c f f f . 
        f f f f f f f c c f f f c 
        f f f f c f f f f f f f c 
        . c c c f f f e e f f c c 
        . f f f f f e e f f c c f 
        . f f f b f e e f b f f f 
        . f f 4 1 f 4 4 f 1 4 f f 
        . . f e 4 4 4 4 4 e e f e 
        . f e f b 7 7 7 e 4 4 4 e 
        . e 4 f 7 7 7 7 e 4 4 e . 
        . . . f 6 6 6 6 6 e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `)
    if ((mySprite.x - 24) % 32 < 8) {
        mySprite.x += 0 - (mySprite.x - 24) % 32
    }
    if ((mySprite.x - 24) % 32 > 24) {
        mySprite.x += 32 - (mySprite.x - 24) % 32
    }
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.spriteItem1, function (sprite, otherSprite) {
    if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        maxbomb += 1
        mySprite.say("GET BOMB!", 1000)
        otherSprite.destroy()
        music.powerUp.play()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `)
    if ((mySprite.y - 24) % 32 < 8) {
        mySprite.y += 0 - (mySprite.y - 24) % 32
    }
    if ((mySprite.y - 24) % 32 > 24) {
        mySprite.y += 32 - (mySprite.y - 24) % 32
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.itemNoFiteDamage, function (sprite, otherSprite) {
    if (otherSprite.image.equals(img`
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
        `)) {
        fireDamage = false
        mySprite.say("FIRE OK!", 1000)
        otherSprite.destroy()
        music.powerUp.play()
    }
})
sprites.onOverlap(SpriteKind.fire, SpriteKind.spriteItem1, function (sprite, otherSprite) {
    otherSprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    tiles.setWallAt(tiles.getTileLocation(otherSprite.x / 16, otherSprite.y / 16), false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.x == 24 && mySprite.y == 24) {
        if (mySprite.image.equals(img`
            . . . . . . . . . . . . . 
            . . . . . f f f f . . . . 
            . . . f f c c c c f f . . 
            . f f f c c c c c c f f . 
            f f c c c c c c c c c f f 
            f c c c c f c c c c c c f 
            . f f f f c c c c f c c f 
            . f f f f c c f c c c f f 
            . f f f f f f f f f f f f 
            . f f f f f f f f f f f f 
            . . f f f f f f f f f f . 
            . . e f f f f f f f f f . 
            . . e f f f f f f f f e f 
            . . 4 c 7 7 7 7 7 e 4 4 e 
            . . e f f f f f f f e e . 
            . . . f f f . . . . . . . 
            `)) {
            bombpower = 5
            maxbomb = 5
            fireDamage = false
            mySprite.say("CHEAT ON", 1000)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.renga, function (sprite, otherSprite) {
    if (onlyStart) {
        tiles.placeOnRandomTile(sprite, assets.tile`transparency16`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    if (goalVisible) {
        if (numOfEnemy <= 0) {
            if (stageLevel < 5) {
                game.splash("Stage " + convertToText(stageLevel) + " crear")
                stageLevel += 1
                clearStage()
                setRenga()
                setSprite()
            } else {
                game.over(true, effects.dissolve)
            }
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f c c c c f f . . 
        . f f f c c c c c c f f . 
        f f c c c c c c c c c f f 
        f c c c c f c c c c c c f 
        . f f f f c c c c f c c f 
        . f f f f c c f c c c f f 
        . f f f f f f f f f f f f 
        . f f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . e f f f f f f f f f . 
        . . e f f f f f f f f e f 
        . . 4 c 7 7 7 7 7 e 4 4 e 
        . . e f f f f f f f e e . 
        . . . f f f . . . . . . . 
        `)
    if ((mySprite.x - 24) % 32 < 8) {
        mySprite.x += 0 - (mySprite.x - 24) % 32
    }
    if ((mySprite.x - 24) % 32 > 24) {
        mySprite.x += 32 - (mySprite.x - 24) % 32
    }
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    timer.after(4000, function () {
        tiles.setWallAt(tiles.getTileLocation(sprite.x / 16, sprite.y / 16), false)
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
    if (goalVisible) {
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
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    onlyStart = false
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
        while (mySprite.overlapsWith(mySprite2)) {
            pause(100)
        }
        tiles.setWallAt(tiles.getTileLocation(mySprite2.x / 16, mySprite2.y / 16), true)
    }
})
let mySprite2: Sprite = null
let fireU: Sprite = null
let fireD: Sprite = null
let fireL: Sprite = null
let fireR: Sprite = null
let Item1: Sprite = null
let ItemDamage: Sprite = null
let spriteGoal: Sprite = null
let renga2: Sprite = null
let goalVisible = false
let enemy1: Sprite = null
let mySprite: Sprite = null
let fireDamage = false
let numOfEnemy = 0
let onlyStart = false
let numOfBomb = 0
let maxbomb = 0
let bombpower = 0
let stageLevel = 0
stageLevel = 1
bombpower = 1
maxbomb = 1
numOfBomb = 0
onlyStart = true
numOfEnemy = 4
fireDamage = true
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`レベル1`)
setRenga()
setSprite()
