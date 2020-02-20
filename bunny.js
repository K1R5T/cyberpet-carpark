class Bunny {
    constructor(name) {
        this._name = name;
        this._hops = 0;
    }
    get name() {
        return this._name;
    }
    get hops() {
        return this._hops;
    }
    increaseHops() {
        this._hops++;
    }
}
const rosie = new Bunny("Rosie");
const lizzie = new Bunny("Lizzie")

console.log(rosie);
console.log(lizzie);


