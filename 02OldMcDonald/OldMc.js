"use strict";
var OldMcDoof;
(function (OldMcDoof) {
    class Animal {
        constructor(_type, _food, _noise, _hunger) {
            this.type = _type;
            this.food = _food;
            this.noise = _noise;
            this.hunger = _hunger;
        }
        eat(_food) {
            if (_food[this.food] > 0) {
                _food[this.food] -= this.hunger;
            }
            return _food;
        }
        alert() {
            return this.noise;
        }
        doSpecialAction() {
            console.log(`${this.type} does a special action`);
        }
    }
    class Cow extends Animal {
        constructor(_type, _food, _noise, _hunger) {
            super(_type, _food, _noise, _hunger); // Call Animal's constructor
        }
        doSpecialAction() {
            console.log(`${this.type} ruminates`);
        }
    }
    class Chicken extends Animal {
        constructor(_type, _food, _noise, _hunger) {
            super(_type, _food, _noise, _hunger); // Call Animal's constructor
        }
        doSpecialAction() {
            console.log(`${this.type} lays an egg`);
        }
    }
    class Pig extends Animal {
        constructor(_type, _food, _noise, _hunger) {
            super(_type, _food, _noise, _hunger); // Call Animal's constructor
        }
        doSpecialAction() {
            console.log(`${this.type} digs in the mud`);
        }
    }
    class Farmer extends Animal {
        constructor(_type, _food, _noise, _hunger) {
            super(_type, _food, _noise, _hunger); // Call Animal's constructor
        }
        doSpecialAction() {
            console.log(`${this.type} smokes a cig`);
        }
    }
    class Sheep extends Animal {
        constructor(_type, _food, _noise, _hunger) {
            super(_type, _food, _noise, _hunger); // Call Animal's constructor
        }
        doSpecialAction() {
            console.log(`${this.type} jumps the fence`);
        }
    }
    let Animals = [];
    let food = [25, 25, 25]; //crop, seeds, nuts
    let cow = new Cow("cow", 0, "Old", 3);
    let chicken = new Chicken("chicken", 1, "McDonald", 1);
    let pig = new Pig("pig", 2, "has", 2);
    let farmer = new Farmer("farmer", 0, "s", 2);
    let sheep = new Sheep("sheep", 0, "Farm", 3);
    Animals.push(cow);
    Animals.push(chicken);
    Animals.push(pig);
    Animals.push(farmer);
    Animals.push(sheep);
    function simulate(_iterations) {
        for (let j = 0; j < _iterations; j++) {
            console.log("days: " + j);
            for (let i = 0; i < Animals.length; i++) {
                console.log(Animals[i].alert());
                console.log(food = Animals[i].eat(food));
                Animals[i].doSpecialAction();
            }
        }
    }
    OldMcDoof.simulate = simulate;
})(OldMcDoof || (OldMcDoof = {}));
//# sourceMappingURL=OldMc.js.map