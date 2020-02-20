let Animal = function (nm, hun, thir, happy, health) {
    this.name = nm;
    this.hunger = hun;
    this.thirst = thir;
    this.happiness = happy;
    this.healthy = health;
}
Animal.prototype.getDetails = function () {
    return `Name: ${this.name} / hunger: ${this.hunger} / thirst: ${this.thirst} / happiness: ${this.happiness} / ${this.healthy}`
}

let Dog = function (nm, hun, thir, happy, favfood, health) {
    Animal.call(this, nm, hun, thir);
    this.happiness = happy;
    this.favfood = favfood;
    this.healthy = health;
};
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.dogInfo = function () {
    return `${this.name} ->${this.healthy} -> ${this.hunger} -> ${this.thirst} -> ${this.happiness} -> ${this.favfood} `
}
let fozzy = new Dog("fozzy",100, 100, 50, ["steak", "peanut butter", "coffee"], 100);
let tilly = new Dog("tilly", 100, 100, 50, ["cake", "chicken", "biscuits"], 100);
//methods interact with pet

Dog.prototype.health = function () {
    return this.healthy-=5 
}
Dog.prototype.eat = function () {
    return this.hunger-=5;
}
Dog.prototype.drink = function () {
    return this.thirst-=5;
}
Dog.prototype.play = function () {
    return this.happiness+=5
}

fozzy.health()
fozzy.eat()
fozzy.drink()
fozzy.play()

tilly.health()
tilly.eat()
tilly.drink()
tilly.play()

console.log(fozzy);
console.log(tilly);

// console.log(fozzy.getDetails());
// console.log(fozzy.dogInfo());

