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
    for (let 値 of sprites.allOfKind(SpriteKind.fire1)) {
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
    controller.moveSprite(mySprite, 60, 60)
    scene.cameraFollowSprite(mySprite)
    onlyStart = true
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
    numOfEnemy = 1
    if (stageLevel >= 2) {
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
        numOfEnemy = 2
    }
    if (stageLevel >= 3) {
        enemy1 = sprites.create(img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . f f 
            c c c c c d d d e e f c . f e f 
            . f d d d d d e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f e f f e f e e e e f . . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(enemy1, assets.tile`transparency16`)
        enemy1.setBounceOnWall(true)
        enemy1.setVelocity(20, 20)
        numOfEnemy = 3
    }
    if (stageLevel >= 4) {
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
        numOfEnemy = 4
    }
    if (stageLevel == 5) {
        enemy2 = sprites.create(img`
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
        tiles.placeOnRandomTile(enemy2, assets.tile`transparency16`)
        enemy2.follow(mySprite, 20)
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
    timer.after(200, function () {
        sprite.destroy()
    })
})
sprites.onOverlap(SpriteKind.fire, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    if (numOfEnemy <= 0) {
        pause(500)
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
                if (Math.percentChance(10 + stageLevel * 5)) {
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
                mySprite.destroy()
                spriteGoal.setImage(img`
                    f f f f f f f f f f f f f f f f 
                    f e e e f f f f f f f f e e e f 
                    f e 4 f f f f f f c f f f 4 4 f 
                    f e f f f f f f c c f f f c 4 f 
                    b e f f f c f f f f f f f c 4 f 
                    b e c c c f f f e e f f c c 4 f 
                    f e f f f f f e e f f c c f 4 f 
                    f e f f f b f e e f b f f f 4 f 
                    f e 4 f 4 1 f 4 4 f 1 4 f 4 4 f 
                    f e 4 f e 4 4 4 4 4 4 e f 4 4 f 
                    f e 4 f f f e e e e f f f 4 4 f 
                    f e f e f b 7 7 7 7 b f e f 4 f 
                    b e e 4 f 7 7 7 7 7 7 f 4 e 4 f 
                    b e e e f 6 6 6 6 6 6 f e e 4 f 
                    f e 4 4 4 f f f f f f 4 4 4 4 f 
                    f e 4 4 4 f f 4 4 f f 4 4 4 4 f 
                    `)
                music.playMelody("G B A G C5 B A B ", 120)
                stageLevel += 1
                clearStage()
                setRenga()
                setSprite()
            } else {
                enemy2.destroy(effects.fire, 2000)
                pause(3000)
                clearStage()
                tiles.setTilemap(tilemap`レベル11`)
                scene.setBackgroundImage(img`
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    `)
                music.playMelody("C5 G B A F A C5 B ", 81)
                game.showLongText("Evil has perished. Peace has come to the world.", DialogLayout.Bottom)
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
                    . . . . . . . . . . . . . . . . 
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
                    . . 4 5 4 4 4 4 4 . 4 4 4 . . . 
                    . 4 5 4 . . 4 4 4 . . . 4 4 4 . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.fire)
                fireR.setPosition(sprite.x + 16 * bombcount, sprite.y)
                if (fireR.x < 224) {
                    tiles.setWallAt(tiles.getTileLocation(fireR.x / 16, fireR.y / 16), false)
                }
                fireL = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
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
                    . . 4 5 4 4 4 4 4 . 4 4 4 . . . 
                    . 4 5 4 . . 4 4 4 . . . 4 4 4 . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.fire)
                fireL.setPosition(sprite.x - 16 * bombcount, sprite.y)
                if (fireL.x > 16) {
                    tiles.setWallAt(tiles.getTileLocation(fireL.x / 16, fireL.y / 16), false)
                }
            }
            if ((sprite.x + 8) % 32 != 16) {
                fireD = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
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
                    . . 4 5 4 4 4 4 4 . 4 4 4 . . . 
                    . 4 5 4 . . 4 4 4 . . . 4 4 4 . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.fire)
                fireD.setPosition(sprite.x, sprite.y + 16 * bombcount)
                if (fireD.y < 224) {
                    tiles.setWallAt(tiles.getTileLocation(fireD.x / 16, fireD.y / 16), false)
                }
                fireU = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
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
                    . . 4 5 4 4 4 4 4 . 4 4 4 . . . 
                    . 4 5 4 . . 4 4 4 . . . 4 4 4 . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.fire)
                fireU.setPosition(sprite.x, sprite.y - 16 * bombcount)
                if (fireU.y > 16) {
                    tiles.setWallAt(tiles.getTileLocation(fireU.x / 16, fireU.y / 16), false)
                }
            }
        }
        sprite.setKind(SpriteKind.fire)
        sprite.destroy()
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
    if (!(spriteGoal.image.equals(img`
        f f f f f f f f f f f f f f f f 
        f e e e f f f f f f f f e e e f 
        f e 4 f f f f f f c f f f 4 4 f 
        f e f f f f f f c c f f f c 4 f 
        b e f f f c f f f f f f f c 4 f 
        b e c c c f f f e e f f c c 4 f 
        f e f f f f f e e f f c c f 4 f 
        f e f f f b f e e f b f f f 4 f 
        f e 4 f 4 1 f 4 4 f 1 4 f 4 4 f 
        f e 4 f e 4 4 4 4 4 4 e f 4 4 f 
        f e 4 f f f e e e e f f f 4 4 f 
        f e f e f b 7 7 7 7 b f e f 4 f 
        b e e 4 f 7 7 7 7 7 7 f 4 e 4 f 
        b e e e f 6 6 6 6 6 6 f e e 4 f 
        f e 4 4 4 f f f f f f 4 4 4 4 f 
        f e 4 4 4 f f 4 4 f f 4 4 4 4 f 
        `))) {
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
let enemy2: Sprite = null
let numOfEnemy = 0
let enemy1: Sprite = null
let mySprite: Sprite = null
let fireDamage = false
let onlyStart = false
let numOfBomb = 0
let maxbomb = 0
let bombpower = 0
let stageLevel = 0
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999fff999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999fffffff99999999999999999999999999999999999999999999999999999999fff999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999ffffffffffffff999999999999999999999999999999999999999999999999999999fff999999999999999999911119999999999999999999999999999999999999999999999999999
    99999999999999ffffffffffffffff9999999999999999999999999999999999999999999999999999fff999999999999999999111111999999999999999999999999999999999999999999999999999
    99999999999999fffffff111fffffff999999999999999999999999999999999999999999999999999ffff99999999999999999111111991199999999999999999999999999999999999999999999999
    9999999999999ffffff1111111fffff119999999999999999999999999999999999999999999999999ffff999999999999991111111119111119999999999999999999ffff9999999999999999999999
    9999999999999ffff11111111111fff1199999999999999999999999999999999999999999999999999fff999999999999911111111111ffffff9999999999fff9999fffff9999999999999999999999
    9999999999999fff111111111111fff1111999999999999999999999999999999999999999999999999fff9999fffffff91111111111fffffffff999999999fff999ffffff9999999999999999999999
    999999999999ffff11111111111ffff1111199999999999999999999999999999999999999999999999fff999ffffffffff111111111ffffffffff99999999fff99fffff999999999999999999999999
    999999999999ffff911111111ffffff1111199911999999999999999999999999999999999999999999fff99fffffffffff11111111fffff11fffff9911999fff9fffff9999999999999999999999999
    999999999999fff119111111ffffff11111199111119999999999999999999999999999999999999999fff9fffff999fffff1111111ffff1111ffff9111119fff9ffff99999999999999999999999999
    999999999999fff1119111fffffff111111999111119999999999999999999999999999999999999999ffffffff99911ffff911111ffff111111fff9111119fffffff999999999999999999999999999
    999999999999fff111111ffffff11111119111111111999999999999999999999999999999999999999fffffff9999111ffff11111ffff111ffffff1111111fffffff999999999999999999999999999
    99999999999ffff11111ffffff1111111111111111fff99999999999fff999999999999fffff9999999ffffff99999111ffff11111fffffffffffff11111119fffff9999999999999999999999999999
    99999999999ffff111fffffff111111111111111ffffffff99999999fff9999ffff999fffffff999999fffff9999999111fff11111ffffffffffff111111119ffff99999999999999999999999999999
    99111999911fffffffffffffffffff111111111fffffffffff999999fff91fffffff9fffffffff999999fff99991111911fff11111fffffffff111111111199ffff99999999999111199999999999999
    91111199111fffffffffffffffffffff1111111ffffffffffff99999fff1fffffffffffff9ffff999991ffff9911111111fff11111fffff1111111111111191ffff99999999991111119999999999999
    91111191111ffffffffff11ffffffffffff111ffff1911ffffff9999ffffffffffffffff999fff999991ffff911111111ffff11111fff111111111111111191ffff99999999991111119111999999999
    99111111111ffffffff111111111fffffff111ffff111111ffff9999fffffff111fffff9999ffff999991fff11111111fffff11111fff11111111111fff1111ffff99999999999911111111199999999
    91111111111ffffff1111111111111fffff111fff11111199ffff999ffffff11111fff99999ffff999911fff1111111fffff111111fff1111111111ffff11111fff99999991111911111111199999999
    11111111111fff111111111111111111fff111fff11111119fffff911fffff1111ffff999999fff199111fff111dd1fffff1111111ffff111111111ffff11111fff99999911111111111111999999999
    11111111111fff111111111111111111fff111fff111111119ffff911ffff11111ffff111999fffddd111fff111ddfffff11111111fffff1111111ffff111111fff91119911111111111111111199999
    11111111111fff111111111111111111fff111fff1111111111fff111ffff11111ffff111199fffddd111fff111dfffff1111111111ffff111111fffff111111fff11111111111111111111111119999
    11111111111fff11111111111111111ffff111ffff111111111fff111ffff11111fffff11199fffddddd1ffff1dfffff111111111111ffff1111fffff1111111fff11111111111111111111111119999
    11111111111fff1111111111111111fffff111ffffdddddddd1fff111ffff111111ffff11111ffffdddd1ffff1fffff1111111111111ffffffffffff11111111111111111dddddddddd1111111111111
    11111111111fff111111111111111fffff11111fffdddddddd1fff111ffff111111ffff11111ffffdddd11ffffffffd11111111111111ffffffffff111111111111111111dddddddddd1111111111111
    11111111111fff11111ddd1111111ffff111111fff11dddddd1fff111ffff111111ffff11111ffffdddd11fffffffddd11111111111111ffffffff1111111111111111111dd1d1ddddd1111111111111
    11111111111fff1111ddddd11111ffff1111111fffdddddd1d1fff111ffff111111ffff111111fffdddd11fffffffddd1111111111111111ffffddd111111111111111111dddddd11dd1111111111111
    11111111111fff111dddddd1111fffff1111111fffddddddddffff1111fff111111ffffddd111fffdddd1111ffffdddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
    11111111111fff111ddd1d1111fffff11111111ffffdddddddffff1111fff111111ffffddd111ddddddd1111fffddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
    11111111111ffff11dddddd1ffffff111111111ffffddddd1ffff11111fff111111ffffddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
    11111111dddffff11dd11d1ffffffd1111111111fffffdddfffffdddddfff1111111fffddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
    d1dd1111ddddfffdddd1ddffffffddd111111111ffffffffffffd11dddfff111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
    dddd11111d1dfffddddddfffffddddd1111111111fffffffffffdddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
    dd1d11111dddfff1dddddffff1ddddd1111111111ddfffffff11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
    dddd1111ddddfffdddddffff11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
    dd1d1111ddddfffdddffffff11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
    ddddd1dd1d1dfffdfffffffd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
    ddddd1ddddddffffffffffdddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
    ddddd1ddddddffffffffddddddddddddd1dddddddddbbbdddddddddbbbddddddddddddddddddddfffddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
    ddddd1ddddddfffffffdddddddddddddd1dddddddbbbbbbbddddddbbbbbdddddddddddddddddddfffddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
    dddddbbbbbbbbfffddddddddddddddddd1dddddddbbbbbbbddddddbbbbbdddddddddddddddddddfffddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
    dddddbbbbbbbbbddddddddddddddddddd1ddfffffbbbbbbbddddddbbbbbdddddddddddddddddddfffddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
    dddddbddbbbbbbddddddddddddddddddfffffffffffffffbdddddbbbbbbbdd111dddddddddddddfffbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
    dddddbbbbbbbdbddddddddddddddddddffffffffffffffffdddddbbbbbbbddd11dddddddddddddfffbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
    dddddbbbbbbbbbddddddddddbdddddddffffffdfffffffffdddddbbbbbbbddddddddddd1dddddbfffbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
    dddddbbbbbbbbbdddddddddbbdddddddfffbbbdddbbbbffffddddbbbbbbbdd1ddddddddddddddbfffbddddddbbdddddddddddbbbbdffffffdddddddbbddddfffddbbbbfffffffdbbbddddbbbbbbbbd1d
    dddddbbbbbbbdbdddddddddbbdddddddffffbbdddbbbbffffddddbbbbbbbdd111ddddddddddddbfffbbdddddfffddddddddddbbbffffffffffdddddbbddddfffffbbffffffffffbbbddddbbbbbbbb11d
    dddddbbbbbbbbbddbbbbbbdbbdddddddffffbbdddbbbbffffddddbbbbbbbddddfffffbb1dddddbfffbdddddbfffddddddddddbfffffffffffffbbbbbbddddfffffffffffffffffbbbddddbbbbbbbbddd
    dddddbbbbbbbdbddbddbbbdbbddddddddfffdbbddbbffffffddbbbbbbbbbbdbfffffffffbbbbbbfffdbddddffffddddddddddbffffffdbffffffbbbbbdddddffffffffffddbfffbbbddbbbbbbbbbbbbb
    dddddbbbbbbbbbddbbbbdbdbbddddddddfffbbbddfffffffdddbbbbbbbbbbfffffffffffffdbbbfffbbddddffffddddddddddfffffbbbbbdffffdbbbbdddddddffffffbbddbfffdbbddbbbbbbbbbbbbb
    dddddbbbbbbbbbddbbbbdbbbbddddddddfffbbbdfffffffffffbbbbbbbbbffffffdffffffffdbbfffbbdddffffbddddddddddffffbbbbbbfffffdbbbbddddddddffffbbbddbfffbbbddbbbbbbbbbbbbb
    dbbdbbbbbbbbbbbdbddbbbbbbddddddddffffbbfffffffffffffffbbbbbbfffffdddbbfffffbbbfffbbbddffffbbdddbddbbffffbbbbbbbfffdbbbbbbddddddddffffbbbddbfffbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddffffffffffffffffffffffbbbbffffbddddbbbbffffbbffffbbdffffbbbdddbbbbbffffbbbbbbffffbbbbbbbdddddbdffffbbbbddbfffbbbddbbbbfffbbbbbb
    bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddffffffffffbbbbdffffffbbbbffffbbbdbbbdbffffbbffffbbdffffbbbbdddbddbfffbbbbbbbfffffbdbbbbdbbdbbbffffbbbbddbfffbbbddbbbffffbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbfffffffbbbbbbbdddbfffbbbbfffbbbbdbbbbbbffffbbfffbbffffbbbbbdbbbbbbfffbbbbbbbfffffbbbbbbdbbdbbbffffbbbbddffffdbbddbbfffffbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffbbbbbbbbbbdddbffffbbbffffbbbdbbbbbbffffbbfffbfffffbbbbbdbbbbbbfffbbbbbbbffffffbbbbbbbbbbbfffffbbbbbbffffbbbddbfffffbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffbbbbbbbbbbbdbffffbbbffffbbbdbbbbbbbfffbbffffffffbbbbbbdbdbbbbfffbbbbbbfffffffbbbbbbbbbbbffffbbbbbbbfffbbbbbdfffffbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffbbbbbbbbbbdbffffbbbbfffbbbdbbbbbbbfffbbffffffffffffffdbbbbbbfffbbbbbbfffffffbbbbbbbbbbdffffbbbbbbbfffbbbbbfffffbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffbbbbbbbbbbffffffbbbbffffbbdbbbbbbbfffbbbffffffffffffffbbbbbbfffbbbbbffffbffffbbbbbbbbbbffffbbbbbbbfffbbbffffffbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbfffbbbbbbbbbffffffbbbbbffffbbdbbbbbbbfffbbbffffbfffffffffffbbbbfffbbbbfffffbffffffbbddbdbdffffbbbbbbbfffffffffffbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbffffbbbbbbbffffffbbbbbbbffffbdbbbbbbbfffbbbffffbbbbbbbfffffbbbbfffbbbfffffbbbfffffffbbbdbdffffbbbbbbbffffffffffbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbffffbbbbbbfffffbbbbbbbbbffffbbbbbbbfffffbbbbfffbbbbbbbbffffbbbbffffffffffbbbbbffffffffbbbdffffdbbbbbbbfffffffbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbffffbbbbffffffbbbbbbbbbbbfffffbbbfffffffbbbbffffbbbbbbbbbbbbbbbffffffffffbbbbbbbffffffbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbfffbbfffffffbbbbbbbbbbbbffffffffffffffbbbbbfffffbbbbbbbbbbbbbbbfffffffbbbbbbbbbbbffffbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbfffffffffbbbbbbbbbbbbbbfffffffffffbbbbbbbbfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbfffffffffbbbbbbbbbb7bbbbbbbfffffffbb7bbbbbbbbffffbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
    bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77fffffffffb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbfffbbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
    bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb7ffffff7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
    bb77bb77b77bb77bbb77b77bbbb77b7b77b7ffffbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
game.showLongText("Push A to start", DialogLayout.Bottom)
stageLevel = 1
bombpower = 1
maxbomb = 1
numOfBomb = 0
onlyStart = true
fireDamage = true
scene.setBackgroundImage(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `)
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`レベル1`)
setRenga()
setSprite()
