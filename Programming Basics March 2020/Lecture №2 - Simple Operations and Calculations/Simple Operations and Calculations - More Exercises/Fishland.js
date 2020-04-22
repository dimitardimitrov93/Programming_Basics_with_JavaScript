function fishLand(inputSkumriaPrice, inputCacaPrice, inputKgPalamud, inputKgSafrid, inputKgMidi) {

    let skumriaPrice = Number(inputSkumriaPrice);
    let cacaPrice = Number(inputCacaPrice);
    let kgPalamud = Number(inputKgPalamud);
    let kgSafrid = Number(inputKgSafrid);
    let kgMidi = Number(inputKgMidi);

    let palamudPrice = kgPalamud * (skumriaPrice + (0.6 * skumriaPrice));
    let safridPrice = kgSafrid * (cacaPrice + (0.8 * cacaPrice));
    let midiPrice = 7.5 * kgMidi;

    let totalPrice = (palamudPrice + safridPrice + midiPrice).toFixed(2);

    console.log(totalPrice);
    
}

fishLand(6.9, 4.2, 1.5, 2.5, 1);