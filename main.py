@namespace
class SpriteKind:
    renga = SpriteKind.create()

def on_right_pressed():
    mySprite.set_image(img("""
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
    """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    mySprite.set_image(img("""
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
    """))
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_left_pressed():
    mySprite.set_image(img("""
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
    """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_up_pressed():
    mySprite.set_image(img("""
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
    """))
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_a_pressed():
    global mySprite2
    mySprite2 = sprites.create(img("""
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
        """),
        SpriteKind.projectile)
    mySprite2.set_position(mySprite.x, mySprite.y)
    pause(5000)
    mySprite2.destroy(effects.fire, 500)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

mySprite2: Sprite = None
mySprite: Sprite = None
renga2: Sprite = None
scene.set_background_color(6)
tiles.set_tilemap(tilemap("""
    レベル1
"""))
for list2 in tiles.get_tiles_by_type(assets.tile("""
    transparency16
""")):
    renga2 = sprites.create(img("""
            b b b b b b b b b b b b b b b b 
                    b c b e 4 4 4 4 4 4 4 4 e b c b 
                    b b e 4 4 4 4 4 4 4 4 4 4 e b b 
                    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
                    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
                    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
                    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
                    b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
                    b b d 4 4 4 4 4 4 4 4 4 4 d b b 
                    b b d 4 4 4 4 4 4 4 4 4 4 d b b 
                    b b 4 d 4 4 4 4 4 4 4 4 d 4 b b 
                    b b 4 4 d d d d d d d d 4 4 b b 
                    b b c 4 4 4 4 4 4 4 4 4 4 c b b 
                    b b b c c c c c c c c c c b b b 
                    b c b b b b b b b b b b b b c b 
                    b b b b b b b b b b b b b b b b
        """),
        SpriteKind.player)
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
mySprite.set_position(24, 24)
controller.move_sprite(mySprite)
scene.camera_follow_sprite(mySprite)