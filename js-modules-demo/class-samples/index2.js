var Dinosaur2 = (function () {
    function Dinosaur2(name, timeframe, region) {
        this.name = name;
        this.timeframe = timeframe;
        this.region = region;
    }
    return Dinosaur2;
})();
var dino2 = new Dinosaur2('Euhelopus', 100.5, 'Asia');
console.log(dino2['name']);
