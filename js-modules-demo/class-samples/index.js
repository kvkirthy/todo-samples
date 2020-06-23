class Dinosaur{
    #name = '';
    #milYears = 0;
    
    constructor(name, timeframe, region) {
        this.#name = name;
        this.region = region;
        this.#timeframe = timeframe;
    }

    get #timeframe(){
        return `lived ${this.#milYears} million years ago`
    }

    set #timeframe(value){
        this.milYears = value;
    }

    #generateTitle() {
        return `A dinosaur ${this.#name} ${this.#timeframe} in ${this.region}.  `;
    }

    getTitle() {
        return this.#generateTitle();
    }
}

let dino = new Dinosaur('Euhelopus', 100.5, 'Asia');
console.log(dino.getTitle());

console.log(dino['#name']);