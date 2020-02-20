class Cars {
    constructor(carReg) {
        this._carReg = carReg;
        this._hours = 0;
        this._cost = 0.00;
    }
    get carReg() {
        return this._carReg;
    }
    get hours() {
        return this._hours;
    }
    get cost(){
        return this._cost;
    } 
    increaseHours() {
        this._hours++;
        this._cost += 1.50
    }
}
class Staff extends Cars{
    constructor(carreg, staffnum){
        super(carreg);
        this._staffnum = staffnum;
        this._creditremaining = 20;
        this._hour = 0;
        
    }
    get staffnum(){
        return this._staffnum
    }
    get creditremaining(){
        return this._creditremaining
    }
    get hour(){
        return this._hour;
    }
    decreaseCredit(){
        this._creditremaining-=5;
        this._hour = this._hour +1;
    }

}
const pay = (reg, hr) => {
    const car = new Cars(reg);
    for (i = 0; i <hr; i++) {
        car.increaseHours();
    }
    console.log(`you need to pay £${car.cost} for ${car.hours} hours.`);
}
const credit = (carreg,hr) => {
    const staff = new Staff(carreg, hr);
    for (i = 0; i <hr; i++) {
        staff.decreaseCredit();
    }
    
    
    console.log(`welcome staff member ${staff.staffnum} -> you are parked for ${staff.hour} hours -> ${staff.creditremaining}`)
    }

pay("FE06 XTN", 5);
credit("fe06 xtn", "345764", 6);


