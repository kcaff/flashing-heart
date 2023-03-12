basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        `)
    music.playMelody("C D E D C F D G ", 120)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # .
        # . . . .
        . # # # .
        `)
    basic.showLeds(`
        . . # # .
        . # . . #
        . # . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . # # # .
        # . . # .
        # . . # .
        # . . # .
        . # # # #
        `)
})
