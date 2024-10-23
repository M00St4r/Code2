"use strict";
var OldMcDoof;
(function (OldMcDoof) {
    let Animals = [];
    class Animal {
        constructor(_type, _food, _amount, _noise) {
            this.set(_type, _food, _amount, _noise);
        }
        set(_type, _food, _amount, _noise) {
            this.type = _type;
            this.food = _food;
            this.amount = _amount;
            this.noise = _noise;
        }
        eat(_amount) {
            this.amount -= _amount;
        }
        alert() {
            console.log(this.noise);
        }
    }
    let Cow = new Animal("cow", "wheat", 10, "moo");
    let Chicken = new Animal("chicken", "seeds", 10, "chirp");
    let Pig = new Animal("pig", "wheat", 10, "oink");
    Animals.push(Cow);
    Animals.push(Chicken);
    Animals.push(Pig);
    function simulate() {
        for (let i = 0; i < Animals.length; i++) {
            Animals[i].alert();
            Animals[i].eat(1);
        }
    }
    OldMcDoof.simulate = simulate;
})(OldMcDoof || (OldMcDoof = {}));
