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
    }
    // class Food {
    //     type: string;
    //     stock: number;
    //     hunger: number;
    //     constructor(_type: string, _stock: number, _hunger: number){
    //         this.type = _type;
    //         this.stock = _stock;
    //         this.hunger = _hunger;
    //     }
    // }
    let Animals = [];
    let food = [25, 25, 25]; //crop, seeds, nuts
    let Cow = new Animal("cow", 0, "Old", 3);
    let Chicken = new Animal("chicken", 1, "McDonald", 1);
    let Pig = new Animal("pig", 2, "has", 2);
    let Farmer = new Animal("farmer", 0, "s", 2);
    let Sheep = new Animal("sheep", 0, "Farm", 3);
    Animals.push(Cow);
    Animals.push(Chicken);
    Animals.push(Pig);
    Animals.push(Farmer);
    Animals.push(Sheep);
    function simulate(_iterations) {
        for (let j = 0; j < _iterations; j++) {
            console.log("days: " + j);
            for (let i = 0; i < Animals.length; i++) {
                console.log(Animals[i].alert());
                console.log(food = Animals[i].eat(food));
            }
        }
    }
    OldMcDoof.simulate = simulate;
})(OldMcDoof || (OldMcDoof = {}));
//# sourceMappingURL=OldMc.js.map