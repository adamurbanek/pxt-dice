let cislo = 0;

basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        cislo -= 1;
    }

    if (input.buttonIsPressed(Button.B)) {
        cislo += 1;
    }

    if (cislo > 10) {
        return;
    }

    if (cislo < 0) {
        return;
    }

    whaleysans.showNumber(cislo)
    basic.pause(200);
})

    // input.onButtonPressed(Button.A, function() {
    //     if (cislo > 0) {
    //         cislo -= 1;
    //     }
    //     basic.showNumber(cislo)
    // })

    // input.onButtonPressed(Button.B, function() {
    //     if (cislo < 10) {
    //         cislo += 1;
    //     }
    //     basic.showNumber(cislo)
    // })