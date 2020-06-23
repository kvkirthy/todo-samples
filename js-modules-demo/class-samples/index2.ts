class Dinosaur2{
    constructor(private name, private timeframe, public region) {
    }
}

let dino2 = new Dinosaur2('Euhelopus', 100.5, 'Asia');
console.log(dino2['name']);