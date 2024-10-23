"use strict";
var OldMcDoof;
(function (OldMcDoof) {
    let Animals = [];
    let storage = 100;
    class Animal {
        constructor(_type, _food, _noise) {
            this.set(_type, _food, _noise);
        }
        set(_type, _food, _noise) {
            this.type = _type;
            this.food = _food;
            this.noise = _noise;
        }
        eat() {
            if (storage >= this.food) {
                storage -= this.food;
                console.log(storage);
            }
            else {
                alert("no more food left!!!!!!!!!!!!!!!");
            }
        }
        alert() {
            console.log(this.noise);
        }
    }
    let Cow = new Animal("cow", 3, "moo");
    let Chicken = new Animal("chicken", 1, "chirp");
    let Pig = new Animal("pig", 4, "oink");
    Animals.push(Cow);
    Animals.push(Chicken);
    Animals.push(Pig);
    function simulate(_iterations) {
        for (let j = 0; j < _iterations; j++) {
            for (let i = 0; i < Animals.length; i++) {
                Animals[i].alert();
                Animals[i].eat();
            }
        }
    }
    OldMcDoof.simulate = simulate;
})(OldMcDoof || (OldMcDoof = {}));
