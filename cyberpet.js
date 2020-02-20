class Animal {
    constructor(name) {
        this._name = name;
        this._hunger = 100;
        this._thirst = 100;
        this._happiness = 0;
        this._health = 100;

    }
    //getters to get info
    get name() {
        return this._name;
    }
    get hunger() {
        return this._hunger;
    }
    get thirst() {
        return this._thirst;
    }
    get happiness() {
        return this._happiness;
    }
    get health() {
        return this._health;
    }

    //methods interact with pet
    eat() {
        this._hunger -= 5;
    }
    drink() {
        this._thirst -= 5;
    }
    play() {
        this._happiness += 5;
    }
    health() {
        this._health -= 5;
    }
}
class Dog extends Animal {
    constructor(name, favfood) {
        super(name);
        this.favfood = favfood;
    }
}

const fozzy = new Dog("fozzy", ["steak", "carrot"]);
const tilly = new Dog("tilly", ["chocolate", "salt"]);


const eatdrink = () => {
    fozzy.eat(); //this.hunger--
    fozzy.drink(); //this.thirst--
    tilly.drink();
    tilly.eat();
}

const playgame = () => {
    fozzy.play();
    tilly.play();
}

const healthbar = () => {
    fozzy.health();
    tilly.health();
}
const food = () => {
    fozzy.favfood()
}
eatdrink();

playgame();

healthbar();

console.log(fozzy);

console.log(tilly);

eatdrink();

playgame();

healthbar();

console.log(fozzy);

console.log(tilly);