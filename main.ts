    let cislo = 0;
    basic.showNumber(cislo)
    
    input.onButtonPressed(Button.A, function() {
        if (cislo > 0) {
            cislo -= 1;
        }
        basic.showNumber(cislo)
    })

    input.onButtonPressed(Button.B, function() {
        if (cislo < 10) {
            cislo += 1;
        }
        basic.showNumber(cislo)
    })