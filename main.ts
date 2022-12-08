let number1 = 4
let previewStatePressedA = input.buttonIsPressed(Button.A);
let previewStatePressedB = input.buttonIsPressed(Button.B);

let pocitej = control.millis();

let pracuj2A = () => {
    number1 -= 1
    basic.showNumber(number1)
}

let pracuj2B = () => {
    number1 += 1
    basic.showNumber(number1)
}

let pracuj = function() {
    if (input.buttonIsPressed(Button.A)) {
        
        //let actualStateA = true;
        // if (previewStatePressed == false && actualStateA == true)
        if (!previewStatePressedA) {
            number1 -= 1
            previewStatePressedA = true;
        }
    } else {
        if (previewStatePressedA) {
        previewStatePressedA = false;
        }
    }

    let pocitej = () => {
        if (input.buttonIsPressed(Button.A)) {
            if (!previewStatePressedA) {
                number1 -= 1
                previewStatePressedA = true;
            }
        } else {
            if (previewStatePressedA) {
                previewStatePressedA = false;
            }
        }
    }
    basic.showNumber(pocitej)

    if (input.buttonIsPressed(Button.B)) {
        
        if (!previewStatePressedB) {
            number1 += 1
            previewStatePressedB = true;
        }
    } else {
        previewStatePressedB = false;
    }

    basic.showNumber(number1)
}

//input.onButtonPressed(Button.A, pracuj2A);  //registrace k události...

//input.onButtonPressed(Button.B, pracuj2B);  //registrace k události...

 while (true) {
     pracuj()
 }



// let cislo = 0;

// basic.forever(function () {
//     if (input.buttonIsPressed(Button.A)) {
//         cislo -= 1;
//     }

//     if (input.buttonIsPressed(Button.B)) {
//         cislo += 1;
//     }

//     if (cislo > 10) {
//         return;
//     }

//     if (cislo < 0) {
//         return;
//     }

//     whaleysans.showNumber(cislo)
//     basic.pause(185);
// })




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